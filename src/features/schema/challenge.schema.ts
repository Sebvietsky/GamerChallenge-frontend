import z from "zod";

export const challengeSchema = z.object({
  title: z.string().min(3, "Minimum 3 caractères"),
  description: z.string().min(10, "Minimum 10 caractères").max(500),
  goals: z.string().max(500).optional(),
  hints: z
    .array(
      z.object({
        description: z.string().min(2).max(500),
      }),
    )
    .optional(),
  demo: z.string().url("URL invalide").optional().or(z.literal("")),
  closesAt: z.date().optional(),
  status: z.string().min(1, "Choisir un statut").optional(),
  // igdbId: z
  //   .number({ required_error: "Choisir un jeu" })
  //   .min(1, "Choisir un jeu"),
  challengeCategoryId: z
    .number({ required_error: "Choisir une catégorie" })
    .min(1, "Choisir une catégorie"),
  difficultyId: z
    .number({ required_error: "Choisir une difficulté" })
    .min(1, "Choisir une difficulté"),
});

export type ChallengeFormValues = z.infer<typeof challengeSchema>;
