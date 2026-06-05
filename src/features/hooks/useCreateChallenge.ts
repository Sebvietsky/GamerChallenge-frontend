import { createChallenge } from "../api/challenge.api";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const createChallengeSchema = z.object({
  title: z.string().min(3, "Minimum 3 caractères"),
  goals: z.string().min(10, "Minimum 10 caractères").max(500, "Maximum 500 caractères"),
  categoryId: z.array(z.string()).min(1, "Choisir une catégorie"),
  difficultyId: z.string().min(1, "Choisir une difficulté"),
  igbdId: z.string().min(1, "Choisir un jeu"),
});

type CreateChallengeFormValues = z.infer<typeof createChallengeSchema>;

export const useCreateChallenge = () => {
  const form = useForm<CreateChallengeFormValues>({
    resolver: zodResolver(createChallengeSchema),
    defaultValues: {
      title: "",
      goals: "",
      categoryId: [],
      difficultyId: "",
      igbdId: "",
    },
  });

  const { watch, setValue, formState: { errors}} = form;
  const categoryId = watch("categoryId")

  const toggleCategory = (id: string) => {
    if (categoryId.includes(id)) {
      setValue("categoryId", categoryId.filter(c => c !== id));
    } else {
      setValue("categoryId", [...categoryId, id]);
    }
  }
  const onSubmit = async (values: CreateChallengeFormValues) => {
    try {
      await createChallenge(values)
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