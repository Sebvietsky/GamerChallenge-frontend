import "dotenv/config";
import { API_URL } from "@/lib/api";
import {
  LoginPayload,
  RegisterPayload,
  AuthResponse,
} from "../types/auth.type";

async function getErrorMessage(response: Response): Promise<string> {
  const contentType = response.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    try {
      const error = await response.json();
      return error?.message ?? messageFromStatus(response.status);
    } catch {
      return messageFromStatus(response.status);
    }
  }
  return messageFromStatus(response.status);
}

export async function loginUser(payload: LoginPayload) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(await getErrorMessage(response));
  }

  const user = await fetch(`${API_URL}/auth/me`, {
    method: "GET",
    credentials: "include",
  });

  if (!user.ok) {
    throw new Error(
      "Impossible de récupérer les informations de l'utilisateur",
    );
  }

  return user.json();
}

export async function register(
  payload: RegisterPayload,
): Promise<AuthResponse> {
  const formData = new FormData();
  // Ajoute chaque champ clé:valeur au formData
  formData.append("username", payload.username);
  formData.append("email", payload.email);
  formData.append("password", payload.password);
  formData.append("confirm", payload.confirm);
  formData.append("country", payload.country);
  const json = JSON.stringify(Object.fromEntries(formData.entries()));

  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: json,
  });

  if (!response.ok) {
    throw new Error(await getErrorMessage(response));
  }

  return response.json();
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
