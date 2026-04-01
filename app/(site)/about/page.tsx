// app/(site)/about/page.tsx
import AboutHeroSection from "@/components/about/about-hero-section";
import AboutValuesSection from "@/components/about/about-values-section";
import AboutStatsSection from "@/components/about/about-stats-section";
import AboutHowWeWorkSection from "@/components/about/about-how-we-work-section";
import AboutTeamSection from "@/components/about/about-team-section";
import AboutCtaSection from "@/components/about/about-cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute:
      "About Xponent InfoSystem | Leading Software Development Company in Bangladesh",
  },
  description:
    "Learn about Xponent InfoSystem, a pioneering software development company in Bangladesh. Discover our mission, values, expertise in custom software development, and commitment to delivering innovative IT solutions to global clients.",
  keywords: [
    "about Xponent InfoSystem",
    "software development company Bangladesh",
    "IT company Bangladesh",
    "Xponent team",
    "technology company",
    "software development expertise",
    "custom software solutions",
    "digital innovation",
    "agile development team",
    "IT services Bangladesh",
    "software outsourcing",
    "technology partner",
    "enterprise solutions",
  ],
  openGraph: {
    title:
      "About Xponent InfoSystem | Leading Software Development Company in Bangladesh",
    description:
      "Discover Xponent InfoSystem's journey, mission, and values. We're a team of passionate developers and innovators delivering cutting-edge software solutions to businesses worldwide.",
    url: "https://www.xponent.com.bd/about",
    type: "website",
    locale: "en_US",
    siteName: "Xponent InfoSystem",
    images: [
      {
        url: "/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "About Xponent InfoSystem - Software Development Excellence in Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Xponent InfoSystem | Software Development Company",
    description:
      "Learn about our mission, values, and expertise in delivering innovative software solutions to businesses worldwide from Bangladesh.",
    images: ["/images/about-og.jpg"],
  },
  alternates: {
    canonical: "https://www.xponent.com.bd/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AboutHeroSection />

      {/* Core Values */}
      <AboutValuesSection />

      {/* By the Numbers */}
      <AboutStatsSection />

      {/* How We Work */}
      <AboutHowWeWorkSection />

      {/* Team/Culture Section */}
      <AboutTeamSection />

      {/* CTA Section */}
      <AboutCtaSection />
    </div>
  );
}
