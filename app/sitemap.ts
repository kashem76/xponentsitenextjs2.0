// app/sitemap.ts
import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/wp-queries/posts";
import { getAllCategories } from "@/lib/wp-queries/categories";
import {
  PER_PAGE_FIRST,
  PER_PAGE_REST,
  totalPagesCount,
} from "@/lib/wp-queries/pagination";
import { getAllProducts } from "@/lib/utils/products/get-product-by-id";
import { getAllServices } from "@/lib/utils/services/get-service-by-id";
import careersData from "@/lib/data/careers.json";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.xponent.com.bd";

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/services",
    "/products",
    "/blog",
    "/blog/categories",
    "/careers",
    "/contact",
    "/privacy-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // ============================================
  // WordPress Blog Posts
  // ============================================
  let blogPages: MetadataRoute.Sitemap = [];
  let blogPaginationPages: MetadataRoute.Sitemap = [];
  let categoryPages: MetadataRoute.Sitemap = [];
  let categoryPaginationPages: MetadataRoute.Sitemap = [];

  try {
    // Fetch all posts (with a high limit to get total count)
    const { posts, total } = await getAllPosts(10000, 0);

    // Individual blog post pages
    blogPages = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.modified
        ? new Date(post.modified)
        : post.date
          ? new Date(post.date)
          : new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

    // Blog pagination pages (page 2 onwards)
    const blogPagesCount = totalPagesCount(total);
    if (blogPagesCount > 1) {
      blogPaginationPages = Array.from(
        { length: blogPagesCount - 1 },
        (_, i) => ({
          url: `${baseUrl}/blog/page/${i + 2}`,
          lastModified: new Date(),
          changeFrequency: "weekly" as const,
          priority: 0.5,
        }),
      );
    }
  } catch (error) {
    console.error("Error fetching blog posts for sitemap:", error);
  }

  // ============================================
  // WordPress Categories
  // ============================================
  try {
    const { categories } = await getAllCategories();

    // Individual category pages
    categoryPages = categories.map((category) => ({
      url: `${baseUrl}/blog/categories/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }));

    // Category pagination pages (page 2 onwards for each category)
    for (const category of categories) {
      const categoryPostsCount = category.count || 0;
      const categoryPagesCount = totalPagesCount(categoryPostsCount);

      if (categoryPagesCount > 1) {
        const paginationPages = Array.from(
          { length: categoryPagesCount - 1 },
          (_, i) => ({
            url: `${baseUrl}/blog/categories/${category.slug}/page/${i + 2}`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.4,
          }),
        );
        categoryPaginationPages.push(...paginationPages);
      }
    }
  } catch (error) {
    console.error("Error fetching categories for sitemap:", error);
  }

  // ============================================
  // Dynamic Products
  // ============================================
  const products = getAllProducts();
  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ============================================
  // Dynamic Services
  // ============================================
  const services = getAllServices();
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ============================================
  // Dynamic Careers
  // ============================================
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
    ...blogPaginationPages,
    ...categoryPages,
    ...categoryPaginationPages,
    ...productPages,
    ...servicePages,
    ...careerPages,
  ];
}
