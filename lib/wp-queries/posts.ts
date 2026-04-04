// lib/wp-queries/posts.ts
import {
  IBlogPost,
  IBlogPostGQL,
  IBlogPreviewData,
  IPostAndMorePostsResponse,
  IPostsByAuthorResponse,
  ITotalPostsByCategoryResponse,
} from "@/lib/types/wp-queries";
import { sortObjectsByDate } from "@/lib/wp-queries/datetime";
import fetchAPI from "@/lib/wp-queries/fetch-api";

const postsPerPage = 10;

//without pagination
// export async function getAllPosts() {
//   const data: {
//     posts: {
//       edges: {
//         node: IBlogPostGQL;
//       }[];
//     };
//   } = await fetchAPI(
//     `
//     query AllPosts {
//     posts(first: 10000) {
//       edges {
//         node {
//           author {
//             node {
//               avatar {
//                 height
//                 url
//                 width
//               }
//               id
//               name
//               slug
//             }
//           }
//           id
//           categories {
//             edges {
//               node {
//                 databaseId
//                 id
//                 name
//                 slug
//               }
//             }
//           }
//           content
//           date
//           excerpt
//           featuredImage {
//             node {
//               altText
//               caption
//               sourceUrl
//               srcSet
//               sizes
//               id
//             }
//           }
//           modified
//           databaseId
//           title
//           slug
//           isSticky
//         }
//       }
//     }
//   },

// `
//   );

//   const posts = data.posts.edges.map(({ node }) => mapPostData(node));

//   return {
//     posts,
//     revalidate: 3600,
//   };
// }

// With pagination
export async function getAllPosts(perPage = postsPerPage, offset: number = 0) {
  const data: {
    posts: {
      edges: {
        node: IBlogPostGQL;
      }[];
      pageInfo: {
        offsetPagination: {
          total: number;
        };
      };
    };
  } = await fetchAPI(
    `
    query AllPosts($perPage: Int!, $offset: Int!) {
      posts(where: {offsetPagination: {size: $perPage, offset: $offset}}) {
        edges {
          node {
            author {
              node {
                avatar {
                  height
                  url
                  width
                }
                id
                name
                slug
              }
            }
            id
            categories {
              edges {
                node {
                  databaseId
                  id
                  name
                  slug
                  count
                }
              }
            }
            date
            excerpt
            featuredImage {
              node {
                altText
                caption
                sourceUrl
                srcSet
                sizes
                id
              }
            }
            modified
            databaseId
            title
            slug
            isSticky
          }
        }
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
        perPage,
        offset,
      },
    },
  );

  const posts = data.posts.edges.map(({ node }) => mapPostData(node));
  const total = data.posts.pageInfo.offsetPagination.total;

  return {
    posts,
    total, // Total posts count
    totalPages: Math.ceil(total / perPage), // Total pages
    currentPage: Math.floor(offset / perPage) + 1,
    revalidate: 3600,
  };
}

/**
 * postPathBySlug
 */

export function postPathBySlug(slug: string) {
  return `/blog/${slug}`;
}

/**
 * getPostBySlug
 */

export async function getPostBySlug(slug: string) {
  const postData = await fetchAPI(
    `
query PostSEOBySlug($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    id
    content
    date
    excerpt
    featuredImage {
      node {
        sourceUrl
      }
    }
    title
    author {
      node {
        firstName
        avatar {
          url
        }
      }
    }
  }
}
      `,

    {
      variables: {
        slug: slug,
      },
    },
  );

  // const post = [postData?.data.post].map(mapPostData)[0];
  return postData;
}

/**
 * getPostsByAuthorSlug
 */

export async function getPostsByAuthorSlug(slug: string) {
  let postData: IPostsByAuthorResponse;
  try {
    postData = await fetchAPI(
      `
        query PostByAuthorSlug($slug: String!) {
          posts(where: { authorName: $slug }) {
            edges {
        node {
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          id
          categories {
            edges {
              node {
                databaseId
                id
                name
                slug
              }
            }
          }
          content
          date
          excerpt
          featuredImage {
            node {
              altText
              caption
              sourceUrl
              srcSet
              sizes
              id
            }
          }
          modified
          databaseId
          title
          slug
          isSticky
        }
      }
        }
      }
    `,
      {
        variables: {
          slug,
        },
      },
    );
  } catch (e: any) {
    throw e;
  }
  const posts = postData.posts.edges.map(({ node }) => mapPostData(node));
  return {
    posts,
    revalidate: 3600,
  };
}

export async function getPostsByCategoryId(
  categoryId: number,
  perPage = 10,
  offset: number = 0,
) {
  const data: {
    posts: {
      edges: {
        node: IBlogPostGQL;
      }[];
    };
  } = await fetchAPI(
    `
      query PostsByCategoryId($categoryId: Int!, $perPage: Int!, $offset: Int!) {
      posts(
        where: {offsetPagination: {size: $perPage, offset: $offset}, categoryId: $categoryId}
      ) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              edges {
                node {
                  databaseId
                  id
                  name
                  slug
                }
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
            seo {
              title
              metaDesc
            }
          }
        }
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
        perPage,
        offset,
      },
    },
  );

  const posts = data.posts.edges.map(({ node }) => mapPostData(node));

  return {
    posts,
    revalidate: 3600,
  };
}

