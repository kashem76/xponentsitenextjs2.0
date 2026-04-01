// components/blog/blog-structured-data.tsx

import { IBlogPostSingleGQL } from "@/lib/types/wp-queries";

interface BlogStructuredDataProps {
  post: IBlogPostSingleGQL;
}

export function BlogStructuredData({ post }: BlogStructuredDataProps) {
  const authorName = post.author?.node?.name || "Xponent Team";

  const category = post.categories?.edges?.[0]?.node?.name || "Technology";

  // Estimate read time
  const wordCount = (post.content || "")
    .replace(/<[^>]*>/g, "")
    .split(/\s+/).length;
  const readTime = `PT${Math.max(1, Math.ceil(wordCount / 200))}M`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description:
      post.seo?.metaDesc ||
      post.excerpt?.replace(/<[^>]*>/g, "").substring(0, 160) ||
      "",
    image: post.featuredImage?.node?.sourceUrl || "",
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: authorName,
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
      "@id": `https://www.xponent.com.bd/blog/${post.slug}`,
    },
    articleSection: category,
    keywords:
      post.tags?.edges?.map(({ node }) => node.name).join(", ") || category,
    timeRequired: readTime,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
