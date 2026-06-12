import { FavoritesPageClient } from "@/components/favorites/favorites-page-client";

export default function FavoritesPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold">Favorites</h1>
        <p className="text-slate-600">Your favorite challenges</p>
      </div>
      <FavoritesPageClient />
    </div>
  );
}
