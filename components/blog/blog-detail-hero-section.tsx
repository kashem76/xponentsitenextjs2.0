import { Calendar, User, Clock } from "lucide-react";
import { IBlog } from "@/lib/types/blog.types";
import { formatBlogDate } from "@/lib/utils/format-blog-date";

interface IBlogDetailHeroSectionProps {
  blog: IBlog;
}

export default function BlogDetailHeroSection({
  blog,
}: IBlogDetailHeroSectionProps) {
  return (
    <section className="pt-32 pb-16 px-6 lg:px-8 bg-linear-to-b from-primary/5 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          {blog.category}
        </div>

        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 leading-tight">
          {blog.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5" />
            <span className="text-lg">{blog.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <span className="text-lg">{formatBlogDate(blog.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span className="text-lg">{blog.readTime}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
