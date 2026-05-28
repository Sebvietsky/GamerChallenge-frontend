import { Banner } from "@/components/common/banner/banner";
import { Sidebar } from "@/components/common/sidebar/sidebar";
import type { ReactNode } from "react";

export default function PublicLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <div className="h-20">
        <Banner />
      </div>
      <Sidebar />
      {children}
    </>
  );
}
