export interface IPublicNavLink {
  label: string;
  href: string;
}

export interface IPublicFooterLinkGroup {
  title: string;
  links: IPublicFooterLink[];
}

export interface IPublicFooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}
