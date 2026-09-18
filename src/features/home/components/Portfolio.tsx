import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { SECTORS } from '../../../constants/sectors';
import { cn } from '../../../lib/utils';
import { PortfolioCarousel } from './PortfolioCarousel';

const ALL_FILTER = 'ALL';
const FILTERS = [
  ALL_FILTER,
  'INDUSTRIAL',
  'RESIDENTIAL',
  'COMMERCIAL',
  'MEDICAL',
  'AGRICULTURAL',
  'INFRASTRUCTURE & CONSTRUCTION',
  'EDUCATION',
  'HOSPITALITY & TOURISM',
  'RETAIL & POP-UP STORES',
  'DEFENCE & GOVERNMENT',
  'LOGISTICS & WAREHOUSING',
];

export const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const filteredSectors = SECTORS.filter(
    (s) => activeFilter === ALL_FILTER || s.sector.toUpperCase() === activeFilter
  );

  return (
    <section
      id="portfolio"
      className="py-20 bg-[#1C2E57] text-white scroll-mt-24"
    >
      <div className="text-center mb-16 px-6 md:px-12 lg:px-24">
        <span className="text-gold font-bold uppercase tracking-widest text-sm mb-2 block">
          Global Portfolio
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Iconic Projects Worldwide
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto w-full mb-16 carousel-padding">
        <div className="relative flex items-center justify-center">
          {/* LEFT ARROW - Mobile Only */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-6 sm:-left-8 md:-left-12 top-1/2 -translate-y-1/2 lg:hidden"
            aria-label="Scroll filters left"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
          </button>

          {/* SCROLL AREA */}
          <div
            ref={scrollRef}
            className="overflow-x-auto lg:overflow-x-visible scrollbar-hide w-full px-6 md:px-0"
          >
            <div className="flex flex-nowrap lg:flex-wrap gap-2 lg:gap-3 lg:justify-center py-2 lg:max-w-7xl lg:mx-auto lg:px-4">
              {FILTERS.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all rounded-full relative overflow-hidden flex-shrink-0",
                    activeFilter === filter
                      ? "bg-gold-gradient text-white shadow-lg border-0 px-[17px] py-[9px]"
                      : "border border-white/20 text-white/70 hover:border-gold/50 hover:text-white"
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT ARROW - Mobile Only */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-6 sm:-right-8 md:-right-12 top-1/2 -translate-y-1/2 lg:hidden "
            aria-label="Scroll filters right"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <PortfolioCarousel sectors={filteredSectors} activeFilter={activeFilter} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
