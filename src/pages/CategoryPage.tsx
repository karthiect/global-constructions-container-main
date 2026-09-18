import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { useEffect } from 'react';
import { SECTORS } from '../constants/sectors';
import { Section } from '../components/layout/Section';
import { PremiumGrid } from '../components/portfolio/PremiumGrid';

export const CategoryPage = () => {
  const { slug } = useParams();
  const category = SECTORS.find(c => c.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!category) {
    return <Navigate to="/404/" replace />;
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2E57] via-[#1C2E57]/60 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-6 md:px-12 pb-16 md:pb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 tracking-tight uppercase">
                {category.title}
              </h1>
              <div className="w-24 h-2 bg-gold mt-6" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modern Picture Grid / Collage */}
      <Section title="Container Types" subtitle={category.title} centered className="bg-gray-50 pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <PremiumGrid subcategories={category.subcategories} />
          
          {/* Integrated Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-2xl text-navy/80 leading-relaxed font-light mt-20 max-w-4xl mx-auto"
          >
            {category.description}
          </motion.p>
        </div>
      </Section>
    </div>
  );
};
 