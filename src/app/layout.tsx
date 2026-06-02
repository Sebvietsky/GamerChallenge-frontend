import type { ReactNode } from "react";
import type { Metadata } from "next";
import { AuthProvider } from "@/features/context/AuthContext";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SearchProvider } from "@/features/context/Search.Context";

const frauncesHeading = Fraunces({
  subsets: ["latin"],
  variable: "--font-frances",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "GamerChallenges",
  description:
    // TODO Change métadata
    "Participate in epic gaming challenges and compete on the leaderboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="fr"
      data-scroll-behavior="smooth"
      className={cn(
        "h-full",
        "antialiased",
        frauncesHeading.variable,
        plusJakarta.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <SearchProvider>{children}</SearchProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
