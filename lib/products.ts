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

// ---------- Using dummy because server fakestoreapi.com is down ----------
const dummyProducts: Product[] = [
  {
    id: 1,
    title: "Classic Travel Backpack",
    price: 109.95,
    description:
      "Contoh deskripsi produk dummy karena API sedang tidak merespons.",
    category: "men's clothing",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
    rating: { rate: 4.5, count: 120 },
  },
  {
    id: 2,
    title: "Plain Cotton T-Shirt",
    price: 22.3,
    description: "Contoh deskripsi produk dummy kedua.",
    category: "men's clothing",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
    rating: { rate: 4.1, count: 259 },
  },
  {
    id: 3,
    title: "Winter Denim Jacket",
    price: 55.99,
    description: "Contoh deskripsi produk dummy ketiga.",
    category: "women's clothing",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80",
    rating: { rate: 4.7, count: 500 },
  },
  {
    id: 4,
    title: "Minimalist Wrist Watch",
    price: 199.0,
    description: "Contoh deskripsi produk dummy keempat.",
    category: "jewelery",
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&q=80",
    rating: { rate: 4.3, count: 80 },
  },
  {
    id: 5,
    title: "Adjustable Laptop Stand",
    price: 45.5,
    description: "Contoh deskripsi produk dummy kelima.",
    category: "electronics",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
    rating: { rate: 4.0, count: 150 },
  },
];

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=5", {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("API not ok");
    const data = await res.json();
    if (!data || data.length === 0) throw new Error("Empty response");
    return data;
  } catch (error) {
    console.warn("Fetch gagal, pakai dummy data:", error);
    return dummyProducts;
  }
}

export async function getProductById(id: string): Promise<Product> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("API not ok");
    const data = await res.json();
    if (!data) throw new Error("Empty response");
    return data;
  } catch (error) {
    console.warn("Fetch gagal, pakai dummy data:", error);
    return (
      dummyProducts.find((p) => p.id === Number(id)) || dummyProducts[0]
    );
  }
}