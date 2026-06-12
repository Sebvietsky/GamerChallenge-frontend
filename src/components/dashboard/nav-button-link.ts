import { Heart, FileText, Pen, Trophy } from "lucide-react";

const path = "/dashboard/";

export const dashboardLink = [
  {
    label: "Mes Favoris",
    path: `${path}favorites`,
    icon: Heart,
  },
  {
    label: "Mes Challenges",
    path: `${path}challenges`,
    icon: Trophy,
  },
  {
    label: "Mes Participations",
    path: `${path}participations`,
    icon: FileText,
  },
  {
    label: "Mes Brouillons",
    path: `${path}draft`,
    icon: Pen,
  },
];
