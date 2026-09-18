import { useCallback, useEffect } from "react";
export type MetaItem = {
  slug?: string;
  meta_title: string;
  meta_description: string;
  meta_keywords?: string;
  canonical_link?: string;
  ogImage?: string;
  priority?: string;
  status?: string;
};

type UseMetaOptions = {
  getPath?: () => string;
  includeTwitter?: boolean;
  setOgUrl?: boolean;
  twitterCard?: string;
};

function normalizePath(value: string | null | undefined): string {
  const raw = String(value ?? "")
    .trim()
    .toLowerCase();
  if (!raw || raw === "/") return "/";

  const withLeading = raw.startsWith("/") ? raw : `/${raw}`;
  const collapsed = withLeading.replace(/\/+/g, "/");

  return collapsed.endsWith("/") ? collapsed : `${collapsed}/`;
}

function upsertMeta(attrName: string, attrValue: string, content?: string) {
  if (!content) return;

  let el = document.head.querySelector(
    `meta[${attrName}="${attrValue}"]`,
  ) as HTMLMetaElement | null;

  if (!el && attrName === "property") {
    el = document.head.querySelector(
      `meta[name="${attrValue}"]`,
    ) as HTMLMetaElement | null;
  } else if (!el && attrName === "name") {
    el = document.head.querySelector(
      `meta[property="${attrValue}"]`,
    ) as HTMLMetaElement | null;
  }

  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }

  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  if (!href) return;

  const el = document.head.querySelector(
    `link[rel="${rel}"]`,
  ) as HTMLLinkElement | null;

  if (!el) {
    const newEl = document.createElement("link");
    newEl.setAttribute("rel", rel);
    document.head.appendChild(newEl);
    newEl.setAttribute("href", href);
    return;
  }

  el.setAttribute("href", href);
}

export default function useMetaTags(
  metaArray: MetaItem[] | undefined,
  options: UseMetaOptions = {},
) {
  const { getPath: optGetPath } = options || {};

  const getPath = useCallback(() => {
    if (optGetPath) return optGetPath();
    if (typeof window === "undefined") return "/";
    return normalizePath(window.location.pathname || "/");
  }, [optGetPath]);

  useEffect(() => {
    if (
      typeof document === "undefined" ||
      !Array.isArray(metaArray) ||
      !metaArray.length
    )
      return;

    const path = normalizePath(getPath());

    console.log("Meta Tags: ", path);

    const map = Object.fromEntries(
      metaArray.map((m) => [normalizePath(m?.slug || "/"), m]),
    );

    console.log("map: ", map);

    const fallback =
      map["/"] ||
      metaArray.find((item) => item?.slug === "/") ||
      map["/services/"] ||
      metaArray[0];

    console.log("Meta Tags: ", fallback);

    let found = map[path];
    console.log("Meta Tags: ", found);

    if (!found && path.startsWith("/service/")) {
      found = map["/services/"] || fallback;
    }

    if (!found) {
      found = fallback;
    }

    const title = found?.meta_title || fallback?.meta_title || "";
    const desc = found?.meta_description || fallback?.meta_description || "";
    const keywords = found?.meta_keywords || fallback?.meta_keywords || "";
    const canonical =
      found?.canonical_link ||
      fallback?.canonical_link ||
      (typeof window !== "undefined" ? window.location.href : "");

    if (title) document.title = title;

    if (keywords) {
      upsertMeta("name", "keywords", keywords);
    }

    upsertMeta("name", "description", desc);

    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", desc);

    if (found?.ogImage || fallback?.ogImage) {
      upsertMeta("property", "og:image", found?.ogImage || fallback?.ogImage);
      upsertMeta("property", "og:image:alt", title);
    }

    if (options.includeTwitter !== false) {
      upsertMeta("name", "twitter:title", title);
      upsertMeta("name", "twitter:description", desc);

      if (found?.ogImage || fallback?.ogImage) {
        upsertMeta(
          "name",
          "twitter:image",
          found?.ogImage || fallback?.ogImage,
        );
      }

      upsertMeta(
        "name",
        "twitter:card",
        options.twitterCard || "summary_large_image",
      );
    }

    if (options.setOgUrl !== false && typeof window !== "undefined") {
      upsertMeta("property", "og:url", window.location.href);
    }

    upsertLink("canonical", canonical);
  }, [
    metaArray,
    getPath,
    options.includeTwitter,
    options.setOgUrl,
    options.twitterCard,
  ]);
}
