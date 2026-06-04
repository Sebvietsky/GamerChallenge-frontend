export const homeStyles = {
  // Page

  page: "min-h-screen bg-lilac p-4",

  // Layout principal

  layout: "flex gap-4",

  main: "flex-1 rounded-[32px] border border-white/20 bg-white/70 p-6 backdrop-blur-xl",

  // Section bienvenue

  divWelcome: "mb-8",

  welcome:
    "rounded-[28px] bg-gradient-to-r from-[#8B5CF6] to-[#E879F9] p-8 text-white shadow-lg",

  title: "text-3xl font-bold tracking-tight",

  presentation: "mt-3 max-w-2xl text-sm text-white/80 leading-relaxed",

  // Liste des challenges

  gridChallenges: "mt-10 flex flex-col gap-6",

  cardsGrid: "w-full",

  // Carte challenge

  cardContainer:
    "my-3 relative h-100 w-full rounded-lg text-primary-foreground lg:h-80",

  imageCard:
    "rounded-lg w-full h-full object-cover object-center contrast-105 saturate-110",

  container:
    "absolute top-0 right-0 flex h-full w-full items-center justify-between rounded-lg bg-linear-to-l from-text/80 from-80% to-text/0 to-100% pr-8 lg:w-[50%]",

  detailContainer:
    "flex h-full flex-col justify-between px-4 py-24 lg:py-18 lg:pr-10",

  // Informations challenge

  titleCard: "flex gap-2",

  challengeTitle: "text-2xl",

  statsContainer: "flex gap-2",

  stats: "flex gap-1",

  tag: "self-center rounded px-1 py-0.5 font-sans text-xs text-text lg:text-lg",
};
