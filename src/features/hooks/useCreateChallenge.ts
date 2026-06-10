import { createChallenge } from "../api/challenge.api";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const createChallengeSchema = z.object({
  title: z.string().min(3, "Minimum 3 caractères"),
  description: z.string().min(10, "Minimum 10 caractères").max(500),
  goals: z.string().max(500).optional(),
  hints: z.string().max(500).optional(),
  demo: z.string().url("URL invalide").optional().or(z.literal("")),
  closesAt: z.date().optional(),
  status: z.string().min(1, "Choisir un statut").optional(),
  igdbId: z
    .number({ required_error: "Choisir un jeu" })
    .min(1, "Choisir un jeu"),
  challengeCategoryId: z
    .number({ required_error: "Choisir une catégorie" })
    .min(1, "Choisir une catégorie"),
  difficultyId: z
    .number({ required_error: "Choisir une difficulté" })
    .min(1, "Choisir une difficulté"),
});

type CreateChallengeFormValues = z.infer<typeof createChallengeSchema>;

export const useCreateChallenge = () => {
  const router = useRouter();
  const form = useForm<CreateChallengeFormValues>({
    resolver: zodResolver(createChallengeSchema),
    defaultValues: {
      title: "",
      igdbId: undefined,
      description: "",
      goals: "",
      difficultyId: undefined,
      challengeCategoryId: undefined,
      hints: "",
      demo: "",
    },
  });

  const {
    formState: { errors },
  } = form;

  const onSubmit = async (values: CreateChallengeFormValues) => {
    try {
      await createChallenge({
        ...values,
        demo: values.demo || undefined,
        goals: values.goals || undefined,
        hints: values.hints || undefined,
      });
      toast.success("Challenge créé avec succès !");
      router.push("/");
    } catch (error) {
      toast.error("Erreur lors de la création du challenge");
      console.error(error);
    }
  };

  return {
    form,
    errors,
    onSubmit: form.handleSubmit(onSubmit),
  };
};
