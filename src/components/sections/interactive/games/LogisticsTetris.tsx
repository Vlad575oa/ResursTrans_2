"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Package, Drum, Box, CheckCircle2 } from "lucide-react";

const ITEMS = [
    { id: "box", icon: Box, label: "Коробка", size: 1 },
    { id: "drum", icon: Drum, label: "Бочка", size: 2 },
    { id: "pallet", icon: Package, label: "Паллета", size: 3 },
];

export default function LogisticsTetris() {
    const [grid, setGrid] = useState<string[]>([]);
    const [isFull, setIsFull] = useState(false);
    const capacity = 12;

    const addItem = (id: string, size: number) => {
        if (grid.length + size <= capacity) {
            const newItems = Array(size).fill(id);
            setGrid([...grid, ...newItems]);
            if (grid.length + size === capacity) setIsFull(true);
        }
    };

    const reset = () => {
        setGrid([]);
        setIsFull(false);
    };

    return (
        <div className="relative w-full min-h-[400px] bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl border border-white/10 p-8 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-black text-white">Упакуй фуру</h3>
                    <p className="text-slate-400 text-sm max-w-xs">
                        Заполните кузов максимально эффективно. Наш уровень эффективности — Профи.
                    </p>

                    <div className="flex gap-3">
                        {ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => addItem(item.id, item.size)}
                                disabled={isFull || grid.length + item.size > capacity}
                                className="flex flex-col items-center gap-2 p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all disabled:opacity-30 border border-white/5"
                            >
                                <item.icon className="w-6 h-6 text-indigo-400" />
                                <span className="text-[10px] uppercase font-bold text-slate-500">{item.label}</span>
                            </button>
                        ))}
                    </div>

                    {isFull && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-emerald-500/20 border border-emerald-500/50 p-4 rounded-2xl flex items-center gap-3"
                        >
                            <CheckCircle2 className="text-emerald-400 w-5 h-5" />
                            <div className="text-sm font-bold text-emerald-400">
                                Идеально! Объем: {capacity} м³ укомплектован.
                            </div>
                        </motion.div>
                    )}

                    <button
                        onClick={reset}
                        className="text-xs text-slate-500 hover:text-white underline underline-offset-4 transition-colors"
                    >
                        Сбросить загрузку
                    </button>
                </div>

                <div className="relative w-full max-w-[300px] h-[180px] bg-slate-950/50 rounded-xl border-4 border-slate-800 p-2 flex flex-wrap content-start gap-1">
                    <div className="absolute -top-10 left-0 text-[10px] font-bold text-slate-600 uppercase tracking-widest flex items-center gap-2">
                        <Container className="w-3 h-3" /> Кузов 20т
                    </div>

                    <AnimatePresence>
                        {grid.map((type, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className={`h-8 w-8 rounded-md flex items-center justify-center ${type === 'box' ? 'bg-amber-500/40 border border-amber-500/50' :
                                        type === 'drum' ? 'bg-blue-500/40 border border-blue-500/50' :
                                            'bg-indigo-500/40 border border-indigo-500/50'
                                    }`}
                            >
                                {type === 'box' && <Box className="w-4 h-4 text-amber-200" />}
                                {type === 'drum' && <Drum className="w-4 h-4 text-blue-200" />}
                                {type === 'pallet' && <Package className="w-4 h-4 text-indigo-200" />}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {Array(capacity - grid.length).fill(0).map((_, i) => (
                        <div key={`empty-${i}`} className="h-8 w-8 rounded-md bg-white/5 border border-white/5" />
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
        </div>
    );
}
