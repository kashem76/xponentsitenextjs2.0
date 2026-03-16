import BlogTemplate from "@/components/blog/blogId/blog-template";
import { getAllBlogs, getBlogById } from "@/lib/utils/get-blog-by-id";
import { notFound } from "next/navigation";

interface IBlogDetailPageProps {
  params: Promise<{ blogId: string }>;
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({
    id: blog.id,
  }));
}

export async function generateMetadata({ params }: IBlogDetailPageProps) {
  const { blogId } = await params;
  const blog = getBlogById(blogId);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${blog.title} | Xponent Blog`,
    description: blog.excerpt,
  };
}

export default async function BlogDetailPage({ params }: IBlogDetailPageProps) {
  const { blogId } = await params;
  console.log(blogId);
  const blog = getBlogById(blogId);

  if (!blog) {
    notFound();
  }

  return <BlogTemplate blog={blog} />;
}
