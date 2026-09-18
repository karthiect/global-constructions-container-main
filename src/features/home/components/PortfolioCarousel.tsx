import React from 'react';
import Slider from 'react-slick';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../../components/ui/utils';
// import { cn } from '../../../lib/utils';

interface PortfolioCarouselProps {
  sectors: any[];
  activeFilter?: string;
}

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-6 sm:-right-8 md:-right-12 top-1/2 -translate-y-1/2 carousel-arrow"
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
      className="absolute -left-6 sm:-left-8 md:-left-12 top-1/2 -translate-y-1/2 carousel-arrow"
    >
      <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
    </button>
  );
};

export const PortfolioCarousel = ({ sectors, activeFilter }: PortfolioCarouselProps) => {
  const isFiltering = activeFilter && activeFilter !== 'ALL';
  const [slidesToShow, setSlidesToShow] = React.useState(
    window.innerWidth >= 1024 ? (isFiltering ? 2.5 : 3) : window.innerWidth >= 768 ? 2 : 1
  );

  // React.useEffect(() => {
  //   const handleResize = () => {
  //     setSlidesToShow(
  //       window.innerWidth >= 1024 ? (isFiltering ? 2.2 : 3) : window.innerWidth >= 768 ? 2 : 1
  //     );
  //   };
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);
  React.useEffect(() => {
  const handleResize = () => {
    setSlidesToShow(
      window.innerWidth >= 1024
        ? (isFiltering ? 1.5 : 3)
        : window.innerWidth >= 768
        ? (isFiltering ? 1.8 : 2)
        : 1
    );
  };

  handleResize(); // IMPORTANT
  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize);
}, [isFiltering]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true
  };

  return (
    <div className="relative carousel-padding max-w-7xl mx-auto w-full portfolio-slider">
      <div className="pt-4 pb-12 w-full">
        <Slider {...settings}>
          {sectors.map((sector) => (
            <div key={sector.id} className={cn("outline-none", isFiltering ? "px-2" : "px-4 md:px-3")}>
              <Link to={`/portfolio/${sector.id}/`} className="block h-full cursor-pointer group">
                <div className="group relative transition-all duration-500">
                  {/* <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500"> */}
                  <div
  className={cn(
    "relative rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500",
    isFiltering
      ? "aspect-video w-full"   // LANDSCAPE (sector clicked)
      : "aspect-4/5"    // PORTRAIT (ALL)
  )}
>
                    <img
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C2E57]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10 transition-transform duration-500">
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-gold transition-colors drop-shadow-lg">{sector.title}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

 