import { createChallenge } from "../api/challenge.api";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const createChallengeSchema = z.object({
  title: z.string().min(3, "Minimum 3 caractères"),
  description: z.string().min(10, "Minimum 10 caractères").max(500),
  goals: z.string().max(500).optional(),
  hints: z.string().max(500).optional(),
  demo: z.string().url("URL invalide").optional(),
  closesAt: z.string().optional(), // ou z.date() si tu envoies une date
  status: z.string().min(1, "Choisir un statut"),
  gameId: z.number().min(1, "Choisir un jeu"),          // 👈 number pas string
  challengeCategoryId: z.array(z.number()).min(1, "Choisir une catégorie"), // 👈 idem
  difficultyId: z.number().min(1, "Choisir une difficulté"),  
});

type CreateChallengeFormValues = z.infer<typeof createChallengeSchema>;

export const useCreateChallenge = () => {
  const form = useForm<CreateChallengeFormValues>({
    resolver: zodResolver(createChallengeSchema),
    defaultValues: {
      title: "",
      gameId: 1,
      description: "",
      goals: "",
      difficultyId: 1,
      challengeCategoryId: [],
      hints: "",
    },
  });

  const { watch, setValue, formState: { errors}} = form;
  const categoryId = watch("challengeCategoryId")

  const toggleCategory = (id: number) => {
    if (categoryId.includes(id)) {
      setValue("challengeCategoryId", categoryId.filter(c => c !== id));
    } else {
      setValue("challengeCategoryId", [...categoryId, id]);
    }
  }
  const onSubmit = async (values: CreateChallengeFormValues) => {
    try {
      await createChallenge({
        ...values,
        gameId: String(values.gameId),
        difficultyId: String(values.difficultyId),
        goals: values.goals ?? "",
        hints: values.hints ?? "",
        demo: values.demo ?? "",
        closesAt: values.closesAt ?? "",
      });
      console.log(values);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    form,
    errors,
    categoryId,
    toggleCategory,
    onSubmit: form.handleSubmit(onSubmit),
  };
};