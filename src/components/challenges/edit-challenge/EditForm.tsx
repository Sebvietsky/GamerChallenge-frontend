"use client";


import { ChallengeForm } from "@/components/challenges/challenge-form";
import { useEditChallenge } from "@/features/hooks/useEditChallenge";
import { ChallengeItem } from "@/features/types/challenge.type";

interface EditChallengeProps {
  challenge: ChallengeItem;
}

export function EditChallenge({challenge}: EditChallengeProps) {
  const { form, onSubmit } = useEditChallenge(challenge);
  return <ChallengeForm mode="edit" form={form} onSubmit={onSubmit} />
}
