import CreateParticipationForm from "@/components/common/create-participations/createForm-participations"
import { getMe } from "@/features/api/auth.api.server"
import { getParticipationsBySlug } from "@/features/api/participation.api"
import { redirect } from "next/navigation"

interface Props {
  params: Promise<{slug: string}>
}

export default async function EditParticipation({params}: Props) {
  const { slug } = await params

  const data = await getParticipationsBySlug(slug)

  let me
  try {
    me = await getMe()
  } catch {
    redirect("/login")
  }

  const user = me?.userWithoutPassword
  
  if(!data) return <h1>Challenge Introuvable</h1>
  if(!me) redirect("/")
  
  if( user?.username !== data.user.username && user?.role !== "admin") {
    redirect(`/participations/${data.slug}`)
  }

  return <CreateParticipationForm challenge={data.challenge} participation={data} />


}