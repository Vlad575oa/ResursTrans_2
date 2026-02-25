"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Banknote, TrendingUp, Zap, Sparkles, AlertCircle, CheckCircle } from "lucide-react";

export default function CatchBenefit() {
    const [items, setItems] = useState<any[]>([]);
    const [savings, setSavings] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [isActive, setIsActive] = useState(false);

    const startBatch = () => {
        setIsActive(true);
        setSavings(0);
        setMultiplier(1);
        setItems([]);
    };

    useEffect(() => {
        if (isActive) {
            const interval = setInterval(() => {
                const id = Date.now();
                const type = Math.random() > 0.8 ? 'bonus' : 'standard';
                setItems(prev => [...prev, {
                    id,
                    type,
                    x: Math.random() * 80 + 10,
                    y: -10,
                    speed: 1 + Math.random() * 2
                }]);
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [isActive]);

    useEffect(() => {
        if (isActive) {
            const move = setInterval(() => {
                setItems(prev => prev.map(item => ({ ...item, y: item.y + item.speed }))
                    .filter(item => item.y < 110));
            }, 30);
            return () => clearInterval(move);
        }
    }, [isActive]);

    const catchItem = (id: number, type: string) => {
        setItems(prev => prev.filter(item => item.id !== id));
        if (type === 'bonus') {
            setMultiplier(m => m + 0.5);
            setSavings(s => s + 500 * multiplier);
        } else {
            setSavings(s => s + 100 * multiplier);
        }
    };

    return (
        <div className="relative w-full min-h-[500px] bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950 rounded-3xl border border-white/10 p-8 overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />

            <div className="grid lg:grid-cols-2 gap-12 relative z-10 h-full">
                <div className="flex flex-col justify-between">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Banknote className="w-5 h-5 text-emerald-500 animate-bounce" />
                                <span className="text-[10px] uppercase font-black tracking-[0.4em] text-emerald-500">Economic Optimization Module</span>
                            </div>
                            <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">Поймай выгоду</h3>
                            <p className="text-slate-400 text-sm max-w-sm">Лови возможности для экономии. Акции, скидки на топливо и оптимизация маршрутов летят прямо в руки!</p>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-1 p-6 bg-white/5 rounded-3xl border border-white/10 shadow-xl space-y-2">
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Total Savings</span>
                                <div className="text-3xl font-black text-white font-mono tracking-tighter">
                                    ₽{savings.toLocaleString()}
                                </div>
                            </div>
                            <div className="w-24 p-6 bg-emerald-500/20 rounded-3xl border border-emerald-500/30 flex flex-col items-center justify-center">
                                <span className="text-[8px] font-black text-emerald-400 uppercase">Multiplier</span>
                                <div className="text-xl font-black text-white">x{multiplier.toFixed(1)}</div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={startBatch}
                        disabled={isActive}
                        className="w-full mt-8 py-5 bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-800 text-white rounded-2xl font-black text-sm uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(16,185,129,0.3)] border border-emerald-400/20"
                    >
                        <Zap className="w-5 h-5" /> {isActive ? 'В ПРОЦЕССЕ ОПТИМИЗАЦИИ...' : 'НАЧАТЬ СБОР ВЫГОДЫ'}
                    </button>
                </div>

                <div className="relative bg-black/60 rounded-3xl border border-emerald-500/20 overflow-hidden min-h-[350px] shadow-inner">
                    <AnimatePresence>
                        {items.map(item => (
                            <motion.div
                                key={item.id}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 2, opacity: 0 }}
                                onClick={() => catchItem(item.id, item.type)}
                                className={`absolute w-14 h-14 rounded-2xl cursor-pointer flex flex-col items-center justify-center border-2 transition-transform hover:scale-125 z-20 ${item.type === 'bonus'
                                        ? 'bg-amber-500/20 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.5)]'
                                        : 'bg-emerald-500/20 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                                    }`}
                                style={{ left: `${item.x}%`, top: `${item.y}%`, transform: 'translate(-50%, -50%)' }}
                            >
                                {item.type === 'bonus' ? <TrendingUp className="w-6 h-6 text-amber-500" /> : <Banknote className="w-6 h-6 text-emerald-400" />}
                                <span className="text-[6px] font-black text-white opacity-50 uppercase mt-1">{item.type}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {!isActive && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 opacity-30 text-emerald-500">
                            <Sparkles className="w-20 h-20" />
                            <span className="text-[10px] uppercase font-black tracking-[0.5em]">System Idle // Ready to Scale</span>
                        </div>
                    )}

                    <div className="absolute bottom-4 right-4 flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="w-1 h-4 bg-emerald-500/20 rounded-full" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
