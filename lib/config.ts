export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Brand",
  description: "Placeholder.",
  callToAction: {
    label: "We're Hiring!",
    href: "/openings",
  },
  navItems: [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Newsroom",
      href: "/newsroom",
    },
    {
      label: "Capabilities",
      href: "/capabilities",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  links: {
    linkedin: "#",
    instagram: "#",
    tiktok: "#",
    donate: "#",
  },
};
