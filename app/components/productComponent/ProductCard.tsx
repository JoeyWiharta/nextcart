"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import type { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
const [isFavorite, setIsFavorite] = useState(false);
const [hydrated, setHydrated] = useState(false);

useEffect(() => {
  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  setIsFavorite(favorites.includes(product.id));
  setHydrated(true);
}, [product.id]);

useEffect(() => {
  if (!hydrated) return;
  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  if (isFavorite && !favorites.includes(product.id)) {
    localStorage.setItem(
      "favorites",
      JSON.stringify([...favorites, product.id])
    );
  } else if (!isFavorite && favorites.includes(product.id)) {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites.filter((id) => id !== product.id))
    );
  }
}, [isFavorite, product.id, hydrated]);

  return (
    <div className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden flex flex-col hover:border-neutral-700 hover:shadow-lg hover:shadow-black/40 transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={() => setIsFavorite(!isFavorite)}
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
        <h2 className="font-semibold text-sm mb-4 line-clamp-2 text-neutral-200">
          {product.title}
        </h2>
        <Link
          href={`/products/${product.id}`}
          className="mt-auto bg-neutral-800 border border-neutral-700 text-white text-center py-2 rounded-md hover:bg-neutral-700 transition-colors text-sm font-medium"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}