import { notFound } from "next/navigation";
import {
  getProductById,
  getAllProducts,
} from "@/lib/utils/products/get-product-by-id";
import ProductTemplate from "@/components/products/id/product-template";

interface IProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    id: product.id,
  }));
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
