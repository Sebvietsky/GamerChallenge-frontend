import { DashboardPageClient } from "@/components/dashboard/dashboard-page-client";
import { getInformationDashboard } from "@/features/api/dashboard.api";
import { mapDashboardData } from "@/lib/dashboard.mapper";

export default async function DashboardPage() {
  const rawDashboard = await getInformationDashboard();
  const dashboard = mapDashboardData(rawDashboard);

  return <DashboardPageClient dashboard={dashboard} />;
}
