import { API_BASE_URL } from "@/lib/api";
import {
  MostActiveUser,
  MostAppreciatedParticipation,
  MostPlayedChallenge,
  PaginatedResponse,
} from "../types/classements.type";

export async function getMostActiveUsers() {
  const response = await fetch(`${API_BASE_URL}/leaderboard/bestActivUsers`, {
    credentials: "include",
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Impossible de récupérer les utilisateurs...");
  }

  const json: PaginatedResponse<MostActiveUser> = await response.json();

  return json.data;
}

export async function getMostPlayedChallenge() {
  const response = await fetch(`${API_BASE_URL}/leaderboard/bestChallenges`, {
    credentials: "include",
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Impossible de récupérer les challenges...");
  }

  const json: PaginatedResponse<MostPlayedChallenge> = await response.json();

  return json.data;
}

export async function getMostAppreciatedParticipation() {
  const response = await fetch(
    `${API_BASE_URL}/leaderboard/bestParticipations`,
    {
      credentials: "include",
      cache: "no-store",
    },
  );
  if (!response.ok) {
    throw new Error("Impossible de récupérer les participations...");
  }

  const json: PaginatedResponse<MostAppreciatedParticipation> =
    await response.json();

  return json.data;
}
