import ProductBenefitsSection from "@/components/products/id/product-benefits-section";
import ProductCtaSection from "@/components/products/id/product-cta-section";
import ProductFeaturesSection from "@/components/products/id/product-features-section";
import ProductHeroSection from "@/components/products/id/product-hero-section";
import ProductTechnicalSection from "@/components/products/id/product-technical-section";
import ProductUseCasesSection from "@/components/products/id/product-use-cases-section";
import { ProductBreadcrumbStructuredData } from "@/components/products/product-breadcrumb-structured-data";
import { ProductStructuredData } from "@/components/products/product-structured-data";
import { IProduct } from "@/lib/types/products.types";

interface IProductTemplateProps {
  product: IProduct;
}

export default function ProductTemplate({ product }: IProductTemplateProps) {
  return (
    <>
      {" "}
      <ProductStructuredData product={product} productId={product?.id} />
      <ProductBreadcrumbStructuredData
        productName={product.name}
        productId={product?.id}
      />
      <div className="min-h-screen">
        {/* Hero Section */}
        <ProductHeroSection product={product} />

        {/* Key Features Section */}
        <ProductFeaturesSection
          features={product.keyFeatures}
          productName={product.name}
        />

        {/* Benefits Section */}
        {product.benefits && (
          <ProductBenefitsSection
            benefits={product.benefits}
            productName={product.name}
          />
        )}

        {/* Use Cases Section */}
        {product.useCases && (
          <ProductUseCasesSection
            useCases={product.useCases}
            productName={product.name}
          />
        )}

        {/* Technical Highlights Section */}
        {product.technicalHighlights && (
          <ProductTechnicalSection
            highlights={product.technicalHighlights}
            productName={product.name}
          />
        )}

        {/* CTA Section */}
        <ProductCtaSection productName={product.name} />
      </div>
    </>
  );
}
