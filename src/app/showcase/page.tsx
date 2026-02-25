import { Suspense } from "react";
import StyleVariants from "@/components/sections/showcase/StyleVariants";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Style Showcase | ResursTrans",
    description: "Витрина из 20 различных стилей для блоков выбора стиля.",
};

export default function ShowcasePage() {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 selection:bg-emerald-500/30">
            {/* Full Navigation Header */}
            <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-12">
                        <Link href="/" className="text-2xl font-black tracking-tighter text-white">
                            RESURS<span className="text-emerald-500 italic">TRANS</span>
                        </Link>
                        <nav className="hidden md:flex items-center gap-8">
                            <Link className="text-sm font-medium hover:text-emerald-500 transition-colors text-slate-400" href="/">Сайт 1</Link>
                            <Link className="text-sm font-medium hover:text-emerald-500 transition-colors text-slate-400" href="/guardian">Сайт 2</Link>
                            <Link className="text-sm font-medium hover:text-emerald-500 transition-colors text-slate-400" href="/enterprise">Калькулятор</Link>
                            <Link className="text-sm font-bold text-emerald-500 border-b-2 border-emerald-500 pb-1" href="/showcase">Выбор стиля</Link>
                            <Link className="text-sm font-medium hover:text-emerald-500 transition-colors text-slate-400" href="/interactive">Интерактив</Link>
                            <Link className="text-slate-400 hover:text-orange-500 transition-colors relative group flex items-center gap-1" href="/legal-audit" title="Законодательство">
                                <span className="material-symbols-outlined !text-[20px]">gavel</span>
                                Законодательство
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 py-20 max-w-7xl">
                <div className="max-w-3xl mb-20">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
                        Выбор Стиля
                    </h1>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        Здесь представлены 20 уникальных стилистических направлений для интерактивных компонентов выбора транспорта. Оцените каждый из них, чтобы выбрать подходящий для рабочих страниц сайта.
                    </p>
                </div>

                <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading variants...</div>}>
                    <StyleVariants />
                </Suspense>
            </main>
        </div>
    );
}
