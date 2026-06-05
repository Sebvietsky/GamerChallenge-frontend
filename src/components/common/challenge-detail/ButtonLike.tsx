"use client";

import { Heart, Star } from "lucide-react";
import { challengeDetail as styles } from "@/styles/challenge-detail";
import { Button } from "@/components/ui/button";
import { useToggle } from "@/features/hooks/useToggle";
import { favoriteToggle, likeToggle } from "@/features/api/challenge.api";

interface ButtonProps {
  slug: string;
  initialLiked: boolean;
  initialCount: number;
}

export const LikeButton = ({ slug, initialLiked, initialCount }: ButtonProps) => {
  const { isLiked, toggleLike, isPending } = useToggle({
    service: likeToggle,
    slug,
    initialLiked,
    initialCount,
  });

  return (
    <Button
      onClick={toggleLike}
      variant={!isLiked ? "iconButtonToggle" : "iconButton"}
      disabled={isPending}
    >
      <Heart />
    </Button>
  );
};

export const FavoriteButton = ({ slug, initialLiked, initialCount }: ButtonProps) => {
  const { isLiked, toggleLike, isPending } = useToggle({
    service: favoriteToggle,
    slug,
    initialLiked,
    initialCount,
  });

  return (
    <Button
      onClick={toggleLike}
      variant={!isLiked ? "iconButtonToggle" : "iconButton"}
      disabled={isPending}
    >
      <Star />
    </Button>
  );
};

// export function ButtonLike() {
//   const [like, setLike] = useState(false);
//   const [favorite, setFavorite] = useState(false);

//   return (
//     <div className={styles.buttonContainer}>
//       <Button onClick={() => {setLike(!like)}} variant={!isLiked ? "iconButtonToggle" : "iconButton"}>
//         <Heart />
//       </Button>
//       <Button onClick={() => {setFavorite(!favorite)}} variant={!isLiked ? "iconButtonToggle" : "iconButton"}>
//         <Star />
//       </Button>
//     </div>
//   );
// }
