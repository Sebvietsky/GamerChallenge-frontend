export const bannerStyles = {
  /* ======================================================
     HEADER CONTAINER
     ======================================================

     Header principal utilisé :
     - mobile
     - desktop

     - h-20 :
       hauteur = 80px

     - bg-background/80 :
       effet glassmorphism

     - backdrop-blur-xl :
       flou arrière-plan

     - border-b :
       séparation visuelle
  ====================================================== */

  container:
    "fixed top-0 right-0 left-0 lg:left-64 z-30 h-20 bg-background/80 backdrop-blur-xl border-b border-border/50 px-4 md:px-6",

  /* ======================================================
     MOBILE CONTAINER
     ======================================================

     Conteneur mobile du header.

     - lg:hidden :
       visible uniquement mobile/tablette

     - justify-between :
       menu à gauche
       avatar à droite
  ====================================================== */

  mobileContainer: "flex h-full items-center justify-between lg:hidden",

  /* ======================================================
     MOBILE MENU BUTTON
     ======================================================

     Bouton ouverture sidebar mobile.

     - h-12 w-12 :
       zone tactile confortable

     - rounded-2xl :
       cohérent avec la DA
  ====================================================== */

  mobileMenuButton:
    "flex h-12 w-12 items-center justify-center rounded-2xl border border-border/50 bg-surface text-text transition-colors duration-200 hover:bg-surface-accent",

  /* ======================================================
     MOBILE SIDEBAR
     ======================================================

     Sheet contenant la sidebar mobile.

     - 85vw :
       responsive mobile

     - max-w-sm :
       largeur maximale propre

     - bg-transparent :
       évite bande blanche

     - p-0 :
       supprime padding natif
  ====================================================== */

  mobileSidebar: "w-[85vw] max-w-sm border-none bg-transparent p-0 shadow-none",

  /* ======================================================
     DESKTOP CONTAINER
     ======================================================

     Header desktop.

     - hidden lg:flex :
       visible uniquement desktop
  ====================================================== */

  desktopContainer: "hidden h-full items-center justify-end lg:flex",

  /* ======================================================
     AVATAR
     ======================================================

     Avatar utilisateur.

     - ring :
       contour léger
  ====================================================== */

  avatarContainer: "h-12 w-12 ring-2 ring-border/50",

  avatar: "object-cover",

  /* ======================================================
     AVATAR FALLBACK
     ======================================================

     Fallback affiché :
     - si pas d'image
     - ou chargement échoué
  ====================================================== */

  avatarFallback: "bg-surface-accent text-secondary",
};
