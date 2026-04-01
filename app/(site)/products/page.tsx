// app/(site)/products/page.tsx
import ProductsOverviewHeaderSection from "@/components/products/products-overview-header-section";
import ProductsOverviewGridSection from "@/components/products/products-overview-grid-section";
import ProductsOverviewCtaSection from "@/components/products/products-overview-cta-section";
import { getAllProducts } from "@/lib/utils/products/get-product-by-id";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Software Products & Solutions | Enterprise & SaaS Applications | Xponent InfoSystem",
  description:
    "Discover innovative software products and SaaS solutions developed by Xponent InfoSystem. Scalable, secure, and feature-rich applications designed to streamline business operations and drive growth.",
  keywords: [
    "software products",
    "SaaS solutions",
    "enterprise software",
    "business applications",
    "cloud-based software",
    "Xponent products",
    "custom software products",
    "scalable applications",
    "business automation tools",
    "digital solutions",
    "software applications Bangladesh",
  ],
  openGraph: {
    title: "Software Products & Solutions | Enterprise & SaaS Applications",
    description:
      "Explore Xponent InfoSystem's portfolio of innovative software products and SaaS solutions designed to transform businesses and enhance productivity.",
    url: "https://www.xponent.com.bd/products",
    type: "website",
    locale: "en_US",
    siteName: "Xponent InfoSystem",
    images: [
      {
        url: "/images/products-og.jpg",
        width: 1200,
        height: 630,
        alt: "Xponent InfoSystem - Innovative Software Products & SaaS Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Products & Solutions | Xponent InfoSystem",
    description:
      "Innovative software products and SaaS solutions designed to transform businesses and enhance productivity.",
    images: ["/images/products-og.jpg"],
  },
  alternates: {
    canonical: "https://www.xponent.com.bd/products",
  },
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ProductsOverviewHeaderSection />

        {/* Products Grid */}
        <ProductsOverviewGridSection products={products} />

        {/* Bottom CTA */}
        <ProductsOverviewCtaSection />
      </div>
    </div>
  );
}
