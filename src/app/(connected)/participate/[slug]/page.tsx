import CreateParticipationForm from "@/components/common/create-participations/createForm-participations";
import { getChallengeBySlug } from "@/features/api/challenge.api";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

interface Props {
  params: Promise<{slug: string}>
}

export default async function ParticipatePage({ params }: Props) {
  const { slug } = await params;

  const challenge = await getChallengeBySlug(slug);

  if (!challenge) {
    return <div>Challenge introuvable</div>;
  }

  return <CreateParticipationForm challenge={challenge} />;
}
