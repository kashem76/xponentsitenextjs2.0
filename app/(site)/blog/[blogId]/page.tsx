// app/(site)/blog/[blogId]/page.tsx
import BlogTemplate from "@/components/blog/blogId/blog-template";
import { getAllBlogs, getBlogById } from "@/lib/utils/blog/get-blog-by-id";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface IBlogDetailPageProps {
  params: Promise<{ blogId: string }>;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    blogId: blog.id,
  }));
}

export async function generateMetadata({
  params,
}: IBlogDetailPageProps): Promise<Metadata> {
  const { blogId } = await params;
  const blog = getBlogById(blogId);

  if (!blog) {
    return {
      title: "Blog Post Not Found",
    };
  }

  const description = blog.excerpt || "";

  // Extract categories/tags from the blog category
  const keywords = [
    blog.category,
    "Xponent InfoSystem",
    "software development",
    "technology blog",
    "tech insights",
    "IT solutions",
    "digital transformation",
  ];

  // Add category-specific keywords
  if (blog.category === "AI & Automation") {
    keywords.push(
      "artificial intelligence",
      "automation",
      "AI in business",
      "machine learning",
    );
  } else if (blog.category === "Software Development") {
    keywords.push(
      "software engineering",
      "coding",
      "development best practices",
      "programming",
    );
  } else if (blog.category === "Security") {
    keywords.push(
      "cybersecurity",
      "data protection",
      "application security",
      "security best practices",
    );
  } else if (blog.category === "Business Strategy") {
    keywords.push(
      "business technology",
      "IT strategy",
      "software solutions",
      "business software",
    );
  } else if (blog.category === "Digital Transformation") {
    keywords.push(
      "digital innovation",
      "business transformation",
      "technology adoption",
      "modernization",
    );
  }

  return {
    title: `${blog.title} | Xponent InfoSystem Blog`,
    description: description.substring(0, 160),
    keywords,
    authors: [{ name: blog.author }],
    openGraph: {
      title: `${blog.title} | Xponent InfoSystem Blog`,
      description,
      url: `https://www.xponent.com.bd/blog/${blogId}`,
      type: "article",
      locale: "en_US",
      siteName: "Xponent InfoSystem",
      publishedTime: blog.date,
      authors: [blog.author],
      tags: [blog.category],
      images: [
        {
          url: `/images/blog/${blogId}-og.jpg`, // You can use a fallback if image doesn't exist
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | Xponent InfoSystem`,
      description,
      images: [`/images/blog/${blogId}-og.jpg`],
      creator: `@${blog.author.replace(/\s+/g, "")}`, // Optional: if you have Twitter handles
    },
    alternates: {
      canonical: `https://www.xponent.com.bd/blog/${blogId}`,
    },
  };
}

export default async function BlogDetailPage({ params }: IBlogDetailPageProps) {
  const { blogId } = await params;
  const blog = getBlogById(blogId);

  if (!blog) {
    notFound();
  }

  return <BlogTemplate blog={blog} />;
}
