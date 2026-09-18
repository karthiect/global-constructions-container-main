import { Suspense, useEffect } from 'react';
import { useLocation, createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { ExploreMore } from './features/services/pages/ExploreMore';
import { CategoryPage } from './pages/CategoryPage';
import { ScrollToHash } from './components/layout/ScrollToHash';
import MetaTags from './components/MetaTags';
import NotFound from './pages/NotFound';
import { ContactPage } from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionPaths = ['/about', '/products', '/services', '/portfolio', '/contact', '/products'];
    const isSectionPath = sectionPaths.some(path => pathname.startsWith(path));

    if (!isSectionPath) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

const Shell = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center flex-row flex-wrap"
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        backgroundColor: "transparent",
      }}
    >
      <div className="page-loader">
        <div className="page-loader-dot"></div>
        <div className="page-loader-dot"></div>
        <div className="page-loader-dot"></div>
      </div>
    </div>
  );
};

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToHash />
      <ScrollToTop />
      <Header />

      <main className="flex-grow">
        <MetaTags />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about/",
        element: <Home />
      },
      {
        path: "/products/",
        element: <Home />
      },
      {
        path: "/services/",
        element: <Home />
      },
      {
        path: "/portfolio/",
        element: <Home />
      },
      {
        path: "/contact/",
        element: <ContactPage />
      },
      { path: "/products/container-office/", element: <Home /> },
      { path: "/products/container-farmhouse/", element: <Home /> },
      { path: "/products/container-restaurant/", element: <Home /> },
      { path: "/products/container-toilet/", element: <Home /> },
      { path: "/products/container-resort/", element: <Home /> },
      {
        path: "/all-services/",
        element: <ExploreMore />
      },
      {
        path: "/portfolio/:slug/",
        element: <CategoryPage />
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />
  },
]);

export default function App() {
  return (
    <Suspense fallback={<Shell />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
