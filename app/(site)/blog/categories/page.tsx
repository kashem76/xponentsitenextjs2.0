// app/(site)/blog/categories/page.tsx
import Link from "next/link";
import { ArrowLeft, ArrowRight, FolderOpen } from "lucide-react";
import { Metadata } from "next";
import { getAllCategories } from "@/lib/wp-queries/categories";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog Categories | Xponent InfoSystem",
  description:
    "Browse all blog categories. Find articles on software development, AI & automation, digital transformation, and more.",
  openGraph: {
    title: "Blog Categories | Xponent InfoSystem",
    description:
      "Browse all blog categories. Find articles on software development, AI & automation, digital transformation, and more.",
    url: "https://www.xponent.com.bd/blog/categories",
    type: "website",
  },
  alternates: {
    canonical: "https://www.xponent.com.bd/blog/categories",
  },
};

export default async function CategoriesPage() {
  const { categories } = await getAllCategories();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Blog Categories
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Explore our articles organized by topic. Find the insights you
              need.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {categories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/blog/categories/${category.slug}`}
                  className="group bg-card border border-border rounded-xl p-8 hover:shadow-lg hover:border-primary/20 transition-all"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <FolderOpen className="h-7 w-7 text-primary" />
                  </div>

                  {/* Category Name */}
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h2>

                  {/* Description */}
                  {category.description && (
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {category.description}
                    </p>
                  )}

                  {/* Post Count & Arrow */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      {category.count || 0}{" "}
                      {category.count === 1 ? "article" : "articles"}
                    </span>
                    <ArrowRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <FolderOpen className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">No Categories Found</h2>
              <p className="text-muted-foreground mb-8">
                There are no categories available at the moment.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            {`Can't Find What You're Looking For?`}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {`Get in touch with our team and we'll help you find the information you need.`}
          </p>
          <Link href="/#contact">
            <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold">
              Contact Us
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
