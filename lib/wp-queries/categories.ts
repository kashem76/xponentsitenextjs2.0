// lib/wp-queries/categories.ts
/**
 * categoryPathBySlug
 */

import { envs } from "@/lib/envs";
import {
  ICategory,
  ICategoryGQL,
  IGetCategoriesParams,
  ISEOResponseGQL,
  ITotalPostsByCategoryResponse,
} from "@/lib/types/wp-queries";
import fetchAPI from "@/lib/wp-queries/fetch-api";
import {
  getPageOffset,
  PER_PAGE_FIRST,
  PER_PAGE_REST,
} from "@/lib/wp-queries/pagination";
import { getPostsByCategoryId } from "@/lib/wp-queries/posts";

export function categoryPathBySlug(slug: string) {
  return `blog/categories/${slug}`;
}

/**
 * getAllCategories
 */

export async function getAllCategories(): Promise<{ categories: ICategory[] }> {
  const data: ICategoryGQL = await fetchAPI(`
         query AllCategories {
          categories(first: 10000, where: {hideEmpty: true}) {
                  edges {
                    node {
                      databaseId
                      description
                      id
                      name
                      slug
                      count
                    }
                  }
                }
            }
    
    `);
  const categories = data.categories.edges.map(({ node }) => node);

  return {
    categories,
  };
}

/**
 * getCategoryBySlug
 */

export async function getCategoryBySlug(
  slug: string,
): Promise<{ category: ICategory; revalidate: number }> {
  const apiHost = new URL(envs.WORDPRESS_GRAPHQL_ENDPOINT).host;
  let categoryData: { category: ICategory };
  let seoData: { category: { id: string; seo: ISEOResponseGQL } };

  try {
    categoryData = await fetchAPI(
      `
        query CategoryBySlug($slug: ID!) {
          category(id: $slug, idType: SLUG) {
            databaseId
            description
            id
            name
            slug
            count
          }
      }`,
      {
        variables: {
          slug,
        },
      },
    );
  } catch (e: any) {
    console.log(
      `[categories][getCategoryBySlug] Failed to query category data: ${e.message}`,
    );
    throw e;
  }
  const category: ICategory = mapCategoryData(categoryData.category);

  // If the SEO plugin is enabled, look up the data
  // and apply it to the default settings

  if (!!process.env.WORDPRESS_PLUGIN_SEO === true) {
    try {
      seoData = await fetchAPI(
        `
        query CategorySEOBySlug($slug: ID!) {
          category(id: $slug, idType: SLUG) {
            id
            seo {
              canonical
              metaDesc
              metaRobotsNofollow
              metaRobotsNoindex
              opengraphAuthor
              opengraphDescription
              opengraphModifiedTime
              opengraphPublishedTime
              opengraphPublisher
              opengraphTitle
              opengraphType
              title
              twitterDescription
              twitterTitle
              twitterImage {
                altText
                sourceUrl
                mediaDetails {
                  width
                  height
                }
              }
              opengraphImage {
                altText
                sourceUrl
                mediaDetails {
                  height
                  width
                }
              }
            }
          }
        }

      `,
        {
          variables: { slug }, // ✅ THIS WAS MISSING (MAJOR BUG)
        },
      );
    } catch (e: any) {
      console.log(
        `[categories][getCategoryBySlug] Failed to query SEO plugin: ${e.message}`,
      );
      console.log(
        "Is the SEO Plugin installed? If not, disable WORDPRESS_PLUGIN_SEO in next.config.js.",
      );
      throw e;
    }
    const { seo } = seoData?.category;

    category.title = seo.title;
    category.description = seo.metaDesc;

    // The SEO plugin by default includes a canonical link, but we don't want to use that
    // because it includes the WordPress host, not the site host. We manage the canonical
    // link along with the other metadata, but explicitly check if there's a custom one
    // in here by looking for the API's host in the provided canonical link

    if (seo.canonical && !seo.canonical.includes(apiHost)) {
      category.canonical = seo.canonical;
    }

    category.og = {
      author: seo.opengraphAuthor,
      description: seo.opengraphDescription,
      image: seo.opengraphImage,
      modifiedTime: seo.opengraphModifiedTime,
      publishedTime: seo.opengraphPublishedTime,
      publisher: seo.opengraphPublisher,
      title: seo.opengraphTitle,
      type: seo.opengraphType,
    };

    category.article = {
      author: category.og.author,
      modifiedTime: category.og.modifiedTime,
      publishedTime: category.og.publishedTime,
      publisher: category.og.publisher,
    };

    category.robots = {
      nofollow: seo.metaRobotsNofollow,
      noindex: seo.metaRobotsNoindex,
    };

    category.twitter = {
      description: seo.twitterDescription,
      image: seo.twitterImage,
      title: seo.twitterTitle,
    };
  }

  return {
    category,
    revalidate: 3600,
  };
}

/**
 * getCategories
 */

export async function getCategories({ count }: IGetCategoriesParams = {}) {
  const { categories } = await getAllCategories();

  return {
    categories:
      typeof count === "number" ? categories.slice(0, count) : categories,
    revalidate: 3600,
  };
}

/**
 * mapCategoryData
 */

export function mapCategoryData(category: ICategory) {
  const data = { ...category };
  return data;
}

/**
 * getCategoryStaticPaths
 */

export async function getTotalPostByCategoryId(categoryId: number) {
  const data: ITotalPostsByCategoryResponse = await fetchAPI(
    `
     query totalPostsByCategoryId($categoryId: Int!) {
        posts(where: {categoryId: $categoryId}) {
          pageInfo {
            offsetPagination {
              total
            }
          }
        }
      }

  `,
    {
      variables: {
        categoryId,
      },
    },
  );
  return data?.posts?.pageInfo?.offsetPagination?.total ?? 0;
}

/**
 * getCategoryStaticPaths
 */

export async function getCategoryStaticPaths() {
  try {
    const { categories } = await getAllCategories();
    console.log({ categories });
    const paths = categories.map((category) => {
      const totalPostsCount = category?.count as number;
      const pagesCount = Math.ceil(
        (totalPostsCount - PER_PAGE_FIRST) / PER_PAGE_REST + 1,
      );
      return new Array(pagesCount).fill("").map((_, index) => ({
        params: {
          page: (index + 1).toString(),
          slug: category.slug,
        },
      }));
    });

    return {
      paths: paths.flat(),
      fallback: false,
    };
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
}

/**
 * getCategoryStaticProps
 */

export async function getCategoryStaticProps(params: Record<string, string>) {
  try {
    const { page } = params || {};
    let offset = getPageOffset(Number(page));

    const perPage = page === "1" ? PER_PAGE_FIRST : PER_PAGE_REST;
    if (isNaN(offset)) {
      offset = 1;
    }

    const { categories } = await getAllCategories();

    const { category } = await getCategoryBySlug(params?.slug);

    const { posts } = await getPostsByCategoryId(
      category.databaseId,
      perPage,
      offset,
    );

    return {
      props: {
        category,
        posts,
        categories,
        error: false,
      },
      revalidate: 3600,
    };
  } catch (error) {
    return {
      props: {
        error: true,
      },
    };
  }
}
