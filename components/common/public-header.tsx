"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { PUBLIC_NAV_LINKS } from "@/lib/constants/public-layout";

export default function PublicHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-primary-foreground/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Logo className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {PUBLIC_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors font-semibold text-base"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#contact">
              <button className="bg-accent text-accent-foreground px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity font-semibold">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {PUBLIC_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-primary-foreground/90 hover:text-primary-foreground transition-colors font-medium py-2"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/#contact" className="block" onClick={closeMenu}>
              <button className="w-full bg-accent text-accent-foreground px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity font-semibold">
                Contact Us
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
