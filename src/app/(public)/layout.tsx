import { Banner } from "@/components/common/banner/banner";
import { Sidebar } from "@/components/common/sidebar/sidebar";

import type { ReactNode } from "react";

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Banner />

        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
