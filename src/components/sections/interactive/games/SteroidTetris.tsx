"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Package, Drum, Box, CheckCircle2, Zap, AlertTriangle } from "lucide-react";

const ITEMS = [
    { id: "box", icon: Box, label: "Ящик X", size: 1, color: "from-amber-400 to-amber-600" },
    { id: "drum", icon: Drum, label: "Бочка Z", size: 2, color: "from-blue-400 to-blue-600" },
    { id: "pallet", icon: Package, label: "Суперпалета", size: 3, color: "from-indigo-400 to-violet-600" },
];

export default function SteroidTetris() {
    const [grid, setGrid] = useState<string[]>([]);
    const [isFull, setIsFull] = useState(false);
    const [score, setScore] = useState(0);
    const [intensity, setIntensity] = useState(0);
    const capacity = 15;

    const addItem = (id: string, size: number) => {
        if (grid.length + size <= capacity) {
            const newItems = Array(size).fill(id);
            setGrid([...grid, ...newItems]);
            setScore(prev => prev + size * 100);
            if (grid.length + size === capacity) {
                setIsFull(true);
                setScore(prev => prev + 1000);
            }
        } else {
            setIntensity(prev => Math.min(prev + 1, 3));
            setTimeout(() => setIntensity(0), 500);
        }
    };

    const reset = () => {
        setGrid([]);
        setIsFull(false);
        setScore(0);
        setIntensity(0);
    };

    return (
        <div className={`relative w-full min-h-[450px] transition-all duration-300 rounded-3xl border p-8 overflow-hidden group ${intensity > 0 ? 'bg-red-900/20 border-red-500/40 shadow-[0_0_50px_rgba(239,68,68,0.2)]' : 'bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 border-white/10'
            }`}>
            {/* Scanned matrix background effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-8 items-center justify-between relative z-10">
                <div className="flex-1 space-y-6">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-violet-400 animate-bounce" />
                            <span className="text-[10px] font-black text-violet-400 uppercase tracking-widest">Protocol Override</span>
                        </div>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Тетрис на стероидах</h3>
                        <p className="text-slate-400 text-sm max-w-sm">
                            Максимальная плотность, нулевой простой. Покажи мастерство укладки 80-го уровня.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => addItem(item.id, item.size)}
                                disabled={isFull || grid.length + item.size > capacity}
                                className="flex flex-col items-center gap-2 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all disabled:opacity-30 border border-white/5 group/btn"
                            >
                                <item.icon className="w-8 h-8 text-white group-hover/btn:scale-110 transition-transform" />
                                <span className="text-[10px] uppercase font-black text-slate-500">{item.label}</span>
                                <span className="text-[8px] px-2 py-0.5 bg-white/10 rounded-full text-indigo-300">SIZE {item.size}</span>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="space-y-1">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Efficiency Score</span>
                            <div className="text-3xl font-black text-white font-mono">{score.toLocaleString()}</div>
                        </div>
                        {isFull && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-emerald-500 text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2"
                            >
                                <CheckCircle2 className="w-4 h-4" />
                                ОПТИМАЛЬНО!
                            </motion.div>
                        )}
                    </div>

                    <button
                        onClick={reset}
                        className="flex items-center gap-2 px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-xs font-bold transition-all border border-red-500/20"
                    >
                        СЖЕЧЬ ГРУЗ И ЗАВОЛОЧЬ ЗАНОВО
                    </button>
                </div>

                <div className="relative w-full max-w-[340px] h-[220px] bg-black/60 rounded-2xl border-4 border-slate-800 p-3 flex flex-wrap content-start gap-1 pb-10 shadow-2xl">
                    <div className="absolute -top-10 left-0 text-[10px] font-black text-indigo-400 uppercase tracking-widest flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        CARGO BAY ACTIVE // CAP {capacity}m³
                    </div>

                    <AnimatePresence>
                        {grid.map((type, i) => {
                            const item = ITEMS.find(it => it.id === type);
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0, rotate: -45, y: -50 }}
                                    animate={{ scale: 1, rotate: 0, y: 0 }}
                                    className={`h-10 w-10 rounded-lg flex items-center justify-center bg-gradient-to-br ${item?.color} shadow-lg border border-white/20`}
                                >
                                    {item && <item.icon className="w-5 h-5 text-white drop-shadow-md" />}
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>

                    {Array(capacity - grid.length).fill(0).map((_, i) => (
                        <div key={`empty-${i}`} className="h-10 w-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center">
                            <div className="w-1 h-1 bg-white/20 rounded-full" />
                        </div>
                    ))}

                    <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-slate-900 to-transparent flex items-center justify-center">
                        <div className="w-3/4 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-indigo-500"
                                initial={{ width: "0%" }}
                                animate={{ width: `${(grid.length / capacity) * 100}%` }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {intensity > 2 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
                >
                    <div className="bg-red-600 text-white px-8 py-4 rounded-full font-black text-xl flex items-center gap-4 animate-bounce border-4 border-white shadow-2xl">
                        <AlertTriangle className="w-8 h-8" />
                        OVERLOAD!
                    </div>
                </motion.div>
            )}
        </div>
    );
}
