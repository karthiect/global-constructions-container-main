import React from 'react';
import Slider from 'react-slick';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../../constants/testimonials';
import { Section } from '../../../components/layout/Section';

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-10 sm:-right-12 md:-right-16 top-1/2 -translate-y-1/2 carousel-arrow"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-10 sm:-left-12 md:-left-16 top-1/2 -translate-y-1/2 carousel-arrow"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
};

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    customPaging: (i: number) => (
      <div className="w-3 h-3 mx-1 rounded-full bg-navy/20 hover:bg-navy/40 transition-all slick-dot-custom" />
    ),
    dotsClass: "slick-dots testimonial-dots",
    adaptiveHeight: false, // Force same height
  };

  return (
    <Section
      centered
      title="What Our Clients Say"
      titleClassName="text-[#1C2E57]"
      subtitle="Testimonials"
      className="bg-navy/5 text-navy testimonials-section pb-24" // Added bottom padding for dots
    >
      <div className="max-w-5xl mx-auto relative px-8 sm:px-16 md:px-24 lg:px-32">
        <div className="py-12">
          <Slider {...settings}>
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="outline-none h-full py-4"> {/* Added vertical padding to slide */}
                <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 md:p-16 relative h-full flex flex-col justify-center shadow-sm">
                  <Quote className="absolute top-8 right-12 w-20 h-20 text-gold/10" />

                  <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 text-center md:text-left">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-3xl overflow-hidden flex-shrink-0">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex-grow">
                      <p className="text-xl md:text-2xl font-medium italic text-[#1C2E57] mb-8 leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <h4 className="text-xl font-bold text-[#1C2E57]">{testimonial.author}</h4>
                        <p className="text-gold font-bold text-sm uppercase tracking-widest">
                          {testimonial.role} | {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Section>
  );
};

 