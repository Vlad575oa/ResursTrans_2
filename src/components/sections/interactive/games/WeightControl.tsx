"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Package, AlertTriangle, CheckCircle, Info } from "lucide-react";

export default function WeightControl() {
    const [weight, setWeight] = useState(0);
    const limit = 20000; // 20 tons

    const addCargo = (w: number) => {
        setWeight(prev => Math.min(prev + w, 25000));
    };

    const reset = () => setWeight(0);

    const isOverload = weight > limit;

    return (
        <div className="relative w-full min-h-[440px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-white/10 p-8 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                <div className="flex-1 space-y-6">
                    <div>
                        <h3 className="text-2xl font-black text-white italic">Весовой контроль</h3>
                        <p className="text-slate-400 text-sm mt-1">Загрузите машину максимально до 20 тонн на ось.</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                        {[1000, 3000, 5000].map((w) => (
                            <button
                                key={w}
                                onClick={() => addCargo(w)}
                                className="bg-white/5 hover:bg-white/10 p-3 rounded-xl border border-white/10 text-[10px] font-bold text-white uppercase tracking-tighter"
                            >
                                +{w / 1000}т
                            </button>
                        ))}
                    </div>

                    <div className="p-4 bg-black/40 rounded-2xl border border-white/5">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Текущий вес</span>
                            <span className={`text-2xl font-black ${isOverload ? 'text-rose-500 animate-pulse' : 'text-emerald-400'}`}>
                                {(weight / 1000).toFixed(1)} <span className="text-xs uppercase">Тонн</span>
                            </span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                className={`h-full ${isOverload ? 'bg-rose-500' : 'bg-emerald-500'}`}
                                animate={{ width: `${Math.min((weight / limit) * 100, 100)}%` }}
                            />
                        </div>
                    </div>

                    {isOverload && (
                        <div className="flex items-center gap-3 p-4 bg-rose-500/10 border border-rose-500/50 rounded-xl">
                            <AlertTriangle className="w-5 h-5 text-rose-500" />
                            <div className="text-[10px] font-bold text-rose-300 leading-tight">
                                ПЕРЕГРУЗ! Штрафы на посту весового контроля составят до 400 000 ₽.
                            </div>
                        </div>
                    )}

                    <button onClick={reset} className="text-[10px] font-black uppercase text-slate-500 hover:text-white transition-colors">Сбросить весы</button>
                </div>

                <div className="relative w-full md:w-[360px] h-[300px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-blue-500/5 blur-[40px] rounded-full" />

                    {/* Scale visualization */}
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                        <motion.div
                            animate={{ rotate: isOverload ? 10 : (weight / limit) * 5 }}
                            className="relative w-64 h-1 bg-slate-400 rounded-full"
                        >
                            <div className="absolute -top-16 -left-8 flex flex-col items-center">
                                <Package className="w-12 h-12 text-slate-600" />
                                <div className="text-[9px] font-black text-slate-500">Машина</div>
                            </div>

                            <div className="absolute -top-16 -right-8 flex flex-col items-center">
                                <AnimatePresence>
                                    {weight > 0 && Array(Math.min(Math.ceil(weight / 5000), 5)).fill(0).map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 0, y: -20 }}
                                            animate={{ scale: 1, y: 0 }}
                                            className="absolute"
                                            style={{ bottom: i * 8 }}
                                        >
                                            <Package className={`w-10 h-10 ${isOverload ? 'text-rose-400' : 'text-emerald-400'}`} />
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                        <div className="w-8 h-12 bg-slate-700 rounded-t-xl mt-[-2px]" />

                        <div className="mt-8 flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-xl">
                            <Info className="w-4 h-4 text-indigo-400" />
                            <p className="text-[9px] text-slate-400 max-w-[150px]">Мы помогаем выбрать верный тип ТС, чтобы избежать перегруза на оси.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
