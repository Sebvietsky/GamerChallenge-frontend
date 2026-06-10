"use client"

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";

interface ButtonLikeProps {
  initialVotes: number;
  initialLiked?: boolean;
}

export default function ButtonLike({ initialVotes, initialLiked = false }: ButtonLikeProps) {
  const [isLiked, setIsLiked] = useState(initialLiked);
  const [votes, setVotes] = useState(initialVotes);

  const handleLike = async () => {
    setIsLiked(!isLiked);
    setVotes(isLiked ? votes - 1 : votes + 1);
  }

  return (
    <div className="self-end lg:self-start">
      <div className="flex items-center gap-2 lg:mr-6">
        <Button 
          type="button" 
          onClick={handleLike} 
          variant={!isLiked ? "iconButtonToggle" : "iconButton"}
        >
          <Heart />
        </Button>
        <span>{votes} {votes > 1 ? "votes" : "vote"}</span>
      </div>
    </div>
  )
}