// components/products/product-breadcrumb-structured-data.tsx
interface ProductBreadcrumbProps {
  productName: string;
  productId: string;
}

export function ProductBreadcrumbStructuredData({
  productName,
  productId,
}: ProductBreadcrumbProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.xponent.com.bd",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://www.xponent.com.bd/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: productName,
        item: `https://www.xponent.com.bd/products/${productId}`,
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
