import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface ProductInfiniteCarouselProps {
  products: any[];
}

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-6 sm:-right-8 md:-right-12 top-[40%] md:top-1/2 -translate-y-1/2 carousel-arrow"
    >
      <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-6 sm:-left-8 md:-left-12 top-[40%] md:top-1/2 -translate-y-1/2 carousel-arrow"
    >
      <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
};

export const ProductInfiniteCarousel = ({ products }: ProductInfiniteCarouselProps) => {
  const sliderRef = useRef<Slider>(null);
  const location = useLocation();
  const [slidesToShow, setSlidesToShow] = React.useState(
    window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1
  );

  React.useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1
      );
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true
  };

  // Handle navigation (deep linking from Header)
  useEffect(() => {
    const handleNavigation = () => {
      const hash = window.location.hash;
      const pathname = window.location.pathname;
      let targetIndex = -1;

      if (pathname.includes('/products/')) {
        const slug = pathname.split('/products/')[1].split('/')[0];
        targetIndex = products.findIndex(p => p.slug === slug);
      } else if (hash.startsWith('#id')) {
        const idNum = parseInt(hash.replace('#id', ''));
        if (!isNaN(idNum)) targetIndex = idNum - 1;
      }

      if (targetIndex !== -1 && targetIndex < products.length) {
        if (sliderRef.current) {
          sliderRef.current.slickGoTo(targetIndex);
        }
      }
    };

    handleNavigation();
    window.addEventListener('hashchange', handleNavigation);
    return () => window.removeEventListener('hashchange', handleNavigation);
  }, [products.length, location.pathname, location.hash]); // Listen to pathname too

  return (
    <div className="relative carousel-padding max-w-7xl mx-auto w-full product-slider">
      <div className="pt-4 pb-12 w-full">
        <Slider ref={sliderRef} {...settings}>
          {products.map((product, index) => (
            <div
              key={product.name}
              id={`id${index + 1}`}
              className="px-4 md:px-6 outline-none"
            >
              <div className="group scroll-mt-32">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2E57]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold-gradient text-white rounded-xl flex items-center justify-center shadow-lg">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1C2E57] group-hover:text-gold transition-colors">{product.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

 