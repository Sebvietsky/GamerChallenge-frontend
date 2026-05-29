import type { ReactNode } from "react";
import { ProtectedRoute } from "@/components/common/ProtectedRoute/ProtectedRoute";

interface unauthorizedLayoutProps {
  children: ReactNode;
}

export default function unauthorizedLayout({ children }: unauthorizedLayoutProps) {
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-linear-to-b from-primary to-secondary">
      {children}
    </main>
  );
}