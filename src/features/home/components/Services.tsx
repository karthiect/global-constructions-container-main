// import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { SERVICES } from "../../../constants/services";
import { Section } from "../../../components/layout/Section";

export const Services = () => {
  const navigate = useNavigate();

  return (
    <Section
      id="services"
      centered
      subtitle="Our Expertise"
      title="Complete Container Space Solutions"
    >
      <div className="max-w-7xl mx-auto mb-16">
        <p
          className="text-[#1C2E57]/80 font-medium"
          style={{ textAlign: "justify", textAlignLast: "center" }}
        >
          We provide smart and reliable container solutions designed for modern
          needs. From container offices and storage units to customized modular
          spaces, our structures are built for durability, mobility, and quick
          installation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group p-8 border border-navy/10 hover:border-gold bg-white hover:shadow-2xl rounded-3xl flex flex-col items-center text-center transition-all duration-500 overflow-hidden h-full"
          >
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden mb-6 shadow-lg">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C2E57]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            <h3 className="text-xl font-bold text-[#1C2E57] mb-4">
              {service.title}
            </h3>
            <p className="text-[#1C2E57]/80 text-sm leading-relaxed font-medium flex-grow">
              {service.description}
            </p>

            <div className="relative w-full mt-6">
              {/* divider */}
              <div className="h-px w-[50px] bg-gold mb-4 md:group-hover:w-full transition-all duration-500" />

              {/* mobile visible */}
              <p className="text-xs text-[#1C2E57]/60 md:hidden">
                {service.details}
              </p>

              {/* desktop hover reveal */}
              <p className="hidden md:block text-xs text-[#1C2E57]/60 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {service.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="btn-gold" onClick={() => navigate("/all-services/")}>
          Explore More
        </button>
      </div>
    </Section>
  );
};
