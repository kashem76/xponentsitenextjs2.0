import { productsData } from "@/lib/data/products.data";
import { IProduct } from "@/lib/types/products.types";

export function getProductById(id: string): IProduct | undefined {
  return productsData.products.find((product) => product.id === id);
}

export function getAllProducts(): IProduct[] {
  return productsData.products;
}
