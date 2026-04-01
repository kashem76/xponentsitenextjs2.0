// components/blog/slug/blog-template.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from "lucide-react";
import { IBlogPostSingleGQL } from "@/lib/types/wp-queries";
import { BlogStructuredData } from "@/components/blog/blog-structured-data";
import { formatDate } from "@/lib/wp-queries/datetime";
import { sanitizeExcerpt } from "@/lib/wp-queries/posts";

interface IBlogTemplateProps {
  post: IBlogPostSingleGQL;
  relatedPosts?: { node: IBlogPostSingleGQL }[];
}

// Helper function to estimate read time from content
function estimateReadTime(content: string | null): string {
  if (!content) return "3 min read";

  const text = content.replace(/<[^>]*>/g, "");
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const readTime = Math.ceil(wordCount / 200);

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

// Get primary category for IBlogPostSingleGQL
function getPrimaryCategory(
  post: IBlogPostSingleGQL,
): { name: string; slug: string } | null {
  if (post.categories?.edges && post.categories.edges.length > 0) {
    return post.categories.edges[0].node;
  }
  return null;
}

// Get author name for IBlogPostSingleGQL
function getAuthorName(post: IBlogPostSingleGQL): string {
  if (post.author?.node) {
    return post.author.node.name || "Xponent Team";
  }
  return "Xponent Team";
}

// Get author avatar URL for IBlogPostSingleGQL
function getAuthorAvatar(post: IBlogPostSingleGQL): string | null {
  if (post.author?.node?.avatar?.url) {
    return post.author.node.avatar.url;
  }
  return null;
}

export default function BlogTemplate({
  post,
  relatedPosts,
}: IBlogTemplateProps) {
  const category = getPrimaryCategory(post);
  const authorName = getAuthorName(post);
  const readTime = estimateReadTime(post.content);

  return (
    <>
      <BlogStructuredData post={post} />

      <div className="min-h-screen">
        {/* Back Button */}
        <div className="pt-32 pb-12 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="pb-12 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {category && (
              <Link
                href={`/blog/categories/${category.slug}`}
                className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 hover:bg-primary/20 transition-colors"
              >
                {category.name}
              </Link>
            )}

            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                {post.author?.node?.avatar?.url ? (
                  <Image
                    src={post.author.node.avatar.url}
                    alt={authorName}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                ) : (
                  <User className="h-5 w-5" />
                )}
                <span>{authorName}</span>
              </div>
              {post.date && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{formatDate(post.date, "MMMM d, yyyy")}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post.featuredImage?.node?.sourceUrl && (
          <div className="px-6 lg:px-8 pb-12">
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  alt={post.featuredImage.node.altText || post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <article className="py-12 px-6 lg:px-8 bg-background">
          <div
            className="max-w-3xl mx-auto prose prose-lg prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground prose-p:leading-relaxed prose-li:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-img:rounded-xl"
            dangerouslySetInnerHTML={{
              __html: sanitizeExcerpt(post.content || ""),
            }}
          />
        </article>

        {/* Tags */}
        {post.tags?.edges && post.tags.edges.length > 0 && (
          <div className="px-6 lg:px-8 pb-12">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-wrap gap-2">
                <span className="text-muted-foreground">Tags:</span>
                {post.tags.edges.map(({ node }) => (
                  <span
                    key={node.name}
                    className="bg-muted px-3 py-1 rounded-full text-sm"
                  >
                    {node.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Related Posts */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section className="py-16 px-6 lg:px-8 border-t border-border">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.slice(0, 3).map(({ node: relatedPost }) => {
                  const relatedCategory = getPrimaryCategory(relatedPost);
                  const relatedAuthorName = getAuthorName(relatedPost);
                  const relatedAuthorAvatar = getAuthorAvatar(relatedPost);
                  const relatedReadTime = estimateReadTime(relatedPost.content);

                  return (
                    <article
                      key={relatedPost.slug}
                      className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all"
                    >
                      <div className="p-8">
                        {/* Category Badge - Clickable */}
                        {relatedCategory ? (
                          <Link
                            href={`/blog/categories/${relatedCategory.slug}`}
                            className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4 hover:bg-primary/20 transition-colors"
                          >
                            {relatedCategory.name}
                          </Link>
                        ) : (
                          <span className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                            Uncategorized
                          </span>
                        )}

                        {/* Title - Clickable */}
                        <Link href={`/blog/${relatedPost.slug}`}>
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                        </Link>

                        {/* Excerpt */}
                        <p className="text-muted-foreground mb-6 line-clamp-3">
                          {getExcerpt(relatedPost.excerpt, relatedPost.content)}
                        </p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                          {/* Author with Avatar */}
                          <div className="flex items-center gap-1.5">
                            {relatedAuthorAvatar ? (
                              <Image
                                src={relatedAuthorAvatar}
                                alt={relatedAuthorName}
                                width={20}
                                height={20}
                                className="rounded-full object-cover"
                              />
                            ) : (
                              <User className="h-4 w-4" />
                            )}
                            <span>{relatedAuthorName}</span>
                          </div>

                          {/* Date */}
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {relatedPost.date
                                ? formatDate(relatedPost.date, "MMM d, yyyy")
                                : "N/A"}
                            </span>
                          </div>

                          {/* Read Time */}
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-4 w-4" />
                            <span>{relatedReadTime}</span>
                          </div>
                        </div>

                        {/* Read Article Link */}
                        <Link
                          href={`/blog/${relatedPost.slug}`}
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
        )}

        {/* CTA Section */}
        <section className="py-16 px-6 lg:px-8 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how Xponent can help you build custom software,
              automate processes, and achieve your digital goals.
            </p>
            <Link href="/#contact">
              <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold">
                Get in Touch
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
