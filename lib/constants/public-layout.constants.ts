import {
  IPublicNavLink,
  IPublicFooterLinkGroup,
} from "@/lib/types/public-layout.types";

export const PUBLIC_NAV_LINKS: IPublicNavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

export const PUBLIC_FOOTER_COMPANY_LINKS: IPublicFooterLinkGroup = {
  title: "Company",
  links: [
    { label: "About Us", href: "/about" },
    // { label: "Our Team", href: "/teams" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};

export const PUBLIC_FOOTER_SERVICES_LINKS: IPublicFooterLinkGroup = {
  title: "Services",
  links: [
    { label: "Custom Software", href: "/services/custom-software-development" },
    { label: "AI & Automation", href: "/services/ai-powered-automation" },
    {
      label: "Digital Platforms",
      href: "/services/digital-business-platforms",
    },
    { label: "Consulting", href: "/services/consulting-strategy" },
  ],
};

export const PUBLIC_FOOTER_PRODUCTS_LINKS: IPublicFooterLinkGroup = {
  title: "Products",
  links: [
    { label: "Accounting ERP", href: "/products/accounting-erp" },
    { label: "Gym Management", href: "/products/gym-management" },
    { label: "Hotel Management", href: "/products/hotel-management" },
    { label: "Garden Management", href: "/products/garden-management" },
  ],
};

export const PUBLIC_FOOTER_RESOURCES_LINKS: IPublicFooterLinkGroup = {
  title: "Resources",
  links: [{ label: "Blog", href: "/blog" }],
};

export const PUBLIC_FOOTER_LINK_GROUPS: IPublicFooterLinkGroup[] = [
  PUBLIC_FOOTER_COMPANY_LINKS,
  PUBLIC_FOOTER_SERVICES_LINKS,
  PUBLIC_FOOTER_PRODUCTS_LINKS,
  PUBLIC_FOOTER_RESOURCES_LINKS,
];

export const COMPANY_EMAIL = "hr@xponent.com.bd";

export const COMPANY_NAME = "XPONENT InfoSystem (PVT) Ltd.";
