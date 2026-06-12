export const dashboardContentStyles = {
  /* =========================================================
   PAGE
   ========================================================= */

  page: "space-y-6 px-4 lg:px-8",

  /* =========================================================
   HEADER
   ========================================================= */

  header: "space-y-2",

  title: "text-2xl md:text-3xl font-bold",

  subtitle: "text-sm text-text-muted",

  /* =========================================================
   EMPTY STATE
   ========================================================= */

  emptyState:
    "flex flex-col items-center justify-center rounded-3xl border border-dashed border-border p-10 text-center",

  /* =========================================================
   LIST
   ========================================================= */

  grid: "flex flex-col gap-6 max-w-6x1 mx-auto",

  /* =========================================================
   CARD
   ========================================================= */

  card: "group relative flex flex-col overflow-hidden rounded-[28px] border border-border bg-gradient-to-t from-surface to-secondary transition-all duration-300 hover:border-primary/40 hover:shadow-xl lg:h-72 lg:flex-row lg:bg-gradient-to-r",

  /* =========================================================
   IMAGE
   ========================================================= */

  imageContainer:
    "relative h-52 w-full shrink-0 overflow-hidden lg:h-full lg:w-[240px]",

  image:
    "object-cover transition-transform duration-500 group-hover:scale-[1.03]",

  /* =========================================================
   CONTENT WRAPPER
   ========================================================= */

  container: "flex flex-1 items-center justify-between p-6 lg:pr-8",

  /* =========================================================
   LEFT CONTENT
   ========================================================= */

  content: "flex flex-col justify-center gap-4",

  /* =========================================================
   BADGES
   ========================================================= */

  badges: "flex flex-wrap gap-2",

  badge:
    "rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary",

  /* =========================================================
   GAME
   ========================================================= */

  game: "text-sm text-text-muted md:text-base",

  /* =========================================================
   TITLE
   ========================================================= */

  titleCard: "max-w-3xl text-xl font-bold leading-tight md:text-3xl",

  /* =========================================================
   STATS
   ========================================================= */

  stats: "flex flex-wrap items-center gap-4 text-sm text-text-muted",

  stat: "flex items-center gap-1",

  /* =========================================================
   STATUS
   ========================================================= */

  statusBadge:
    "w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary",

  /* =========================================================
   CTA
   ========================================================= */

  actionContainer: "hidden lg:flex lg:items-center lg:justify-center",

  actionButton:
    "flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white transition-all duration-300 group-hover:scale-110",
} as const;
