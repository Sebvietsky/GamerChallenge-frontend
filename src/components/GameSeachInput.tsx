"use client";

import { useState, useEffect, useRef } from "react";
import { API_BASE_URL } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

interface Game {
  igdbId: number;
  name: string;
  coverUrl: string | null;
  studio: string | null;
  platform: string | null;
}

interface GameSearchInputProps {
  value: number | undefined;
  onChange: (id: number) => void;
}

export function GameSearchInput({ value, onChange }: GameSearchInputProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedName, setSelectedName] = useState("");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fermer la liste si clic en dehors
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Debounce de la recherche
  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setOpen(false);
      return;
    }

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/games/search?q=${encodeURIComponent(query)}`)
        const json = await res.json();
        setResults(json.data);
        setOpen(true);
      } catch (err) {
        console.error("Erreur recherche IGDB", err);
      } finally {
        setLoading(false);
      }
    }, 400);
  }, [query]);

  const handleSelect = (game: Game) => {
    onChange(game.igdbId);
    setQuery(game.name);
    setOpen(false);
    setResults([]);
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <Input
          placeholder="Rechercher un jeu..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (value) onChange(0); // reset si l'utilisateur retape
          }}
        />
        {loading && (
          <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 animate-spin text-muted-foreground" />
        )}
      </div>

      {open && results.length > 0 && (
        <ul className="absolute z-50 mt-1 w-full bg-popover border rounded-md shadow-md max-h-60 overflow-y-auto">
          {results.map((game) => (
            <li
              key={game.igdbId}
              onClick={() => handleSelect(game)}
              className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-accent text-sm"
            >
              {game.coverUrl && (
                <img
                  src={game.coverUrl}
                  alt={game.name}
                  className="w-8 h-10 object-cover rounded"
                />
              )}
              {game.name}
            </li>
          ))}
        </ul>
      )}

      {open && !loading && results.length === 0 && query.length >= 2 && (
        <div className="absolute z-50 mt-1 w-full bg-popover border rounded-md shadow-md px-3 py-2 text-sm text-muted-foreground">
          Aucun jeu trouvé
        </div>
      )}
    </div>
  );
}