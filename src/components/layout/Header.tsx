import  { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import {  NAV_LINKS } from '../../constants/link';
import { cn } from '../../lib/utils';
import { useScrollTo } from '../../hooks/useScrollTo';
import { IMAGES } from '../../constants/image';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const scrollToSection = useScrollTo();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    setActiveDropdown(null);

    if (href.startsWith('/')) {
      navigate(href);
    } else if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        scrollToSection(href);
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#14213d] backdrop-blur-sm border-b border-white/10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto h-28 w-full flex items-center justify-between">
        <button
          onClick={() => location.pathname === '/' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : navigate('/')}
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <img src={IMAGES.logo} alt="Global Containers Logo" className="h-27 w-auto py-2" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "text-sm font-medium uppercase tracking-widest flex items-center gap-1 transition-colors",
                  location.pathname === link.href ? "text-gold" : "text-white/80 hover:text-gold"
                )}
              >
                {link.name}
                {link.dropdown && <ChevronDown className="w-4 h-4" />}
              </button>

              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-64 bg-[#1C2E57] border border-white/10 shadow-2xl rounded-2xl overflow-hidden"
                    >
                      {link.dropdown.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleNavClick(item.href)}
                          className="w-full text-left px-6 py-4 text-white/70 hover:text-gold hover:bg-white/5 transition-all text-xs font-bold uppercase tracking-widest border-b border-white/5 last:border-0"
                        >
                          {item.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          <button
            onClick={() => handleNavClick('/contact/')}
            className="btn-gold"
          >
            Contact Us
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-[#1C2E57] border-b border-white/10 p-6 flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <div key={link.name}>
                <button
                  onClick={() => {
                    if (link.dropdown) {
                      setActiveDropdown(activeDropdown === link.name ? null : link.name);
                    } else {
                      handleNavClick(link.href);
                    }
                  }}
                  className={cn(
                    "w-full text-left transition-colors text-lg font-medium uppercase flex justify-between items-center",
                    location.pathname === link.href ? "text-gold" : "text-white/80 hover:text-gold"
                  )}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className={cn("w-5 h-5 transition-transform", activeDropdown === link.name && "rotate-180")} />}
                </button>

                {link.dropdown && activeDropdown === link.name && (
                  <div className="mt-4 ml-4 flex flex-col gap-3 border-l border-white/10 pl-4">
                    {link.dropdown.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.href)}
                        className="text-left text-white/60 hover:text-gold text-sm uppercase tracking-widest"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => handleNavClick('/contact/')}
              className="btn-gold w-full"
            >
              Contact Us
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
