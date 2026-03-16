import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { IBlog } from "@/lib/types/blog.types";
import { formatBlogDateLong } from "@/lib/utils/format-blog-date";

interface IBlogTemplateProps {
  blog: IBlog;
}

export default function BlogTemplate({ blog }: IBlogTemplateProps) {
  return (
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
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            {blog.category}
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold mb-6">{blog.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span>{formatBlogDateLong(blog.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto prose prose-lg">
          {blog.content.map((block, index) => {
            if (block.type === "paragraph") {
              return (
                <p
                  key={index}
                  className="text-lg leading-relaxed mb-6 text-foreground"
                >
                  {block.text}
                </p>
              );
            }

            if (block.type === "heading") {
              return (
                <h2
                  key={index}
                  className="text-2xl lg:text-3xl font-bold mt-12 mb-6 text-foreground"
                >
                  {block.text}
                </h2>
              );
            }

            if (block.type === "list" && block.items) {
              return (
                <ul key={index} className="space-y-3 mb-8 ml-6">
                  {block.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-lg leading-relaxed text-foreground list-disc"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }

            return null;
          })}
        </div>
      </article>

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
  );
}
