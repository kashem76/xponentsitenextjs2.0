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

  // Email service
  RESEND_API_KEY: process.env.RESEND_API_KEY || "",
  ADMIN_EMAIL: process.env.ADMIN_EMAIL || "",

  // Google Sheets integration
  GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID || "",
  GOOGLE_SERVICE_ACCOUNT_EMAIL: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || "",
  GOOGLE_PRIVATE_KEY:
    process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n") || "",

  // Sender.net API
  SENDERDOTNET_API_TOKEN: process.env.SENDERDOTNET_API_TOKEN || "",

  // reCAPTCHA
  NEXT_PUBLIC_reCAPTCHA_SITE_KEY:
    process.env.NEXT_PUBLIC_reCAPTCHA_SITE_KEY || "",
} as const;

export type Envs = typeof envs;
