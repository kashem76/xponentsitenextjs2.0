// components/common/organization-structured-data.tsx
export function OrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Xponent InfoSystem",
    alternateName: "Xponent",
    url: "https://www.xponent.com.bd",
    logo: "https://www.xponent.com.bd/logo.png",
    description:
      "Leading software development company in Bangladesh specializing in custom software solutions, web development, mobile apps, AI automation, and IT consulting services.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales & Support",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Bengali"],
    },
    sameAs: [
      "https://www.facebook.com/xponent.infosystem/",
      "https://bd.linkedin.com/company/xponent-infosystem-pvt-limited",
      "https://www.glassdoor.com/Overview/Working-at-Xponent-InfoSystem-EI_IE887220.11,29.htm",
    ],
    foundingDate: "2013", // Update with actual founding date
    knowsAbout: [
      "Custom Software Development",
      "Web Application Development",
      "Mobile App Development",
      "AI and Machine Learning",
      "Business Automation",
      "Digital Transformation",
      "System Integration",
      "IT Consulting",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
          url: "https://www.xponent.com.bd/services/custom-software-development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI-Powered Automation",
          url: "https://www.xponent.com.bd/services/ai-powered-automation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Business Platforms",
          url: "https://www.xponent.com.bd/services/digital-business-platforms",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
