import ProductsOverviewHeaderSection from "@/components/products/products-overview-header-section";
import ProductsOverviewGridSection from "@/components/products/products-overview-grid-section";
import ProductsOverviewCtaSection from "@/components/products/products-overview-cta-section";
import { getAllProducts } from "@/lib/utils/products/get-product-by-id";

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
