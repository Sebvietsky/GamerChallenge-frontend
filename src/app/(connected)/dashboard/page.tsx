"use client";

import Image from "next/image";
import { User } from "lucide-react";
import { useAuth } from "@/features/hooks/useAuth";
import { NavButton } from "@/components/dashboard/nav-button";
import { dashboardLink } from "@/components/dashboard/nav-button-link";
import { dashboardStyles as styles } from "@/styles/dashboard.styles";

export default function DashboardPage() {
  const { user } = useAuth();
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-slate-600">Welcome to your dashboard</p>
      </div>
      <div className={styles.profil}>
        {user?.userWithoutPassword.profilePicture ? (
          <Image
            src={user.userWithoutPassword.profilePicture}
            alt="Photo de profil"
            width={80}
            height={80}
            className="rounded-full"
          />
        ) : (
          <div className="w-50 h-50 rounded-full bg-muted flex items-center border-2 border-text-soft justify-center">
            <User className="w-30 h-30 text-muted-foreground" />
          </div>
        )}
        {user?.userWithoutPassword.username ? (
          <p className={styles.username}>
            {user.userWithoutPassword.username}{" "}
            {user.userWithoutPassword.country}
          </p>
        ) : (
          <p className={styles.username}>Username not found ⛔</p>
        )}
        <nav>
          {dashboardLink.map((link) => {
            return <NavButton key={link.path} {...link} />;
          })}
        </nav>
        <div className={styles.bio}>
          <h2>Biographie</h2>
          {user?.userWithoutPassword.bio ? (
            <p>{user.userWithoutPassword.bio}</p>
          ) : (
            <p>{"C'est un peu vide ici..."}</p>
          )}
        </div>
      </div>
    </div>
  );
}
