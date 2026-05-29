import { Heart, 
  FileText 

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
    icon: FileText
  },
  {
    label: "draft",
    path: `${path}draft`,
    icon: ""
  },
  {
    label: "participations",
    path: `${path}participations`,
    icon: ""
  }
]