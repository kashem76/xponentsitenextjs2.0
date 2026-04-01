// lib/wp-queries/fetch-api.ts
import { envs } from "@/lib/envs";

const API_URL = envs.WORDPRESS_GRAPHQL_ENDPOINT as string;

interface FetchAPIOptions<V = Record<string, unknown>> {
  variables?: V;
}

export interface GraphQLResponse<T> {
  data: T;
  errors?: { message: string }[];
}

export default async function fetchAPI<
  TData = unknown,
  TVariables = Record<string, unknown>,
>(
  query: string,
  { variables }: FetchAPIOptions<TVariables> = {},
): Promise<TData> {
  const headers: HeadersInit = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers["Authorization"] =
      `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  const init: RequestInit & { next?: { revalidate: number } } = {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    // cache: "no-store",
    next: { revalidate: 3600 }, // 1 hour
  };

  const res = await fetch(API_URL, init);

  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
  }

  const jsonResponse = (await res.json()) as GraphQLResponse<TData>;

  if (jsonResponse.errors?.length) {
    throw new Error(jsonResponse.errors[0].message);
  }

  return jsonResponse.data;
}
