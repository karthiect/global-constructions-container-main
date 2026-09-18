import type { Service } from "../types";
import { IMAGES } from "./image";

export const SERVICES: Service[] = [
  {
    title: 'Container Offices',
    name: 'Container Offices',
    image: IMAGES.heroContainerOffice,
    description: 'Portable and fully functional office spaces designed for construction sites, industrial projects, and work environments.',
    details: 'Quick installation with comfortable interiors, electrical fittings, and workspace layouts.'
  },
  {
    title: 'Container Houses',
    name: 'Container Houses',
    image: IMAGES.containerHomes,
    description: 'Secure and weather-resistant container storage solutions for equipment, materials, and industrial supplies.',
    details: 'Strong steel structures designed for safe and organized storage.'
  },
  {
    title: 'Container Cafes & Kiosks',
    name: 'Container Cafes & Kiosks',
    image: IMAGES.productRestaurant,
    description: 'Creative and modern container spaces designed for cafes, food stalls, retail kiosks, and small business outlets.',
    details: 'Attractive modular designs that help businesses set up quickly and stand out.'
  },
  {
    title: 'Custom Container Solutions',
    name: 'Custom Container Solutions',
    image: IMAGES.customcontainersolutions,
    description: 'We design customized container structures for multiple applications including site offices, security cabins, retail spaces, and modular facilities.',
    details: 'Flexible designs tailored to meet your project requirements.'
  }
];