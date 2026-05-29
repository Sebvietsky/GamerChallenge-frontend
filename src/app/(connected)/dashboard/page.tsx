"use client"

import Image from "next/image"
import { User } from "lucide-react";
import { useAuth } from "@/features/auth/hooks/useAuth";
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
        {user?.profilPicture ? (
          <Image
            src={user.profilPicture}
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
        {user?.username ? (
          <p className={styles.username}>{user.username}{" "}{user.country}</p>
        ): (
          <p className={styles.username}>Username not found ⛔</p>
        )}
        <div className={styles.bio}>
        <h3>Biographie</h3>
        {user?.bio ? (
            <p>{user.bio}</p>
        ): (
          <p>{"C'est un peu vide ici..."}</p>
        )}
        </div>
      </div>
    </div>
  );
}
