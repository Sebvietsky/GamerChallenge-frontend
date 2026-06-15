import { useEffect, useState } from "react";
import { Difficulties } from "../types/challenge.type";
import { getDifficulties } from "../api/difficulties.api";

export function useDifficulties() {
  const [difficulties, setDifficulties] = useState<Difficulties[] | null>(null);
  const [loadingDifficulties, setLoadingDifficulties] = useState(true);

  useEffect(() => {
    async function fetchDifficulties() {
      try {
        const data = await getDifficulties();
        setDifficulties(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingDifficulties(false);
      }
    }
    fetchDifficulties();
  }, []);

  return {
    difficulties,
    loadingDifficulties,
  };
}
