export const homeStyles = {
  page: "min-h-screen bg-background p-4",

  layout: "flex gap-4",

  main: "gaming-card rounded-3xl flex-1 p-6",

  /* =========================================================
  SHOWCASE
  ========================================================= */

  showcaseSection:
    "gaming-gradient relative mt-6 overflow-hidden rounded-3xl p-10 text-white shadow-2xl",

  showcaseContent: "relative z-10 max-w-3xl",

  showcaseBadge:
    "glass-effect mb-6 inline-flex items-center rounded-full px-4 py-2 text-sm text-white",

  showcaseTitle: "max-w-3xl text-5xl leading-tight font-bold",

  showcaseDescription: "mt-6 max-w-2xl text-lg leading-relaxed text-white/80",

  showcaseActions: "mt-8 flex items-center gap-4",

  showcaseGlow:
    "bg-brand-primary/20 absolute -bottom-24 -left-20 h-[280px] w-[280px] rounded-full blur-3xl",

  /* =========================================================
  BUTTONS
  ========================================================= */

  primaryButton:
    "bg-primary hover:bg-primary/90 rounded-2xl px-6 py-4 font-medium text-white transition-all hover:scale-[1.02]",

  secondaryButton:
    "glass-effect hover:bg-white/20 rounded-2xl border border-white/20 px-6 py-4 font-medium text-white transition-all",

  lightButton:
    "soft-border bg-surface hover:bg-surface-accent rounded-2xl px-6 py-4 font-medium text-text transition-all",

  /* =========================================================
  CHALLENGES
  ========================================================= */

  challengeSection: "mt-10 flex flex-col gap-6",

  sectionHeader: "flex items-center justify-between",

  sectionTitle: "text-text text-3xl font-bold",

  sectionDescription: "text-text-muted mt-2 text-sm",

  /* =========================================================
  CTA SECTION
  ========================================================= */

  communitySection:
    "mt-12 flex items-center justify-between rounded-3xl bg-gradient-to-r from-[var(--brand-primary-light)]/20 to-[var(--brand-gold)]/20 p-8",

  communityTitle: "text-text text-3xl font-bold",

  communityDescription: "text-text-muted mt-2",
};
