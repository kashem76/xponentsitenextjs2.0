import Link from "next/link";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { IBlog } from "@/lib/types/blog.types";
import { formatBlogDate } from "@/lib/utils/blog/format-blog-date";

interface IBlogOverviewGridSectionProps {
  blogs: IBlog[];
}

export default function BlogOverviewGridSection({
  blogs,
}: IBlogOverviewGridSectionProps) {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.id}`}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="p-8">
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {blog.category}
                </div>

                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {blog.title}
                </h2>

                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1.5">
                    <User className="h-4 w-4" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    <span>{formatBlogDate(blog.date)}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>{blog.readTime}</span>
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
