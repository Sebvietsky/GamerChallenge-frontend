export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const API_SERVER_URL =
  process.env.NEXT_PUBLIC_API_SERVER_URL ?? process.env.NEXT_PUBLIC_API_URL;

export const API_BASE_URL =
  typeof window === "undefined" ? API_SERVER_URL : API_URL;

// Callback enregistrée par AuthContext au montage de l'app.
// Appelée par fetchWithAuth quand la session est définitivement expirée (refresh raté).
let onSessionExpired: (() => void) | null = null;

// Permet à AuthContext d'enregistrer la fonction à appeler en cas d'expiration de session.
// Evite une dépendance circulaire entre lib/api et AuthContext.
export function setSessionExpiredHandler(handler: () => void) {
  onSessionExpired = handler;
}

// Promesse du refresh en cours. null = aucun refresh en vol.
// Garantit qu'un seul POST /auth/refresh part même si plusieurs
// requêtes prennent un 401 en même temps (sinon : course sur la
// rotation du refresh token → déconnexion intempestive).
let refreshPromise: Promise<boolean> | null = null;

// Lance un refresh, ou rejoint celui déjà en cours.
// Retourne true si la session a pu être rafraîchie.
function refreshSession(): Promise<boolean> {
  if (!refreshPromise) {
    refreshPromise = fetch(`${API_BASE_URL}/auth/refresh`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.ok)
      .catch(() => false)
      .finally(() => {
        // Libère le mutex : le prochain 401 déclenchera un nouveau refresh.
        refreshPromise = null;
      });
  }
  return refreshPromise;
}

// Wrapper autour de fetch pour les routes protégées.
// Si la requête retourne 401 (access token expiré), tente un refresh silencieux
// puis rejoue la requête originale. Si le refresh échoue, déclenche onSessionExpired.
export async function fetchWithAuth(
  url: string,
  options?: RequestInit,
): Promise<Response> {
  const res = await fetch(url, { ...options, credentials: "include" });

  if (res.status === 401) {
    const refreshed = await refreshSession();

    if (refreshed) {
      // Nouvel access token posé en cookie, on rejoue la requête originale
      return fetch(url, { ...options, credentials: "include" });
    }

    // Refresh token invalide ou expiré → session définitivement perdue
    onSessionExpired?.();
  }

  return res;
}
