import { Medals } from "@/components/classements/medals";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <section className="rounded-[36px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm md:p-10">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.28em] text-text-muted">
              À propos
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-tight text-text sm:text-5xl">
              À propos de GamerChallenges
            </h1>
            <p className="max-w-3xl text-base leading-7 text-text-muted sm:text-lg">
              GamerChallenges est une plateforme communautaire dédiée aux défis
              gaming, conçue pour permettre aux joueurs de créer, partager et
              découvrir des challenges qui renouvellent leur manière de jouer.
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-6 rounded-[36px] border border-[var(--border)] bg-[var(--surface-muted)] p-8 shadow-sm">
            <div>
              <h2 className="font-heading text-2xl text-text">Notre mission</h2>
              <p className="mt-4 text-text-muted leading-7">
                Offrir un espace où la communauté gaming peut collaborer autour
                de défis inspirants, explorer des idées de jeu inédites et
                mettre en lumière la créativité des participants.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-text font-semibold">Créer des défis</p>
                <p className="mt-2 text-text-muted leading-6">
                  Proposez des challenges originaux et adaptez-les à votre
                  univers gaming.
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-text font-semibold">Partager ses idées</p>
                <p className="mt-2 text-text-muted leading-6">
                  Faites découvrir vos concepts à la communauté et inspirez
                  d&apos;autres joueurs.
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-text font-semibold">
                  Découvrir de nouvelles façons de jouer
                </p>
                <p className="mt-2 text-text-muted leading-6">
                  Explorez des défis variés pour renouveler vos sessions de jeu.
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5">
                <p className="text-text font-semibold">
                  Participer à la communauté
                </p>
                <p className="mt-2 text-text-muted leading-6">
                  Rejoignez les créateurs et votez pour les meilleurs
                  challenges.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[36px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-text">
              Comment ça fonctionne
            </h2>
            <p className="mt-4 text-text-muted leading-7">
              GamerChallenges simplifie chaque étape de l&apos;expérience : de
              la création à l&apos;évaluation en passant par la montée dans les
              classements.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-muted)] p-6">
                <p className="font-semibold text-text">Créer un challenge</p>
                <p className="mt-3 text-text-muted leading-6">
                  Rédigez les règles, sélectionnez la catégorie et partagez
                  votre challenge avec la communauté.
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-muted)] p-6">
                <p className="font-semibold text-text">Participer</p>
                <p className="mt-3 text-text-muted leading-6">
                  Relevez des défis, soumettez vos performances et montrez vos
                  compétences.
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-muted)] p-6">
                <p className="font-semibold text-text">Voter</p>
                <p className="mt-3 text-text-muted leading-6">
                  Évaluez les propositions de la communauté pour mettre en avant
                  les meilleures idées.
                </p>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-muted)] p-6">
                <p className="font-semibold text-text">
                  Monter dans les classements
                </p>
                <p className="mt-3 text-text-muted leading-6">
                  Gagnez en visibilité et suivez votre progression dans les
                  palmarès de la plateforme.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6 rounded-[36px] border border-[var(--border)] bg-[var(--surface-muted)] p-8 shadow-sm">
          <div>
            <h2 className="font-heading text-2xl text-text">
              Fonctionnalités principales
            </h2>
            <p className="mt-4 text-text-muted leading-7">
              GamerChallenges propose des outils conçus pour créer, partager et
              évaluer des défis dans un cadre engageant et sécurisé.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="font-semibold text-text">Création de challenges</p>
            </div>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="font-semibold text-text">Participation vidéo</p>
            </div>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="font-semibold text-text">Votes communautaires</p>
            </div>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="font-semibold text-text">Classements</p>
            </div>
            <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="font-semibold text-text">Profils utilisateurs</p>
            </div>
          </div>
        </section>

        <section className="rounded-[36px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm">
          <div className="space-y-4">
            <h2 className="font-heading text-2xl text-text">
              Technologies utilisées
            </h2>
            <p className="text-text-muted leading-7">
              La plateforme s'appuie sur une stack moderne pour garantir
              robustesse, évolutivité et performance.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Express.js",
              "PostgreSQL",
              "Prisma",
              "Docker",
            ].map((technology) => (
              <div
                key={technology}
                className="rounded-3xl border border-[var(--border)] bg-[var(--surface-muted)] px-4 py-4 text-center"
              >
                <p className="text-text font-semibold">{technology}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-[36px] border border-[var(--border)] bg-[var(--surface-muted)] p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-text">Le projet</h2>
            <p className="mt-4 text-text-muted leading-7">
              GamerChallenges est développé dans le cadre d&apos;un projet
              formation. Il s&apos;agit d&apos;une plateforme communautaire
              orientée gaming, pensée pour favoriser les échanges, la création
              et les défis partagés.
            </p>
            <div className="mt-6 space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-text-muted">
                Équipe de développement
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  { name: "Nathan", role: "Lead Dev" },
                  { name: "Sébastien", role: "Product Owner" },
                  { name: "Damien", role: "Git Master" },
                  { name: "Thomas", role: "Scrum Master" },
                ].map((member) => (
                  <li
                    key={member.name}
                    className="relative flex items-center gap-4 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] px-4 py-4 text-text"
                  >
                    <span className="absolute -left-2 top-4 h-3 w-3 rounded-full bg-[var(--surface-accent)]" />
                    <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-[var(--brand-secondary)]/80" />

                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface)] shadow-sm">
                      <div className="absolute inset-0 rounded-full bg-[var(--brand-primary)]/10" />
                      <Medals rank={1} className="relative h-10 w-10" />
                    </div>

                    <div>
                      <p className="font-semibold text-text">{member.name}</p>
                      <p className="text-xs text-text-muted">{member.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[36px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm">
            <h2 className="font-heading text-2xl text-text">Vision</h2>
            <ul className="mt-4 space-y-4 text-text-muted leading-7">
              <li>Encourager la créativité des joueurs.</li>
              <li>Renforcer l&apos;engagement communautaire.</li>
              <li>
                Proposer de nouvelles manières de découvrir ses jeux favoris.
              </li>
            </ul>
          </div>
        </section>

        <footer className="rounded-[36px] border border-[var(--border)] bg-[var(--surface)] p-8 text-sm text-text-muted shadow-sm">
          <div className="space-y-3">
            <p>
              Version de l&apos;application :{" "}
              <span className="text-text font-semibold">A définir</span>
            </p>
            <p>
              Merci à la communauté GamerChallenges pour son énergie et sa
              créativité.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
