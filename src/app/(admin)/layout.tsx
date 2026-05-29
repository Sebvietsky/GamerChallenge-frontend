import type { ReactNode } from "react";
import { ProtectedRoute } from "@/components/common/ProtectedRoute/ProtectedRoute";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <ProtectedRoute requiredRole="admin">
      <div className="min-h-screen bg-slate-950">
        <div className="flex">
          <aside className="w-64 bg-slate-900 border-r border-slate-800">
            {/* Admin sidebar will go here */}
          </aside>
          <main className="flex-1 text-white">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
