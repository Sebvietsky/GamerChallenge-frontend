"use client";
import { useContext } from "react";
import { SearchContext } from "../context/Search.Context";

export function useSearch() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch doit être utilisé dans un SearchProvider");
  }

  return context;
}
