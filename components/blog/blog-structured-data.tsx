// components/blog/blog-structured-data.tsx
import { IBlog } from "@/lib/types/blog.types";

interface BlogStructuredDataProps {
  blog: IBlog;
  blogId: string;
}

export function BlogStructuredData({ blog, blogId }: BlogStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    image: `https://www.xponent.com.bd/images/blog/${blogId}-og.jpg`,
    datePublished: blog.date,
    dateModified: blog.date,
    author: {
      "@type": "Person",
      name: blog.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Xponent InfoSystem",
      logo: {
        "@type": "ImageObject",
        url: "https://www.xponent.com.bd/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.xponent.com.bd/blog/${blogId}`,
    },
    articleSection: blog.category,
    keywords: blog.category,
    timeRequired: blog.readTime,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
