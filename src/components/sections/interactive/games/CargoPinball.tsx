"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Circle, Star, Zap, Disc, Target, Trophy } from "lucide-react";

export default function CargoPinball() {
    const [balls, setBalls] = useState<any[]>([]);
    const [score, setScore] = useState(0);
    const [multiplier, setMultiplier] = useState(1);
    const [isShake, setIsShake] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const spawnBall = () => {
        const id = Date.now();
        // 20% chance for a golden (multiplier) cargo
        const isSpecial = Math.random() > 0.8;
        setBalls(prev => [...prev, {
            id,
            x: Math.random() * 80 + 10,
            y: -10,
            v: 1.5 + Math.random() * 2,
            isSpecial
        }]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setBalls(prev => prev.map(b => ({ ...b, y: b.y + b.v }))
                .filter(b => b.y < 110));
        }, 20);
        return () => clearInterval(interval);
    }, []);

    const catchBall = (id: number, isSpecial: boolean) => {
        setBalls(prev => prev.filter(b => b.id !== id));

        if (isSpecial) {
            setMultiplier(m => Math.min(m + 1, 10));
            setScore(s => s + (1500 * multiplier));
            setIsShake(true);
            setTimeout(() => setIsShake(false), 300);
        } else {
            setScore(s => s + (500 * multiplier));
        }
    };

    return (
        <div className={`relative w-full min-h-[500px] bg-gradient-to-br from-[#0c0c0c] via-[#1a1a2e] to-[#0c0c0c] rounded-3xl border border-white/10 p-8 overflow-hidden transition-transform duration-75 ${isShake ? 'scale-[1.02] translate-y-1' : ''}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.05)_0%,transparent_70%)]" />

            {/* Multiplier Glow Effect */}
            <div className={`absolute inset-0 transition-opacity duration-500 pointer-events-none bg-pink-500/5`} style={{ opacity: multiplier > 1 ? (multiplier / 10) : 0 }} />

            <div className="grid lg:grid-cols-2 gap-12 relative z-10 h-full">
                <div className="space-y-8 flex flex-col justify-between">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Disc className="w-5 h-5 text-pink-500 animate-spin-slow" />
                            <span className="text-[10px] uppercase font-black tracking-[0.4em] text-pink-500">Arcade Logistics System v2.1</span>
                        </div>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">Грузовой пинбол</h3>
                        <p className="text-slate-400 text-sm max-w-sm font-medium">Ловите золотые контейнеры, чтобы активировать множитель прибыли.</p>
                    </div>

                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1 p-5 bg-white/5 rounded-2xl border border-white/10 shadow-2xl">
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Balance</span>
                                <div className="text-3xl font-black text-white font-mono tracking-tighter italic">
                                    {score.toLocaleString()}<span className="text-pink-500 text-xs ml-1 font-bold">₽</span>
                                </div>
                            </div>
                            <div className={`flex flex-col gap-1 p-5 rounded-2xl border transition-all duration-500 ${multiplier > 1 ? 'bg-pink-500/20 border-pink-500/50' : 'bg-white/5 border-white/10'}`}>
                                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Multiplier</span>
                                <div className={`text-3xl font-black font-mono tracking-tighter italic ${multiplier > 1 ? 'text-pink-400' : 'text-slate-500'}`}>
                                    x{multiplier}
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={spawnBall}
                            className="group relative w-full py-5 overflow-hidden rounded-2xl font-black text-sm uppercase tracking-[0.3em] transition-all border border-pink-400/20 shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-pink-600 group-hover:bg-pink-500 transition-colors" />
                            <div className="relative flex items-center justify-center gap-3 text-white">
                                <Zap className="w-5 h-5 group-hover:scale-125 transition-transform" />
                                ВБРОС ГРУЗА
                            </div>
                        </button>
                    </div>
                </div>

                <div
                    ref={containerRef}
                    className="relative bg-black/60 rounded-3xl border border-pink-500/20 overflow-hidden min-h-[400px] shadow-2xl backdrop-blur-sm"
                >
                    {/* Visual decor */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

                    <AnimatePresence>
                        {balls.map(ball => (
                            <motion.div
                                key={ball.id}
                                onClick={() => catchBall(ball.id, ball.isSpecial || false)}
                                className={`absolute w-14 h-14 rounded-2xl cursor-pointer flex items-center justify-center border-2 shadow-2xl group/ball`}
                                style={{
                                    left: `${ball.x}%`,
                                    top: `${ball.y}%`,
                                    background: ball.isSpecial
                                        ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                                        : 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
                                    borderColor: ball.isSpecial ? '#fbbf24' : 'rgba(255,255,255,0.2)'
                                }}
                                initial={{ scale: 0, rotate: -45 }}
                                animate={{ scale: 1, rotate: 0 }}
                                exit={{ scale: 0, rotate: 45, opacity: 0 }}
                                whileHover={{ scale: 1.1, rotate: 10 }}
                            >
                                {ball.isSpecial ? (
                                    <Star className="w-7 h-7 text-white animate-spin-slow" />
                                ) : (
                                    <Target className="w-6 h-6 text-white/50 group-hover/ball:text-white transition-colors" />
                                )}

                                {/* Trail effect */}
                                <div className={`absolute -top-4 w-1 h-8 rounded-full blur-sm opacity-20 ${ball.isSpecial ? 'bg-amber-400' : 'bg-pink-500'}`} />
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {balls.length === 0 && (score === 0 ? (
                        <div className="absolute inset-0 flex items-center justify-center opacity-20 flex-col gap-4">
                            <Star className="w-16 h-16 text-pink-500 animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-pink-500">System Ready</span>
                        </div>
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center opacity-40 flex-col gap-2">
                            <Trophy className="w-12 h-12 text-pink-400" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-white">Well Played</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
