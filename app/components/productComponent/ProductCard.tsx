"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import type { Product } from "@/lib/products";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setIsFavorite(favorites.includes(product.id));
  }, [product.id]);

  const handleFavorite = () => {
    const favorites: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    if (favorites.includes(product.id)) {
      const updatedFavorites = favorites.filter(
        (id) => id !== product.id
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
      toast.success("Removed from favorites");
    } else {
      const updatedFavorites = [...favorites, product.id];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(true);
      toast.success("Added to favorites");
    }
  };

  return (
    <div className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden flex flex-col hover:border-neutral-700 hover:shadow-lg hover:shadow-black/40 transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <button
          onClick={handleFavorite}
          aria-label="Toggle favorite"
          className="absolute top-3 right-3 bg-neutral-950/70 backdrop-blur-sm border border-neutral-800 w-9 h-9 flex items-center justify-center rounded-full hover:bg-neutral-900 transition-colors"
        >
          <Star
            size={16}
            className={
              isFavorite
                ? "fill-amber-400 text-amber-400"
                : "text-neutral-300"
            }
          />
        </button>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h2 className="font-semibold text-base mb-4 line-clamp-2 text-neutral-200">
          {product.title}
        </h2>

        <Link
          href={`/products/${product.id}`}
          className="mt-auto w-full border border-neutral-700 text-neutral-300 flex items-center justify-center gap-2 py-2 rounded-md hover:border-sky-400 hover:text-sky-400 transition-colors duration-300 text-sm font-semibold"
        >
          Detail Product
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}