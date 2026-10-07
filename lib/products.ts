interface Rating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products?limit=5", {
    cache: "no-store",
  });

  console.log("FakeStore status:", res.status);
  console.log("FakeStore status text:", res.statusText);

  if (!res.ok) {
    throw new Error(`Failed to fetch products: ${res.status}`);
  }

  return res.json();
}

export async function getProductById(
  id: string
): Promise<Product | null> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    cache: "no-store",
  });

  console.log("FakeStore detail status:", res.status);
  console.log("FakeStore detail status text:", res.statusText);

  if (!res.ok) {
    throw new Error(`Failed to fetch product: ${res.status}`);
  }

  return res.json();
}