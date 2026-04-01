// components/blog/categories/category-sidebar.tsx
import Link from "next/link";
import { FolderOpen } from "lucide-react";
import { ICategory } from "@/lib/types/wp-queries";

interface CategorySidebarProps {
  categories: ICategory[];
  currentSlug?: string;
}

export default function CategorySidebar({
  categories,
  currentSlug,
}: CategorySidebarProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <FolderOpen className="h-5 w-5 text-primary" />
        Categories
      </h3>

      <div className="space-y-2">
        <Link
          href="/blog"
          className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            !currentSlug
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted hover:text-foreground"
          }`}
        >
          All Posts
        </Link>

        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/blog/categories/${category.slug}`}
            className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              currentSlug === category.slug
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <span className="flex items-center justify-between">
              <span>{category.name}</span>
              {category.count !== undefined && (
                <span className="text-xs opacity-70">({category.count})</span>
              )}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
