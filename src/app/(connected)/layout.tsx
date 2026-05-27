import type { ReactNode } from "react";

interface ProtectedLayoutProps {
  children: ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Sidebar/Navigation for protected pages will go here */}
      <div className="flex">
        <aside className="w-64 bg-slate-50 border-r">
          {/* Sidebar content */}
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
