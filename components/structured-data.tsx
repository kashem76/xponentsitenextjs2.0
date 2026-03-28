// components/structured-data.tsx
export function OrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Xponent InfoSystem",
    url: "https://www.xponent.com.bd",
    logo: "https://www.xponent.com.bd/logo.png",
    description:
      "Leading software development company in Bangladesh specializing in custom software solutions, web development, mobile apps, and IT consulting.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
    },
    sameAs: [
      "https://www.facebook.com/xponent.infosystem/",
      "https://bd.linkedin.com/company/xponent-infosystem-pvt-limited",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
