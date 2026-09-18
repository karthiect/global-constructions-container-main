import React from 'react';
import { motion } from 'motion/react';
import { BEST_PRODUCTS } from '../../../constants/products';
import { Section } from '../../../components/layout/Section';

export const BestProducts = () => {
  return (
    <Section
      className="bg-navy/5 text-navy"
      centered
      title="Our Best Products"
      titleClassName="text-[#1C2E57]"
      subtitle="Featured Selection"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {BEST_PRODUCTS.map((product, idx) => (
          <motion.div
            key={product.title}
            id={product.title === 'Container House' ? 'best-home' : `best-${product.title.toLowerCase().replace(/\s+/g, '-')}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl scroll-mt-40"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-[#1C2E57]/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 p-10 flex flex-col justify-center text-center border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
              <p className="text-white/95 text-sm leading-relaxed">{product.description}</p>
            </div>
            <div className="p-8 group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-xl font-bold text-[#1C2E57] text-center">{product.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
