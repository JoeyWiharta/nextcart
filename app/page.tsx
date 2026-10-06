import { getProducts } from "@/lib/products";
import ProductPage from "./products/ProductPage";

export default async function Home() {
  const dataProducts = await getProducts()
  return (
    <ProductPage products={dataProducts} />

  );
}
