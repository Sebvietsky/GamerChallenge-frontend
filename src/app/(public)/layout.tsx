import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";

const frauncesHeading = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading"
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body"
})

export const metadata: Metadata = {
  title: "GamerChallenges",
  description:
    "Participate in epic gaming challenges and compete on the leaderboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={cn(
        "h-full",
        "antialiased",
        frauncesHeading.variable,
        plusJakarta.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
