// lib/envs.ts
export const envs = {
  NODE_ENV:
    (process.env.NODE_ENV as "development" | "test" | "production") ||
    "development",

  NEXT_PUBLIC_APP_URL:
    process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",

  WORDPRESS_GRAPHQL_ENDPOINT:
    process.env.WORDPRESS_GRAPHQL_ENDPOINT ||
    "https://outreachful.allwpblogbackends.com/graphql",

  WORDPRESS_PLUGIN_SEO: process.env.WORDPRESS_PLUGIN_SEO === "true",
} as const;

export type Envs = typeof envs;
