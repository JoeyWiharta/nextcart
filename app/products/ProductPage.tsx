"use client";
import { useState } from "react";
import type { Product } from "@/lib/products";
import ProductCard from "../components/productComponent/ProductCard";
import ProductHeader from "../components/productComponent/ProductHeader";
import EmptyState from "../components/productComponent/EmptyState";

export default function ProductPage({ products }: { products: Product[] }) {
  const [searchValue, setSearchValue] = useState("");
  const filtered = products.filter((p) => p.title.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <main className="max-w-[1920px] mx-auto p-6 w-full flex-1 flex flex-col">
      <ProductHeader
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />
      {filtered.length === 0 ? (
        <div className="flex-1 flex items-center justify-center">
          <EmptyState />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}