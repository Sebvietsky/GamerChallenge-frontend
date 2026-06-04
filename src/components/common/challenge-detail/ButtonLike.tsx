"use client"

import { Heart, Star } from "lucide-react";
import { challengeDetail as styles } from "@/styles/challenge-detail";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function ButtonLike() {
  const [like, setLike] = useState(false);
  const [favorite, setFavorite] = useState(false);
  
  return (
    <div className={styles.buttonContainer}>
      <Button onClick={() => {setLike(!like)}} variant={!like ? "iconButtonToggle" : "iconButton"}>
        <Heart />
      </Button>
      <Button onClick={() => {setFavorite(!favorite)}} variant={!favorite ? "iconButtonToggle" : "iconButton"}>
        <Star />
      </Button>
    </div>
  );
}
