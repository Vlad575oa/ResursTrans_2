"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, ArrowUpDown, ChevronUp, ChevronDown, CheckCircle, AlertCircle } from "lucide-react";

export default function ForkliftSim() {
    const [forkPos, setForkPos] = useState(50); // 0 (bottom) to 100 (top)
    const [hasCargo, setHasCargo] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'fail'>('idle');
    const [messages, setMessages] = useState<string[]>([]);

    const moveFork = (delta: number) => {
        setForkPos(prev => {
            const next = Math.min(Math.max(prev + delta, 0), 100);
            return next;
        });
        setStatus('idle');
    };

    const handleAction = () => {
        if (!hasCargo) {
            // Try pick up from top shelf (pos 90-100)
            if (forkPos > 85) {
                setHasCargo(true);
                setStatus('idle');
                addMessage("Груз взят!");
            } else {
                addMessage("Слишком низко!");
            }
        } else {
            // Try place in delivery zone (pos 0-15)
            if (forkPos < 15) {
                setHasCargo(false);
                setStatus('success');
                addMessage("Доставлено аккуратно!");
            } else {
                setStatus('fail');
                addMessage("Слишком высоко для разгрузки!");
            }
        }
    };

    const addMessage = (msg: string) => {
        setMessages(prev => [msg, ...prev].slice(0, 3));
    };

    return (
        <div className="relative w-full min-h-[400px] bg-gradient-to-br from-slate-900 to-amber-950 rounded-3xl border border-white/10 p-8 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 h-full">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Симулятор погрузчика</h3>
                        <p className="text-amber-200/50 text-xs font-bold mt-1">Отработка точности и бережного отношения</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <button
                                onMouseDown={() => moveFork(5)}
                                className="flex-1 bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 flex flex-col items-center gap-2 transition-all active:scale-95"
                            >
                                <ChevronUp className="w-5 h-5 text-amber-400" />
                                <span className="text-[10px] font-bold uppercase text-slate-500">Поднять</span>
                            </button>
                            <button
                                onMouseDown={() => moveFork(-5)}
                                className="flex-1 bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 flex flex-col items-center gap-2 transition-all active:scale-95"
                            >
                                <ChevronDown className="w-5 h-5 text-amber-400" />
                                <span className="text-[10px] font-bold uppercase text-slate-500">Опустить</span>
                            </button>
                        </div>
                        <button
                            onClick={handleAction}
                            className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${hasCargo ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'bg-amber-600 text-white shadow-lg shadow-amber-500/20'
                                }`}
                        >
                            {hasCargo ? 'Отгрузить в зону' : 'Взять паллету'}
                        </button>
                    </div>

                    <div className="space-y-2">
                        {messages.map((m, i) => (
                            <motion.p key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1 - i * 0.3, x: 0 }} className="text-xs font-bold text-amber-200/80 italic">{m}</motion.p>
                        ))}
                    </div>
                </div>

                <div className="relative flex-1 bg-slate-950/40 rounded-2xl border border-white/5 min-h-[250px] overflow-hidden">
                    {/* Shelves */}
                    <div className="absolute right-4 top-4 bottom-4 w-20 flex flex-col justify-between py-2 border-l border-white/10">
                        <div className="h-2 w-full bg-slate-800 rounded flex items-end justify-center">
                            {!hasCargo && status !== 'fail' && <Box className="w-6 h-6 text-amber-500 mb-1" />}
                        </div>
                        <div className="h-2 w-full bg-slate-800 rounded" />
                        <div className="h-2 w-full bg-slate-800 rounded" />
                        <div className="h-4 w-full bg-emerald-500/20 border border-emerald-500/30 rounded flex items-center justify-center">
                            <span className="text-[8px] font-black text-emerald-400 uppercase">Зона</span>
                        </div>
                    </div>

                    {/* Mast */}
                    <div className="absolute left-20 top-4 bottom-4 w-4 bg-slate-800 rounded-full" />

                    {/* Fork */}
                    <motion.div
                        className="absolute left-20 w-32 h-2 bg-slate-200 rounded-r-lg z-20"
                        style={{ bottom: `calc(1rem + ${forkPos * 0.8}%)` }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    >
                        {/* Fork tines */}
                        <div className="absolute -bottom-2 right-0 w-2 h-4 bg-slate-400" />

                        {/* Cargo if picked up */}
                        {hasCargo && (
                            <motion.div layoutId="cargo" className="absolute -top-10 left-4">
                                <Box className="w-10 h-10 text-amber-400 drop-shadow-xl" />
                            </motion.div>
                        )}
                    </motion.div>

                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-emerald-500/10 flex items-center justify-center">
                                <CheckCircle className="w-16 h-16 text-emerald-500 animate-bounce" />
                            </motion.div>
                        )}
                        {status === 'fail' && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-red-500/10 flex items-center justify-center">
                                <AlertCircle className="w-16 h-16 text-red-500 animate-pulse" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
