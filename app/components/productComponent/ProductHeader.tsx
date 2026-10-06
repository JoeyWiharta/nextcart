"use client";
import { Search } from "lucide-react";

interface ProductHeaderProps {
    searchValue: string;
    onSearchChange: (value: string) => void;
}

export default function ProductHeader({
    searchValue,
    onSearchChange,
}: ProductHeaderProps) {
    return (
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
            <h1 className="text-2xl font-bold">Product Showcase</h1>
            <div className="relative w-full sm:w-80">
                <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
                />
                <input
                    type="text"
                    placeholder="Search product..."
                    value={searchValue}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg pl-10 pr-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
            </div>
        </div>
    );
}