// components/blog/blog-overview-grid-section.tsx
import Link from "next/link";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { IBlogPost } from "@/lib/types/wp-queries";
import { formatDate } from "@/lib/wp-queries/datetime";

interface IBlogOverviewGridSectionProps {
  posts: IBlogPost[];
}

// Helper function to estimate read time from content
function estimateReadTime(content: string | null): string {
  if (!content) return "3 min read";

  // Strip HTML tags and count words
  const text = content.replace(/<[^>]*>/g, "");
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const readTime = Math.ceil(wordCount / 200); // Average reading speed: 200 words/min

  return `${Math.max(1, readTime)} min read`;
}

// Helper function to strip HTML and get clean excerpt
function getExcerpt(excerpt: string | null, content: string | null): string {
  const text = excerpt || content || "";
  const stripped = text
    .replace(/<[^>]*>/g, "")
    .replace(/&hellip;/g, "...")
    .replace(/&nbsp;/g, " ")
    .trim();
  return stripped;
}

// Get primary category name
function getPrimaryCategory(post: IBlogPost): string {
  if (post.categories && post.categories.length > 0) {
    return post.categories[0].name;
  }
  return "Uncategorized";
}

export default function BlogOverviewGridSection({
  posts,
}: IBlogOverviewGridSectionProps) {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="p-8">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {getPrimaryCategory(post)}
                </div>

                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>

                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {getExcerpt(post.excerpt, post.content)}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1.5">
                    <User className="h-4 w-4" />
                    <span>{post.author?.name || "Admin"}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {post.date ? formatDate(post.date, "MMM d, yyyy") : "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>{estimateReadTime(post.content)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
