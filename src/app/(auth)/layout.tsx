import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-primary to-secondary">
      <div className="w-full max-w-md rounded-lg border bg-background/45">{children}</div>
    </div>
  );
}
