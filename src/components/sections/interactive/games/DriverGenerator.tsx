"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, Star, MapIcon, SmileIcon, CheckCircle2 } from "lucide-react";

const StatBar = ({ label, icon: Icon, pct, delay, run }: { label: string; icon: React.ElementType; pct: number; delay: number; run: boolean }) => (
    <div className="mb-4">
        <div className="flex justify-between text-sm font-bold text-slate-300 mb-1">
            <span className="flex items-center gap-2"><Icon className="w-4 h-4 text-emerald-400" />{label}</span>
            <span>{pct}%</span>
        </div>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: run ? `${pct}%` : 0 }} transition={{ duration: 1, delay, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full" />
        </div>
    </div>
);

export default function DriverGenerator() {
    const [gen, setGen] = useState(false);
    return (
        <div className="p-8 md:p-12 bg-slate-900 rounded-3xl border border-emerald-900/30 flex flex-col md:flex-row items-center gap-10 min-h-[420px]">
            <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Генератор личного водителя</h3>
                <p className="text-slate-400 text-sm mb-8 max-w-xs">Вы нанимаете не железную коробку, а профессиональный сервис. Сгенерируйте идеального исполнителя.</p>
                <button onClick={() => setGen(true)} disabled={gen}
                    className={`px-8 py-4 rounded-xl font-bold text-sm flex items-center gap-3 transition-all ${gen ? "bg-slate-800 text-slate-500 cursor-not-allowed" : "bg-white text-slate-900 hover:bg-emerald-50 shadow-xl shadow-white/10"}`}>
                    {gen ? <CheckCircle2 className="w-5 h-5" /> : <UserPlus className="w-5 h-5" />}
                    {gen ? "Водитель назначен" : "Подобрать профи"}
                </button>
                {gen && <button onClick={() => setGen(false)} className="mt-3 text-xs text-slate-500 hover:text-white underline">Сбросить</button>}
            </div>
            <div className="w-full max-w-sm bg-slate-800/80 border border-slate-700 p-6 rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-slate-700 rounded-full overflow-hidden flex items-center justify-center border-2 border-emerald-500/50">
                        {gen ? (
                            <motion.img initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=b6e3f4" alt="avatar" className="w-full h-full object-cover" />
                        ) : <span className="text-3xl text-slate-600">?</span>}
                    </div>
                    <div>
                        <div className="font-bold text-white">{gen ? "Михаил С." : "Статус: поиск..."}</div>
                        <div className="text-emerald-400 text-sm">{gen ? "Премиум-экипаж" : "—"}</div>
                    </div>
                </div>
                <StatBar label="Безаварийность" icon={Star} pct={98} delay={0.2} run={gen} />
                <StatBar label="Знание маршрутов" icon={MapIcon} pct={100} delay={0.5} run={gen} />
                <StatBar label="Вежливость" icon={SmileIcon} pct={95} delay={0.8} run={gen} />
            </div>
        </div>
    );
}
