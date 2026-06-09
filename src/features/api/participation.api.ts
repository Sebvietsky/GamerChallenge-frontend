import { API_BASE_URL, fetchWithAuth } from "@/lib/api";
import { getErrorMessage } from "@/features/api/challenge.api";
import { CreateParticipationPayload } from "../types/createSchema";

export async function createParticipation(
  challengeSlug: string,
  payload: CreateParticipationPayload,
) {
  const response = await fetchWithAuth(
    `${API_BASE_URL}/challenges/${challengeSlug}/participations`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) throw new Error(await getErrorMessage(response));

  return response.json();
}
