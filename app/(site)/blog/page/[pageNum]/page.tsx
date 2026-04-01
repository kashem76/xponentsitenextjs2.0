// app/(site)/blog/page/[pageNum]/page.tsx
import BlogOverviewHeroSection from "@/components/blog/blog-overview-hero-section";
import BlogOverviewGridSection from "@/components/blog/blog-overview-grid-section";
import BlogOverviewCtaSection from "@/components/blog/blog-overview-cta-section";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getPageOffset,
  PER_PAGE_FIRST,
  PER_PAGE_REST,
  totalPagesCount,
} from "@/lib/wp-queries/pagination";
import { getAllPosts } from "@/lib/wp-queries/posts";
import { getCategories } from "@/lib/wp-queries/categories";
import BlogPagePagination from "@/components/blog/blog-pagination";

export const revalidate = 3600; // 1 hour

interface BlogPaginatedPageProps {
  params: Promise<{ pageNum: string }>;
}

export async function generateMetadata({
  params,
}: BlogPaginatedPageProps): Promise<Metadata> {
  return {
    title: `Blog | Xponent InfoSystem`,
    description:
      "Stay updated with the latest software development trends, best practices, industry insights, and technology tutorials from Xponent InfoSystem's expert team.",
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPaginatedPage({
  params,
}: BlogPaginatedPageProps) {
  const { pageNum } = await params;
  const page = parseInt(pageNum, 10);

  // Validate page number
  if (isNaN(page) || page < 1) {
    notFound();
  }

  // Redirect page 1 to main blog page
  if (page === 1) {
    notFound(); // Or use redirect('/blog')
  }

  const offset = getPageOffset(page);
  const perPage = page === 1 ? PER_PAGE_FIRST : PER_PAGE_REST;

  const { posts, total } = await getAllPosts(perPage, offset);
  const { categories } = await getCategories();
  const pagesCount = totalPagesCount(total);

  // If page exceeds total pages, return 404
  if (page > pagesCount) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <BlogOverviewHeroSection />

      {/* Blog Grid */}
      <BlogOverviewGridSection posts={posts} />

      {/* Pagination */}
      {pagesCount > 1 && (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
          <BlogPagePagination
            basePath="/blog"
            pagesCount={pagesCount}
            currentPage={page}
          />
        </div>
      )}

      {/* CTA Section */}
      <BlogOverviewCtaSection />
    </div>
  );
}
