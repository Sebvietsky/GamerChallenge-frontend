export const challengeDetail = {
  // =========================================================
  // PAGE LAYOUT
  // =========================================================

  main: "space-y-6 px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8",

  // =========================================================
  // HERO / CHALLENGE OVERVIEW
  // Image, tags, titre, statistiques et description
  // =========================================================

  sectionDetail: "w-full",

  detailContainer: "flex flex-col lg:flex-row w-full gap-4 lg:gap-8",

  imageContainer: "w-full max-w-md mx-auto lg:mx-0 lg:w-[400px] shrink-0",

  imageTag:
    "rounded-lg w-full aspect-[16/9] lg:aspect-auto lg:h-full object-cover object-center",

  contentContainer: "flex flex-col flex-1 gap-4 lg:gap-8 lg:justify-center",

  tagContainer: "flex flex-wrap gap-2 text-xs md:text-sm font-semibold",

  tag: "rounded-lg bg-brand-info px-3 py-1 text-xs md:px-4 md:py-1.5 md:text-sm",

  title: "text-xl md:text-2xl lg:text-4xl font-semibold leading-tight",

  dataContainer: "flex flex-wrap gap-3 md:gap-4 text-text-muted",

  dataStat: "flex items-center text-sm md:text-base",

  icon: "mr-2",

  description: "w-full text-sm md:text-base text-text-muted",

  buttonContainer: "flex justify-end gap-1.5 px-0 md:px-4 lg:px-8",

  iconButton: "w-8 h-8 rounded-full",

  // =========================================================
  // VIDEO & COMPLEMENTARY INFORMATION
  // Vidéo + encarts informatifs
  // =========================================================

  sectionGrid:
    "flex flex-col gap-4 lg:grid lg:grid-cols-[1fr_400px] lg:grid-rows-[auto_1fr]",

  videoContainer: "border rounded-lg bg-surface p-4 lg:",

  videoTitle: "flex items-center mb-2",

  iframe: "w-full aspect-video rounded-sm object-cover",

  hintsContainer:
    "flex flex-col gap-2 lg:col-span-2 md:flex-row md:items-center md:justify-between border rounded-lg bg-surface px-4 py-3",

  hintsTitle: "flex items-center",

  // =========================================================
  // CREATOR CARD
  // Informations du créateur du challenge
  // =========================================================

  creatorContainer: "border rounded-lg bg-surface p-4 lg:col-start-2 lg:row-start-1 lg:h-fit",

  creatorTitle: "mb-4 text-lg md:text-xl font-semibold",

  creatorContent: "flex flex-col sm:flex-row gap-4",

  avatar: "w-14 h-14 md:w-16 md:h-16",

  creatorInfo: "flex flex-col",

  creatorName: "font-heading font-semibold text-base md:text-lg",

  creatorRole: "text-text-muted text-sm mb-2",

  creatorStat: "flex items-center mb-1 text-sm",

  creatorStatIcon: "h-4 w-4 mr-2",

  // =========================================================
  // PARTICIPATIONS
  // Liste des participations et filtres
  // =========================================================

  participationSection: "border bg-surface p-3 md:p-4 rounded-lg",

  participationHeader:
    "relative flex flex-col gap-2 md:flex-row md:items-center md:justify-between after:absolute after:-bottom-2 after:left-1/2 after:h-px after:w-[95%] after:-translate-x-1/2 after:bg-border pb-2",

  participationTitle: "font-semibold text-sm md:text-base",

  filterContainer: "flex flex-wrap gap-1 items-center mr-8",

  participationList: "flex flex-col items-center w-full",

  participationCard:
    "relative lg:w-[95%] flex items-center justify-between w-full px-2 py-2 after:absolute after:-bottom-1 after:left-1/2 after:h-px after:w-[95%] lg:after:w-full after:-translate-x-1/2 after:bg-border",

  // =========================================================
  // CALL TO ACTION
  // Invitation à participer au challenge
  // =========================================================

  ctaSection: "flex flex-col gap-2 md:gap-4 items-center text-center",

  ctaContainer: "flex flex-col items-center",

  ctaTitle: "text-lg md:text-xl font-semibold",

  ctaSubtitle: "text-xs md:text-sm text-text-soft",

  ctaButton: "w-full md:w-auto md:min-w-[320px] rounded-sm py-6",

  ctaButtonDisable: "w-full bg-border md:w-auto md:min-w-[320px] rounded-sm py-6 hover:cursor-default hover:brightness-100",

};
