import { useRouter } from "next/navigation";
import { challengeSchema, type ChallengeFormValues } from "@/features/schema/challenge.schema";
import type { ChallengeItem } from "../types/challenge.type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { editChallenge } from "../api/challenge.api";

export const useEditChallenge = (challenge: ChallengeItem) => {
  const router = useRouter()

  const form = useForm<ChallengeFormValues>({
    resolver: zodResolver(challengeSchema),
    defaultValues: {
      title: challenge.title,
      description: challenge.description,
      goals: challenge.goals || "",
      hints: challenge.hints || "",
      demo: challenge.demo || "",
      difficultyId: challenge.difficulty.id,
      challengeCategoryId: challenge.challengeCategory.id,
    },
  })

  const onSubmit = async (values: ChallengeFormValues) => {
    try{
      await editChallenge(challenge.slug, {
        ...values,
        demo: values.demo || undefined,
        goals: values.goals || undefined,
        hints: values.hints || undefined,
      });
      toast.success("Callenge modifié avec succès !")
      router.push(`/challenges/${challenge.slug}`)
    } catch (err) {
      toast.error("Erreur lors de la modification du challenge")
      console.error(err)
    }
  }

  return{
    form,
    errors: form.formState.errors,
    onSubmit: form.handleSubmit(onSubmit)
  }
}