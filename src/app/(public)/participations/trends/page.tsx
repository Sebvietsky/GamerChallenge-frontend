import { ParticipationsPageClient } from "@/components/participations/participations-page-client";

export default async function ParticipationsPage() {
  return (
    <div className="space-y-8 p-8">
      <h1 className="text-3xl font-bold">Les Participations à la une</h1>
      <ParticipationsPageClient />
    </div>
  );
}
