// lib/envs.ts
export const envs = {
  NODE_ENV:
    (process.env.NODE_ENV as "development" | "test" | "production") ||
    "development",

  NEXT_PUBLIC_BASE_URL:
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
} as const;

export type Envs = typeof envs;
