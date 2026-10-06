import { ShoppingCart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-neutral-950 border-t border-neutral-800">
            <div className="max-w-[1920px] mx-auto px-6 py-6 flex items-center justify-end">
                <p className="text-sm text-neutral-500">
                    © {new Date().getFullYear()} NextCart. All rights reserved.
                </p>
            </div>
        </footer>
    );
}