/**
 * getTotalPostByCategoryId
 * @param {*} param0
 * @returns
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
 * getRecentPosts
 */

export async function getRecentPosts({ count }: { count: number }) {
  const { posts } = await getAllPosts(count, 0);
  const sorted = sortObjectsByDate(posts);
  return {
    posts: sorted.slice(0, count),
    revalidate: 3600,
  };
}

/**
 * sanitizeExcerpt
 */

export function sanitizeExcerpt(excerpt: string) {
  if (typeof excerpt !== "string") {
    throw new Error(
      `Failed to sanitize excerpt: invalid type ${typeof excerpt}`,
    );
  }

  let sanitized = excerpt;

  // If the theme includes [...] as the more indication, clean it up to just ...

  sanitized = sanitized.replace(/\s?\[&hellip;\]/, "&hellip;");

  // If after the above replacement, the ellipsis includes 4 dots, it's
  // the end of a setence

  sanitized = sanitized.replace("....", ".");
  sanitized = sanitized.replace(".&hellip;", ".");

  // If the theme is including a "Continue..." link, remove it

  sanitized = sanitized.replace(/\w*<a class="more-link".*<\/a>/, "");

  return sanitized;
}

/**
 * updateUserAvatar
 */

export function updateUserAvatar(avatar: any) {
  // The URL by default that comes from Gravatar / WordPress is not a secure
  // URL. This ends up redirecting to https, but it gives mixed content warnings
  // as the HTML shows it as http. Replace the url to avoid those warnings
  // and provide a secure URL by default

  return {
    ...avatar,
    url: avatar.url?.replace("http://", "https://"),
  };
}

/**
 * mapPostData
 */
export function mapPostData(post: IBlogPostGQL): IBlogPost {
  const data: IBlogPost = {
    id: post.id,
    databaseId: post.databaseId,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt ?? null,
    content: post.content ?? null,
    date: post.date ?? null,
    modified: post.modified ?? null,
    isSticky: post.isSticky ?? false,
  };

  // ✅ Flatten author.node
  if (post.author?.node) {
    data.author = {
      ...post.author.node,
    };

    if (data.author.avatar) {
      data.author.avatar = updateUserAvatar(data.author.avatar);
    }
  }

  // ✅ Flatten categories.edges[].node
  if (post.categories?.edges?.length) {
    data.categories = post.categories.edges.map(({ node }) => ({
      ...node,
    }));
  }

  // ✅ Flatten featuredImage.node
  if (post.featuredImage?.node) {
    data.featuredImage = post.featuredImage.node;
  }

  return data;
}

/**
 * getRelatedPosts
 */

