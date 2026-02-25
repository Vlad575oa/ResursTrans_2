"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Refrigerator, Layers, AlertCircle, Truck } from "lucide-react";

type Item = { id: string; name: string; weight: number; icon: React.ElementType; color: string };
const AVAILABLE: Omit<Item, "id">[] = [
    { name: "Коробка", weight: 1, icon: Box, color: "bg-blue-500/20 text-blue-400 border-blue-500/50" },
    { name: "Паллета", weight: 2, icon: Layers, color: "bg-amber-500/20 text-amber-400 border-amber-500/50" },
    { name: "Холодильник", weight: 3, icon: Refrigerator, color: "bg-purple-500/20 text-purple-400 border-purple-500/50" },
];
const CAPACITY = 10;

export default function CargoFitting() {
    const [items, setItems] = useState<Item[]>([]);
    const [overloaded, setOverloaded] = useState(false);
    const load = items.reduce((s, i) => s + i.weight, 0);

    const add = (base: Omit<Item, "id">) => {
        if (load + base.weight > CAPACITY) {
            setOverloaded(true);
            setTimeout(() => setOverloaded(false), 800);
            return;
        }
        setItems(p => [...p, { ...base, id: Math.random().toString(36).slice(2) }]);
    };

    return (
        <div className="p-8 md:p-12 bg-slate-900 rounded-3xl border border-slate-800 flex flex-col md:flex-row gap-10 min-h-[480px]">
            <div className="md:w-1/3 flex flex-col gap-6">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Виртуальная примерка</h3>
                    <p className="text-slate-400 text-sm">Добавляйте грузы. Если не влезут — предложим машину побольше.</p>
                </div>
                <div className="flex flex-col gap-3">
                    {AVAILABLE.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <button key={i} onClick={() => add(item)} className={`p-4 rounded-xl border flex items-center justify-between transition-all hover:scale-[1.02] ${item.color}`}>
                                <span className="flex items-center gap-2 font-bold"><Icon className="w-5 h-5" />{item.name}</span>
                                <span className="text-xs bg-black/20 px-2 py-0.5 rounded font-mono">{item.weight} м³</span>
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="md:w-2/3 flex flex-col justify-end relative">
                <AnimatePresence>
                    {overloaded && (
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            className="absolute top-0 left-0 right-0 flex justify-center z-20">
                            <div className="bg-red-500/20 border border-red-500 text-red-200 px-6 py-3 rounded-full flex items-center gap-2 font-bold">
                                <AlertCircle className="w-4 h-4" /> Не влезет! Берите 5-тонник.
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="text-right mb-2">
                    <span className="text-3xl font-black" style={{ color: load >= CAPACITY ? "#eab308" : "#10b981" }}>{load}</span>
                    <span className="text-slate-500 text-sm"> / {CAPACITY} м³</span>
                    {load > 0 && <button onClick={() => setItems([])} className="block ml-auto text-xs text-slate-500 hover:text-white underline mt-1">Разгрузить</button>}
                </div>
                <div className="relative h-48 border-b-8 border-l-8 border-slate-700 rounded-bl-2xl flex items-end p-2 gap-1 flex-wrap-reverse overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:30px_30px]" />
                    <AnimatePresence>
                        {items.map(item => {
                            const Icon = item.icon;
                            return (
                                <motion.div key={item.id} layout initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ opacity: 0 }}
                                    onClick={() => setItems(p => p.filter(i => i.id !== item.id))}
                                    className={`cursor-pointer rounded border-2 flex items-center justify-center group relative ${item.color}`}
                                    style={{ width: `${item.weight * 36}px`, height: "52px" }}>
                                    <Icon className="w-5 h-5 opacity-80" />
                                    <div className="absolute inset-0 bg-red-500/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold rounded">✕</div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
                <div className="flex gap-4 mt-1">
                    <div className="w-8 h-8 bg-slate-900 rounded-full border-4 border-slate-700 -translate-y-4" />
                    <div className="w-8 h-8 bg-slate-900 rounded-full border-4 border-slate-700 -translate-y-4" />
                </div>
            </div>
        </div>
    );
}
