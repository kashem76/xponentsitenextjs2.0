// app/(site)/page.tsx
import HomeHeroSection from "@/components/home/home-hero-section";
import HomeTrustedBySection from "@/components/home/home-trusted-by-section";
import HomeWhatWeDoSection from "@/components/home/home-what-we-do-section";
import HomeTestimonialsSection from "@/components/home/home-testimonials-section";
import HomeCtaSection from "@/components/home/home-cta-section";
import HomeHiringSection from "@/components/home/home-hiring-section";
import HomeMissionSection from "@/components/home/home-our-mission-section";
import HomeStorySection from "@/components/home/home-our-story-section";
import HomeValuesSection from "@/components/home/home-our-values-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Custom Software Development Company in Bangladesh | Web & Mobile App Solutions | Xponent InfoSystem",
  description:
    "Xponent InfoSystem is a trusted software development company in Bangladesh offering custom software development, web applications, mobile apps, cloud solutions, and IT consulting services to startups and enterprises globally.",
  keywords: [
    "Xponent InfoSystem",
    "software development company Bangladesh",
    "custom software development",
    "web application development",
    "mobile app development Bangladesh",
    "IT consulting services",
    "cloud solutions Bangladesh",
    "enterprise software development",
    "digital transformation services",
    "software outsourcing Bangladesh",
    "agile software development",
    "technology consulting",
    "SaaS development",
    "API development",
    "full stack development",
  ],
  openGraph: {
    title:
      "Custom Software Development Company in Bangladesh | Xponent InfoSystem",
    description:
      "Partner with Xponent InfoSystem for custom software development, web & mobile applications, cloud solutions, and digital transformation services. Trusted by businesses worldwide.",
    url: "https://www.xponent.com.bd",
    type: "website",
    locale: "en_US",
    siteName: "Xponent InfoSystem",
    images: [
      {
        url: "/images/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "Xponent InfoSystem - Custom Software Development Company in Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Custom Software Development Company in Bangladesh | Xponent InfoSystem",
    description:
      "Partner with Xponent InfoSystem for custom software development, web & mobile applications, and cloud solutions. Trusted technology partner.",
    images: ["/images/home-og.jpg"],
  },
  alternates: {
    canonical: "https://www.xponent.com.bd",
  },
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <HomeHeroSection />

      {/* Trusted By Section */}
      <HomeTrustedBySection />

      {/* Our Mission Section */}
      <HomeMissionSection />

      {/* Our Story Section */}
      <HomeStorySection />

      {/* Our Values Section */}
      <HomeValuesSection />

      {/* What We Do Section */}
      <HomeWhatWeDoSection />

      {/* Testimonials Section */}
      <HomeTestimonialsSection />

      {/* Final CTA Section */}
      <HomeCtaSection />

      {/* We Are Hiring Section */}
      <HomeHiringSection />
    </div>
  );
}
