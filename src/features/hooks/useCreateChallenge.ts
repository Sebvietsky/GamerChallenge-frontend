import { createChallenge } from "../api/challenge.api";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { challengeSchema } from "../schema/challenge.schema";

const createChallengeSchema = challengeSchema.extend({
  igdbId: z
    .number({ required_error: "Choisissez un jeu" })
    .min(1, "Choisissez un jeu"),
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
      hints: [],
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
        hints: values.hints?.map((hints) => hints.description),
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
