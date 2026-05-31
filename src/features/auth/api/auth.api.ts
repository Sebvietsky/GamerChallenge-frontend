import { LoginPayload, RegisterPayload, User } from "../types/auth.type";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function loginUser(payload: LoginPayload) {
  //TODO A verifier route pour login
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const contentType = response.headers.get("content-type");

    if (contentType?.includes("application/json")) {
      const error = await response.json();
      throw new Error(error.message ?? "Erreur de connexion");
    }

    throw new Error(`Erreur ${response.status} : ${response.statusText}`);
  }

  return response.json();
}

export async function registerUser(payload: RegisterPayload): Promise<User> {
  const { profilPicture: _profilPicture, ...jsonPayload } = payload;

  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(jsonPayload),
  });

  if (!response.ok) {
    const contentType = response.headers.get("content-type");
    if (contentType?.includes("application/json")) {
      const error = await response.json();
      throw new Error(error.message ?? messageFromStatus(response.status));
    }
    throw new Error(messageFromStatus(response.status));
  }

  return response.json();
}

export async function logoutUser() {
  await fetch(`${API_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });
}

// Fonction pour envoyer un message selon le status code Http
function messageFromStatus(status: number): string {
  switch (status) {
    case 400:
      return "Données invalides";
    case 401:
      return "Email ou mot de passe incorrect";
    case 409:
      return "Cet email est déjà utilisé";
    case 500:
      return "Erreur serveur, réessayez plus tard";
    default:
      return "Une erreur est survenue";
  }
}
