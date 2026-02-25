"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, AlertTriangle, FileWarning, Wallet, XCircle, CheckCircle } from "lucide-react";

const VIOLATIONS = [
    { id: 1, label: "Без путевого листа", penalty: 5000, color: "text-red-400" },
    { id: 2, label: "Перегруз 200кг", penalty: 2000, color: "text-orange-400" },
    { id: 3, label: "Нет политики на сайте", penalty: 3000, color: "text-yellow-400" },
    { id: 4, label: "Просрочен техосмотр", penalty: 4500, color: "text-rose-400" },
    { id: 5, label: "Нарушение режима труда", penalty: 2500, color: "text-amber-400" },
];

export default function FineDetector() {
    const [score, setScore] = useState(0);
    const [activeViolations, setActiveViolations] = useState<number[]>([]);
    const [missedFines, setMissedFines] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        if (gameOver) return;

        const interval = setInterval(() => {
            if (activeViolations.length < 3) {
                const random = VIOLATIONS[Math.floor(Math.random() * VIOLATIONS.length)];
                if (!activeViolations.includes(random.id)) {
                    setActiveViolations(prev => [...prev, random.id]);

                    // Auto-fail if not clicked in 3 seconds
                    setTimeout(() => {
                        setActiveViolations(prev => {
                            if (prev.includes(random.id)) {
                                setMissedFines(m => m + random.penalty);
                                return prev.filter(id => id !== random.id);
                            }
                            return prev;
                        });
                    }, 3000);
                }
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [activeViolations, gameOver]);

    const catchViolation = (id: number) => {
        setScore(s => s + 1);
        setActiveViolations(prev => prev.filter(v => v !== id));
        if (score >= 10) setGameOver(true);
    };

    const reset = () => {
        setScore(0);
        setMissedFines(0);
        setActiveViolations([]);
        setGameOver(false);
    };

    return (
        <div className="relative w-full min-h-[400px] bg-gradient-to-br from-slate-900 to-rose-950 rounded-3xl border border-white/10 p-8 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 justify-between">
                <div className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-black text-white">Детектор штрафов</h3>
                        <p className="text-slate-400 text-sm mt-2">
                            Ловите нарушения, пока они не превратились в штрафы!
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                            <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Отражено</div>
                            <div className="text-2xl font-black text-white">{score}</div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                            <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Виртуальный штраф</div>
                            <div className="text-2xl font-black text-rose-400 flex items-center gap-2">
                                <Wallet className="w-5 h-5" />
                                {missedFines.toLocaleString()} ₽
                            </div>
                        </div>
                    </div>

                    {gameOver && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-black/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl"
                        >
                            <h4 className="font-bold text-white mb-2 underline decoration-rose-500">Устали платить штрафы?</h4>
                            <p className="text-xs text-slate-400 mb-4">Переходите на наш аутсорсинг — мы берем риски на себя.</p>
                            <button onClick={reset} className="bg-rose-600 hover:bg-rose-500 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors">Попробовать снова</button>
                        </motion.div>
                    )}
                </div>

                <div className="relative flex-1 min-h-[250px] bg-slate-950/40 rounded-2xl border border-white/5 flex items-center justify-center">
                    <AnimatePresence>
                        {activeViolations.map((id) => {
                            const v = VIOLATIONS.find(item => item.id === id)!;
                            return (
                                <motion.button
                                    key={id}
                                    initial={{ scale: 0, opacity: 0, rotate: -20 }}
                                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                                    exit={{ scale: 1.5, opacity: 0 }}
                                    onClick={() => catchViolation(id)}
                                    className={`absolute group p-4 bg-slate-900 border border-white/10 rounded-2xl shadow-xl flex flex-col items-center gap-2`}
                                    style={{
                                        left: `${20 + Math.random() * 60}%`,
                                        top: `${20 + Math.random() * 60}%`
                                    }}
                                >
                                    <AlertTriangle className={`w-8 h-8 ${v.color}`} />
                                    <span className="text-[10px] font-bold text-white whitespace-nowrap">{v.label}</span>
                                    <span className="text-[9px] font-black text-rose-500 uppercase">+{v.penalty}₽</span>
                                </motion.button>
                            );
                        })}
                    </AnimatePresence>

                    {!gameOver && activeViolations.length === 0 && (
                        <div className="text-slate-600 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 animate-pulse">
                            <ShieldAlert className="w-4 h-4" /> Сканирование потока...
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
