"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Fuel, Leaf, Gauge, Thermometer, AlertTriangle } from "lucide-react";

export default function EcoDrive() {
    const [speed, setSpeed] = useState(50);
    const [consumption, setConsumption] = useState(0);
    const [efficiency, setEfficiency] = useState(100);

    useEffect(() => {
        // Efficiency is best around 60-80 km/h
        const optimalSpeed = 70;
        const diff = Math.abs(speed - optimalSpeed);

        // Calculate consumption: higher when speed is too high or too low
        const baseCons = 15;
        const speedFactor = speed > optimalSpeed ? (speed - optimalSpeed) * 0.5 : (optimalSpeed - speed) * 0.3;
        const newCons = baseCons + speedFactor;
        setConsumption(newCons);

        // Efficiency score
        const newEff = Math.max(0, 100 - (diff * 1.5));
        setEfficiency(newEff);
    }, [speed]);

    return (
        <div className="relative w-full min-h-[400px] bg-gradient-to-br from-slate-900 to-emerald-900/40 rounded-3xl border border-white/10 p-8 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-8">
                    <div>
                        <h3 className="text-2xl font-black text-white uppercase italic">Эко-Драйв</h3>
                        <p className="text-emerald-400/60 text-xs font-bold mt-1">Оптимизация ГСМ через скорость</p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex justify-between items-center text-[10px] font-black uppercase text-slate-500 tracking-widest">
                            <span>Скорость: {speed} км/ч</span>
                            <span className={efficiency > 80 ? 'text-emerald-400' : efficiency > 50 ? 'text-yellow-400' : 'text-rose-400'}>
                                Эффективность: {efficiency.toFixed(0)}%
                            </span>
                        </div>
                        <input
                            type="range"
                            min="0" max="120"
                            value={speed}
                            onChange={(e) => setSpeed(parseInt(e.target.value))}
                            className="w-full h-2 bg-white/5 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
                            <div className="flex items-center gap-2 mb-2 text-rose-400">
                                <Fuel className="w-4 h-4" />
                                <span className="text-[10px] font-black uppercase">Расход</span>
                            </div>
                            <div className="text-2xl font-black text-white">{consumption.toFixed(1)} <span className="text-xs text-slate-500">л/100км</span></div>
                        </div>
                        <div className="bg-black/40 p-4 rounded-2xl border border-white/5">
                            <div className="flex items-center gap-2 mb-2 text-emerald-400">
                                <Leaf className="w-4 h-4" />
                                <span className="text-[10px] font-black uppercase">CO₂</span>
                            </div>
                            <div className="text-2xl font-black text-white">{(consumption * 2.6).toFixed(1)} <span className="text-xs text-slate-500">кг/рейс</span></div>
                        </div>
                    </div>
                </div>

                <div className="relative w-64 h-64 md:w-80 md:h-80 flex flex-col items-center justify-center">
                    <div className="absolute inset-0 bg-emerald-500/5 blur-[50px] rounded-full" />

                    {/* Speedometer visualization */}
                    <div className="relative w-48 h-48 rounded-full border-4 border-white/5 flex items-center justify-center">
                        <motion.div
                            className="absolute inset-0 rounded-full border-t-4 border-emerald-500"
                            style={{ rotate: (speed / 120) * 270 - 135 }}
                        />
                        <div className="text-center">
                            <div className="text-4xl font-black text-white">{speed}</div>
                            <div className="text-[10px] uppercase font-bold text-slate-500">KM/H</div>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center gap-2">
                        {efficiency > 90 ? (
                            <div className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-emerald-500/30 flex items-center gap-2">
                                <Leaf className="w-3 h-3" /> Экономия MAX
                            </div>
                        ) : efficiency < 40 ? (
                            <div className="px-4 py-2 bg-rose-500/20 text-rose-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-rose-500/30 flex items-center gap-2">
                                <AlertTriangle className="w-3 h-3" /> Перерасход ГСМ
                            </div>
                        ) : (
                            <div className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-[10px] font-bold uppercase tracking-widest border border-yellow-500/30">
                                Оптимизация...
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
