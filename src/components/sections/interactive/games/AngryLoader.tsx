"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, ChevronUp, ChevronDown, CheckCircle, AlertCircle, Zap, Flame } from "lucide-react";

export default function AngryLoader() {
    const [forkPos, setForkPos] = useState(50);
    const [hasCargo, setHasCargo] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'fail'>('idle');
    const [messages, setMessages] = useState<string[]>([]);
    const [shake, setShake] = useState(false);
    const [combo, setCombo] = useState(0);

    const moveFork = (delta: number) => {
        setForkPos(prev => Math.min(Math.max(prev + delta, 0), 100));
        setStatus('idle');
    };

    const handleAction = () => {
        if (!hasCargo) {
            if (forkPos > 85) {
                setHasCargo(true);
                setShake(true);
                setTimeout(() => setShake(false), 200);
                addMessage("ГРУЗ ЗАХВАЧЕН!");
            } else {
                addMessage("ПРОМАХ! СЛИШКОМ НИЗКО!");
                setShake(true);
                setTimeout(() => setShake(false), 100);
            }
        } else {
            if (forkPos < 15) {
                setHasCargo(false);
                setStatus('success');
                setCombo(c => c + 1);
                addMessage(`ИДЕАЛЬНАЯ ПОДАЧА! КОМБО: x${combo + 1}`);
            } else {
                setStatus('fail');
                setCombo(0);
                addMessage("КАТАСТРОФА! РАЗБИЛ ГРУЗ!");
                setShake(true);
                setTimeout(() => setShake(false), 500);
            }
        }
    };

    const addMessage = (msg: string) => {
        setMessages(prev => [msg, ...prev].slice(0, 3));
    };

    return (
        <motion.div
            animate={shake ? { x: [-5, 5, -5, 5, 0] } : {}}
            className="relative w-full min-h-[450px] bg-gradient-to-br from-red-950 via-slate-900 to-amber-900 rounded-3xl border border-red-500/20 p-8 overflow-hidden group"
        >
            {/* Background heat waves */}
            <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{ y: [0, -1000] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-full h-[200%] bg-gradient-to-t from-transparent via-red-500/10 to-transparent"
                />
            </div>

            <div className="grid md:grid-cols-2 gap-8 h-full relative z-10">
                <div className="space-y-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <Flame className="w-5 h-5 text-red-500 animate-pulse" />
                            <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Hardcore Edition</span>
                        </div>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Яростный грузчик</h3>
                        <p className="text-amber-200/50 text-xs font-bold mt-1">Никаких несносных задержек. Только скорость и ярость.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <button
                                onClick={() => moveFork(10)}
                                className="flex-1 bg-white/5 hover:bg-red-500/20 p-4 rounded-xl border border-white/10 flex flex-col items-center gap-2 transition-all active:scale-95 group"
                            >
                                <ChevronUp className="w-6 h-6 text-red-400 group-hover:animate-bounce" />
                                <span className="text-[10px] font-black uppercase text-slate-500">МАКС. ВВЕРХ</span>
                            </button>
                            <button
                                onClick={() => moveFork(-10)}
                                className="flex-1 bg-white/5 hover:bg-amber-500/20 p-4 rounded-xl border border-white/10 flex flex-col items-center gap-2 transition-all active:scale-95 group"
                            >
                                <ChevronDown className="w-6 h-6 text-amber-400 group-hover:animate-bounce" />
                                <span className="text-[10px] font-black uppercase text-slate-500">МАКС. ВНИЗ</span>
                            </button>
                        </div>
                        <button
                            onClick={handleAction}
                            className={`w-full py-5 rounded-xl font-black text-sm uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 ${hasCargo
                                    ? 'bg-red-600 text-white shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:bg-red-500'
                                    : 'bg-amber-600 text-white shadow-[0_0_30px_rgba(217,119,6,0.4)] hover:bg-amber-500'
                                }`}
                        >
                            <Zap className={`w-5 h-5 ${hasCargo ? 'animate-spin' : ''}`} />
                            {hasCargo ? 'ШВЫРНУТЬ В ЗОНУ' : 'ХВАТАЙ ПАЛЛЕТУ'}
                        </button>
                    </div>

                    <div className="space-y-2">
                        {messages.map((m, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1 - i * 0.3, x: 0 }}
                                className={`text-[11px] font-black uppercase tracking-widest ${m.includes('ИДЕАЛЬНАЯ') ? 'text-emerald-400' : m.includes('КАТАСТРОФА') ? 'text-red-500' : 'text-amber-400'
                                    }`}
                            >
                                {m}
                            </motion.p>
                        ))}
                    </div>
                </div>

                <div className="relative flex-1 bg-black/40 rounded-2xl border border-white/5 min-h-[300px] overflow-hidden shadow-inner">
                    {/* Shelves */}
                    <div className="absolute right-4 top-4 bottom-4 w-24 flex flex-col justify-between py-4 border-l-2 border-dashed border-white/10">
                        <div className="h-3 w-full bg-slate-800 rounded flex items-end justify-center">
                            {!hasCargo && status !== 'fail' && (
                                <Box className="w-8 h-8 text-amber-500 mb-1 animate-pulse" />
                            )}
                        </div>
                        <div className="h-3 w-full bg-slate-800 rounded" />
                        <div className="h-3 w-full bg-slate-800 rounded" />
                        <div className="h-6 w-full bg-red-500/20 border border-red-500/30 rounded flex items-center justify-center relative group">
                            <div className="absolute inset-0 bg-red-500/10 blur-sm group-hover:blur-md transition-all" />
                            <span className="text-[10px] font-black text-red-500 uppercase relative z-10">DROP ZONE</span>
                        </div>
                    </div>

                    {/* Mast */}
                    <div className="absolute left-24 top-4 bottom-4 w-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-full border border-white/5" />

                    {/* Fork */}
                    <motion.div
                        className="absolute left-24 w-40 h-3 bg-gradient-to-r from-slate-200 to-slate-400 rounded-r-lg z-20 shadow-xl"
                        style={{ bottom: `calc(1rem + ${forkPos * 0.8}%)` }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        {/* Hydraulics effect */}
                        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-1 bg-red-500/40 blur-sm animate-pulse" />

                        {/* Fork tines */}
                        <div className="absolute -bottom-3 right-0 w-3 h-6 bg-slate-500 rounded-b-sm" />

                        {/* Cargo if picked up */}
                        {hasCargo && (
                            <motion.div layoutId="cargo" className="absolute -top-12 left-6">
                                <Box className="w-12 h-12 text-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.6)]" />
                                <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.5 }} className="absolute inset-0 border-2 border-white/50 rounded-lg" />
                            </motion.div>
                        )}
                    </motion.div>

                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 2 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-emerald-500/20 flex flex-col items-center justify-center gap-4 z-50 backdrop-blur-sm"
                            >
                                <CheckCircle className="w-24 h-24 text-emerald-500 animate-bounce" />
                                <span className="text-3xl font-black text-emerald-400 uppercase tracking-[0.5em] italic">SAVED!</span>
                            </motion.div>
                        )}
                        {status === 'fail' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-red-600/40 flex flex-col items-center justify-center gap-4 z-50 backdrop-blur-md"
                            >
                                <AlertCircle className="w-24 h-24 text-white animate-pulse" />
                                <span className="text-3xl font-black text-white uppercase tracking-[0.5em] italic">CRASHED!</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Industrial UI accents */}
            <div className="absolute top-4 right-4 flex gap-4 opacity-50">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                <div className="w-8 h-1 bg-slate-700" />
            </div>
            <div className="absolute bottom-4 left-4 font-mono text-[8px] text-slate-600 uppercase tracking-tighter">
                Sys.v04_overdrive_active // temp_critical
            </div>
        </motion.div>
    );
}
