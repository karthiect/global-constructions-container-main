// import tailwindcss from '@tailwindcss/vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';
// import { defineConfig, loadEnv } from 'vite';

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, '.', '');
//   return {
//     plugins: [react(), tailwindcss()],
//     define: {
//       'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
//     },
//     resolve: {
//       alias: {
//         '@': path.resolve(__dirname, '.'),
//       },
//     },
//     server: {

//       hmr: process.env.DISABLE_HMR !== 'true',
//     },
//   };
// });


import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createHtmlPlugin } from "vite-plugin-html";
import { visualizer } from "rollup-plugin-visualizer";

// Emulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const manualChunksConfig = {
  vendor: ["react", "react-dom"],
};

function injectProductionHtmlPlugin(isProd: boolean) {
  return {
    name: "inject-production-html",
    transformIndexHtml(html: string) {
      if (!isProd) return html;

      const prodHtmlPath = path.resolve(__dirname, "productionOnly.html");

      if (!fs.existsSync(prodHtmlPath)) {
        console.warn("[inject-production-html] productionOnly.html not found.");
        return html;
      }

      const prodHtml = fs.readFileSync(prodHtmlPath, "utf-8");

      // Inject before </head>
      return html.replace("</head>", `${prodHtml}\n</head>`);
    },
  };
}


export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    publicDir: "public", // Explicitly set public directory
    server: {
      port: 3005,
      open: true,
      fs: {
        // Allow serving files from public directory
        strict: false,
      },
    },
    build: {
      rollupOptions: { output: { manualChunks: manualChunksConfig } },
      manifest: true, // ✅ generate manifest.json for hashed filenames
      copyPublicDir: true, // Ensure public dir is copied in build
    },
    plugins: [
      react(),
      // react({
      //   babel: {
      //     plugins: [["babel-plugin-react-compiler"]],
      //   },
      // }),
      createHtmlPlugin({
        inject: {
          data: {
            prodScripts:
              mode === "production"
                ? `
                <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QNXBPEW47M"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QNXBPEW47M');
</script>

                <!-- Microsoft Clarity -->
                <script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "vug6wodqel");
</script>

              `
                : "",
          },
          tags: [
            // ✅ CSS preload remains
            {
              tag: "link",
              attrs: {
                rel: "preload",
                href: "/assets/index.css",
                as: "style",
                onload: "this.onload=null;this.rel='stylesheet'",
              },
              injectTo: "head",
            },
            {
              tag: "noscript",
              children: '<link rel="stylesheet" href="/assets/index.css">',
              injectTo: "head",
            },
            // ✅ Preconnects
            {
              tag: "link",
              attrs: {
                rel: "preconnect",
                href: "https://containers.globalinfraprojects.com",
                crossorigin: "",
              },
              injectTo: "head",
            },
            {
              tag: "link",
              attrs: {
                rel: "dns-prefetch",
                href: "https://containers.globalinfraprojects.com",
              },
              injectTo: "head",
            },
            {
              tag: "link",
              attrs: {
                rel: "preconnect",
                href: "https://www.googletagmanager.com",
              },
              injectTo: "head",
            },
            {
              tag: "link",
              attrs: {
                rel: "preconnect",
                href: "https://www.clarity.ms",
              },
              injectTo: "head",
            },
          ],
        },
      }),

      ...(mode === "production"
        ? [
          visualizer({
            filename: "bundle-analysis.html",
            gzipSize: true,
            brotliSize: true,
          }),
        ]
        : []),
      injectProductionHtmlPlugin(isProd),
    ],

  };
});