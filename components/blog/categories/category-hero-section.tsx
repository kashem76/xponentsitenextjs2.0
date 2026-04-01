// components/blog/categories/category-hero-section.tsx
import Link from "next/link";
import { ArrowLeft, FolderOpen } from "lucide-react";
import { ICategory } from "@/lib/types/wp-queries";

interface CategoryHeroSectionProps {
  category: ICategory;
  totalPosts: number;
  currentPage?: number;
  pagesCount?: number;
}

export default function CategoryHeroSection({
  category,
  totalPosts,
  currentPage,
  pagesCount,
}: CategoryHeroSectionProps) {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-linear-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <div className="text-center">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <FolderOpen className="h-4 w-4" />
            Category
          </div>

          {/* Category Title */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            {category.name}
          </h1>

          {/* Category Description */}
          {category.description && (
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6">
              {category.description}
            </p>
          )}

          {/* Post Count & Page Info */}
          <div className="flex items-center justify-center gap-4 text-muted-foreground">
            <span>
              {totalPosts} {totalPosts === 1 ? "article" : "articles"}
            </span>
            {currentPage && pagesCount && pagesCount > 1 && (
              <>
                <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                <span>
                  Page {currentPage} of {pagesCount}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
