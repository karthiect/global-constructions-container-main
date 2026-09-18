import { motion } from 'motion/react';
import { FEATURES } from '../../../constants/features';
import { Section } from '../../../components/layout/Section';
import { IMAGES } from '../../../constants/image';

export const About = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 -z-10" />
          <img
            src={IMAGES.heroContainerOffice} // Using the sharp office hero image
            alt="Global Containers Fabrication"
            className="w-full h-[600px] object-cover shadow-2xl rounded-3xl"
          />
          <div className="absolute -bottom-6 right-0 sm:-right-4 md:-bottom-10 md:-right-10 bg-[#1C2E57] p-8 md:p-10 text-white max-w-[240px] md:max-w-xs rounded-3xl shadow-2xl">
            <span className="text-3xl md:text-4xl font-bold text-white block mb-2">7+</span>
            <p className="text-xs md:text-sm uppercase tracking-widest font-bold">Years of Experience in Container Solutions</p>
          </div>
        </div>
        <div>
          <span className="text-gold font-bold uppercase tracking-widest text-sm mb-2 block">Our Heritage</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C2E57] mb-8">7+ Years of Excellence in Container Solutions</h2>
          <div className="space-y-6 text-[#1C2E57]/80 leading-relaxed font-medium">
            <p>
              We specialize in designing and delivering high-quality container-based spaces for modern business and industrial needs. With over seven years of experience, we transform shipping containers into practical, durable, and efficient modular structures.
            </p>
            <p>
              Our solutions include container offices, storage units, portable workspaces, and customized container facilities. Each unit is designed to be strong, flexible, and suitable for different environments and applications.
            </p>
            <p>
              By combining smart design, quality materials, and efficient production, we create container spaces that are cost-effective, easy to transport, and ready for quick installation.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURES.map((feature, idx) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 border border-navy/5 bg-navy/5 hover:border-gold/30 hover:shadow-xl transition-all duration-500 group rounded-3xl"
          >
            <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-500">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-[#1C2E57]">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-[#1C2E57] font-medium">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
