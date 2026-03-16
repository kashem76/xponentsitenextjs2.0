import BlogOverviewHeroSection from "@/components/blog/blog-overview-hero-section";
import BlogOverviewGridSection from "@/components/blog/blog-overview-grid-section";
import BlogOverviewCtaSection from "@/components/blog/blog-overview-cta-section";
import { getAllBlogs } from "@/lib/utils/blog/get-blog-by-id";

export default function BlogPage() {
  const blogs = getAllBlogs();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <BlogOverviewHeroSection />

      {/* Blog Grid */}
      <BlogOverviewGridSection blogs={blogs} />

      {/* CTA Section */}
      <BlogOverviewCtaSection />
    </div>
  );
}
