import { EditChallenge } from "@/components/challenges/edit-challenge/EditForm";
import { getMe } from "@/features/api/auth.api.server";
import { getChallengeBySlug } from "@/features/api/challenge.api";
import { redirect } from "next/navigation";

export default async function EditChallengePage({params}: {params: Promise<{slug: string}>}) {
  const { slug } = await params;
  const challenge = await getChallengeBySlug(slug);
  let me
  try{
    me = await getMe()
  } catch {
    redirect("/login");
  }

  const user = me?.userWithoutPassword
  
  if(!challenge) redirect("/");
  if(!me) redirect("/");
  if(user?.username !== challenge?.user.username && user?.role !== "admin") {
    redirect(`/challenges/${slug}`)
  }

  return (
    <div className="space-y-8 py-8 px-8 w-full flex flex-col overflow-hidden">
      <div>
        <h1 className="text-3xl font-bold">Modifier le Challenge</h1>
      </div>
      <EditChallenge challenge={challenge} />
    </div>
  );
}