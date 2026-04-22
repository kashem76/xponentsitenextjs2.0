// app/(site)/products/page.tsx
import ProductsOverviewHeaderSection from "@/components/products/products-overview-header-section";
import ProductsOverviewGridSection from "@/components/products/products-overview-grid-section";
import ProductsOverviewCtaSection from "@/components/products/products-overview-cta-section";
import { getAllProducts } from "@/lib/utils/products/get-product-by-id";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Business Management Software Products | Accounting, Gym, Hotel & Landscaping Solutions | Xponent InfoSystem",
  description:
    "Explore Xponent InfoSystem's ready-to-deploy business management software — accounting ERP, gym management system, hotel management software, and landscaping software. Industry-specific solutions built for Bangladesh businesses.",
  keywords: [
    "business management software Bangladesh",
    "accounting ERP software",
    "gym management software",
    "hotel management software Bangladesh",
    "landscaping management software",
    "SaaS solutions Bangladesh",
    "industry-specific software",
    "cloud business software Bangladesh",
    "enterprise software products",
    "business automation software",
    "Xponent InfoSystem products",
    "software products Bangladesh",
  ],
  openGraph: {
    title:
      "Business Management Software Products | Accounting, Gym, Hotel & Landscaping Solutions",
    description:
      "Explore Xponent InfoSystem's portfolio of business management software — accounting ERP, gym management, hotel management systems, and landscaping software designed for Bangladesh businesses.",
    url: "https://www.xponent.com.bd/products",
    type: "website",
    locale: "en_US",
    siteName: "Xponent InfoSystem",
    images: [
      {
        url: "/images/products-og.jpg",
        width: 1200,
        height: 630,
        alt: "Xponent InfoSystem - Business Management Software Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Management Software Products | Xponent InfoSystem",
    description:
      "Accounting ERP, gym management, hotel management & landscaping software — industry-specific solutions built for Bangladesh businesses.",
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