export async function getRelatedPosts(
  category: { databaseId: number },
  postId: number,
  count = 5,
) {
  let relatedPosts: Pick<IBlogPost, "title" | "slug">[] = [];
  if (category) {
    const { posts } = await getPostsByCategoryId(category.databaseId);
    const filtered = posts.filter(({ postId: id }) => id !== postId);
    const sorted = sortObjectsByDate(filtered);
    relatedPosts = sorted.map((post) => ({
      title: post.title,
      slug: post.slug,
    }));
  }

  if (relatedPosts.length > count) {
    return relatedPosts.slice(0, count);
  }
  return relatedPosts;
}

/**
 * sortStickyPosts
 */

export function sortStickyPosts(posts: IBlogPost[]) {
  return [...posts].sort((post) => (post.isSticky ? -1 : 1));
}

export async function getAllPostsWithSlug() {
  const data: { posts: IBlogPost[] } = await fetchAPI(
    `
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `,
  );
  return data?.posts;
}

export async function getAllPostsForHome(preview: boolean) {
  const data: {
    posts: {
      edges: {
        node: IBlogPostGQL;
      }[];
    };
  } = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
                edges {
                  node {
                    databaseId
                    id
                    name
                    slug
                  }
                }
              }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    },
  );

  // const posts = data.posts.edges.map(({ node = {} }) => node);

  // return {
  //   posts: Array.isArray(posts) && posts.map(mapPostData),
  // };
  const posts = data.posts.edges.map(({ node }) => mapPostData(node));

  return {
    posts,
  };
}

export async function getPostAndMorePosts(
  slug: string,
  preview: boolean,
  previewData?: IBlogPreviewData,
): Promise<IPostAndMorePostsResponse> {
  const postPreview = preview ? previewData?.post : null;

  // The slug may be the ID of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = postPreview
    ? isId
      ? Number(slug) === postPreview.databaseId
      : slug === postPreview.slug
    : false;

  const isDraft = isSamePost && postPreview?.status === "draft";
  const isRevision = isSamePost && postPreview?.status === "publish";

  const data: IPostAndMorePostsResponse = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      description
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      seo {
          title
          metaDesc
        }
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
            slug
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ""
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview?.databaseId : slug,
        idType: isDraft ? "DATABASE_ID" : "SLUG",
      },
    },
  );

  // Draft posts may not have a slug
  if (isDraft && postPreview) {
    data.post.slug = String(postPreview.databaseId);
  }

  // Apply revision if exists
  if (isRevision && data.post.revisions?.edges?.length) {
    const revision = data.post.revisions.edges[0]?.node;
    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  }

  // Remove current post from related posts
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug);

  // Keep only 2 related posts
  if (data.posts.edges.length > 2) data.posts.edges.pop();

  return data;
}

/**
 * getPageCount
 */

export async function getPagesCount(posts: IBlogPost[], postsPerPage: number) {
  // Todo:  comment it because getPostsPerPage is not exist
  // const _postsPerPage = postsPerPage ?? (await getPostsPerPage());
  // const _postsPerPage = postsPerPage;
  const _postsPerPage = postsPerPage ?? postsPerPage;
  return Math.ceil(posts.length / _postsPerPage);
}

/**
 * getPaginatedPosts
 */

export async function getPaginatedPosts({ currentPage = 1 } = {}) {
  const { posts } = await getAllPosts();

  const pagesCount = await getPagesCount(posts, postsPerPage);

  let page = Number(currentPage);

  if (typeof page === "undefined" || isNaN(page)) {
    page = 1;
  } else if (page > pagesCount) {
    return {
      posts: [],
      pagination: {
        currentPage: undefined,
        pagesCount,
      },
    };
  }

  const offset = postsPerPage * (page - 1);
  const sortedPosts = sortStickyPosts(posts);
  return {
    posts: sortedPosts.slice(offset, offset + postsPerPage),
    pagination: {
      currentPage: page,
      pagesCount,
    },
    revalidate: 3600,
  };
}
