import  { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { IMAGES } from '../../../constants/image';
import { useNavigate } from 'react-router-dom';


export const Hero = () => {
  const navigate = useNavigate();
  const HERO_IMAGES = [
    IMAGES.heroContainerHouse,
    IMAGES.heroContainerRestaurant,
    IMAGES.heroContainerOffice,
  ];
  const [currentHeroIdx, setCurrentHeroIdx] = useState(0);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden flex items-center">
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[#363f52] opacity-60 z-10" />
        <AnimatePresence mode="sync">
          <motion.img
            key={currentHeroIdx}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            src={HERO_IMAGES[currentHeroIdx]}
            alt="Construction Site"
            className="absolute inset-0 w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
      </motion.div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 md:px-10 lg:px-11 xl:px-13 w-full pt-20 lg:pt-24">
      {/* <div className="relative z-20 max-w-7xl mx-auto px-7 sm:px-9 md:px-11 lg:px-13 w-full pt-32"> */}
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3 lg:mb-4">
            Redefining Space with <span className="text-gold">Modular Innovation</span>
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-white/90 mb-4 lg:mb-6 font-light leading-relaxed">
            Coimbatore's premier partner for luxury container homes, professional offices, and sustainable commercial architecture.
          </p>
          <button
            className="btn-gold"
            onClick={() => navigate('/all-services/')}
          >
            Our Services
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-gold-gradient rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};
