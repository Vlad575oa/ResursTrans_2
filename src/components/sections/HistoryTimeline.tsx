"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HISTORY = [
    { year: 2008, title: "Начало пути", desc: "Старт операционной деятельности. Первые 100 машин." },
    { year: 2012, title: "Региональная экопансия", desc: "Выход в 5 новых регионов РФ." },
    { year: 2018, title: "Цифровизация", desc: "Запуск первой версии системы мониторинга." },
    { year: 2023, title: "ИИ и Big Data", desc: "Предиктивная аналитика становится стандартом." },
    { year: 2026, title: "Экосистема", desc: "Полная автоматизация и «Авто-Контроль»." },
];

export const HistoryTimeline = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    return (
        <section ref={containerRef} className="py-24 bg-anthracite-core text-cloud-dancer relative overflow-hidden">

            {/* Engineering Grid Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            />

            <div className="container mx-auto px-6 relative z-10 flex gap-12">

                {/* Vertical Line */}
                <div className="w-px bg-white/20 relative h-[500px] hidden md:block">
                    <motion.div
                        style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                        className="w-full bg-burnt-terra absolute top-0"
                    />
                </div>

                <div className="space-y-24 w-full">
                    {HISTORY.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ margin: "-20%" }}
                            className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12"
                        >
                            <div className="text-5xl md:text-7xl font-bold text-white/10 font-mono tracking-tighter">
                                {item.year}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-burnt-terra mb-2">{item.title}</h3>
                                <p className="text-white/60 max-w-md font-serif italic">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
