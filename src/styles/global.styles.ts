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

  // Bouton de tri

  challengesOrderByButtonContainer:
    "flex flex-row justify-center lg:justify-start lg:gap-14 md:gap-8 gap-6",
  challengesOrderByButtonActive:
    "bg-purple-400 text-secondary-foreground border-purple-200 shadow-lg shadow-purple-200",

  // Carte challenge
  // BG de la card plus claire
  cardContainer:
    "my-3 relative flex flex-col lg:flex-row justify-center w-full rounded-lg overflow-hidden text-text h-fit lg:h-80 lg:bg-linear-to-r bg-linear-to-t from-surface lg:from-20% from-10% to-secondary to-100%",

  imageCard:
    "h-full w-auto rounded-t-lg lg:rounded-none lg:rounded-l-lg object-cover flex-shrink-0",

  container: "flex-1 flex items-center justify-between pr-8",

  detailContainer: "flex h-full gap-4 flex-col justify-around pl-6 p-4",

  // Informations challenge

  titleCard: "flex gap-2",

  challengeTitle: "text-2xl",
  gameTitle: "text-lg",

  statsContainer: "flex gap-2",

  stats: "flex gap-1",

  tag: "self-center shadow/40 rounded px-1 py-0.5 font-sans text-xs text-surface lg:text-lg",
};
