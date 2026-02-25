"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Truck, Star } from "lucide-react";

export default function RouteMap() {
    const [progress, setProgress] = useState(0); // 0-100
    const [done, setDone] = useState(false);

    const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = Number(e.target.value);
        setProgress(val);
        if (val >= 100) setDone(true);
    };

    const reset = () => { setProgress(0); setDone(false); };

    return (
        <div className="w-full min-h-[360px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-slate-700 flex flex-col items-center justify-center p-8 gap-8">
            <div className="text-center">
                <h3 className="text-2xl font-black text-white mb-2">Интерактивная Карта Маршрута</h3>
                <p className="text-slate-400 text-sm">Перетащите ползунок — доставьте груз до пункта назначения.</p>
            </div>

            {/* Map strip */}
            <div className="relative w-full max-w-lg h-20 bg-slate-700/50 rounded-2xl overflow-hidden border border-slate-600 flex items-center px-6">
                {/* Road */}
                <div className="absolute inset-y-1/2 left-8 right-8 h-1 bg-slate-500 rounded-full" />
                {/* Progress fill */}
                <motion.div
                    className="absolute h-1 bg-emerald-500 rounded-full left-8 top-1/2 -translate-y-1/2"
                    style={{ width: `calc(${progress}% - 4rem + ${progress * 0.32}px)` }}
                />
                {/* Truck icon */}
                <motion.div
                    className="absolute top-1/2 -translate-y-1/2"
                    style={{ left: `calc(${progress * 0.88}% + 1rem)` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <Truck className={`w-8 h-8 transition-colors ${done ? "text-emerald-400" : "text-blue-400"}`} />
                </motion.div>
                {/* Destination star */}
                <Star className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-yellow-400" />
            </div>

            {done ? (
                <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
                    <div className="text-emerald-400 text-xl font-black mb-2">🎉 Груз доставлен!</div>
                    <button onClick={reset} className="text-sm text-slate-400 hover:text-white underline">Новый маршрут</button>
                </motion.div>
            ) : (
                <input
                    type="range" min="0" max="100" value={progress}
                    onChange={handleSlider}
                    className="w-full max-w-lg h-2 accent-emerald-500 cursor-pointer"
                />
            )}
        </div>
    );
}
