"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, TrendingUp, DollarSign, ShieldCheck, ChevronRight } from "lucide-react";

const FORECASTS = [
    {
        year: 2026,
        laws: 'Требования по языку',
        tax: '+5%',
        desc: 'Введение обязательного тестирования персонала и новые эко-стандарты.',
        cost: 1.2
    },
    {
        year: 2028,
        laws: 'Эко-налог на старый парк',
        tax: '+12%',
        desc: 'Запрет на въезд в центры городов для ТС ниже Евро-5.',
        cost: 1.5
    },
    {
        year: 2030,
        laws: 'Полная цифровизация ТТН',
        tax: '+20%',
        desc: 'Переход на беспилотные коридоры и спутниковый контроль каждой мили.',
        cost: 2.1
    }
];

export default function TimeMachine() {
    const [yearIdx, setYearIdx] = useState(0);
    const active = FORECASTS[yearIdx];

    return (
        <div className="relative w-full min-h-[440px] bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl border border-white/10 p-8 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-8">
                    <div>
                        <h3 className="text-3xl font-black text-white italic tracking-tighter">Машина времени</h3>
                        <p className="text-indigo-300/50 text-xs font-bold mt-2 uppercase tracking-widest">Прогноз развития вашего автопарка</p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center bg-black/40 p-1 rounded-2xl border border-white/5">
                            {FORECASTS.map((f, i) => (
                                <button
                                    key={f.year}
                                    onClick={() => setYearIdx(i)}
                                    className={`flex-1 py-3 rounded-xl text-sm font-black transition-all ${yearIdx === i ? 'bg-indigo-600 text-white shadow-xl' : 'text-slate-500 hover:text-slate-300'
                                        }`}
                                >
                                    {f.year}
                                </button>
                            ))}
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active.year}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-3xl space-y-4"
                        >
                            <div className="flex justify-between border-b border-white/5 pb-4">
                                <div className="space-y-1">
                                    <div className="text-[10px] font-black text-indigo-400 uppercase">Новые законы</div>
                                    <div className="text-sm font-bold text-white leading-tight">{active.laws}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] font-black text-rose-500 uppercase">Налоги</div>
                                    <div className="text-sm font-black text-rose-400">{active.tax}</div>
                                </div>
                            </div>
                            <p className="text-xs text-slate-400 leading-relaxed">{active.desc}</p>
                        </motion.div>
                    </AnimatePresence>

                    <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all">
                        Зафиксировать расходы сегодня <ChevronRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="relative w-full md:w-[340px] h-[340px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-indigo-500/10 blur-[80px] rounded-full" />

                    {/* Visualizing cost growth */}
                    <div className="relative flex items-end gap-4 h-48">
                        {[1, 1.3, 1.8, 2.5].map((h, i) => (
                            <div key={i} className="relative flex flex-col items-center">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: h * 60 }}
                                    className={`w-12 rounded-t-xl ${i <= yearIdx + 1 ? 'bg-gradient-to-t from-indigo-600 to-indigo-400' : 'bg-slate-800'}`}
                                />
                                <div className="mt-2 text-[9px] font-black text-slate-500 uppercase">{2025 + (i * 2)}</div>
                                {i === yearIdx + 1 && (
                                    <div className="absolute -top-6 text-[10px] font-bold text-white">COST x{active.cost}</div>
                                )}
                            </div>
                        ))}

                        <div className="absolute -left-12 -top-12 border-l border-b border-white/10 p-4 rounded-bl-3xl">
                            <TrendingUp className="w-8 h-8 text-rose-500/50" />
                        </div>
                    </div>

                    <div className="absolute top-0 right-0 p-4">
                        <Clock className="w-12 h-12 text-indigo-500/20" />
                    </div>
                </div>
            </div>
        </div>
    );
}
