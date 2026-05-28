export const homeStyles = {
  /* =========================================================
  PAGE
  ========================================================= */

  page: "min-h-screen overflow-x-hidden bg-background p-3 md:p-4",

  layout: "flex gap-4",

  main: "gaming-card flex-1 rounded-[32px] p-4 md:p-6",

  /* =========================================================
  SHOWCASE
  ========================================================= */

  showcaseSection:
    "gaming-gradient relative mt-4 overflow-hidden rounded-[32px] p-6 text-white shadow-2xl md:mt-6 md:p-10",

  showcaseContent: "relative z-10 max-w-3xl",

  showcaseTitle: "max-w-3xl text-4xl leading-tight font-bold md:text-5xl",

  showcaseDescription:
    "mt-5 max-w-2xl text-sm leading-relaxed text-white/80 md:mt-6 md:text-lg",

  showcaseActions:
    "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center md:gap-4",

  showcaseGlow:
    "bg-brand-primary/20 absolute -bottom-24 -left-20 h-[220px] w-[220px] rounded-full blur-3xl md:h-[280px] md:w-[280px]",

  /* =========================================================
  BUTTONS
  ========================================================= */

  primaryButton:
    "bg-primary hover:bg-primary/90 rounded-2xl px-5 py-3 text-sm font-medium text-white transition-all hover:scale-[1.02] md:px-6 md:py-4 md:text-base",

  secondaryButton:
    "glass-effect hover:bg-white/20 rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-brand-secondary transition-all md:px-6 md:py-4 md:text-base",

  lightButton:
    "soft-border bg-surface hover:bg-surface-accent rounded-2xl px-5 py-3 text-sm font-medium text-text transition-all md:px-6 md:py-4 md:text-base",

  /* =========================================================
  CHALLENGES
  ========================================================= */

  challengeSection: "mt-10 flex flex-col gap-6",

  sectionHeader:
    "flex flex-col gap-3 md:flex-row md:items-center md:justify-between",

  sectionTitle: "text-text text-2xl font-bold md:text-3xl",

  sectionDescription: "text-text-muted mt-1 text-sm",

  /* =========================================================
  CTA SECTION
  ========================================================= */

  communitySection:
    "mt-12 flex flex-col gap-6 rounded-[32px] bg-gradient-to-r from-[var(--brand-primary-light)]/20 to-[var(--brand-gold)]/20 p-6 md:flex-row md:items-center md:justify-between md:p-8",

  communityTitle: "text-text text-2xl font-bold md:text-3xl",

  communityDescription: "text-text-muted mt-2 text-sm md:text-base",
};
