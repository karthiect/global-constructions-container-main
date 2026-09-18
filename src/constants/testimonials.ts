import type { Testimonial } from "../types";
import { IMAGES } from "./image";

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Global Containers redefined what we thought was possible with modular construction. Their attention to detail is unmatched.",
    author: "Sai Shyam",
    role: "Project Director",
    company: "Global Tech Corp",
    image: IMAGES.person1
  },
  {
    quote: "A truly global partner. They managed our multi-site rollout with incredible efficiency and transparency.",
    author: "Sunil Kumar",
    role: "Operations Manager",
    company: "Urban Dev Group",
    image: IMAGES.person2
  },
  {
    quote: "The sustainability aspect of their container solutions was the deciding factor for our research station.",
    author: "Elena Paul",
    role: "Lead Researcher",
    company: "Eco-Systems Institute",
    image: IMAGES.person3
  }
];