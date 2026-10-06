import { getProductById } from "@/lib/products";
import FavoriteButton from "@/app/components/productComponent/FavoriteButton";

export default async function ProductDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = await getProductById(slug);

    return (
        <main className="max-w-[1920px] mx-auto px-6 py-10 flex-1 w-full">
            <div className="max-w-4xl flex flex-col md:flex-row gap-10">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-80 w-full md:w-80 object-cover rounded-xl border border-neutral-800"
                />
                <div className="flex-1">
                    <p className="text-xs uppercase tracking-wide text-neutral-500 mb-2">
                        {product.category}
                    </p>
                    <h1 className="text-2xl font-bold mb-3 text-neutral-100">
                        {product.title}
                    </h1>
                    <p className="text-xl font-semibold text-sky-400 mb-4">
                        ${product.price}
                    </p>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-5">
                        {product.description}
                    </p>
                    <p className="text-sm text-neutral-400 mb-6">
                        ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
                    </p>
                    <FavoriteButton productId={product.id} />
                </div>
            </div>
        </main>
    );
}