import { Mail, Phone, MapPin } from "lucide-react";
import PageContainer from "@/app/components/layoutComponent/PageContainer";
import ContactForm from "@/app/components/contactComponent/ContactForm";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "support@nextcart.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+62 812 3456 7890",
    },
    {
        icon: MapPin,
        label: "Address",
        value: "Jakarta, Indonesia",
    },
];

export default function Contact() {
    return (
        <PageContainer>
            <div className="py-6">
                <div className="mb-10 max-w-2xl">
                    <h1 className="text-3xl font-bold text-neutral-100 mb-3">
                        Get in Touch
                    </h1>
                    <p className="text-neutral-400 leading-relaxed">
                        Have a question about a product or just want to say hi? Fill out
                        the form below or reach us directly through the details on the
                        right.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8">
                    <ContactForm />

                    <div className="flex flex-col gap-4">
                        {contactInfo.map((item) => (
                            <div
                                key={item.label}
                                className="flex items-start gap-4 rounded-xl border border-neutral-800 bg-neutral-950 p-5 transition-colors duration-300 hover:border-neutral-700"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 text-sky-400">
                                    <item.icon size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-500 mb-1">
                                        {item.label}
                                    </p>
                                    <p className="text-sm text-neutral-200 font-medium">
                                        {item.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}