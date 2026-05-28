export const sidebarStyles = {
  /* ======================================================
     SIDEBAR CONTAINER
     ======================================================

     - w-64 :
       largeur fixe = 256px

     - h-screen :
       prend toute la hauteur de l'écran

     - flex flex-col :
       organise les éléments verticalement

     - bg-surface :
       couleur provenant du design system

     - border-r :
       ajoute une bordure à droite

     - border-border/50 :
       utilise le token border avec 50% d'opacité
  ====================================================== */

  sidebar:
    "w-64 h-screen flex flex-col bg-background border-r border-border/50",

  /* ======================================================
     LOGO SECTION
     ======================================================

     Contient le logo en haut de la sidebar.

     - flex :
       active flexbox

     - items-center :
       centre verticalement

     - justify-center :
       centre horizontalement

     - h-24 :
       hauteur = 96px

     - border-b :
       bordure basse

     Cette section agit comme le "header"
     de la sidebar.
  ====================================================== */

  logo: "flex self-center justify-center h-24 border-b border-border/50",

  /* ======================================================
     NAVIGATION
     ======================================================

     Conteneur des liens de navigation.

     - flex-col :
       liens empilés verticalement

     - gap-2 :
       espace entre les liens

     - p-4 :
       padding interne = 16px
  ====================================================== */

  navigation: "flex flex-col gap-2 p-4",

  /* ======================================================
     NAV ITEM
     ======================================================

     Style d'un lien non actif.

     - flex items-center :
       aligne icône + texte horizontalement

     - gap-3 :
       espace entre icône et texte

     - px-4 py-3 :
       padding horizontal + vertical

     - rounded-2xl :
       coins très arrondis modernes

     - text-text-muted :
       couleur texte secondaire

     - hover:bg-surface-accent :
       fond au hover

     - transition-colors :
       animation couleur fluide
  ====================================================== */

  navItem:
    "flex items-center gap-3 px-4 py-3 rounded-2xl text-text-muted hover:bg-surface-accent transition-colors duration-200",

  /* ======================================================
     NAV ITEM ACTIVE
     ======================================================

     Style du lien actuellement actif.

     Différence principale :
     - fond violet clair
     - texte accentué
     - font-medium

     Cela permet de montrer visuellement
     la page actuelle.
  ====================================================== */

  navItemActive:
    "flex items-center gap-3 px-4 py-3 rounded-2xl bg-surface-accent text-secondary font-medium",
};
