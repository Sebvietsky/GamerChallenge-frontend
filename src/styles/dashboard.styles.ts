export const dashboardStyles = {
  /* =========================================================
   PAGE
   ========================================================= */

  page: "space-y-8 p-6 md:p-8",

  header: "space-y-2 hidden",

  title: "text-3xl font-bold ",

  /* =========================================================
   PLAYER PROFILE
   ========================================================= */

  profileCard: "gaming-card p-6",

  profileContent: "flex flex-col md:flex-row items-center gap-6",

  avatar:
    "w-32 h-32 rounded-full bg-muted border-2 border-border flex items-center justify-center",

  avatarIcon: "w-16 h-16 text-text-soft",

  profileInfo: "flex-1 w-full",

  username: "text-2xl font-bold",

  rank: "text-text-muted",

  country: "text-sm text-text-soft",

  /* =========================================================
   REPUTATION BAR
   ========================================================= */

  reputationContainer: "mt-6",

  reputationHeader: "flex items-center justify-between text-sm mb-2",

  reputationBar: "h-3 rounded-full bg-muted overflow-hidden",

  reputationProgress: "h-full w-[64%] gaming-gradient rounded-full",

  reputationText: "mt-2 text-xs text-text-soft",

  /* =========================================================
   BIO
   ========================================================= */

  bioContainer: "mt-6",

  bioTitle: "font-semibold mb-2",

  bioText: "text-text-muted",

  /* =========================================================
   GENERIC SECTIONS
   ========================================================= */

  section: "space-y-4",

  sectionTitle: "text-2xl font-bold",

  /* =========================================================
   STATISTICS
   ========================================================= */

  statsGrid: "grid grid-cols-2 gap-4 lg:grid-cols-4",

  statCard: "gaming-card p-4 text-center flex flex-col items-center",

  statIcon: "mb-2",

  statLabel: "text-sm text-text-muted",

  statValue: "text-3xl font-bold mt-1",

  /* =========================================================
   HALL OF FAME
   ========================================================= */

  hallOfFameGrid: "grid gap-4 lg:grid-cols-2",

  hallOfFameCard: "gaming-card p-6",

  hallOfFameTitle: "font-semibold mb-2",

  hallOfFameText: "text-text-muted",

  /* =========================================================
   ACHIEVEMENTS
   ========================================================= */

  achievementsCard: "gaming-card p-6",

  achievementsList: "flex flex-wrap gap-3",

  /* =========================================================
   QUICK ACCESS
   ========================================================= */

  navigationCard: "gaming-card p-6",

  navigationGrid: "grid gap-4 md:grid-cols-2 xl:grid-cols-4",
} as const;
