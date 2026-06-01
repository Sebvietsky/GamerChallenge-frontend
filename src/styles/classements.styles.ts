export const classementsStyles = {
  page: "min-h-screen w-full bg-[var(--surface)] px-4 py-8 lg:px-10 lg:py-12",
  container:
    "mx-auto max-w-6xl space-y-8 rounded-[40px] border border-[var(--border)] bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.12)] md:p-10",
  header: "space-y-3",
  title: "font-heading text-3xl text-text",
  description: "text-sm leading-6 text-text-muted max-w-2xl",
  filters: "grid grid-cols-1 gap-4 md:grid-cols-3",
  filterCard:
    "group rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-5 text-left transition duration-200 hover:border-[var(--brand-primary)]/40 hover:bg-[var(--surface-accent)]/60",
  filterCardActive:
    "group rounded-[28px] border border-[var(--brand-primary)] bg-[var(--brand-primary)]/10 p-5 text-left shadow-sm",
  filterIcon:
    "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--surface)] text-[var(--brand-secondary)]",
  filterIconActive:
    "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--brand-primary)]/15 text-[var(--brand-primary)]",
  filterTitle: "text-sm font-semibold text-text leading-snug",
  filterSubtitle: "mt-2 text-xs leading-5 text-text-muted",
  podiumArea: "grid gap-5",
  podiumMain:
    "relative overflow-hidden rounded-[36px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.08)]",
  podiumCard:
    "relative overflow-hidden rounded-[36px] border border-[var(--border)] bg-[var(--surface)] text-center shadow-[0_18px_40px_-28px_rgba(15,23,42,0.18)]",
  podiumSection: "relative z-10 flex flex-col items-center text-center",
  crownWrapper: "mb-3",
  avatarWrap: "relative mx-auto mb-4 h-40 w-40",
  avatarRing:
    "relative h-full w-full overflow-hidden rounded-full border-[8px] border-white shadow-[0_18px_40px_-24px_rgba(15,23,42,0.35)]",
  avatar: "h-full w-full rounded-full object-cover",
  rankBadge:
    "absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-gold)] text-sm font-semibold text-white shadow-lg border-4 border-white",
  tags: "flex flex-wrap justify-center gap-2 mb-3",
  tag: "rounded-full border border-[var(--border)] bg-[var(--surface-accent)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-text-muted",
  sectionTitle: "font-heading text-3xl text-text",
  cardTitle: "font-heading text-2xl text-text",
  subtitle: "text-sm text-text-muted",
  statsRow: "mt-6 grid gap-3 sm:grid-cols-3",
  statCard:
    "rounded-3xl border border-[var(--border)] bg-white px-4 py-4 text-center",
  statValue: "font-heading text-lg text-text",
  statLabel: "mt-1 text-[11px] uppercase tracking-[0.18em] text-text-muted",
  sideGrid: "grid gap-5 lg:grid-cols-2",
  sideCard:
    "relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-6 text-center",
  sideSubtitle: "mb-2 text-xs uppercase tracking-[0.22em] text-text-muted",
  sideTitle: "font-semibold text-base text-text",
  buttonWrap: "flex justify-end",
  button:
    "inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--brand-primary)] text-white shadow-sm transition hover:bg-[var(--brand-primary)]/95",
};
