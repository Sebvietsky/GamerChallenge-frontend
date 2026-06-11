"use client";

import { participateStyles as styles } from "@/styles/participate.styles";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import ChallengeSummaryCard from "@/components/common/create-participations/ChallengeSummaryCard";
import { Challenge, Participation } from "@/features/types/challenge.type";
import { useCreateParticipation } from "@/features/hooks/useCreateParticipations";
import { useEditParticipation } from "@/features/hooks/useEditParticipation";

import type { UseFormReturn, FieldErrors } from "react-hook-form";

type CreateParticipationFormProps = {
  participation?: Participation
  challenge: Challenge;
};

export default function CreateParticipationForm({
  challenge,
  participation
}: CreateParticipationFormProps) {
  const createHook = useCreateParticipation(challenge.slug) as any
  const editHook = useEditParticipation(participation?.slug ?? "", participation ?? {} as Participation) as any

    const { form, errors, onSubmit } = participation ? editHook : createHook  as {
  form: UseFormReturn<any>;
  errors: FieldErrors<any>;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className={styles.header}>
          <h1 className={styles.title}>Ma participation </h1>
        </div>

        {/* =========================================================
            CHALLENGE
        ========================================================= */}

        <ChallengeSummaryCard challenge={challenge} />

        {/* =========================================================
            FORMULAIRE
        ========================================================= */}

        <Card className={styles.card}>
          <form onSubmit={onSubmit}>
            <div className={styles.section}>
              {/* =====================================================
                TITRE
            ===================================================== */}

              <div className={styles.field}>
                <label className={styles.label}>
                  Titre <RequiredStar />
                </label>

                <Input
                  placeholder="Ex : Victoire sans utiliser d'objets"
                  {...form.register("title")}
                />
                {errors.title && (
                  <p className="text-sm text-destructive">
                    {errors.title.message}
                  </p>
                )}
              </div>

              {/* =====================================================
                DESCRIPTION
            ===================================================== */}

              <div className={styles.field}>
                <label className={styles.label}>
                  Description <RequiredStar />
                </label>

                <Textarea
                  rows={8}
                  placeholder="Explique ta stratégie, les difficultés rencontrées et comment tu as réussi ce challenge."
                  {...form.register("description")}
                />
                {errors.description && (
                  <p className="text-sm text-destructive">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* =====================================================
                MÉDIA
            ===================================================== */}

              <div className="space-y-4">
                <label className={styles.label}>
                  Média (optionnel) <RequiredStar />
                </label>

                <div className={styles.mediaBox}>
                  <div className={styles.mediaContent}>
                    <p className={styles.mediaTitle}>
                      Upload vidéo bientôt disponible
                    </p>

                    <p className={styles.mediaDescription}>
                      Pour le moment, ajoute simplement un lien YouTube ou
                      Twitch.
                    </p>
                  </div>
                </div>
                <Input
                  placeholder="https://youtube.com/watch?v=... "
                  {...form.register("video")}
                />
                {errors.video && (
                  <p className="text-sm text-destructive">
                    {errors.video.message}
                  </p>
                )}
              </div>

              {/* =====================================================
                ACTIONS
            ===================================================== */}

              <Button size="lg" className={styles.submitButton} type="submit">
                {!participation ? "Publier ma participation" : "Modifier ma participation"}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
