// components/products/product-structured-data.tsx
import { IProduct } from "@/lib/types/products.types";

interface ProductStructuredDataProps {
  product: IProduct;
  productId: string;
}

export function ProductStructuredData({
  product,
  productId,
}: ProductStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: "BusinessApplication",
    headline: product.hero.headline,
    description: product.shortDescription,
    offers: {
      "@type": "Offer",
      category: "Software",
    },
    provider: {
      "@type": "Organization",
      name: "Xponent InfoSystem",
      url: "https://www.xponent.com.bd",
    },
    url: `https://www.xponent.com.bd/products/${productId}`,
    featureList: product.keyFeatures.map((feature) => feature.title).join(", "),
    screenshot: product.hero.image
      ? `https://www.xponent.com.bd/images/products/${product.hero.image}.jpg`
      : undefined,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
