"use client"
import { useState } from "react"
import { likeToggle } from "../api/challenge.api"

interface ToggleService {
  add: (slug: string) => Promise<void>;
  remove: (slug: string) => Promise<void>;
}

interface UseToggleProps {
  initialLiked: boolean;
  initialCount: number;
  slug: string;
  service: ToggleService;
}

export const useToggle = ({ initialLiked, initialCount, slug, service}: UseToggleProps) => {
  
  const [ isLiked, setIsLiked ] = useState(initialLiked);
  const [ likeCount, setLikeCount ] = useState(initialCount);
  const [ isPending, setIsPending] = useState(false)
  
  
  const toggleLike = async () => {
    if (isPending) return

    const newLiked = !isLiked;
    setIsLiked(newLiked);
    setLikeCount(prev => newLiked ? prev + 1 : prev -1);
    setIsPending(true)

    try {
      if(newLiked) {
        await service.add(slug);
      } else {
        await service.remove(slug)
      }
    } catch {
      setIsLiked(!newLiked)
      setLikeCount(prev => newLiked ? prev - 1 : prev +1 )
    } finally {
      setIsPending(false)
    }
  };

  return { isLiked, likeCount, toggleLike, isPending}
}