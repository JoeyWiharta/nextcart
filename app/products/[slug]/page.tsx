import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getProductById } from "@/lib/products";
import FavoriteButton from "@/app/components/productComponent/FavoriteButton";
import PageContainer from "@/app/components/layoutComponent/PageContainer";

export default async function ProductDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = await getProductById(slug);

    return (
        <PageContainer>
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-sky-400 transition-colors duration-300 mb-8"
            >
                <ArrowLeft size={16} />
                Back to Products
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex justify-center">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-80 w-full object-cover rounded-xl border border-neutral-800"
                    />
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-xs uppercase tracking-wide text-sky-400 mb-2">
                        {product.category}
                    </p>

                    <h1 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-100">
                        {product.title}
                    </h1>

                    <p className="text-2xl font-semibold text-sky-400 mb-5">
                        ${product.price}
                    </p>

                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                        {product.description}
                    </p>

                    <p className="text-sm text-neutral-400 mb-6">
                        ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
                    </p>

                    <FavoriteButton productId={product.id} />
                </div>
            </div>
        </PageContainer>
    );
}