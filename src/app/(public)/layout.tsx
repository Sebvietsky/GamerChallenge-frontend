import type { ReactNode } from "react";

interface PublicLayoutProps {
  children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Public header/navbar will go here */}
      <main className="flex-1">{children}</main>
      {/* Public footer will go here */}
    </div>
  );
}
