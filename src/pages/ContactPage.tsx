import { useEffect } from 'react';
import { Contact } from '../features/home/components/Contact';

export const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-28 bg-[#1C2E57] min-h-[calc(100vh-theme(spacing.28))]">
            <Contact />
        </div>
    );
};
