import React from 'react';
import { STATS } from '../../../constants/stats';
import { Counter } from '../../../components/ui/Counter';

export const Welcome = () => {
  return (
    <section className="bg-[#1C2E57] text-white section-padding">
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-gold font-bold uppercase tracking-widest text-sm mb-4 block">Smart Container Solutions for Modern Spaces</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
              Experts in Modular Container Design
            </h2>
            <div className="space-y-6 text-white/80 leading-relaxed font-medium">
              <p>
                Global Containers specializes in transforming shipping containers into practical and reliable spaces for various commercial and industrial needs. Our goal is to provide flexible container solutions that combine durability, functionality, and modern design.
              </p>
              <p>
                We develop a wide range of container structures including site offices, storage units, portable cabins, retail spaces, and customized modular facilities. Each project is carefully designed to meet specific client requirements while ensuring strength, safety, and long-term usability.
              </p>
              <p>
                By using quality materials and efficient construction methods, we create container spaces that are easy to transport, quick to install, and adaptable to different environments. Our commitment to quality and customer satisfaction helps us deliver dependable container solutions for every project.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center p-8 border border-white/10 bg-white/10 backdrop-blur-sm rounded-3xl hover:bg-[#1C2E57] hover:border-gold transition-all group">
                <div className="text-4xl font-bold text-gold mb-2 group-hover:scale-110 transition-transform">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
//changed
