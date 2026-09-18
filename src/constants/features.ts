import React from "react";
import {
  Users2, Clock, Settings
} from 'lucide-react';
import type {
  Feature
} from '../types';

export const FEATURES: Feature[] = [
  {
    title: 'Expert Engineers',
    icon: React.createElement(Users2, { className: "w-8 h-8" }),
    description: 'Our engineers are very experienced and confident in their work.'
  },
  {
    title: 'On-Time Delivery',
    icon: React.createElement(Clock, { className: "w-8 h-8" }),
    description: 'We always focus on delivering the product on time.'
  },
  {
    title: 'Advanced Machinery',
    icon: React.createElement(Settings, { className: "w-8 h-8" }),
    description: 'We use advanced machinery for all fabrication work.'
  }
];