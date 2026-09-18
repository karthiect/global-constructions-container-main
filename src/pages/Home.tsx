import { Hero } from '../features/home/components/Hero';
import { Welcome } from '../features/home/components/Welcome';
import { Services } from '../features/home/components/Services';
import { Portfolio } from '../features/home/components/Portfolio';
import { About } from '../features/home/components/About';
import { Process } from '../features/home/components/Process';
import { ProductCarousel } from '../features/home/components/ProductCarousel';
import { BestProducts } from '../features/home/components/BestProducts';
import { Testimonials } from '../features/home/components/Testimonials';
import { Contact } from '../features/home/components/Contact';
import { useEffect } from 'react';
import { useScrollTo } from '../hooks/useScrollTo';

export const Home = () => {
    const scrollToSection = useScrollTo();

    useEffect(() => {
        if (window.location.hash) {
            // Small delay to ensure absolute positions are calculated
            const timer = setTimeout(() => {
                scrollToSection(window.location.hash);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [scrollToSection]);

    return (
        <>
            <Hero />
            <Welcome />
            <Services />
            <Portfolio />
            <About />
            <Process />
            <ProductCarousel />
            <BestProducts />
            <Testimonials />
            <Contact />
        </>
    );
};
