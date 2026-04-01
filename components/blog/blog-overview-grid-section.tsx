// components/blog/blog-overview-grid-section.tsx
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { IBlogPost, ICategory } from "@/lib/types/wp-queries";
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

// Get primary category
function getPrimaryCategory(post: IBlogPost): ICategory | null {
  if (post.categories && post.categories.length > 0) {
    return post.categories[0];
  }
  return null;
}

// Get author name
function getAuthorName(post: IBlogPost): string {
  if (post.author) {
    return post.author.name || "Admin";
  }
  return "Admin";
}

// Get author avatar URL
function getAuthorAvatar(post: IBlogPost): string | null {
  if (post.author?.avatar?.url) {
    return post.author.avatar.url;
  }
  return null;
}

export default function BlogOverviewGridSection({
  posts,
}: IBlogOverviewGridSectionProps) {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const primaryCategory = getPrimaryCategory(post);
            const authorName = getAuthorName(post);
            const authorAvatar = getAuthorAvatar(post);

            return (
              <article
                key={post.id}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="p-8">
                  {/* Category Badge - Clickable */}
                  {primaryCategory ? (
                    <Link
                      href={`/blog/categories/${primaryCategory.slug}`}
                      className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4 hover:bg-primary/20 transition-colors"
                    >
                      {primaryCategory.name}
                    </Link>
                  ) : (
                    <span className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                      Uncategorized
                    </span>
                  )}

                  {/* Title - Clickable */}
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {getExcerpt(post.excerpt, post.content)}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    {/* Author with Avatar */}
                    <div className="flex items-center gap-1.5">
                      {authorAvatar ? (
                        <Image
                          src={authorAvatar}
                          alt={authorName}
                          width={20}
                          height={20}
                          className="rounded-full object-cover"
                        />
                      ) : (
                        <User className="h-4 w-4" />
                      )}
                      <span>{authorName}</span>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {post.date
                          ? formatDate(post.date, "MMM d, yyyy")
                          : "N/A"}
                      </span>
                    </div>

                    {/* Read Time */}
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      <span>{estimateReadTime(post.content)}</span>
                    </div>
                  </div>

                  {/* Read Article Link */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                  >
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
