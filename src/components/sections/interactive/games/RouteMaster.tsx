"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Timer, Zap } from "lucide-react";

export default function RouteMaster() {
    const [points, setPoints] = useState([
        { id: 1, x: 20, y: 40, active: false },
        { id: 2, x: 50, y: 70, active: false },
        { id: 3, x: 80, y: 30, active: false },
        { id: 4, x: 40, y: 20, active: false },
        { id: 5, x: 70, y: 80, active: false },
    ]);
    const [path, setPath] = useState<number[]>([]);
    const [optimized, setOptimized] = useState(false);
    const [timeLeft, setTimeLeft] = useState(10);
    const [gameStarted, setGameStarted] = useState(false);

    useEffect(() => {
        if (gameStarted && timeLeft > 0 && !optimized) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, gameStarted, optimized]);

    const handlePointClick = (id: number) => {
        if (!gameStarted) setGameStarted(true);
        if (path.includes(id)) return;

        const newPath = [...path, id];
        setPath(newPath);

        if (newPath.length === points.length) {
            setOptimized(true);
        }
    };

    const reset = () => {
        setPath([]);
        setOptimized(false);
        setTimeLeft(10);
        setGameStarted(false);
    };

    return (
        <div className="relative w-full min-h-[400px] bg-gradient-to-br from-slate-900 to-emerald-950 rounded-3xl border border-white/10 p-8 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-black text-white">Мастер Маршрутов</h3>
                        <p className="text-slate-400 text-sm mt-2">
                            Соедините все точки кратчайшим путем. Таймер тикает!
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                            <Timer className={`w-5 h-5 ${timeLeft < 4 ? 'text-red-400 animate-pulse' : 'text-emerald-400'}`} />
                            <div className="text-xl font-mono font-bold text-white tracking-widest">
                                00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
                            </div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 flex items-center gap-3">
                            <Zap className="w-5 h-5 text-yellow-400" />
                            <div className="text-sm font-bold text-white uppercase tracking-tighter">
                                Шаги: {path.length}/{points.length}
                            </div>
                        </div>
                    </div>

                    {optimized && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-emerald-500/20 border border-emerald-500/50 p-6 rounded-2xl"
                        >
                            <h4 className="font-bold text-emerald-400 mb-1">Маршрут построен!</h4>
                            <p className="text-xs text-emerald-400/80 mb-4">Наш алгоритм экономит вам 15% времени. Хотите такой же расчет для бизнеса?</p>
                            <button onClick={reset} className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 hover:text-white transition-colors">Перестроить</button>
                        </motion.div>
                    )}

                    {!gameStarted && !optimized && (
                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em]">Кликните на любую точку для начала</p>
                    )}
                </div>

                <div className="relative aspect-square md:aspect-auto md:h-[300px] bg-slate-950/40 rounded-2xl border border-white/5 overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        {path.map((pointId, idx) => {
                            if (idx === 0) return null;
                            const p1 = points.find(p => p.id === path[idx - 1]);
                            const p2 = points.find(p => p.id === pointId);
                            if (!p1 || !p2) return null;
                            return (
                                <motion.line
                                    key={`line-${idx}`}
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    x1={`${p1.x}%`} y1={`${p1.y}%`}
                                    x2={`${p2.x}%`} y2={`${p2.y}%`}
                                    stroke="rgba(16, 185, 129, 0.4)"
                                    strokeWidth="2"
                                    strokeDasharray="4 4"
                                />
                            );
                        })}
                    </svg>

                    {points.map((p) => (
                        <button
                            key={p.id}
                            onClick={() => handlePointClick(p.id)}
                            className="absolute -translate-x-1/2 -translate-y-1/2 group"
                            style={{ left: `${p.x}%`, top: `${p.y}%` }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                className={`p-2 rounded-full transition-all ${path.includes(p.id)
                                        ? 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]'
                                        : 'bg-slate-800 hover:bg-slate-700'
                                    }`}
                            >
                                <MapPin className={`w-4 h-4 ${path.includes(p.id) ? 'text-white' : 'text-slate-500'}`} />
                            </motion.div>
                        </button>
                    ))}

                    {optimized && (
                        <div className="absolute inset-x-0 bottom-4 flex justify-center">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="bg-indigo-600 px-4 py-2 rounded-full text-[10px] font-bold text-white uppercase tracking-tighter flex items-center gap-2"
                            >
                                <Navigation className="w-3 h-3" /> Оптимальный путь найден
                            </motion.div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
