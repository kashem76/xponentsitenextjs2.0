// app/sitemap.ts
import { MetadataRoute } from "next";
import { getAllBlogs } from "@/lib/utils/blog/get-blog-by-id";
import { getAllProducts } from "@/lib/utils/products/get-product-by-id";
import { getAllServices } from "@/lib/utils/services/get-service-by-id";
import careersData from "@/lib/data/careers.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.xponent.com.bd";

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/services",
    "/products",
    "/blog",
    "/careers",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Dynamic blog posts - using the 'date' field from your blog data
  const blogs = getAllBlogs();
  const blogPages = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.id}`,
    lastModified: new Date(blog.date), // Using 'date' instead of 'publishedDate'
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamic products
  const products = getAllProducts();
  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic services
  const services = getAllServices();
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Dynamic careers
  const careerPages = careersData.careers
    .filter((career) => career.isOpen)
    .map((career) => ({
      url: `${baseUrl}/careers/${career.id}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

  return [
    ...staticPages,
    ...blogPages,
    ...productPages,
    ...servicePages,
    ...careerPages,
  ];
}
