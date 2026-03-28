// components/services/service-faq-structured-data.tsx
interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQStructuredDataProps {
  faqs: FAQ[];
}

export function ServiceFAQStructuredData({
  faqs,
}: ServiceFAQStructuredDataProps) {
  if (!faqs || faqs.length === 0) return null;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
