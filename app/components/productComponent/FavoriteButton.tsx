"use client";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";

export default function FavoriteButton({ productId }: { productId: number }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Baca dari localStorage saat pertama kali mount
  useEffect(() => {
    const favorites: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setIsFavorite(favorites.includes(productId));
    setHydrated(true);
  }, [productId]);

  // Tulis ke localStorage HANYA setelah proses baca awal selesai
  useEffect(() => {
    if (!hydrated) return;
    const favorites: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    if (isFavorite && !favorites.includes(productId)) {
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, productId])
      );
    } else if (!isFavorite && favorites.includes(productId)) {
      localStorage.setItem(
        "favorites",
        JSON.stringify(favorites.filter((id) => id !== productId))
      );
    }
  }, [isFavorite, productId, hydrated]);

  return (
    <button
      onClick={() => setIsFavorite(!isFavorite)}
      className={`flex items-center gap-2 px-4 py-2 rounded-md border transition-colors ${
        isFavorite
          ? "bg-amber-400/10 border-amber-400 text-amber-400"
          : "bg-neutral-900 border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-600"
      }`}
    >
      <Star size={16} className={isFavorite ? "fill-amber-400" : ""} />
      {isFavorite ? "Favorited" : "Add to Favorite"}
    </button>
  );
}