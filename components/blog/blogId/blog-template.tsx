// components/blog/slug/blog-template.tsx
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  ArrowRight,
  Tag,
} from "lucide-react";
import { IBlogPostSingleGQL } from "@/lib/types/wp-queries";
import { BlogStructuredData } from "@/components/blog/blog-structured-data";
import { formatDate } from "@/lib/wp-queries/datetime";
import { sanitizeExcerpt } from "@/lib/wp-queries/posts";

interface IBlogTemplateProps {
  post: IBlogPostSingleGQL;
  relatedPosts?: { node: IBlogPostSingleGQL }[];
}

function estimateReadTime(content: string | null): string {
  if (!content) return "3 min read";
  const wordCount = content
    .replace(/<[^>]*>/g, "")
    .split(/\s+/)
    .filter(Boolean).length;
  return `${Math.max(1, Math.ceil(wordCount / 200))} min read`;
}

function getExcerpt(excerpt: string | null, content: string | null): string {
  return (excerpt || content || "")
    .replace(/<[^>]*>/g, "")
    .replace(/&hellip;/g, "...")
    .replace(/&nbsp;/g, " ")
    .trim();
}

function getPrimaryCategory(
  post: IBlogPostSingleGQL,
): { name: string; slug: string } | null {
  return post.categories?.edges?.[0]?.node ?? null;
}

function getAuthorName(post: IBlogPostSingleGQL): string {
  return post.author?.node?.name || "Xponent Team";
}

export default function BlogTemplate({
  post,
  relatedPosts,
}: IBlogTemplateProps) {
  const category = getPrimaryCategory(post);
  const authorName = getAuthorName(post);
  const authorAvatar = post.author?.node?.avatar?.url ?? null;
  const readTime = estimateReadTime(post.content);

  return (
    <>
      <BlogStructuredData post={post} />

      <div className="min-h-screen bg-background">
        {/* ── Hero ── */}
        <section className="bg-primary pt-32 pb-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            {category && (
              <Link
                href={`/blog/categories/${category.slug}`}
                className="inline-block bg-white/15 ms-5 hover:bg-white/25 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-5 transition-colors"
              >
                {category.name}
              </Link>
            )}

            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-5 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                {authorAvatar ? (
                  <Image
                    src={authorAvatar}
                    alt={authorName}
                    width={28}
                    height={28}
                    className="rounded-full ring-2 ring-white/20"
                  />
                ) : (
                  <div className="h-7 w-7 rounded-full bg-white/20 flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                )}
                <span className="text-white font-medium">{authorName}</span>
              </div>

              {post.date && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(post.date, "MMMM d, yyyy")}</span>
                </div>
              )}

              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Featured Image ── */}
        {post.featuredImage?.node?.sourceUrl && (
          <div className="relative w-full aspect-video">
            <Image
              src={post.featuredImage.node.sourceUrl}
              alt={post.featuredImage.node.altText || post.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* ── Content + Sidebar ── */}
        <div className="px-6 lg:px-8 py-14">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
            {/* Article */}
            <article
              className="min-w-0 flex-1 prose prose-base lg:prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-foreground prose-headings:scroll-mt-24
                prose-p:text-foreground/85 prose-p:leading-relaxed
                prose-li:text-foreground/85
                prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:rounded-r-lg prose-blockquote:py-1
                prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                prose-pre:bg-muted prose-pre:rounded-xl
                prose-img:rounded-xl prose-img:shadow-md"
              dangerouslySetInnerHTML={{
                __html: sanitizeExcerpt(post.content || ""),
              }}
            />

            {/* Sticky Sidebar */}
            <aside className="w-full lg:w-60 xl:w-72 shrink-0 lg:sticky lg:top-24 space-y-6">
              {/* Author card */}
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Written by
                </p>
                <div className="flex items-center gap-3">
                  {authorAvatar ? (
                    <Image
                      src={authorAvatar}
                      alt={authorName}
                      width={44}
                      height={44}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-sm text-foreground">
                      {authorName}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Xponent Team
                    </p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              {post.tags?.edges && post.tags.edges.length > 0 && (
                <div className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-1.5">
                    <Tag className="h-3.5 w-3.5" /> Tags
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.edges.map(({ node }) => (
                      <span
                        key={node.name}
                        className="bg-muted text-muted-foreground px-2.5 py-1 rounded-full text-xs font-medium"
                      >
                        {node.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA card */}
              <div className="rounded-xl bg-primary p-5 text-white">
                <p className="font-bold text-sm mb-1.5">
                  Have a project in mind?
                </p>
                <p className="text-xs text-white/75 mb-4">
                  Let&apos;s talk about how we can help you build it.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 bg-white text-primary px-4 py-2 rounded-lg text-xs font-bold hover:bg-white/90 transition-colors"
                >
                  Get in touch <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </aside>
          </div>
        </div>

        {/* ── Related Posts ── */}
        {relatedPosts && relatedPosts.length > 0 && (
          <section className="py-16 px-6 lg:px-8 border-t border-border bg-muted">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.slice(0, 3).map(({ node: rp }) => {
                  const rpCategory = getPrimaryCategory(rp);
                  return (
                    <article
                      key={rp.slug}
                      className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-md transition-shadow flex flex-col"
                    >
                      {rp.featuredImage?.node?.sourceUrl && (
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={rp.featuredImage.node.sourceUrl}
                            alt={rp.featuredImage.node.altText || rp.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-5 flex flex-col flex-1">
                        {rpCategory && (
                          <Link
                            href={`/blog/categories/${rpCategory.slug}`}
                            className="text-xs font-semibold text-primary uppercase tracking-wide mb-2 hover:underline"
                          >
                            {rpCategory.name}
                          </Link>
                        )}
                        <Link href={`/blog/${rp.slug}`} className="flex-1">
                          <h3 className="font-bold text-foreground text-base leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {rp.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                            {getExcerpt(rp.excerpt, rp.content)}
                          </p>
                        </Link>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>
                            {rp.date ? formatDate(rp.date, "MMM d, yyyy") : ""}
                          </span>
                          <span>{estimateReadTime(rp.content)}</span>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="py-16 px-6 lg:px-8 bg-primary">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/80 mb-8">
              Let&apos;s discuss how Xponent can help you build custom software,
              automate processes, and achieve your digital goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-7 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
