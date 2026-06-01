export const leaderboardStyles = {
  // =========================================================
  // PAGE
  // =========================================================

  page: "min-h-screen w-full bg-gradient-to-br from-purple-50 via-white to-blue-50 px-4 py-8 lg:px-10 lg:py-12",

  innerPanel: "mx-auto max-w-7xl space-y-6",

  // =========================================================
  // HEADER
  // =========================================================

  headerSection: "space-y-1",

  title: "font-heading text-2xl text-text",

  subtitle: "text-sm text-text-muted",

  // =========================================================
  // FILTERS
  // =========================================================

  filterSection: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-8",

  filterCard:
    "gaming-card rounded-3xl p-6 cursor-pointer transition-all duration-200 border border-transparent hover:border-purple-200 hover:bg-purple-50",

  filterCardActive:
    "gaming-card rounded-3xl p-6 cursor-pointer transition-all duration-200 border border-brand-primary bg-brand-primary/10",

  filterCardMeta:
    "text-xs font-semibold uppercase tracking-[0.24em] text-purple-700 mb-3",

  filterCardTitle: "text-base md:text-lg font-semibold text-text leading-tight",

  // =========================================================
  // PODIUM
  // =========================================================

  podium: "gaming-card rounded-3xl overflow-hidden",

  podiumHero: "relative flex flex-col items-center px-8 pt-8 pb-10 text-center",

  podiumBackground: "absolute inset-0 opacity-40 pointer-events-none",

  podiumBottom: "grid md:grid-cols-2 gap-4 p-4 pt-0",

  // =========================================================
  // MEDALS
  // =========================================================

  rankBadgeGold:
    "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-white w-8 h-8 rounded-full flex items-center justify-center font-bold",

  rankBadgeSilver:
    "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-slate-300 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold",

  rankBadgeBronze:
    "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-amber-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold",

  // =========================================================
  // CROWNS
  // =========================================================

  crown: "mb-2 text-3xl",

  // =========================================================
  // AVATARS
  // =========================================================

  heroImageWrapper: "relative mb-4",

  heroImage:
    "w-32 h-32 rounded-full object-cover border-[6px] border-white shadow-lg",

  sideImage: "w-20 h-20 rounded-full object-cover border-4 border-white shadow",

  // =========================================================
  // LAURELS
  // =========================================================

  laurelGold: "absolute inset-0 scale-150 opacity-70 pointer-events-none",

  laurelSilver: "absolute inset-0 scale-125 opacity-60 pointer-events-none",

  laurelBronze: "absolute inset-0 scale-125 opacity-60 pointer-events-none",

  // =========================================================
  // TAGS
  // =========================================================

  tags: "flex justify-center gap-2 mb-2",

  tag: "bg-surface-accent px-3 py-1 rounded-full text-xs text-text-muted",

  // =========================================================
  // TITLES
  // =========================================================

  challengeTitle: "font-heading text-2xl text-text",

  challengeTitleSmall: "font-heading text-lg text-text",

  // =========================================================
  // STATS
  // =========================================================

  stats: "flex justify-center gap-10 mt-5",

  stat: "flex flex-col items-center",

  statValue: "font-heading text-lg text-text",

  statLabel: "text-xs text-text-muted",

  // =========================================================
  // SIDE CARD
  // =========================================================

  sideCard: "gaming-card rounded-2xl p-6 text-center relative",

  // =========================================================
  // LEGACY LEADERBOARD CARD
  // =========================================================

  card: "relative group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2",

  cardGradient:
    "absolute inset-0 bg-gradient-to-br from-white via-white/95 to-purple-50 border border-white/40 backdrop-blur-xl",

  cardContent:
    "relative p-6 md:p-8 flex flex-col items-center justify-center h-full min-h-72 md:min-h-80",

  rankContainer:
    "absolute top-4 right-4 md:top-6 md:right-6 flex items-center justify-center z-10",

  rankMedal: "text-3xl md:text-4xl",

  rankBadge:
    "w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-white text-sm md:text-base",

  rankBadge1st: "bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg",

  rankBadge2nd: "bg-gradient-to-br from-gray-300 to-gray-400 shadow-lg",

  rankBadge3rd: "bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg",

  rankBadgeOther: "bg-gradient-to-br from-blue-400 to-purple-600 shadow-lg",

  avatar:
    "w-20 h-20 md:w-24 md:h-24 rounded-full mb-4 md:mb-6 border-4 border-white shadow-lg object-cover",

  userName:
    "text-xl md:text-2xl font-bold text-gray-900 text-center mb-2 md:mb-3 line-clamp-2",

  userHandle: "text-xs md:text-sm text-gray-500 text-center mb-6 md:mb-8",

  statsContainer:
    "grid grid-cols-3 gap-3 md:gap-4 w-full pt-6 md:pt-8 border-t border-white/50",

  statItem: "text-center",

  legacyStatValue:
    "text-lg md:text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block",

  legacyStatLabel: "text-xs md:text-sm text-gray-500 mt-1 md:mt-2",

  emptyState: "text-center py-12 md:py-16 col-span-full",

  emptyIcon: "text-5xl md:text-6xl mb-4 md:mb-6",

  emptyTitle: "text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-3",

  emptyDescription: "text-base md:text-lg text-gray-600",

  // =========================================================
  // TOP THREE
  // =========================================================

  topThreeWrap: "grid gap-6",

  topFirstCard:
    "gaming-card rounded-[36px] relative overflow-hidden p-8 text-center bg-white/90 border border-white/70 shadow-xl",

  topFirstInner: "relative z-10",

  topFirstRankBadge:
    "absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold text-sm font-bold text-white shadow-lg border-4 border-white",

  topLaurelFrame: "absolute inset-0 pointer-events-none",

  topStars: "absolute inset-0 pointer-events-none",

  topFirstTitle: "font-heading text-2xl md:text-3xl text-text mb-2",

  topTagContainer: "flex flex-wrap justify-center gap-2 mb-4",

  topTag:
    "rounded-full border border-slate-200 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-600 bg-white/80",

  topStats: "flex flex-col sm:flex-row justify-center gap-8 mt-6",

  topStatBlock: "flex flex-col items-center",

  topStatValue: "font-heading text-lg text-text",

  topStatLabel: "text-[11px] uppercase tracking-[0.2em] text-text-muted mt-1",

  topSecondThirdGrid: "grid gap-6 lg:grid-cols-2",

  sideCardTitle: "font-semibold text-lg text-text mt-3",

  sideCardSubtitle: "text-xs uppercase tracking-[0.2em] text-text-muted mb-3",
};
