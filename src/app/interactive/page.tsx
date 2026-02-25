import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import InteractiveShowcase from "@/components/sections/interactive/InteractiveShowcase";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import Footer from "@/components/sections/fleetcorp/Footer";

export const metadata: Metadata = {
    title: "Интерактивная Песочница | РесурсТранс",
    description: "Интерактивная песочница с логистическими мини-играми и виджетами.",
    alternates: { canonical: "/interactive" },
};

export default function InteractivePage() {
    return (
        <div className="min-h-screen bg-background-dark text-slate-100 selection:bg-emerald-500/30">
            <HeaderScroll />

            <div className="h-20" /> {/* Spacer for fixed header */}

            <main className="container mx-auto px-6 py-12 md:py-20 max-w-7xl">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
                        Интерактивная Песочница
                    </h1>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        Отвлекитесь от цифр и метрик! Попробуйте наши развлекательные
                        микро-игры и интерактивные виджеты, которые показывают, что
                        логистика может быть весёлой и послушной.
                    </p>
                </div>

                <Suspense fallback={<div className="h-96 flex items-center justify-center text-slate-400 font-mono tracking-widest animate-pulse">ИНИЦИАЛИЗАЦИЯ ПЕСОЧНИЦЫ...</div>}>
                    <InteractiveShowcase />
                </Suspense>
            </main>

            <Footer />
        </div>
    );
}
