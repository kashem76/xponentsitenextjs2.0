// components/blog/slug/blog-template.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
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

// Get primary category
function getPrimaryCategory(
  post: IBlogPostSingleGQL,
): { name: string; slug: string } | null {
  if (post.categories?.edges && post.categories.edges.length > 0) {
    return post.categories.edges[0].node;
  }
  return null;
}

// Get author name
function getAuthorName(post: IBlogPostSingleGQL): string {
  if (post.author?.node) {
    return post.author.node.name || "Xponent Team";
  }
  return "Xponent Team";
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
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl lg:text-3xl font-bold mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.slice(0, 2).map(({ node: relatedPost }) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all"
                  >
                    {relatedPost.featuredImage?.node?.sourceUrl && (
                      <div className="relative w-full aspect-video overflow-hidden">
                        <Image
                          src={relatedPost.featuredImage.node.sourceUrl}
                          alt={relatedPost.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      {relatedPost.date && (
                        <p className="text-muted-foreground text-sm mt-2">
                          {formatDate(relatedPost.date, "MMM d, yyyy")}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
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
