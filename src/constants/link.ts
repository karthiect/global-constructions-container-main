import type { NavLink } from "../types";

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about/' },
  {
    name: 'Portfolio',
    href: '/portfolio/',
    // dropdown: [
    //   { name: 'Container Office', href: '/products/container-office/' },
    //   { name: 'Container Farmhouse', href: '/products/container-farmhouse/' },
    //   { name: 'Container Restaurant', href: '/products/container-restaurant/' },
    //   { name: 'Container Toilet', href: '/products/container-toilet/' },
    //   { name: 'Container Resort', href: '/products/container-resort/' },
    // ]
  },
  { name: 'Services', href: '/services/' },
];