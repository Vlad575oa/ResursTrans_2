"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const COMPANIES = [
    "Лукойл",
    "Газпром Нефть",
    "РЖД",
    "Магнит",
    "Сбербанк",
    "X5 Retail Group",
    "Роснефть",
    "Норильский никель",
    "ВТБ",
    "Северсталь",
    "Яндекс",
    "МТС",
];

// Duplicate list for seamless looping
const TICKER_ITEMS = [...COMPANIES, ...COMPANIES];

const SEPARATOR = (
    <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mx-6 align-middle opacity-60" />
);

export const HeroTicker = () => {
    const trackRef = useRef<HTMLDivElement>(null);

    return (
        <div className="w-full py-8 bg-transparent overflow-hidden select-none">
            {/* Static label above */}
            <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
                Нам доверяют
            </p>

            {/* Scrolling strip */}
            <div className="relative overflow-hidden">
                <motion.div
                    ref={trackRef}
                    className="flex items-center whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 28,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {TICKER_ITEMS.map((name, i) => (
                        <span key={i} className="inline-flex items-center">
                            <span className="text-base font-semibold text-slate-600 hover:text-primary transition-colors cursor-default">
                                {name}
                            </span>
                            {SEPARATOR}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Static label below */}
            <p className="text-center text-xs font-semibold text-slate-400 mt-4 tracking-wide">
                Проверенные решения для лидеров рынка
            </p>
        </div>
    );
};
