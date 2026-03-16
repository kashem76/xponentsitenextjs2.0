import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "@/components/common/logo";
import {
  PUBLIC_FOOTER_LINK_GROUPS,
  COMPANY_EMAIL,
  COMPANY_NAME,
} from "@/lib/constants/public-layout.constants";
import { IPublicFooterLink } from "@/lib/types/public-layout.types";

interface IPublicFooterLinkProps {
  link: IPublicFooterLink;
}

function PublicFooterLink({ link }: IPublicFooterLinkProps) {
  if (link.isExternal || link.href.startsWith("#")) {
    return (
      <a
        href={link.href}
        className="text-base text-gray-400 hover:text-accent transition-colors"
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link
      href={link.href}
      className="text-base text-gray-400 hover:text-accent transition-colors"
    >
      {link.label}
    </Link>
  );
}

export default function PublicFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 py-24 lg:py-32 px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Logo and Description - Takes more space */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Logo className="h-10 w-auto" />
            </div>
            <p className="text-base text-gray-400 leading-relaxed mb-6">
              Building custom software and digital systems that empower
              businesses to scale with confidence since 2002.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="h-5 w-5 text-accent" />
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="text-base hover:text-accent transition-colors"
              >
                {COMPANY_EMAIL}
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          {PUBLIC_FOOTER_LINK_GROUPS.map((group) => (
            <div
              key={group.title}
              className={
                group.title === "Services"
                  ? "lg:col-span-3"
                  : group.title === "Products"
                    ? "lg:col-span-3"
                    : "lg:col-span-2"
              }
            >
              <h4 className="text-base font-semibold mb-6 text-white">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <PublicFooterLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} {COMPANY_NAME} All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#privacy"
                className="text-sm text-gray-400 hover:text-accent transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-sm text-gray-400 hover:text-accent transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
