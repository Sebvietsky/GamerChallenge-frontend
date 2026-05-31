"use client";

import { registerUser } from "../api/auth.api";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const schema = z
  .object({
    username: z
      .string()
      .min(2, "2 caractères minimum")
      .max(20, "20 caractères maximum")
      .regex(/^[a-zA-Z0-9_-]+$/, "Lettres, chiffres, - et _ uniquement"),

    email: z.string().email("Email invalide"),

    password: z
      .string()
      .min(8, "8 caractères minimum")
      .regex(/[A-Z]/, "Au moins une majuscule")
      .regex(/[0-9]/, "Au moins un chiffre")
      .regex(/[^a-zA-Z0-9]/, "Au moins un caractère spécial (!@#$%...)"),

    confirm: z.string().min(1, "Veuillez confirmer votre mot de passe"),

    country: z.string().min(1, "Veuillez choisir un pays"),

    bio: z.string().max(500, "500 caractères maximum").optional(),

    profilPicture: z.instanceof(File).optional(),
  })
  .refine((d) => d.password === d.confirm, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirm"],
  });

// Type RegistrationForm grâce au z.infer
type RegisterForm = z.infer<typeof schema>;

export function useRegister() {
  const router = useRouter();
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: RegisterForm) {
    setError(null);
    try {
      await registerUser(data);
      await login({ email: data.email, password: data.password });
      router.push("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    }
  }

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    control,
    setValue,
    watch,
    errors,
    isSubmitting,
    error,
  };
}
