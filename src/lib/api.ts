export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_SERVER_URL =
  process.env.NEXT_PUBLIC_API_SERVER_URL ?? process.env.NEXT_PUBLIC_API_URL;

export const API_BASE_URL =
  typeof window === "undefined" ? API_SERVER_URL : API_URL;
