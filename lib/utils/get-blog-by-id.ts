import blogsData from "@/lib/data/blogs.json";
import { IBlog, IBlogsData } from "@/lib/types/blog.types";

// Type assertion for JSON data
const typedBlogsData = blogsData as IBlogsData;

export function getBlogById(id: string): IBlog | undefined {
  return typedBlogsData.blogs.find((blog) => blog.id === id);
}

export function getAllBlogs(): IBlog[] {
  return typedBlogsData.blogs;
}
