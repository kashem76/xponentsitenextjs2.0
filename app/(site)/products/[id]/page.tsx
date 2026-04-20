// app/(site)/products/[id]/page.tsx
import { notFound } from "next/navigation";
import {
  getProductById,
  getAllProducts,
} from "@/lib/utils/products/get-product-by-id";
import ProductTemplate from "@/components/products/id/product-template";
import { Metadata } from "next";

interface IProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({
  params,
}: IProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const fullDescription = `${product.shortDescription} ${product.hero.subheadline}`;
  const description = fullDescription.substring(0, 160);

  // Generate dynamic keywords based on product features and use cases
  const featureKeywords = product.keyFeatures.map((f) => f.title.toLowerCase());
  const useCaseKeywords = product.useCases.map((u) => u.industry.toLowerCase());

  const keywords = [
    product.name,
    `${product.name} software`,
    `${product.name} Bangladesh`,
    `${product.name} system`,
    product.tagline,
    ...featureKeywords,
    ...useCaseKeywords,
    "Xponent InfoSystem",
    "business management software Bangladesh",
    "enterprise software solution",
    "SaaS application Bangladesh",
    "business automation software",
    "cloud software Bangladesh",
  ];

  return {
    title: `${product.name} | ${product.tagline} | Xponent InfoSystem`,
    description,
    keywords,
    openGraph: {
      title: `${product.name} | Xponent InfoSystem`,
      description: `${product.tagline} — ${product.shortDescription}`,
      url: `https://www.xponent.com.bd/products/${id}`,
      type: "website",
      locale: "en_US",
      siteName: "Xponent InfoSystem",
      images: [
        {
          url: `/images/products/${id}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `${product.name} - Xponent InfoSystem`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Xponent InfoSystem`,
      description: `${product.tagline} - ${product.shortDescription}`,
      images: [`/images/products/${id}-og.jpg`],
    },
    alternates: {
      canonical: `https://www.xponent.com.bd/products/${id}`,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: IProductDetailPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return <ProductTemplate product={product} />;
}
