"use client";

import { useCreateChallenge } from "@/features/hooks/useCreateChallenge";
import { ChallengeForm } from "@/components/challenges/challenge-form";

export function CreateChallenge() {
  const { form, onSubmit } = useCreateChallenge();
  return <ChallengeForm mode="create" form={form} onSubmit={onSubmit} />
}
