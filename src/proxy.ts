import { NextResponse, type NextRequest } from "next/server";

// URL du backend joignable depuis le serveur Next (réseau Docker en dev),
// avec repli sur l'URL publique quand les deux tournent sur la même machine.
const API_SERVER_URL =
  process.env.NEXT_PUBLIC_API_SERVER_URL ?? process.env.NEXT_PUBLIC_API_URL;

// Cookies posés par le backend et que le proxy doit répercuter sur la
// requête transmise au rendu, pour que les Server Components voient la
// session rafraîchie dès cette navigation (et pas seulement à la suivante).
const SESSION_COOKIES = ["accessToken", "refreshToken", "isAuthenticated"];

// Rafraîchit la session pendant une navigation.
// (convention Next 16 : proxy.ts remplace middleware.ts)
//
// Pourquoi ici et pas dans les Server Components : un Server Component ne peut
// pas écrire de cookie pendant le rendu (cookies().set() y est interdit). Sans
// ce proxy, dès que l'access token expire (15 min), tout appel serveur
// vers une route protégée prend un 401 sans recours : getMe() renvoie null et
// l'utilisateur est redirigé vers le login alors que son refresh token est
// encore valide 7 jours. Le proxy, lui, écrit sur la réponse.
//
// Côté client, fetchWithAuth (src/lib/api.ts) gère déjà le même cas sur 401.
export async function proxy(request: NextRequest) {
  const hasAccessToken = request.cookies.has("accessToken");
  const hasRefreshToken = request.cookies.has("refreshToken");

  // Session valide, ou pas de session du tout : rien à faire.
  if (hasAccessToken || !hasRefreshToken) return NextResponse.next();

  let refreshResponse: Response;
  try {
    refreshResponse = await fetch(`${API_SERVER_URL}/auth/refresh`, {
      method: "POST",
      headers: { Cookie: request.headers.get("cookie") ?? "" },
      cache: "no-store",
    });
  } catch {
    // Backend injoignable : on laisse passer, le rendu dégradera de lui-même.
    return NextResponse.next();
  }

  if (!refreshResponse.ok) {
    // Refresh token invalide ou expiré : on purge les cookies restants pour
    // éviter de retenter ce refresh à chaque navigation.
    const response = NextResponse.next();
    for (const name of SESSION_COOKIES) response.cookies.delete(name);
    return response;
  }

  const setCookies = refreshResponse.headers.getSetCookie();

  // Réinjecte les nouveaux cookies dans la requête transmise au rendu.
  const cookies = new Map(
    request.cookies.getAll().map(({ name, value }) => [name, value]),
  );
  for (const setCookie of setCookies) {
    const [pair] = setCookie.split(";");
    const separator = pair.indexOf("=");
    if (separator === -1) continue;
    cookies.set(pair.slice(0, separator).trim(), pair.slice(separator + 1));
  }

  const headers = new Headers(request.headers);
  headers.set(
    "cookie",
    [...cookies].map(([name, value]) => `${name}=${value}`).join("; "),
  );

  // Et les renvoie au navigateur, sinon la navigation suivante rerefresh.
  const response = NextResponse.next({ request: { headers } });
  for (const setCookie of setCookies) {
    response.headers.append("set-cookie", setCookie);
  }
  return response;
}

export const config = {
  // Toutes les navigations de pages : les Server Components appelant getMe()
  // ne vivent pas seulement sous (connected), les pages publiques de détail
  // et d'édition en dépendent aussi. Le court-circuit en tête de middleware
  // rend le cas « pas de session » quasi gratuit.
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
