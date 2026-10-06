"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ShoppingCart, Menu, ChevronRight } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-neutral-950 text-white sticky top-0 z-50 border-b border-neutral-800">
                <div className="max-w-[1920px] mx-auto px-6 py-4 flex items-center justify-between ">
                    <Link
                        href={navLinks[0].href}
                        className="flex items-center gap-2 font-medium text-lg tracking-wide"
                    >
                        <span className="text-sky-400 w-8 h-8 flex items-center justify-center rounded-lg">
                            <ShoppingCart size={18} strokeWidth={3} />
                        </span>
                        NextCart
                    </Link>

                    <div className="hidden sm:flex gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative py-1 transition-colors ${pathname === link.href
                                    ? "text-white font-medium after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-full after:bg-sky-400"
                                    : "text-neutral-400 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="sm:hidden p-2 text-neutral-300 hover:text-white transition-colors"
                        aria-label="Open menu"
                    >
                        <Menu size={22} />
                    </button>
                </div>
            </nav>

            <div
                onClick={() => setIsOpen(false)}
                className={`sm:hidden fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            />

            <div
                className={`sm:hidden fixed top-0 right-0 h-full w-64 bg-neutral-950 border-l border-neutral-800 z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
                    <span className="font-semibold">Menu</span>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1 text-neutral-300 hover:text-white transition-colors"
                        aria-label="Close menu"
                    >
                        <ChevronRight size={22} />
                    </button>
                </div>
                <div className="flex flex-col px-4 py-4 gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`py-2.5 px-3 rounded-md transition-colors ${pathname === link.href
                                ? "text-white font-medium bg-neutral-900 border-l-2 border-sky-400"
                                : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}