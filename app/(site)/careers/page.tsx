// app/(site)/careers/page.tsx
import CareersCtaSection from "@/components/careers/careers-cta-section";
import CareersHeroSection from "@/components/careers/careers-hero-section";
import CareersPerksSection from "@/components/careers/careers-perks-section";
import CareersPositionsSection from "@/components/careers/careers-positions-section";
import CareersValuesSection from "@/components/careers/careers-values-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Careers at Xponent InfoSystem | Software Developer Jobs in Bangladesh",
  description:
    "Join Xponent InfoSystem's talented team of software developers, engineers, and IT professionals. Explore exciting career opportunities in software development, web development, mobile apps, and more in Bangladesh.",
  keywords: [
    "careers Xponent InfoSystem",
    "software developer jobs Bangladesh",
    "IT jobs Bangladesh",
    "web developer careers",
    "mobile app developer jobs",
    "software engineer jobs",
    "programming jobs Bangladesh",
    "tech careers Bangladesh",
    "developer opportunities",
    "software company jobs",
    "IT career opportunities",
    "join our team",
  ],
  openGraph: {
    title: "Careers at Xponent InfoSystem | Software Developer Jobs",
    description:
      "Join our talented team of developers and innovators. Explore exciting career opportunities at Xponent InfoSystem in software development and IT.",
    url: "https://www.xponent.com.bd/careers",
    type: "website",
    locale: "en_US",
    siteName: "Xponent InfoSystem",
    images: [
      {
        url: "/images/careers-og.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at Xponent InfoSystem - Join Our Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at Xponent InfoSystem | Join Our Team",
    description:
      "Join our talented team of developers and innovators. Explore exciting career opportunities in software development.",
    images: ["/images/careers-og.jpg"],
  },
  alternates: {
    canonical: "https://www.xponent.com.bd/careers",
  },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <CareersHeroSection />

      {/* Open Positions */}
      <CareersPositionsSection />

      {/* Values Section */}
      <CareersValuesSection />

      {/* Perks & Benefits */}
      <CareersPerksSection />

      {/* CTA Section */}
      <CareersCtaSection />
    </div>
  );
}
