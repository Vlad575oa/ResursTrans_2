"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Users, UserCheck, Moon, Truck, Calculator, Send } from "lucide-react";

const OPTIONS = [
    { id: 'insurance', label: 'Страхование', icon: Shield, price: 1500, color: 'text-blue-400' },
    { id: 'movers', label: 'Грузчики', icon: Users, price: 3000, color: 'text-amber-400' },
    { id: 'expeditor', label: 'Экспедитор', icon: UserCheck, price: 2000, color: 'text-indigo-400' },
    { id: 'night', label: 'Ночная доставка', icon: Moon, price: 2500, color: 'text-purple-400' },
];

export default function TariffAlchemy() {
    const [selected, setSelected] = useState<string[]>([]);

    const toggle = (id: string) => {
        setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    const totalPrice = 5000 + selected.reduce((acc, id) => acc + (OPTIONS.find(o => o.id === id)?.price || 0), 0);

    return (
        <div className="relative w-full min-h-[400px] bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl border border-white/10 p-8 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-8">
                    <div>
                        <h3 className="text-3xl font-black text-white tracking-widest uppercase">Алхимия тарифа</h3>
                        <p className="text-indigo-300/50 text-xs font-bold mt-2">Смешивайте опции — создавайте идеальный сервис</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {OPTIONS.map((opt) => (
                            <button
                                key={opt.id}
                                onClick={() => toggle(opt.id)}
                                className={`flex items-center gap-3 p-4 rounded-2xl border transition-all ${selected.includes(opt.id)
                                        ? 'bg-indigo-600/20 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.2)]'
                                        : 'bg-white/5 border-white/10 hover:border-white/20'
                                    }`}
                            >
                                <opt.icon className={`w-5 h-5 ${selected.includes(opt.id) ? opt.color : 'text-slate-500'}`} />
                                <div className="text-left">
                                    <div className="text-[10px] font-black uppercase text-white tracking-tighter">{opt.label}</div>
                                    <div className="text-[9px] text-slate-500 font-bold">+{opt.price} ₽</div>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="p-6 bg-black/40 rounded-2xl border border-white/5 space-y-4">
                        <div className="flex justify-between items-center text-white">
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Итого:</span>
                            <span className="text-2xl font-black text-white">{totalPrice.toLocaleString()} ₽</span>
                        </div>
                        <button className="w-full bg-white text-black py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-indigo-400 hover:text-white transition-all">
                            <Send className="w-4 h-4" /> В корзину
                        </button>
                    </div>
                </div>

                <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-indigo-500/20 blur-[60px] rounded-full animate-pulse" />

                    {/* The "Cauldron" or Central Truck */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="relative z-10"
                    >
                        <Truck className="w-32 h-32 md:w-48 md:h-48 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]" />

                        {/* Dynamic Icons appearing around */}
                        {selected.map((id, i) => {
                            const opt = OPTIONS.find(o => o.id === id)!;
                            const angle = (i / selected.length) * Math.PI * 2;
                            return (
                                <motion.div
                                    key={id}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1, x: Math.cos(angle) * 80, y: Math.sin(angle) * 80 }}
                                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-slate-900 border border-white/10 rounded-full shadow-2xl`}
                                >
                                    <opt.icon className={`w-5 h-5 ${opt.color}`} />
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    <div className="absolute bottom-0 text-[10px] font-black text-indigo-400 uppercase tracking-[0.5em]">Configuration</div>
                </div>
            </div>
        </div>
    );
}
