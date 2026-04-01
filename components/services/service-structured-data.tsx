// components/services/service-structured-data.tsx
import { IService } from "@/lib/types/services.types";

interface ServiceStructuredDataProps {
  service: IService;
  serviceId: string;
}

export function ServiceStructuredData({
  service,
  serviceId,
}: ServiceStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    provider: {
      "@type": "Organization",
      name: "Xponent InfoSystem",
      url: "https://www.xponent.com.bd",
      logo: {
        "@type": "ImageObject",
        url: "https://www.xponent.com.bd/logo.png",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Sales",
        areaServed: "BD",
        availableLanguage: ["English", "Bengali"],
      },
    },
    serviceType: service.name,
    areaServed: {
      "@type": "Country",
      name: "Bangladesh",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Business",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.name} Capabilities`,
      itemListElement: service.capabilities?.map((capability, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: capability.title,
          description: capability.description,
        },
        position: index + 1,
      })),
    },
    termsOfService: "https://www.xponent.com.bd/terms",
    url: `https://www.xponent.com.bd/services/${serviceId}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
