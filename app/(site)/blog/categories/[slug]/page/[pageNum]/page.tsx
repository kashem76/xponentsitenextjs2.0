// app/(site)/blog/categories/[slug]/page/[pageNum]/page.tsx
import BlogOverviewGridSection from "@/components/blog/blog-overview-grid-section";
import BlogOverviewCtaSection from "@/components/blog/blog-overview-cta-section";
import BlogPagePagination from "@/components/blog/blog-pagination";
import CategoryHeroSection from "@/components/blog/categories/category-hero-section";
import { notFound, redirect } from "next/navigation";
import { Metadata } from "next";
import {
  getAllCategories,
  getCategoryBySlug,
} from "@/lib/wp-queries/categories";
import {
  getPageOffset,
  PER_PAGE_FIRST,
  PER_PAGE_REST,
  totalPagesCount,
} from "@/lib/wp-queries/pagination";
import {
  getPostsByCategoryId,
  getTotalPostByCategoryId,
} from "@/lib/wp-queries/posts";

export const revalidate = 3600; // 1 hour

interface CategoryPaginatedPageProps {
  params: Promise<{ slug: string; pageNum: string }>;
}

// Generate static params for all category pages
export async function generateStaticParams() {
  try {
    const { categories } = await getAllCategories();

    const paths: { slug: string; pageNum: string }[] = [];

    for (const category of categories) {
      const totalPosts = category.count || 0;
      const pagesCount = totalPagesCount(totalPosts);

      // Generate paths for pages 2 onwards (page 1 is handled by main category page)
      for (let page = 2; page <= pagesCount; page++) {
        paths.push({
          slug: category.slug,
          pageNum: page.toString(),
        });
      }
    }

    return paths;
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: CategoryPaginatedPageProps): Promise<Metadata> {
  const { slug, pageNum } = await params;

  try {
    const { category } = await getCategoryBySlug(slug);

    return {
      title: `${category.name} Articles - Page ${pageNum} | Xponent InfoSystem Blog`,
      description: `Browse ${category.name} articles - Page ${pageNum}. Expert insights, tutorials, and industry trends from Xponent InfoSystem.`,
      robots: {
        index: true,
        follow: true,
      },
      alternates: {
        canonical: `https://www.xponent.com.bd/blog/categories/${slug}/page/${pageNum}`,
      },
    };
  } catch {
    return {
      title: "Category Not Found | Xponent InfoSystem",
    };
  }
}

export default async function CategoryPaginatedPage({
  params,
}: CategoryPaginatedPageProps) {
  const { slug, pageNum } = await params;
  const page = parseInt(pageNum, 10);

  // Validate page number
  if (isNaN(page) || page < 1) {
    notFound();
  }

  // Redirect page 1 to main category page
  if (page === 1) {
    redirect(`/blog/categories/${slug}`);
  }

  try {
    const { category } = await getCategoryBySlug(slug);

    if (!category) {
      notFound();
    }

    const totalPosts = await getTotalPostByCategoryId(category.databaseId);
    const pagesCount = totalPagesCount(totalPosts);

    // If page exceeds total pages, return 404
    if (page > pagesCount) {
      notFound();
    }

    const offset = getPageOffset(page);
    const perPage = page === 1 ? PER_PAGE_FIRST : PER_PAGE_REST;

    const { posts } = await getPostsByCategoryId(
      category.databaseId,
      perPage,
      offset,
    );

    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <CategoryHeroSection
          category={category}
          totalPosts={totalPosts}
          currentPage={page}
          pagesCount={pagesCount}
        />

        {/* Blog Grid */}
        <BlogOverviewGridSection posts={posts} />

        {/* Pagination */}
        {pagesCount > 1 && (
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
            <BlogPagePagination
              basePath={`/blog/categories/${slug}`}
              pagesCount={pagesCount}
              currentPage={page}
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
