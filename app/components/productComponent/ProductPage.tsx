"use client";
import { useState } from "react";
import type { Product } from "@/lib/products";
import ProductCard from "./ProductCard";
import ProductHeader from "./ProductHeader";
import EmptyState from "./EmptyState";
import PageContainer from "../layoutComponent/PageContainer";

export default function ProductPage({ products }: { products: Product[] }) {
  const [searchValue, setSearchValue] = useState("");
  const filtered = products.filter((p) => p.title.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <PageContainer>
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
    </PageContainer>
  );
}