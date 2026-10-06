"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Star, ArrowLeft } from "lucide-react";

export default function ProductActions({ productId }: { productId: number }) {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const favorites: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setIsFavorite(favorites.includes(productId));
    setIsReady(true);
  }, [productId]);

  useEffect(() => {
    if (!isReady) return;
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
  }, [isFavorite, productId, isReady]);

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => router.back()}
        aria-label="Go back"
        className="flex items-center justify-center w-10 h-10 rounded-md border border-neutral-700 bg-neutral-900 text-neutral-300 hover:text-white hover:border-neutral-600 transition-colors"
      >
        <ArrowLeft size={18} />
      </button>

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
    </div>
  );
}