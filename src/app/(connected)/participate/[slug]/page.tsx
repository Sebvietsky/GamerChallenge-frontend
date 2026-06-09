import CreateParticipationForm from "@/components/common/create-participations/createForm-participations";

export default async function ParticipatePage({ params }: Props) {
  const { slug } = await params;

  return <CreateParticipationForm challengeSlug={slug} />;
}
