export const sidebarStyles = {
  /* ======================================================
     SIDEBAR CONTAINER
  ====================================================== */

  sidebar:
    "fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-border/50 bg-background",

  /* ======================================================
     LOGO
  ====================================================== */

  logo: "flex items-center justify-center border-b border-border/50 py-6",

  /* ======================================================
     MOBILE HEADER
  ====================================================== */

  mobileHeader:
    "flex items-center justify-between border-b border-border/50 px-4 py-6",

  mobileCloseButton:
    "flex h-11 w-11 items-center justify-center rounded-2xl bg-surface text-text transition-colors hover:bg-surface-accent",

  /* ======================================================
     TOP ACTIONS
  ====================================================== */

  topActions: "flex flex-col gap-4 p-4",

  /* ======================================================
     SEARCH
  ====================================================== */

  searchContainer: "relative",

  searchIcon:
    "absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted",

  searchInput:
    "h-12 w-full rounded-2xl border border-border/50 bg-surface pl-11 pr-14 text-sm outline-none placeholder:text-text-muted",

  searchShortcut:
    "absolute right-3 top-1/2 -translate-y-1/2 rounded-lg bg-surface-accent px-2 py-1 text-xs font-medium text-secondary",

  /* ======================================================
     CREATE CHALLENGE BUTTON
  ====================================================== */

  createChallengeButton: "w-full rounded-2xl py-6",

  /* ======================================================
     NAVIGATION
  ====================================================== */

  navigation: "flex flex-1 flex-col gap-2 p-4",

  /* ======================================================
     NAV ITEM
  ====================================================== */

  navItem:
    "flex items-center gap-3 rounded-2xl px-4 py-3 text-text-muted transition-colors duration-200 hover:bg-surface-accent",

  /* ======================================================
     NAV ITEM ACTIVE
  ====================================================== */

  navItemActive:
    "flex items-center gap-3 rounded-2xl bg-surface-accent px-4 py-3 font-medium text-secondary",

  /* ======================================================
     BOTTOM ACTIONS
  ====================================================== */

  bottomActions: "flex items-center justify-center gap-4 p-4",

  bottomAction:
    "flex h-12 w-12 items-center justify-center rounded-2xl border border-border/50 bg-surface text-secondary transition-colors duration-200 hover:bg-surface-accent",
};
