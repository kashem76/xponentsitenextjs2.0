// app/(site)/blog/categories/[slug]/page.tsx
import BlogOverviewGridSection from "@/components/blog/blog-overview-grid-section";
import BlogOverviewCtaSection from "@/components/blog/blog-overview-cta-section";
import BlogPagePagination from "@/components/blog/blog-pagination";
import CategoryHeroSection from "@/components/blog/categories/category-hero-section";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getAllCategories,
  getCategories,
  getCategoryBySlug,
} from "@/lib/wp-queries/categories";
import {
  getPostsByCategoryId,
  getTotalPostByCategoryId,
} from "@/lib/wp-queries/posts";
import { PER_PAGE_FIRST, totalPagesCount } from "@/lib/wp-queries/pagination";

export const revalidate = 3600; // 1 hour

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all categories
export async function generateStaticParams() {
  try {
    const { categories } = await getAllCategories();
    return categories.map((category) => ({
      slug: category.slug,
    }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { category } = await getCategoryBySlug(slug);

    const description =
      category.description ||
      `Browse all articles in the ${category.name} category. Expert insights, tutorials, and industry trends from Xponent InfoSystem.`;

    return {
      title: `${category.name} Articles | Xponent InfoSystem Blog`,
      description,
      keywords: [
        category.name,
        "Xponent InfoSystem",
        "technology blog",
        "software development",
        "tech insights",
      ],
      openGraph: {
        title: `${category.name} Articles | Xponent InfoSystem Blog`,
        description,
        url: `https://www.xponent.com.bd/blog/categories/${slug}`,
        type: "website",
        locale: "en_US",
        siteName: "Xponent InfoSystem",
      },
      twitter: {
        card: "summary_large_image",
        title: `${category.name} Articles | Xponent InfoSystem`,
        description,
      },
      alternates: {
        canonical: `https://www.xponent.com.bd/blog/categories/${slug}`,
      },
    };
  } catch {
    return {
      title: "Category Not Found | Xponent InfoSystem",
    };
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  try {
    const { category } = await getCategoryBySlug(slug);

    if (!category) {
      notFound();
    }

    const { categories } = await getCategories();
    const totalPosts = await getTotalPostByCategoryId(category.databaseId);
    const pagesCount = totalPagesCount(totalPosts);

    const { posts } = await getPostsByCategoryId(
      category.databaseId,
      PER_PAGE_FIRST,
      0,
    );

    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <CategoryHeroSection category={category} totalPosts={totalPosts} />

        {/* Blog Grid */}
        <BlogOverviewGridSection posts={posts} />

        {/* Pagination */}
        {pagesCount > 1 && (
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
            <BlogPagePagination
              basePath={`/blog/categories/${slug}`}
              pagesCount={pagesCount}
              currentPage={1}
            />
          </div>
        )}

        {/* CTA Section */}
        <BlogOverviewCtaSection />
      </div>
    );
  } catch (error) {
    notFound();
  }
}
