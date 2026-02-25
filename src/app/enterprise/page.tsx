"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Menu,
    X,
    ChevronRight,
    ArrowRight,
    BarChart3,
    ShieldCheck,
    Globe2
} from "lucide-react";
import { FleetCalculator } from "@/components/sections/fleet-calculator/FleetCalculator";

// Reuse common components or implement specific ones
export default function EnterprisePage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative flex min-h-screen w-full flex-col bg-background-dark text-slate-100 overflow-x-hidden">
            {/* Sticky Navigation (Enterprise Style) */}
            <header className="fixed top-0 left-0 w-full z-50 bg-background-dark/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 md:px-10 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-12">
                        <Link href="/" className="text-2xl font-black tracking-tighter text-white">
                            RESURS<span className="text-primary italic">TRANS</span>
                        </Link>

                        <nav className="hidden md:flex items-center gap-8">
                            <Link className="text-sm font-medium hover:text-primary transition-colors text-white" href="/">Сайт 1</Link>
                            <Link className="text-sm font-medium hover:text-primary transition-colors text-white" href="/guardian">Сайт 2</Link>
                            <Link className="text-sm font-medium hover:text-primary transition-colors text-white" href="/enterprise">Калькулятор</Link>
                            <Link className="text-sm font-medium hover:text-primary transition-colors text-white" href="/showcase">Выбор стиля</Link>
                            <Link className="text-sm font-medium hover:text-primary transition-colors text-white" href="/interactive">Интерактив</Link>
                            <Link className="text-white hover:text-orange-400 transition-colors relative group" href="/legal-audit" title="Законодательство">
                                <span className="material-symbols-outlined !text-[20px]">gavel</span>
                                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Законодательство</span>
                            </Link>
                        </nav>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:flex bg-primary px-6 py-2.5 rounded-full text-background-dark font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
                    >
                        Связаться
                    </motion.button>

                    <button
                        className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </header>

            {/* Mobile Navigation Drawer */}
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-background-dark/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6 pb-6 border-b border-white/10">
                    <nav className="flex flex-col gap-6">
                        <Link
                            className="text-slate-200 hover:text-primary text-xl font-bold transition-colors border-b border-white/10 pb-4 text-center"
                            href="/"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Сайт 1
                        </Link>
                        <Link
                            className="text-slate-200 hover:text-primary text-xl font-bold transition-colors border-b border-white/10 pb-4 text-center"
                            href="/guardian"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Сайт 2
                        </Link>
                        <Link
                            className="text-slate-200 hover:text-primary text-xl font-bold transition-colors border-b border-white/10 pb-4 text-center"
                            href="/enterprise"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Калькулятор
                        </Link>
                        <Link
                            className="text-slate-200 hover:text-primary text-xl font-bold transition-colors border-b border-white/10 pb-4 text-center"
                            href="/showcase"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Выбор стиля
                        </Link>
                        <Link
                            className="text-slate-200 hover:text-primary text-xl font-bold transition-colors border-b border-white/10 pb-4 text-center"
                            href="/interactive"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Интерактив
                        </Link>
                        <Link
                            className="text-orange-400 hover:text-orange-300 text-xl font-bold transition-colors border-b border-white/10 pb-4 text-center flex items-center justify-center gap-2"
                            href="/legal-audit"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <span className="material-symbols-outlined !text-[24px]">gavel</span>
                            Законодательство
                        </Link>
                    </nav>

                    <button className="mt-8 mx-auto w-full max-w-[200px] bg-primary px-6 py-3 rounded-full text-background-dark font-bold text-sm shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                        Связаться
                    </button>
                </div>
            )}

            {/* Main Calculator Section */}
            <FleetCalculator />

            {/* Value Proposition: Why the Savings? */}
            <section className="py-16 md:py-24 px-4 md:px-10 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 md:mb-10 tracking-tighter leading-tight">
                            Как мы <span className="text-primary italic">стираем</span> <br /> ваши издержки?
                        </h2>
                        <div className="space-y-8">
                            {[
                                {
                                    title: "Закупочная мощь федерального уровня",
                                    desc: "Ваш парк закупает ГСМ и запчасти в розницу. Мы — по прямым контрактам с заводами. Эта разница в цене (до 15%) полностью переходит на вашу сторону."
                                },
                                {
                                    title: "Алгоритмический интеллект",
                                    desc: "Цифровой двойник каждого маршрута исключает 'холостые' пробеги и простои. Машина работает 24/7, принося доход, а не накапливая амортизацию в боксе."
                                },
                                {
                                    title: "Налоговый щит и возврат ликвидности",
                                    desc: "Аутсорсинг превращает капитальные затраты (CAPEX) в операционные (OPEX). Вы легально возвращаете 20% НДС и забываете про зарплатные налоги 43%."
                                },
                                {
                                    title: "Тотальное сокращение ФОТ офиса",
                                    desc: "Вам больше не нужны десятки диспетчеров, механиков и бухгалтеров по транспорту. Наша экосистема заменяет целый департамент, который обходится вам в миллионы."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-6 border-l-2 border-white/5 pl-6 hover:border-primary transition-colors group"
                                >
                                    <div>
                                        <h4 className="text-white font-black mb-2 text-lg group-hover:text-primary transition-colors">{item.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed font-medium">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust / Benefit Section */}
            <section className="py-16 md:py-24 px-4 md:px-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-6 md:gap-12">
                <div className="space-y-4 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/5">
                    <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        <ShieldCheck className="size-6" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Прозрачные налоги</h3>
                    <p className="text-slate-400 text-sm">Мы берем на себя все налоговые риски и администрирование ФОТ водителей.</p>
                </div>
                <div className="space-y-4 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/5">
                    <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        <Globe2 className="size-6" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Масштабируемость</h3>
                    <p className="text-slate-400 text-sm">Увеличивайте или сокращайте парк за 24 часа без затрат на покупку техники.</p>
                </div>
                <div className="space-y-4 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/5">
                    <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        <BarChart3 className="size-6" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white">Предиктивное ТО</h3>
                    <p className="text-slate-400 text-sm">Затраты на ремонт зафиксированы в контракте — никаких сюрпризов в бюджете.</p>
                </div>
            </section>

            {/* Footer (Simplified) */}
            <footer className="py-20 border-t border-white/5 bg-background-dark/80">
                <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="text-xl font-black tracking-tighter text-white">
                        RESURS<span className="text-primary italic">TRANS</span>
                    </div>
                    <div className="flex gap-8 text-sm text-slate-500 font-medium">
                        <Link href="/" className="hover:text-primary transition-colors">Сайт 1</Link>
                        <Link href="/guardian" className="hover:text-primary transition-colors">Сайт 2</Link>
                        <Link href="/enterprise" className="hover:text-primary transition-colors">Калькулятор</Link>
                        <Link href="/showcase" className="hover:text-primary transition-colors">Витрина</Link>
                        <Link href="/legal-audit" className="hover:text-primary transition-colors">Законодательство</Link>
                    </div>
                    <div className="text-xs text-slate-600 font-mono uppercase tracking-widest">
                        © 2026 ResursTrans // Enterprise Division
                    </div>
                </div>
            </footer>
        </div>
    );
}
