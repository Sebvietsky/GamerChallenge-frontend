import { useEffect, useState } from "react";
import { DashboardModelView, DashboardResponse } from "../types/dashboard.type";
import { getInformationDashboard } from "../api/dashboard.api";
import { mapDashboardData } from "@/lib/dashboard.mapper";
import { useAuth } from "./useAuth";

export function useDashboard() {
  const [dashboard, setDashboard] = useState<DashboardModelView | null>(null);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) return;
    async function fetchUserDashboardData() {
      try {
        const resRawDashboard: DashboardResponse =
          await getInformationDashboard();

        setDashboard(mapDashboardData(resRawDashboard));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchUserDashboardData();
  }, [isAuthenticated]);

  return {
    dashboard,
    loading,
  };
}
