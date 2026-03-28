// app/(site)/services/page.tsx
import ServicesOverviewHeaderSection from "@/components/services/services-overview-header-section";
import ServicesOverviewGridSection from "@/components/services/services-overview-grid-section";
import ServicesOverviewCtaSection from "@/components/services/services-overview-cta-section";
import { getAllServices } from "@/lib/utils/services/get-service-by-id";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Software Development Services | Web, Mobile & Cloud Solutions | Xponent InfoSystem",
  description:
    "Explore Xponent InfoSystem's comprehensive software development services including custom software development, web applications, mobile apps, cloud solutions, UI/UX design, DevOps, and IT consulting for businesses of all sizes.",
  keywords: [
    "software development services",
    "custom software development",
    "web application development",
    "mobile app development",
    "cloud computing services",
    "UI/UX design services",
    "DevOps services",
    "IT consulting Bangladesh",
    "enterprise software solutions",
    "API development",
    "SaaS development",
    "microservices architecture",
    "full stack development",
    "frontend development",
    "backend development",
    "database design",
    "software maintenance",
  ],
  openGraph: {
    title: "Software Development Services | Web, Mobile & Cloud Solutions",
    description:
      "Comprehensive software development services from Xponent InfoSystem. Custom software, web & mobile apps, cloud solutions, and IT consulting tailored to your business needs.",
    url: "https://www.xponent.com.bd/services",
    type: "website",
    locale: "en_US",
    siteName: "Xponent InfoSystem",
    images: [
      {
        url: "/images/services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Xponent InfoSystem - Comprehensive Software Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Services | Xponent InfoSystem",
    description:
      "Custom software, web & mobile apps, cloud solutions, and IT consulting services tailored to transform your business.",
    images: ["/images/services-og.jpg"],
  },
  alternates: {
    canonical: "https://www.xponent.com.bd/services",
  },
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ServicesOverviewHeaderSection />

        {/* Services Grid */}
        <ServicesOverviewGridSection services={services} />

        {/* Bottom CTA */}
        <ServicesOverviewCtaSection />
      </div>
    </div>
  );
}
