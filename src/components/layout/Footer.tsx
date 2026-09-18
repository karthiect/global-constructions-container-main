import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import { newsletterService } from '../../services/newsletterService';
import { useNavigate, useLocation } from 'react-router-dom';
import { useScrollTo } from '../../hooks/useScrollTo';
import ecsLogo from '../../assets/ecs-logo.webp';
import { IMAGES } from '../../constants/image';

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollToSection = useScrollTo();

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNavClick = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/' + href);
    } else {
      scrollToSection(href);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) {
      toast.error('Please enter an email address.');
      return;
    }
    if (!newsletterEmail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      await newsletterService.subscribeNewsletter(newsletterEmail);
      toast.success('Successfully subscribed to our newsletter!');
      setNewsletterEmail('');
    } catch (error: any) {
      console.error('Newsletter Error:', error);
      toast.error(error.message || 'Failed to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative bg-[#14213d] text-white section-padding border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <button
                onClick={() => location.pathname === '/' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : navigate('/')}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <img src={IMAGES.logo} alt="Global Containers Logo" className="h-24 w-auto" />
              </button>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Global Containers is a leader in modular container construction. We build sustainable, high-performance landmarks for a changing world.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><button onClick={() => navigate('/')} className="hover:text-gold transition-colors">Home</button></li>
              <li><button onClick={() => navigate('/about/')} className="hover:text-gold transition-colors">About Us</button></li>
              <li><button onClick={() => navigate('/portfolio/')} className="hover:text-gold transition-colors">Portfolio</button></li>
              <li><button onClick={() => navigate('/services/')} className="hover:text-gold transition-colors">Services</button></li>
              <li><button onClick={() => navigate('/products/')} className="hover:text-gold transition-colors">Our Products</button></li>
              <li><a href="#" className="hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:info@theglobalinfra.co" className="hover:text-gold transition-colors">info@theglobalinfra.co</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:+919790041419" className="hover:text-gold transition-colors">+91 97900 41419</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-1" />
                <a
                  href="https://maps.app.goo.gl/P4hhdNBaZvKYmYbu7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  3/610, Nadhegoundanpudhur Road,<br />
                  Manickampalayam, Kunnathur Pudhur (PO),<br />
                  Kovilpalayam, Coimbatore – 641107
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-white/60 text-sm mb-6">Subscribe to receive updates on our latest global projects.</p>
            <form onSubmit={handleNewsletterSubmit} className="flex overflow-hidden rounded-lg border border-white/10 h-8 max-w-[200px]">
              <input
                type="email"
                placeholder="Email Address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                disabled={isSubmitting}
                className="bg-white/5 px-3 text-xs w-full focus:outline-none focus:bg-white/10 transition-colors border-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gold-gradient text-white px-3 font-bold text-[10px] uppercase tracking-widest hover:opacity-90 transition-colors border-none disabled:opacity-50"
              >
                {isSubmitting ? '...' : 'Join'}
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-widest font-bold">
          <p>© 2026 Global Containers. All Rights Reserved.</p>
          <a
            href="https://exalttcoresolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <span className="text-xs normal-case tracking-wide font-medium text-white/50">Powered by</span>
            <img src={ecsLogo} alt="Exaltt Core Solutions" className="h-12 w-32 sm:h-14 sm:w-40 object-cover object-center shrink-0" />
          </a>
        </div>
      </div>
    </footer>
  );
};
