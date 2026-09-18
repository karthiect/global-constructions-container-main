import React from "react";
import type { BestProduct, Product } from "../types";
import { IMAGES } from "./image";
import { Bath, Briefcase, HomeIcon, Palmtree, Utensils } from "lucide-react";

export const PRODUCTS: Product[] = [
  { name: 'Container Office', slug: 'container-office', icon: React.createElement(Briefcase, { className: "w-5 h-5" }), image: IMAGES.heroContainerOffice },
  { name: 'Container Farmhouse', slug: 'container-farmhouse', icon: React.createElement(HomeIcon, { className: "w-5 h-5" }), image: IMAGES.productFarmhouse },
  { name: 'Container Restaurant', slug: 'container-restaurant', icon: React.createElement(Utensils, { className: "w-5 h-5" }), image: IMAGES.productRestaurant },
  { name: 'Container Toilet', slug: 'container-toilet', icon: React.createElement(Bath, { className: "w-5 h-5" }), image: IMAGES.productToilet },
  { name: 'Container Resort', slug: 'container-resort', icon: React.createElement(Palmtree, { className: "w-5 h-5" }), image: IMAGES.productResort },
];


export const BEST_PRODUCTS: BestProduct[] = [
  {
    title: 'Container House',
    description: 'Modern, sustainable living spaces built with structural integrity.',
    image: IMAGES.bestProductHouse
  },
  {
    title: 'Container Office',
    description: 'Specialized modular workspaces engineered for maximum productivity.',
    image: IMAGES.heroContainerOffice
  },
  {
    title: 'Container Restaurant',
    description: 'Unique dining experiences with rapid modular deployment.',
    image: IMAGES.bestProductRestaurant
  }
];
