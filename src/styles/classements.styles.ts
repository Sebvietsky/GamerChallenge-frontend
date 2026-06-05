export const classementsStyles = {
  page: "min-h-screen w-full bg-[var(--surface)] px-4 py-8 lg:px-10 lg:py-12",

  container:
    "mx-auto max-w-6xl space-y-8 rounded-[40px] border border-[var(--border)] bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.12)] md:p-10",

  // HEADER

  header: "space-y-3",

  title: "font-heading text-3xl text-text",

  description: "max-w-2xl text-sm leading-6 text-text-muted",

  // FILTRES

  filters: "grid grid-cols-1 gap-4 md:grid-cols-3",

  filterCard:
    "group rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-5 text-left transition duration-200 hover:border-[var(--brand-primary)]/40 hover:bg-[var(--surface-accent)]/60",

  filterCardActive:
    "group rounded-[28px] border border-[var(--brand-primary)] bg-[var(--brand-primary)]/10 p-5 text-left shadow-sm",

  filterIcon:
    "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--surface)] text-[var(--brand-secondary)]",

  filterIconActive:
    "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand-primary)]/15 text-[var(--brand-primary)]",

  filterTitle: "text-sm font-semibold leading-snug text-text",

  filterSubtitle: "mt-2 text-xs leading-5 text-text-muted",

  // PODIUM

  podiumArea: "grid gap-5",

  podiumMain:
    "relative overflow-hidden rounded-[36px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.08)]",

  podiumCard:
    "relative overflow-hidden rounded-[36px] border border-[var(--border)] bg-[var(--surface)] text-center shadow-[0_18px_40px_-28px_rgba(15,23,42,0.18)]",

  podiumSection: "relative z-10 flex flex-col items-center text-center",

  // COURONNE

  crownWrapper: "mb-2 flex justify-center",

  // AVATAR

  avatarWrap:
    "relative mx-auto mb-10 flex h-44 w-44 items-center justify-center",

  avatarWrapCompact:
    "relative mx-auto mb-6 flex h-28 w-28 items-center justify-center",

  // LAURIERS

  laurels:
    "absolute left-1/2 top-1/2 z-0 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 pointer-events-none",

  laurelsCompact:
    "absolute left-1/2 top-1/2 z-0 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 pointer-events-none",

  // PHOTO

  avatarRing:
    "relative z-10 h-full w-full overflow-hidden rounded-full bg-[var(--surface)] shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)]",

  avatarRingCompact:
    "relative z-10 h-full w-full overflow-hidden rounded-full bg-[var(--surface)] shadow-[0_12px_30px_-20px_rgba(15,23,42,0.32)]",

  avatar: "h-full w-full rounded-full object-cover",

  // MÉDAILLES

  medalBadge:
    "absolute bottom-0 left-1/2 z-20 h-24 w-24 -translate-x-1/2 translate-y-1/2",

  medalBadgeCompact:
    "absolute bottom-0 left-1/2 z-20 h-16 w-16 -translate-x-1/2 translate-y-1/2",

  rankBadge:
    "absolute bottom-0 left-1/2 z-20 flex h-10 w-10 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-[var(--brand-gold)] text-sm font-semibold text-white shadow-lg",

  // TAGS

  tags: "mb-3 flex flex-wrap justify-center gap-2",

  tag: "rounded-full border border-[var(--border)] bg-[var(--surface-accent)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-text-muted",

  // TITRES

  sectionTitle: "font-heading text-3xl text-text",

  cardTitle: "font-heading text-2xl text-text",

  cardTitleCompact: "font-heading text-xl text-text",

  sideTitle: "font-semibold text-base text-text",

  subtitle: "text-sm text-text-muted",

  sideSubtitle: "mb-2 text-xs uppercase tracking-[0.22em] text-text-muted",

  // STATS

  statsRow: "mt-6 grid gap-3 sm:grid-cols-3",

  statsRowCompact: "mt-4 grid gap-2 sm:grid-cols-3",

  statCard:
    "rounded-3xl border border-[var(--border)] bg-white px-4 py-4 text-center",

  statCardCompact:
    "rounded-2xl border border-[var(--border)] bg-white px-3 py-3 text-center",

  statValue: "font-heading text-lg text-text",

  statValueCompact: "font-heading text-base text-text",

  statLabel: "mt-1 text-[11px] uppercase tracking-[0.18em] text-text-muted",

  statLabelCompact:
    "mt-1 text-[10px] uppercase tracking-[0.18em] text-text-muted",

  // SECOND / TROISIÈME

  sideGrid: "grid gap-5 lg:grid-cols-2",

  sideCard:
    "relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-6 text-center",

  // ACTION

  buttonWrap: "flex justify-end",

  button:
    "inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-primary)] text-white shadow-sm transition hover:bg-[var(--brand-primary)]/95",
};
