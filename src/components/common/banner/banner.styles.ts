export const bannerStyles = {
  /* ======================================================
     HEADER CONTAINER
     ======================================================

     - flex :
       active flexbox

     - items-center :
       centre verticalement les éléments

     - justify-end :
       pousse les éléments à droite

     - w-full :
       largeur complète

     - h-20 :
       hauteur = 80px

     - px-6 :
       padding horizontal = 24px

     - bg-surface/80 :
       utilise le token surface avec transparence

     - backdrop-blur-xl :
       crée un effet glassmorphism

     - border-b :
       bordure basse

     Le header reste dans le flow normal :
     PAS de fixed
     PAS de absolute

     Cela permet au layout flex de gérer
     correctement son placement.
  ====================================================== */

  container:
    "flex items-center justify-end w-full h-20 px-6 bg-background/80 backdrop-blur-xl border-b border-border/50",

  /* ======================================================
     AVATAR FALLBACK
     ======================================================

     Affiché lorsque l'utilisateur
     n'a pas d'image de profil.

     - bg-surface-accent :
       fond violet clair

     - text-secondary :
       couleur icône

     Le fallback contient :
     - soit une icône User
     - soit l'initiale du pseudo
  ====================================================== */
  avatar: "bg-brand-secondary",

  avatarFallback: "bg-surface-accent text-secondary",
};
