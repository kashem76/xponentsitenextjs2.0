// lib/types/wp-queries.ts
// ==============================
// Common Utility Types
// ==============================

export type TID = string;
export type TISODate = string;

// ==============================
// Image Type (Global / Reusable)
// ==============================

export interface IImageData {
  url: string;
  width: number | null;
  height: number | null;
  altText: string | null;
}

// ==============================
// SEO
// ==============================

export interface IPostSEO {
  title: string;
  metaDesc: string;
}

// ==============================
// Author (Frontend Model)
// ==============================

export interface IAuthor {
  id: TID;
  name: string;
  slug: string;
  avatar: IImageData;
  description: string;
}

// ==============================
// Category (Frontend Model)
// ==============================

export interface ICategory {
  id: TID;
  databaseId: number;
  name: string;
  slug: string;
  description: string | null;
  count?: number;

  title: string;
  canonical: string;
  og?: {
    author?: string;
    description?: string;
    image?: any;
    modifiedTime?: string;
    publishedTime?: string;
    publisher?: string;
    title?: string;
    type?: string;
  };

  article?: {
    author?: string;
    modifiedTime?: string;
    publishedTime?: string;
    publisher?: string;
  };

  robots?: {
    nofollow?: string;
    noindex?: string;
  };

  twitter?: {
    title?: string;
    description?: string;
    image?: any;
  };
}

// ==============================
// Tag (Frontend Model)
// ==============================

export interface ITag {
  id?: TID;
  name: string;
  slug?: string;
}

// ==============================
// Featured Image (Frontend Model)
// ==============================

export interface IFeaturedImage {
  id?: TID | null;
  sourceUrl: string;
  altText: string | null;
  caption: string | null;
  srcSet: string | null;
  sizes: string | null;
}

// ==============================
// ✅ Main Blog Post (Frontend Clean Model)
// ==============================

export interface IBlogPost {
  id: TID;
  databaseId?: number;

  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;

  date: TISODate | null;
  modified: TISODate | null;

  isSticky: boolean;

  seo?: IPostSEO;

  author?: IAuthor | null;
  categories?: ICategory[];
  tags?: ITag[];

  featuredImage?: IFeaturedImage | null;

  status?: "draft" | "publish";

  // Safe future extension
  [key: string]: unknown;
}
// ==============================
// GraphQL Author
// ==============================

export interface IBlogAuthorGQL {
  node: IAuthor;
}

// ==============================
// GraphQL Category
// ==============================

export interface IBlogCategoryEdge {
  node: ICategory;
}

export interface IBlogCategoryConnection {
  edges: IBlogCategoryEdge[];
}

// ==============================
// GraphQL Tag
// ==============================

export interface IBlogTagEdge {
  node: ITag;
}

export interface IBlogTagConnection {
  edges: IBlogTagEdge[];
}

// ==============================
// GraphQL Featured Image
// ==============================

export interface IBlogFeaturedImageGQL {
  node: IFeaturedImage;
}

// ==============================
// GraphQL Post Revision
// ==============================

export interface IBlogPostRevisionEdge {
  node: Partial<IBlogPost>;
}

// ==============================
// ✅ GraphQL RAW Blog Post
// ==============================

export interface IBlogPostGQL {
  id: TID;
  databaseId: number;

  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;

  date: TISODate;
  modified: TISODate;
  isSticky: boolean;

  status?: "draft" | "publish";

  seo?: IPostSEO;

  author: IBlogAuthorGQL | null;

  categories: IBlogCategoryConnection | null;
  tags?: IBlogTagConnection | null;

  featuredImage: IBlogFeaturedImageGQL | null;

  revisions?: {
    edges: IBlogPostRevisionEdge[];
  };
}

export interface IBlogPostSingleGQL {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  content: string;
  seo: IPostSEO;

  featuredImage?: IBlogFeaturedImageGQL;
  author: IBlogAuthorGQL;

  categories?: {
    edges: IBlogCategoryEdge[];
  };

  tags: {
    edges: IBlogTagEdge[];
  };

  revisions?: {
    edges: IBlogPostRevisionEdge[];
  };

  status?: "draft" | "publish";
}

export interface IBlogPreviewData {
  post: IBlogPostGQL;
}
export interface IPostAndMorePostsResponse {
  post: IBlogPostSingleGQL;
  posts: {
    edges: {
      node: IBlogPostSingleGQL;
    }[];
  };
}
export interface ICategoryGQL {
  categories: {
    edges: {
      node: ICategory;
    }[];
  };
}
export interface IGetCategoriesParams {
  count?: number;
}
export interface ISEOResponseGQL {
  canonical: string;
  metaDesc: string;
  metaRobotsNofollow: string;
  metaRobotsNoindex: string;
  opengraphAuthor: string;
  opengraphDescription: string;
  opengraphModifiedTime: string;
  opengraphPublishedTime: string;
  opengraphPublisher: string;
  opengraphTitle: string;
  opengraphType: string;
  title: string;
  twitterDescription: string;
  twitterTitle: string;
  twitterImage: string | null;
  opengraphImage: string | null;
}
export interface ITotalPostsByCategoryResponse {
  posts: {
    pageInfo: {
      offsetPagination: {
        total: number;
      };
    };
  };
}
export interface IPostsByAuthorResponse {
  posts: {
    edges: {
      node: IBlogPostGQL;
    }[];
  };
}
