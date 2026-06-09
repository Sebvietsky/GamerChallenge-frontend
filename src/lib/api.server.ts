// Fichier séparé de api.ts intentionnellement : next/headers est une API server-only
// (App Router). Si getServerAuthHeaders était dans api.ts, AuthContext.tsx ("use client")
// tirerait next/headers dans le bundle client via son import de api.ts, ce qu'interdit Next.js.
import { cookies } from "next/headers";

// Lit les cookies de la requête entrante (Next.js server-side) et les retourne
// sous forme de header Cookie pour les transmettre manuellement au backend.
// Nécessaire dans les Server Components : credentials: "include" est ignoré
// par Node.js, les cookies ne sont pas forwarded automatiquement.
// => nécessaire pour les routes protégées (où le back requière req.user.id)
export async function getServerAuthHeaders(): Promise<HeadersInit> {
  const cookieStore = await cookies();
  return { Cookie: cookieStore.toString() };
}
