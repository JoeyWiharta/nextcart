"use client";
import { useEffect, useState } from "react";
import { getProducts, Product } from "@/lib/products";
import ProductPage from "./components/productComponent/ProductPage";
import { toast } from "sonner";

export default function Home() {
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProductData(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        toast.error("Failed to load products", { description: "Please try again later." });
      }
    };

    fetchProducts();
  }, []);

  return <ProductPage products={productData} />;
}

