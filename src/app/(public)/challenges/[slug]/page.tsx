interface ChallengeDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ChallengeDetailPage({
  params,
}: ChallengeDetailPageProps) {
  const { slug } = await params;

  return (
    <div className="space-y-8 py-8">
      <div>
        <h1 className="text-3xl font-bold">Challenge: {slug}</h1>
      </div>
      {/* Challenge detail content will go here */}
    </div>
  );
}
