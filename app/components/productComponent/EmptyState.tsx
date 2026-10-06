import { PackageSearch } from "lucide-react";

export default function EmptyState() {
    return (
        <div className="flex flex-col items-center justify-center text-center py-20">
            <div className="bg-neutral-900 border border-neutral-800 rounded-full p-6 mb-5 animate-bounce">
                <PackageSearch size={48} className="text-neutral-500" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-200 mb-1">
                Produk tidak ditemukan
            </h3>
            <p className="text-sm text-neutral-500">
                Coba kata kunci lain atau periksa ejaan pencarianmu.
            </p>
        </div>
    );
}