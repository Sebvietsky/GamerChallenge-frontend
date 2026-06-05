"use client";

import {
  ClassementType,
  MostActiveUser,
  MostAppreciatedParticipation,
  MostPlayedChallenge,
} from "@/features/types/classements.type";

import {
  getMostActiveUsers,
  getMostAppreciatedParticipation,
  getMostPlayedChallenge,
} from "../api/classement.api";

import { useEffect, useState } from "react";

export function useClassements() {
  const [filter, setFilter] = useState<ClassementType>(ClassementType.UTILISATEURS)
  const [users, setUsers] = useState<MostActiveUser[]>([]);
  const [challenges, setChallenges] = useState<MostPlayedChallenge[]>([]);
  const [participations, setParticipations] = useState<
    MostAppreciatedParticipation[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        setIsLoading(true);

        switch (filter) {
          case "users": {
            const usersData = await getMostActiveUsers();
            setUsers(usersData);
            break;
          }

          case "challenges": {
            const challengesData = await getMostPlayedChallenge();
            setChallenges(challengesData);
            break;
          }

          case "participations": {
            const participationsData = await getMostAppreciatedParticipation();
            setParticipations(participationsData);
            break;
          }
        }
      } catch (error) {
        console.error("ERREUR USECLASSEMENTS", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, [filter]);

  return { filter, setFilter, users, challenges, participations, isLoading };
}
