import { getProducts } from "@/lib/products";
import ProductPage from "./components/productComponent/ProductPage";

export default async function Home() {
  const dataProducts = await getProducts()
  return (
    <ProductPage products={dataProducts} />

  );
}
