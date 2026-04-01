// app/(site)/blog/page.tsx
import BlogOverviewHeroSection from "@/components/blog/blog-overview-hero-section";
import BlogOverviewGridSection from "@/components/blog/blog-overview-grid-section";
import BlogOverviewCtaSection from "@/components/blog/blog-overview-cta-section";
import { Metadata } from "next";
import { getAllPosts } from "@/lib/wp-queries/posts";
import { getCategories } from "@/lib/wp-queries/categories";
import { PER_PAGE_FIRST, totalPagesCount } from "@/lib/wp-queries/pagination";
import BlogPagePagination from "@/components/blog/blog-pagination";

export const metadata: Metadata = {
  title:
    "Tech Blog | Software Development Insights & Industry Trends | Xponent InfoSystem",
  description:
    "Stay updated with the latest software development trends, best practices, industry insights, and technology tutorials from Xponent InfoSystem's expert team. Learn about web development, mobile apps, cloud computing, and more.",
  keywords: [
    "software development blog",
    "technology blog",
    "web development tutorials",
    "mobile app development tips",
    "cloud computing insights",
    "programming best practices",
    "IT industry trends",
    "software engineering blog",
    "tech insights Bangladesh",
    "development tutorials",
    "coding tips",
    "technology news",
  ],
  openGraph: {
    title: "Tech Blog | Software Development Insights & Industry Trends",
    description:
      "Expert insights, tutorials, and industry trends from Xponent InfoSystem's development team. Stay ahead in software development and technology.",
    url: "https://www.xponent.com.bd/blog",
    type: "website",
    locale: "en_US",
    siteName: "Xponent InfoSystem",
    images: [
      {
        url: "/images/blog-og.jpg",
        width: 1200,
        height: 630,
        alt: "Xponent InfoSystem Tech Blog - Software Development Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Blog | Xponent InfoSystem",
    description:
      "Expert insights, tutorials, and industry trends from our development team. Stay ahead in software development.",
    images: ["/images/blog-og.jpg"],
  },
  alternates: {
    canonical: "https://www.xponent.com.bd/blog",
  },
};

export const revalidate = 3600; // 1 hour

export default async function BlogPage() {
  const { posts, total } = await getAllPosts(PER_PAGE_FIRST, 0);
  const { categories } = await getCategories();
  const pagesCount = totalPagesCount(total);

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
            currentPage={1}
          />
        </div>
      )}

      {/* CTA Section */}
      <BlogOverviewCtaSection />
    </div>
  );
}
