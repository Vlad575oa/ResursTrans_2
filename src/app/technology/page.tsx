import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";

export const metadata: Metadata = {
    title: "Technology - FleetCorp Global",
    description: "Our core technology stack: AI-driven telematics, real-time GPS monitoring, and predictive fuel analytics.",
};

const TechStackDark = dynamic(() => import("@/components/sections/fleettech/TechStackDark"));
const Footer = dynamic(() => import("@/components/sections/fleetcorp/Footer"));

export default function TechnologyPage() {
    return (
        <div className="bg-background-dark min-h-screen flex flex-col">
            <HeaderScroll />
            <main className="flex-grow pt-12">
                <section className="py-12 px-6 md:px-10 lg:px-20 relative overflow-hidden text-center bg-[#0c1017] border-b border-[#282e39]">
                    <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900 via-transparent to-transparent pointer-events-none"></div>
                    <div className="max-w-4xl mx-auto relative z-10">
                        <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Innovation First</span>
                        <h1 className="text-3xl md:text-4xl font-black text-white uppercase leading-tight tracking-tighter mb-6">
                            Цифровая <span className="text-primary tracking-normal">Трансформация</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Мы не просто управляем флотом. Мы создаем интеллектуальные системы, которые предсказывают риски и автоматизируют эффективность.
                        </p>
                    </div>
                </section>
                <TechStackDark />
            </main>
            <Footer />
        </div>
    );
}
