import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { editParticipation } from "../api/participation.api";
import { Participation } from "../types/challenge.type";

const createParticipationSchema = z.object({
  title: z.string().min(3, "Minimum 3 caractères").max(150),
  description: z.string().min(10, "Minimum 10 caractères").max(3000),
  video: z.string().url("URL invalide").or(z.literal("")),
});

type CreateParticipationFormValues = z.infer<typeof createParticipationSchema>;



export const useEditParticipation = (slug: string, participation: Participation) => {
  const router = useRouter();
  const form = useForm<CreateParticipationFormValues>({
    resolver: zodResolver(createParticipationSchema),
    defaultValues: {
      title: participation.title,
      description: participation.description,
      video: participation.video,
    },
  });

  const {
    formState: { errors },
  } = form;

  const onSubmit = async (values: CreateParticipationFormValues) => {
    try {
      await editParticipation(slug, values);
      toast.success("Participation modifiée avec succès !");
      router.push(`/challenges/${participation.challenge.slug}`);
    } catch (error) {
      toast.error("Erreur lors de la modification de la participation");
      console.error(error);
    }
  };

  return {
    form,
    errors,
    onSubmit: form.handleSubmit(onSubmit),
  };
};