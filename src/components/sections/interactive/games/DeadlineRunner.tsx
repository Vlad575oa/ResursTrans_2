"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, AlertCircle, CheckCircle, Trophy, Gauge } from "lucide-react";

export default function DeadlineRunner() {
    const [gameState, setGameState] = useState<'idle' | 'playing' | 'won' | 'lost'>('idle');
    const [progress, setProgress] = useState(0);
    const [speed, setSpeed] = useState(1);
    const [obstacles, setObstacles] = useState<{ id: number; pos: number; type: 'pothole' | 'jam' }[]>([]);
    const [truckPos, setTruckPos] = useState(50); // percentage 20 to 80
    const gameRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (gameState !== 'playing') return;

        const interval = setInterval(() => {
            setProgress(p => {
                if (p >= 100) {
                    setGameState('won');
                    return 100;
                }
                return p + (0.5 * speed);
            });

            if (Math.random() > 0.95) {
                setObstacles(prev => [...prev, {
                    id: Date.now(),
                    pos: 100,
                    type: Math.random() > 0.5 ? 'pothole' : 'jam'
                }]);
            }

            setObstacles(prev => prev.map(o => ({ ...o, pos: o.pos - (1 * speed) })).filter(o => o.pos > -10));
        }, 30); // using 30ms for smooth movement

        return () => clearInterval(interval);
    }, [gameState, speed]);

    const handleAction = () => {
        if (gameState === 'idle' || gameState === 'won' || gameState === 'lost') {
            setProgress(0);
            setObstacles([]);
            setSpeed(1);
            setGameState('playing');
        } else {
            // Speed boost
            setSpeed(s => Math.min(s + 0.2, 3));
        }
    };

    return (
        <div
            className="relative w-full min-h-[400px] bg-gradient-to-br from-slate-900 to-blue-900 rounded-3xl border border-white/10 p-8 overflow-hidden cursor-pointer"
            onClick={handleAction}
        >
            <div className="flex flex-col h-full gap-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-2xl font-black text-white italic">Гонка за дедлайном</h3>
                        <p className="text-blue-300/60 text-xs font-bold uppercase tracking-wider mt-1">Миссия: Доставить вовремя</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="bg-black/40 px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
                            <Gauge className="w-4 h-4 text-orange-400" />
                            <span className="text-sm font-mono font-bold text-white">{speed.toFixed(1)}x</span>
                        </div>
                    </div>
                </div>

                <div className="flex-1 relative bg-slate-950/40 rounded-2xl border border-white/5 overflow-hidden min-h-[160px]">
                    {/* Road */}
                    <div className="absolute inset-0 flex flex-col justify-center">
                        <div className="h-24 w-full bg-slate-900 border-y border-white/5 relative">
                            {/* Road markings */}
                            <div className="absolute top-1/2 left-0 w-full h-1 border-t-2 border-dashed border-white/20 -translate-y-1/2" />

                            {/* Truck */}
                            <motion.div
                                className="absolute left-10 top-1/2 -translate-y-1/2 z-10"
                                animate={{ y: [0, -2, 0] }}
                                transition={{ repeat: Infinity, duration: 0.2 }}
                            >
                                <Truck className="w-12 h-12 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                <div className="absolute -bottom-1 left-2 h-1 w-8 bg-black/40 blur-sm rounded-full" />
                            </motion.div>

                            {/* Obstacles */}
                            <AnimatePresence>
                                {obstacles.map(o => (
                                    <motion.div
                                        key={o.id}
                                        className="absolute top-1/2 -translate-y-1/2"
                                        style={{ left: `${o.pos}%` }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        {o.type === 'pothole' ? (
                                            <div className="w-8 h-4 bg-black/60 rounded-[50%] border border-red-500/30" />
                                        ) : (
                                            <AlertCircle className="w-6 h-6 text-orange-500 animate-pulse" />
                                        )}
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Finish Line */}
                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-b from-white via-transparent to-white opacity-20" />
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase text-slate-500 tracking-widest">
                        <span>Склад</span>
                        <span>Пункт назначения</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-blue-600 to-cyan-400"
                            animate={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                <AnimatePresence>
                    {gameState === 'idle' && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
                            <div className="text-center">
                                <p className="text-white font-black text-xl mb-4">ГОТОВЫ К ЗАЕЗДУ?</p>
                                <span className="bg-white text-black px-6 py-2 rounded-full font-bold text-xs">СТАРТ</span>
                            </div>
                        </motion.div>
                    )}
                    {gameState === 'won' && (
                        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="absolute inset-0 bg-emerald-600/90 backdrop-blur-md flex items-center justify-center p-8">
                            <div className="text-center text-white">
                                <Trophy className="w-16 h-16 mx-auto mb-4" />
                                <h4 className="text-2xl font-black mb-2">Груз доставлен!</h4>
                                <p className="text-sm mb-6">Получите промокод "SPEED2026" на первую перевозку.</p>
                                <button onClick={handleAction} className="bg-white text-emerald-600 px-6 py-2 rounded-full font-bold text-xs">ИГРАТЬ СНОВА</button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[9px] text-white/30 font-bold uppercase tracking-[0.3em]">Кликайте для разгона</p>
        </div>
    );
}
