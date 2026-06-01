import "dotenv/config";
import { LoginPayload, RegisterPayload, AuthResponse } from "../types/auth.type";

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function loginUser(payload: LoginPayload) {
  //TODO A verifier route pour login
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify( payload ),
  })

  if (!response.ok) {
    
    const contentType = response.headers.get("content-type")

    if (contentType?.includes("application/json")) {
      const error = await response.json()
      throw new Error(error.message ?? "Erreur de connexion")
    }

    throw new Error(`Erreur ${response.status} : ${response.statusText}`)
  }

  return response.json()
}

export async function register(payload: RegisterPayload ): Promise<AuthResponse> {

  const formData = new FormData()
  // Ajoute chaque champ clé:valeur au formData
  formData.append("username", payload.username);
  formData.append("email", payload.email);
  formData.append("password", payload.password);
  formData.append("confirm", payload.confirm);
  formData.append("country", payload.country);
  // Ajoute seulement si présent dans le payload
  if (payload.bio) formData.append("bio", payload.bio);
  // if (payload.profilPicture) formData.append("profilPicture", payload.profilPicture);
  const json = JSON.stringify(Object.fromEntries(formData.entries()));
  // TODO console.log
  for (const [key, value] of formData.entries()) {
  console.log(key, value);
}

  console.log(json)

  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "include",
    body: json,
  })

  if(!response.ok) {
    const error = await response.json();
    console.log(error);
    throw new Error(JSON.stringify(error));
    // const contentType = response.headers.get("content-type");
    // if (contentType?.includes("application/json")) {
    //   const error = await response.json()
    //   throw new Error(error.message ?? messageFromStatus(response.status))
    // }
    // throw new Error(messageFromStatus(response.status))
  }

  return response.json()
}

// Fonction pour envoyer un message selon le status code Http
function messageFromStatus(status: number): string {
  switch (status) {
    case 400: return "Données invalides"
    case 401: return "Email ou mot de passe incorrect"
    case 409: return "Cet email est déjà utilisé"
    case 500: return "Erreur serveur, réessayez plus tard"
    default:  return "Une erreur est survenue"
  }
}