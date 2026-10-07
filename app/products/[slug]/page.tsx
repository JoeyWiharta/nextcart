import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";

import { getProductById } from "@/lib/products";
import FavoriteButton from "@/app/components/productComponent/FavoriteButton";
import PageContainer from "@/app/components/layoutComponent/PageContainer";

interface ProductDetailProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProductDetail({ params }: ProductDetailProps) {
    const { slug } = await params;
    const product = await getProductById(slug);

    if (!product) {
        return (
            <PageContainer>
                <div className="py-24 text-center">
                    <p className="text-neutral-400 mb-6">
                        Product not found or failed to load.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full border border-neutral-800 py-2 pl-3 pr-4 text-sm text-neutral-400 transition-colors duration-300 hover:border-neutral-700 hover:text-sky-400"
                    >
                        <ArrowLeft size={16} />
                        Back to Products
                    </Link>
                </div>
            </PageContainer>
        );
    }

    const rating = product.rating?.rate ?? 0;
    const ratingPercentage = `${(rating / 5) * 100}%`;

    return (
        <PageContainer>
            <div className="py-6">
                <div className="mb-8 flex items-center gap-3">
                    <Link
                        href="/"
                        className="group flex items-center gap-2 rounded-full border border-neutral-800 py-2 pl-3 pr-4 text-sm text-neutral-400 transition-colors duration-300 hover:border-neutral-700 hover:text-sky-400"
                    >
                        <ArrowLeft
                            size={16}
                            className="transition-transform duration-300 group-hover:-translate-x-0.5"
                        />
                        Back to Products
                    </Link>
                </div>

                <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 md:grid-cols-2">
                    <div className="group flex items-center justify-center overflow-hidden bg-neutral-900/50 p-6 md:p-10">
                        <div className="flex h-105 w-full items-center justify-center overflow-hidden rounded-xl md:h-120">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    <div className="flex items-center p-8 md:p-12 lg:p-16">
                        <div className="w-full max-w-xl">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                                {product.category}
                            </p>

                            <h2 className="mb-5 text-3xl font-bold leading-tight text-neutral-100 md:text-4xl">
                                {product.title}
                            </h2>

                            <p className="mb-8 text-3xl font-semibold text-sky-400">
                                ${product.price}
                            </p>

                            <div className="mb-8 flex items-center gap-8 border-y border-neutral-800 py-5">
                                <div>
                                    <p className="mb-2 text-sm text-neutral-500">Rating</p>
                                    <div className="flex items-center gap-2">
                                        <div className="relative flex">
                                            <div className="flex text-neutral-700">
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <Star
                                                        key={index}
                                                        size={20}
                                                        className="fill-neutral-800"
                                                    />
                                                ))}
                                            </div>

                                            <div
                                                className="absolute left-0 top-0 flex overflow-hidden text-yellow-400"
                                                style={{ width: ratingPercentage }}
                                            >
                                                {Array.from({ length: 5 }).map((_, index) => (
                                                    <Star
                                                        key={index}
                                                        size={20}
                                                        className="shrink-0 fill-yellow-400"
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <span className="text-base text-neutral-300">{rating}</span>
                                    </div>
                                </div>

                                <div className="h-8 w-px bg-neutral-800" />

                                <div>
                                    <p className="mb-2 text-sm text-neutral-500">Reviews</p>
                                    <p className="text-base text-neutral-200">
                                        {product.rating?.count} reviews
                                    </p>
                                </div>
                            </div>

                            <p className="mb-10 text-base leading-7 text-neutral-400">
                                {product.description}
                            </p>
                            <FavoriteButton productId={product.id} />
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}