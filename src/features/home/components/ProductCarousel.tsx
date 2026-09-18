// import React from 'react';
import { PRODUCTS } from '../../../constants/products';
import { ProductInfiniteCarousel } from './ProductInfiniteCarousel';

export const ProductCarousel = () => {
  return (
    <section
      id="products"
      className="py-20 bg-white text-navy scroll-mt-24"
    >
      <div className="text-center mb-16 px-6 md:px-12 lg:px-24">
        <span className="text-gold font-bold uppercase tracking-widest text-sm mb-2 block">
          Our Collection
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1C2E57]">
          Premium Container Products
        </h2>
      </div>

      <ProductInfiniteCarousel products={PRODUCTS} />
    </section>
  );
};
 