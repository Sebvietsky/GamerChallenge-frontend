import { Heart, 
  FileText,
  Pen,
  Trophy

} from "lucide-react";

const path = "/dashboard/"

export const dashboardLink = [
  {
    label:"favorites",
    path:`${path}favorites`,
    icon: Heart
  },
  {
    label: "myChallenges",
    path: `${path}challenges`,
    icon: Trophy
  },
  {
    label: "draft",
    path: `${path}draft`,
    icon: Pen
  },
  {
    label: "participations",
    path: `${path}participations`,
    icon: FileText
  }
]