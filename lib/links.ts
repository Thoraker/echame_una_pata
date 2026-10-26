export type NavLink = {
  href: string;
  label: string;
};

export const topLinks: NavLink[] = [
  { href: "/adoption", label: "Adoptemos" },
  { href: "/lost-found", label: "Encontremos" },
  { href: "/volunteer", label: "Ayudanos" },
];

export const navLinks: NavLink[] = [
  { href: "/", label: "Inicio" },
  { href: "/adoption", label: "Adopta" },
  { href: "/lost-found", label: "Encuentra" },
  { href: "/about-us", label: "Contactanos" },
];

export const socialLinks: NavLink[] = [
  { href: "https://x.com/", label: "X" },
  { href: "https://www.facebook.com/", label: "Facebook" },
  { href: "https://www.instagram.com/", label: "Instagram" },
];
