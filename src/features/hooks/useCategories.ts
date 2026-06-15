import { useEffect, useState } from "react";
import { ChallengeCategories } from "../types/challenge.type";
import { getCategories } from "../api/categories.api";

export function useCategories() {
  const [categories, setCategories] = useState<ChallengeCategories[] | null>(
    null,
  );
  const [loadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoadingCategories(false);
      }
    }
    fetchCategories();
  }, []);

  return {
    categories,
    loadingCategories,
  };
}
