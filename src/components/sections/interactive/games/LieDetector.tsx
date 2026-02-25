'use client';

import { useState, useEffect } from 'react';
import { Brain, Activity, ShieldAlert, Fingerprint, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QUESTIONS = [
    { id: 1, text: "Сливали ли вы топливо в этом месяце?", baseline: 40, category: "CRITICAL" },
    { id: 2, text: "Нарушали ли вы скоростной режим на трассе?", baseline: 25, category: "SAFETY" },
    { id: 3, text: "Были ли случаи перевозки левых грузов?", baseline: 60, category: "SECURITY" },
    { id: 4, text: "Использовали ли вы служебное авто в личных целях?", baseline: 30, category: "FLEET" },
];

export default function LieDetector() {
    const [isMeasuring, setIsMeasuring] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState(QUESTIONS[0]);
    const [pulse, setPulse] = useState(72);
    const [stress, setStress] = useState(0);
    const [verdict, setVerdict] = useState<'honest' | 'lying' | null>(null);
    const [progress, setProgress] = useState(0);

    const startTest = () => {
        setIsMeasuring(true);
        setVerdict(null);
        setProgress(0);
        setStress(0);
    };

    useEffect(() => {
        if (isMeasuring && progress < 100) {
            const timer = setTimeout(() => {
                setProgress(prev => prev + 2);
                setPulse(70 + Math.random() * 20 + (stress / 4));
                // Stress is influenced by the question baseline
                const targetStress = selectedQuestion.baseline + Math.random() * 40;
                setStress(prev => {
                    const jump = Math.random() > 0.9 ? 15 : 2;
                    return Math.min(100, prev + (targetStress - prev) * 0.1 + jump);
                });
            }, 50);
            return () => clearTimeout(timer);
        } else if (progress >= 100) {
            setIsMeasuring(false);
            // Result logic based on final stress vs baseline
            setVerdict(stress > selectedQuestion.baseline + 20 ? 'lying' : 'honest');
        }
    }, [isMeasuring, progress, stress, selectedQuestion]);

    return (
        <div className="relative w-full min-h-[600px] bg-gradient-to-br from-slate-950 via-slate-900 to-[#0e1628] rounded-3xl border border-white/10 p-8 overflow-hidden group">
            <div className="absolute inset-0 bg-grid-pattern bg-[length:20px_20px] opacity-10 pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-12 relative z-10 h-full">
                <div className="flex flex-col justify-between">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Brain className="w-5 h-5 text-indigo-400 animate-pulse" />
                                <span className="text-[10px] uppercase font-black tracking-[0.3em] text-indigo-400">Logistics Bio-Probe v2</span>
                            </div>
                            <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">Детектор лжи</h3>
                            <p className="text-slate-400 text-sm max-w-sm font-medium">Система анализа микродвижений и тембра голоса в реальном времени.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest pl-1">Выберите вопрос для проверки</label>
                                <div className="grid gap-2">
                                    {QUESTIONS.map(q => (
                                        <button
                                            key={q.id}
                                            onClick={() => setSelectedQuestion(q)}
                                            disabled={isMeasuring}
                                            className={`text-left p-3 rounded-xl text-[11px] font-bold transition-all border ${selectedQuestion.id === q.id
                                                ? 'bg-indigo-500/20 border-indigo-500 text-white'
                                                : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10'}`}
                                        >
                                            <span className="opacity-50 mr-2">[{q.category}]</span> {q.text}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Pulse</span>
                                        <Activity className="w-4 h-4 text-red-500 animate-pulse" />
                                    </div>
                                    <div className="text-2xl font-black text-white font-mono">{Math.round(pulse)} <span className="text-[10px] text-slate-500 opacity-50">BPM</span></div>
                                </div>
                                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 space-y-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Stress</span>
                                        <ShieldAlert className={`w-4 h-4 ${stress > 70 ? 'text-amber-500 animate-bounce' : 'text-slate-600'}`} />
                                    </div>
                                    <div className="text-2xl font-black text-white font-mono">{Math.round(stress)}%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={startTest}
                        disabled={isMeasuring}
                        className={`w-full mt-8 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 border shadow-2xl ${isMeasuring
                            ? 'bg-slate-800 border-white/5 text-slate-500'
                            : 'bg-indigo-600 hover:bg-indigo-500 border-indigo-400/20 text-white shadow-indigo-500/20'
                            }`}
                    >
                        {isMeasuring ? 'ИДЕТ СКАНИРОВАНИЕ...' : 'ЗАПУСТИТЬ ТЕСТ'}
                    </button>
                </div>

                <div className="relative bg-black/40 rounded-2xl border border-indigo-500/20 p-8 flex flex-col items-center justify-center overflow-hidden min-h-[400px]">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="w-full h-full opacity-25 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0%,transparent_70%)]" />
                        {isMeasuring && (
                            <motion.div
                                initial={{ top: "0%" }}
                                animate={{ top: "100%" }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                className="absolute left-0 right-0 h-[3px] bg-indigo-500/50 shadow-[0_0_20px_rgba(79,70,229,1)] z-10"
                            />
                        )}
                    </div>

                    <AnimatePresence mode="wait">
                        {isMeasuring ? (
                            <motion.div
                                key="probing"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 1.1, opacity: 0 }}
                                className="flex flex-col items-center gap-8"
                            >
                                <div className="relative">
                                    <Fingerprint className="w-40 h-40 text-indigo-500/40" />
                                    <motion.div
                                        className="absolute inset-0 border-4 border-indigo-500 rounded-full"
                                        animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                    />
                                </div>
                                <div className="space-y-2 text-center">
                                    <div className="text-[10px] text-indigo-400 font-black uppercase tracking-[0.4em] mb-2">Analyzing response</div>
                                    <div className="w-48 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
                                        <motion.div className="h-full bg-indigo-500" animate={{ width: `${progress}%` }} />
                                    </div>
                                </div>
                            </motion.div>
                        ) : verdict ? (
                            <motion.div
                                key="result"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="flex flex-col items-center gap-6"
                            >
                                {verdict === 'honest' ? (
                                    <>
                                        <div className="w-32 h-32 bg-emerald-500/10 rounded-3xl flex items-center justify-center border-2 border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.2)] rotate-45">
                                            <CheckCircle className="w-16 h-16 text-emerald-400 -rotate-45" />
                                        </div>
                                        <div className="text-center">
                                            <h4 className="text-4xl font-black text-white uppercase italic tracking-tighter">ЧИСТО</h4>
                                            <p className="text-emerald-400/80 text-[10px] font-black mt-3 uppercase tracking-[0.2em] max-w-[200px]">Признаков деструктивных намерений не обнаружено</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="w-32 h-32 bg-red-500/10 rounded-3xl flex items-center justify-center border-2 border-red-500/30 shadow-[0_0_50px_rgba(239,68,68,0.2)] rotate-45">
                                            <ShieldAlert className="w-16 h-16 text-red-500 -rotate-45" />
                                        </div>
                                        <div className="text-center">
                                            <h4 className="text-4xl font-black text-white uppercase italic tracking-tighter">ЛОЖЬ</h4>
                                            <p className="text-red-500/80 text-[10px] font-black mt-3 uppercase tracking-[0.2em] max-w-[200px]">Зафиксированы аномальные паттерны нервной системы</p>
                                        </div>
                                    </>
                                )}
                                <button
                                    onClick={() => setVerdict(null)}
                                    className="text-[10px] text-slate-500 hover:text-white font-bold uppercase tracking-widest transition-colors"
                                >
                                    сбросить данные
                                </button>
                            </motion.div>
                        ) : (
                            <div className="flex flex-col items-center gap-10 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                                <Fingerprint className="w-24 h-24 text-indigo-500" />
                                <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Scan Required</div>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
