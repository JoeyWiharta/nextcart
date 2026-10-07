"use client";
import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !message) {
            toast.error("Please fill in all fields.");
            return;
        }

        toast.success("Message sent successfully!", {
            description: `Thanks, ${name}. We'll get back to you soon.`,
        });

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-neutral-800 bg-neutral-950 p-6 md:p-8"
        >
            <div className="mb-5">
                <label className="block text-sm text-neutral-300 mb-2">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
            </div>

            <div className="mb-5">
                <label className="block text-sm text-neutral-300 mb-2">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
            </div>

            <div className="mb-6">
                <label className="block text-sm text-neutral-300 mb-2">Message</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message..."
                    rows={5}
                    className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                />
            </div>

            <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full sm:w-auto bg-sky-500 hover:bg-sky-400 text-neutral-950 font-medium text-sm px-6 py-2.5 rounded-lg transition-colors duration-300"
            >
                <Send size={16} />
                Send Message
            </button>
        </form>
    );
}