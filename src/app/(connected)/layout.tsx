import type { ReactNode } from "react";
import { Sidebar } from "@/components/common/sidebar/sidebar";
import { Banner } from "@/components/common/banner/banner";
import { ProtectedRoute } from "@/components/common/ProtectedRoute/ProtectedRoute";

interface ProtectedLayoutProps {
  children: ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-background">
            <div className="hidden lg:block">
              <Sidebar />
            </div>
      
            <div className="flex flex-1 flex-col">
            <Banner />
              <main className="flex-1 lg:ml-64 pt-20">{children}</main>
            </div>
          </div>
    </ProtectedRoute>
  );
}
