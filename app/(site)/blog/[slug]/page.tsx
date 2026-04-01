// app/(site)/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAllPosts, getPostAndMorePosts } from "@/lib/wp-queries/posts";
import BlogTemplate from "@/components/blog/blogId/blog-template";

interface IBlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600; // 1 hour

export async function generateStaticParams() {
  const { posts } = await getAllPosts(99999, 0);

  return posts
    .filter((post) => post.slug)
    .map((post) => ({
      slug: post.slug,
    }));
}

export async function generateMetadata({
  params,
}: IBlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const data = await getPostAndMorePosts(slug, false);
    const post = data?.post;

    if (!post) {
      return {
        title: "Blog Post Not Found | Xponent InfoSystem",
      };
    }

    const description =
      post.seo?.metaDesc ||
      post.excerpt?.replace(/<[^>]*>/g, "").substring(0, 160) ||
      "";

    // Get category name
    const category = post.categories?.edges?.[0]?.node?.name || "Technology";

    // Build keywords based on category and tags
    const keywords = [
      category,
      "Xponent InfoSystem",
      "software development",
      "technology blog",
      "tech insights",
      "IT solutions",
      "digital transformation",
    ];

    // Add tag keywords
    if (post.tags?.edges) {
      post.tags.edges.forEach(({ node }) => {
        if (node.name) keywords.push(node.name);
      });
    }

    const authorName =
      post.author?.node?.name || post.author?.node?.name || "Xponent Team";

    return {
      title: post.seo?.title || `${post.title} | Xponent InfoSystem Blog`,
      description,
      keywords,
      authors: [{ name: authorName }],
      openGraph: {
        title: post.seo?.title || `${post.title} | Xponent InfoSystem Blog`,
        description,
        url: `https://www.xponent.com.bd/blog/${slug}`,
        type: "article",
        locale: "en_US",
        siteName: "Xponent InfoSystem",
        publishedTime: post.date,
        authors: [authorName],
        tags: post.categories?.edges?.map(({ node }) => node.name) || [],
        images: post.featuredImage?.node?.sourceUrl
          ? [
              {
                url: post.featuredImage.node.sourceUrl,
                width: 1200,
                height: 630,
                alt: post.title,
              },
            ]
          : [],
      },
      twitter: {
        card: "summary_large_image",
        title: post.seo?.title || `${post.title} | Xponent InfoSystem`,
        description,
        images: post.featuredImage?.node?.sourceUrl
          ? [post.featuredImage.node.sourceUrl]
          : [],
      },
      alternates: {
        canonical: `https://www.xponent.com.bd/blog/${slug}`,
      },
    };
  } catch {
    return {
      title: "Blog Post Not Found | Xponent InfoSystem",
    };
  }
}

export default async function BlogDetailPage({ params }: IBlogDetailPageProps) {
  const { slug } = await params;

  try {
    const data = await getPostAndMorePosts(slug, false);

    if (!data?.post?.title) {
      notFound();
    }

    return <BlogTemplate post={data.post} relatedPosts={data.posts.edges} />;
  } catch {
    notFound();
  }
}
