import { Banner } from "@/components/common/banner";
import { Sidebar } from "@/components/common/sidebar";
import type { ReactNode } from "react";

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen">
      <Banner />

      <Sidebar />

      <main className="flex-1">{children}</main>
    </div>
  );
}
