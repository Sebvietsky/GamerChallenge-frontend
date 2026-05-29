import { Banner } from "@/components/common/banner/banner";
import { Sidebar } from "@/components/common/sidebar/sidebar";

import type { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* SIDEBAR DESKTOP */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-1 flex-col">
        <Banner />

        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
