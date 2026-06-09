"use client";

import { participateStyles as styles } from "@/styles/participate.styles";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import ChallengeSummaryCard from "@/components/common/create-participations/ChallengeSummaryCard";
import { Challenge } from "@/features/types/challenge.type";

type CreateParticipationFormProps = {
  challenge: Challenge;
};

export default function CreateParticipationForm({
  challenge,
}: CreateParticipationFormProps) {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {/* =========================================================
            HEADER
        ========================================================= */}

        <div className={styles.header}>
          <h1 className={styles.title}>Ma participation</h1>
        </div>

        {/* =========================================================
            CHALLENGE
        ========================================================= */}

        <ChallengeSummaryCard challenge={challenge} />

        {/* =========================================================
            FORMULAIRE
        ========================================================= */}

        <Card className={styles.card}>
          <div className={styles.section}>
            {/* =====================================================
                TITRE
            ===================================================== */}

            <div className={styles.field}>
              <label className={styles.label}>Titre</label>

              <Input placeholder="Ex : Victoire sans utiliser d'objets" />
            </div>

            {/* =====================================================
                DESCRIPTION
            ===================================================== */}

            <div className={styles.field}>
              <label className={styles.label}>Description</label>

              <Textarea
                rows={8}
                placeholder="Explique ta stratégie, les difficultés rencontrées et comment tu as réussi ce challenge."
              />
            </div>

            {/* =====================================================
                MÉDIA
            ===================================================== */}

            <div className="space-y-4">
              <label className={styles.label}>Média (optionnel)</label>

              <div className={styles.mediaBox}>
                <div className={styles.mediaContent}>
                  <p className={styles.mediaTitle}>
                    Upload vidéo bientôt disponible
                  </p>

                  <p className={styles.mediaDescription}>
                    Pour le moment, ajoute simplement un lien YouTube ou Twitch.
                  </p>
                </div>
              </div>

              <Input placeholder="https://youtube.com/watch?v=..." />
            </div>

            {/* =====================================================
                ACTIONS
            ===================================================== */}

            <Button size="lg" className={styles.submitButton}>
              Publier ma participation
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
