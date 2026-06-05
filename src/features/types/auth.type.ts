// Données envoyées à l'API pour l'inscription
export type RegisterPayload = {
  username: string
  email: string
  password: string
  confirm: string
  country: string
  // bio?: string
  // profilPicture?: File
}

// Données envoyées à l'API pour la connexion
export type LoginPayload = {
  email: string
  password: string
}

// Ce que l'API renvoie après connexion/inscription
export type AuthResponse = {
  // token: string
  user: User
}

// L'utilisateur connecté
export type User = {
  userWithoutPassword: {
    id: number;
    username: string;
    email: string;
    role: "admin" | "member" | "moderator";
    status: "active" | "inactive" | "banned";
    bio: string | null;
    country: string | null;
    profilePicture: string | null;
    visibility: boolean;
    createdAt: string;
    updatedAt: string;
    }
  }