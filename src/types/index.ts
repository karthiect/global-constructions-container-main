import type { ReactNode } from 'react';

export interface NavLink {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface Feature {
  title: string;
  icon: ReactNode;
  description: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
}

export interface Product {
  name: string;
  slug?: string;
  icon: ReactNode;
  image: string;
}

export interface Logo {
  title: string;
  description: string;
  image: string;
}



export interface BestProduct {
  title: string;
  description: string;
  image: string;
}

export interface Service {
  title: string;
  name: string;
  image: string;
  description: string;
  details: string;
}

export interface Subcategory {
  name: string;
  image: string;
}

export interface Sector {
  id: string; // Used for slug as well
  title: string;
  sector: string;
  region: string;
  image: string;
  description: string;
  subcategories: Subcategory[];
}

// export interface Project {
//   id: number;
//   title: string;
//   sector: string;
//   region: string;
//   image: string;
//   metrics: {
//     time: string;
//     budget: string;
//   };
// }


export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}
