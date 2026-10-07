"use client";
import { useEffect, useState } from "react";
import { getProducts, Product } from "@/lib/products";
import ProductPage from "./components/productComponent/ProductPage";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }

    fetchProducts();
  }, []);

  return <ProductPage products={products} />;
}