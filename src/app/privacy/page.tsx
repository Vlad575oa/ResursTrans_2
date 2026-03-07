import type { Metadata } from "next";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import Footer from "@/components/sections/fleetcorp/Footer";
import ru from "@/app/messages/ru.json";

export const metadata: Metadata = {
    title: ru.PrivacyPolicy.title,
    description: "FleetCorp Global Privacy Policy and Data Protection standards.",
};

export default function PrivacyPage() {
    const { title, content } = ru.PrivacyPolicy;

    return (
        <div className="bg-background-dark min-h-screen flex flex-col">
            <HeaderScroll />
            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black text-white uppercase mb-12 tracking-tighter">
                        {title}
                    </h1>
                    <div className="prose prose-invert max-w-none">
                        <div className="bg-[#161b22]/70 backdrop-blur-md border border-[#282e39] rounded-2xl p-8 md:p-12 shadow-2xl">
                            {content.split('\n\n').map((paragraph, idx) => (
                                <p key={idx} className="text-slate-300 leading-relaxed mb-6 whitespace-pre-wrap">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
