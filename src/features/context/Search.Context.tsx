"use client";

import { createContext, useState, type ReactNode } from "react";
import { SearchContextType } from "@/features/types/search.type";

export const SearchContext = createContext<SearchContextType | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
