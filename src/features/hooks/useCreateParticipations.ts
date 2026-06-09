import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { createParticipation } from "../api/participation.api";

const createParticipationSchema = z.object({
  title: z.string().min(3, "Minimum 3 caractères").max(150),
  description: z.string().min(10, "Minimum 10 caractères").max(3000),
  video: z.string().url("URL invalide").or(z.literal("")),
});

type CreateParticipationFormValues = z.infer<typeof createParticipationSchema>;

export const useCreateParticipation = (challengeSlug: string) => {
  const router = useRouter();
  const form = useForm<CreateParticipationFormValues>({
    resolver: zodResolver(createParticipationSchema),
    defaultValues: {
      title: "",
      description: "",
      video: "",
    },
  });

  const {
    formState: { errors },
  } = form;

  const onSubmit = async (values: CreateParticipationFormValues) => {
    try {
      await createParticipation(challengeSlug, values);
      toast.success("Participation créée avec succès !");
      router.push(`/challenges/${challengeSlug}`);
    } catch (error) {
      toast.error("Erreur lors de la création de la participation");
      console.error(error);
    }
  };

  return {
    form,
    errors,
    onSubmit: form.handleSubmit(onSubmit),
  };
};
