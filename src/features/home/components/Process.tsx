import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../../../constants/process';
import { Section } from '../../../components/layout/Section';

export const Process = () => {
  return (
    <Section
      centered
      id="process"
      dark
      title="Get Your Project Done in Just 4 Steps"
      subtitle="Our Process"
      className="bg-[#1C2E57] text-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {PROCESS_STEPS.map((step, idx) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="relative group"
          >
            <div className="mb-8 relative">
              <div className="aspect-square overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 right-0 md:-bottom-6 md:-right-6 w-16 h-16 bg-gold-gradient text-white flex items-center justify-center text-2xl font-black shadow-xl rounded-2xl">
                {step.id}
              </div>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="text-gold mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
            </div>

            {idx < PROCESS_STEPS.length - 1 && (
              <div className="hidden lg:block absolute top-1/4 -right-4 w-8 h-px bg-gold/30" />
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
