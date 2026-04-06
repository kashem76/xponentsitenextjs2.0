import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IProduct } from "@/lib/types/products.types";
import { getIconComponent } from "@/lib/utils/products/get-icon-component";

interface IProductsOverviewGridSectionProps {
  products: IProduct[];
}

export default function ProductsOverviewGridSection({
  products,
}: IProductsOverviewGridSectionProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-7xl">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className="group bg-card p-8 rounded-xl border-4 border-accent/20 hover:border-accent transition-all duration-300 hover:shadow-xl"
        >
          <div className="flex items-start gap-6">
            <div className="shrink-0 w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
              {getIconComponent({ iconName: product.icon })}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {product.name}
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {product.shortDescription}
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold">
                Learn more
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
