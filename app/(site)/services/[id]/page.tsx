// app/(site)/services/[id]/page.tsx
import { notFound } from "next/navigation";
import ServiceTemplate from "@/components/services/id/service-template";
import {
  getServiceById,
  getAllServices,
} from "@/lib/utils/services/get-service-by-id";
import { Metadata } from "next";

interface IServiceDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({
  params,
}: IServiceDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const description =
    service.shortDescription ||
    `${service.tagline}. Professional ${service.name} services from Xponent InfoSystem. Expert IT solutions tailored to your business needs in Bangladesh and globally.`;

  // Generate comprehensive keywords based on service type
  const baseKeywords = [
    service.name,
    `${service.name} Bangladesh`,
    `${service.name} services`,
    service.tagline,
    "Xponent InfoSystem",
    "software development",
    "IT solutions",
    "technology services",
  ];

  // Service-specific keywords based on capabilities and industries
  const serviceSpecificKeywords: { [key: string]: string[] } = {
    "custom-software-development": [
      "custom software development",
      "bespoke software",
      "tailored solutions",
      "web application development",
      "mobile app development",
      "enterprise software",
      "API development",
      "software consulting",
      "agile development",
      "full stack development",
      "cloud applications",
      "software outsourcing Bangladesh",
    ],
    "ai-powered-automation": [
      "AI automation",
      "artificial intelligence",
      "machine learning",
      "intelligent automation",
      "process automation",
      "RPA",
      "document processing",
      "chatbot development",
      "predictive analytics",
      "workflow automation",
      "business process automation",
      "AI solutions Bangladesh",
    ],
    "digital-business-platforms": [
      "digital platform development",
      "business platforms",
      "customer portals",
      "e-commerce platforms",
      "marketplace development",
      "SaaS platforms",
      "scalable platforms",
      "operational platforms",
      "multi-tenant platforms",
      "cloud platforms",
      "platform as a service",
    ],
    "system-integration": [
      "system integration",
      "API integration",
      "legacy modernization",
      "data migration",
      "enterprise integration",
      "middleware development",
      "ETL services",
      "cloud migration",
      "application integration",
      "systems consolidation",
      "integration services Bangladesh",
    ],
    "consulting-strategy": [
      "IT consulting",
      "technology consulting",
      "digital transformation",
      "IT strategy",
      "technology roadmap",
      "digital strategy",
      "software selection",
      "technology assessment",
      "business analysis",
      "IT advisory",
      "digital transformation consulting Bangladesh",
    ],
    "support-maintenance": [
      "software maintenance",
      "technical support",
      "application support",
      "IT support services",
      "managed services",
      "system monitoring",
      "software updates",
      "bug fixes",
      "performance optimization",
      "24/7 support",
      "IT support Bangladesh",
    ],
  };

  const additionalKeywords = serviceSpecificKeywords[id] || [];

  // Add industry-specific keywords if available
  const industryKeywords = service.industries
    ? service.industries.map(
        (industry) => `${service.name} for ${industry.toLowerCase()}`,
      )
    : [];

  // Extract keywords from capabilities
  const capabilityKeywords = service.capabilities
    ? service.capabilities.map((cap) => cap.title.toLowerCase())
    : [];

  const allKeywords = [
    ...baseKeywords,
    ...additionalKeywords,
    ...industryKeywords.slice(0, 3), // Limit to avoid keyword stuffing
    ...capabilityKeywords,
  ];

  return {
    title: `${service.name} | ${service.tagline} | Xponent InfoSystem`,
    description: description.substring(0, 160),
    keywords: allKeywords,
    openGraph: {
      title: `${service.name} | Xponent InfoSystem`,
      description: `${service.tagline} - ${service.shortDescription}`,
      url: `https://www.xponent.com.bd/services/${id}`,
      type: "website",
      locale: "en_US",
      siteName: "Xponent InfoSystem",
      images: [
        {
          url: `/images/services/${id}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.name} Services - Xponent InfoSystem`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} | Xponent InfoSystem`,
      description: `${service.tagline} - ${service.shortDescription}`,
      images: [`/images/services/${id}-og.jpg`],
    },
    alternates: {
      canonical: `https://www.xponent.com.bd/services/${id}`,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: IServiceDetailPageProps) {
  const { id } = await params;
  const service = getServiceById(id);

  if (!service) {
    notFound();
  }

  return <ServiceTemplate service={service} />;
}
