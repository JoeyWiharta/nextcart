"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { toast } from "sonner";

interface FavoriteButtonProps {
  productId: number;
}

export default function FavoriteButton({
  productId,
}: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    setIsFavorite(favorites.includes(productId));
  }, [productId]);

  const handleFavorite = () => {
    const favorites: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    if (favorites.includes(productId)) {
      const updatedFavorites = favorites.filter(
        (id) => id !== productId
      );

      localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );

      setIsFavorite(false);
      toast.success("Removed from favorites");
    } else {
      const updatedFavorites = [...favorites, productId];

      localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );

      setIsFavorite(true);
      toast.success("Added to favorites");
    }
  };

  return (
    <button
      onClick={handleFavorite}
      className={`inline-flex items-center justify-center gap-2 w-fit border px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300 ${isFavorite
        ? "border-sky-400 text-sky-400"
        : "border-neutral-700 text-neutral-300 hover:border-sky-400 hover:text-sky-400"
        }`}
    >
      <Star
        size={16}
        className={isFavorite ? "fill-sky-400" : ""}
      />

      {isFavorite ? "Remove from Favorites" : "Add to Favorite"}
    </button>
  );
}