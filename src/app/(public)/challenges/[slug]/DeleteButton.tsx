"use client"

import { Button } from "@/components/ui/button"
import { deleteChallenge } from "@/features/api/challenge.api"
import { Trash } from "lucide-react"
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  slug: string
}

export function DeleteButton({slug}: Props) {
  const router = useRouter()
  
  const handleDelete = async () => {
    try {
      await deleteChallenge(slug)
      toast.success("Challenge supprimé !")
      router.back()
    } catch {
      toast.error("Erreur lors de la suppression")
    }
  }
  return <Button type="button" onClick={handleDelete} ><Trash />Supprimer</Button>
}
