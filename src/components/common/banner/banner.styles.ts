export const bannerStyles = {
  /* ======================================================
     COMMON CONTAINER
     ======================================================

     Conteneur principal de la banner.

     - w-full :
       prend toute la largeur disponible

     - h-20 :
       hauteur fixe = 80px

     - px-4 md:px-6 :
       padding responsive

     - bg-background/80 :
       fond semi-transparent

     - backdrop-blur-xl :
       effet glassmorphism léger

     - border-b :
       bordure basse subtile

     Cette banner est utilisée sur
     pratiquement toutes les pages.
  ====================================================== */

  container:
    "w-full h-20 px-4 md:px-6 bg-background/80 backdrop-blur-xl border-b border-border/50",

  /* ======================================================
     MOBILE CONTAINER
     ======================================================

     Structure interne de la version mobile.

     - flex :
       active flexbox

     - items-center :
       centre verticalement les éléments

     - justify-between :
       espace le menu burger et l'avatar

     - h-full :
       prend toute la hauteur du header

     Visible uniquement en mobile/tablette.
  ====================================================== */

  mobileContainer: "flex items-center justify-between w-full h-full",

  /* ======================================================
     MOBILE MENU BUTTON
     ======================================================

     Bouton burger affiché uniquement
     en version mobile.

     - h-11 w-11 :
       taille tactile confortable

     - rounded-2xl :
       coins arrondis cohérents avec la DA

     - bg-surface :
       utilise la couleur surface du design system

     - hover:bg-surface-accent :
       feedback visuel au hover

     Ce bouton ouvre le Sheet shadcn
     contenant la sidebar mobile.
  ====================================================== */

  mobileMenuButton:
    "flex items-center justify-center h-11 w-11 rounded-2xl border border-border/50 bg-surface text-text hover:bg-surface-accent transition-colors duration-200",

  /* ======================================================
     MOBILE SIDEBAR
     ======================================================

     Style du SheetContent shadcn.

     - w-[300px] :
       largeur du drawer mobile

     - border-none :
       retire les styles par défaut

     - bg-transparent :
       laisse la sidebar gérer son fond

     - p-0 :
       supprime le padding interne natif
  ====================================================== */

  mobileSidebar:
    "w-[85vw] max-w-[320px] bg-transparent border-none p-0 shadown-none",

  /* ======================================================
     DESKTOP CONTAINER
     ======================================================

     Structure desktop de la banner.

     - flex :
       active flexbox

     - justify-end :
       pousse l'avatar à droite

     - items-center :
       alignement vertical

     - h-full :
       prend toute la hauteur disponible

     Visible uniquement sur desktop.
  ====================================================== */

  desktopContainer: "flex items-center justify-end w-full h-full",

  /* ======================================================
     AVATAR CONTAINER
     ======================================================

     Conteneur principal de l'avatar.

     - h-11 w-11 :
       taille cohérente avec les boutons UI

     - border :
       contour subtil utilisant les tokens

     Sert d'accès rapide :
     - connexion
     - profil
     - dashboard
  ====================================================== */

  avatarContainer: "h-11 w-11 border border-border/50",

  /* ======================================================
     AVATAR IMAGE
     ======================================================

     Image utilisateur.

     - object-cover :
       évite les déformations d'image

     - bg-brand-secondary :
       fallback couleur branding
  ====================================================== */

  avatar: "bg-brand-secondary object-cover",

  /* ======================================================
     AVATAR FALLBACK
     ======================================================

     Affiché lorsqu'aucun avatar
     utilisateur n'est disponible.

     - bg-surface-accent :
       fond violet clair

     - text-secondary :
       couleur cohérente avec la charte graphique
  ====================================================== */

  avatarFallback: "bg-surface-accent text-secondary",
};
