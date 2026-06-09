import CreateParticipationForm from "@/components/common/create-participations/createForm-participations";

interface Props {
  params: Promise<{slug: string}>
}

export default async function ParticipatePage({ params }: Props) {
  const { slug } = await params;

  return <CreateParticipationForm challengeSlug={slug} />;
}
