import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useScrollTo } from '../../hooks/useScrollTo';

export const ScrollToHash = () => {
    const { pathname, hash, key } = useLocation();
    const scrollTo = useScrollTo();

    useEffect(() => {
        if (hash) {
            // Small delay to ensure the content is rendered
            const timer = setTimeout(() => {
                scrollTo(hash);
            }, 100);
            return () => clearTimeout(timer);
        } else if (pathname !== '/') {
            // Check if pathname matches a section (e.g., /about/ -> #about)
            const pathParts = pathname.split('/').filter(Boolean);
            const sections = ['about', 'products', 'services', 'portfolio', 'contact'];
            const firstPart = pathParts[0];
            const isProductPath = firstPart === 'products' && pathParts.length > 1;

            if (sections.includes(firstPart) || isProductPath) {
                // If it's a product path, scroll to the 'products' section
                const targetId = isProductPath ? 'products' : firstPart;
                const timer = setTimeout(() => {
                    scrollTo(targetId);
                }, 100);
                return () => clearTimeout(timer);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash, key, scrollTo]);

    return null;
};
