import { ClipboardList, Hammer, Layout, Truck } from "lucide-react";
import type { ProcessStep } from "../types";
import React from "react";
import { IMAGES } from "./image";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'A',
    title: 'Consultation & Design',
    description: 'We begin by understanding your project requirements and space needs. Our team creates the best container layout to match your purpose.',
    icon: React.createElement(Layout, { className: "w-10 h-10" }),
    image: IMAGES.processDesign
  },
  {
    id: 'B',
    title: 'Planning & Customization',
    description: 'After the design is finalized, we prepare detailed plans and customize the container structure based on size, features, and interior needs.',
    icon: React.createElement(ClipboardList, { className: "w-10 h-10" }),
    image: IMAGES.processPlanning
  },
  {
    id: 'C',
    title: 'Manufacturing & Assembly',
    description: 'Our skilled team converts containers into functional spaces using cutting, reinforcement, insulation, and interior finishing.',
    icon: React.createElement(Hammer, { className: "w-10 h-10" }),
    image: IMAGES.processDevelopment
  },
  {
    id: 'D',
    title: 'Delivery & Installation',
    description: 'The completed container unit is delivered to your location and installed safely, ensuring it is ready for immediate use.',
    icon: React.createElement(Truck, { className: "w-10 h-10" }),
    image: IMAGES.processDelivery
  }
];