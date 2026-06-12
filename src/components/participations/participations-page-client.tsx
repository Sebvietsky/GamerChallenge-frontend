"use client";

import { useEffect } from "react";

import { ParticipationList } from "./participation-list";

import { PageLoader } from "../ui/page-loader";
import { useParticipations } from "@/features/hooks/useParticipations";

export function ParticipationsPageClient() {
  const { participations, loading, hasMoreData, loadMoreParticipations } =
    useParticipations();

  // loading ne concerne que le fetch initial/filtre — pas la pagination
  const isInitialLoading = loading && participations.length === 0;

  useEffect(() => {
    if (isInitialLoading) return;
    const raw = sessionStorage.getItem("scroll-restore");
    if (!raw) return;
    try {
      const { from, y } = JSON.parse(raw);
      if (from === window.location.pathname) {
        sessionStorage.removeItem("scroll-restore");
        // Double rAF : attend que la liste restaurée soit peinte avant de
        // scroller, sinon la hauteur du document est encore insuffisante.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => window.scrollTo(0, y));
        });
      }
    } catch {}
  }, [isInitialLoading]);

  if (isInitialLoading) {
    return <PageLoader />;
  }

  return (
    <ParticipationList
      participations={participations}
      hasMoreData={hasMoreData}
      loadMoreParticipations={loadMoreParticipations}
    />
  );
}
