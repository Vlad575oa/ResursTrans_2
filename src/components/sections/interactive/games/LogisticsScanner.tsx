"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Search, CheckCircle, HelpCircle, FileCheck, FileWarning } from "lucide-react";

const DOCUMENTS = [
    { id: 'ttn', name: 'ТТН', desc: 'Товарно-транспортная накладная. Основной документ рейса.', penalty: '50 000 ₽' },
    { id: 'waybill', name: 'Путевой лист', desc: 'Учет работы водителя и ТС.', penalty: '30 000 ₽' },
    { id: 'contract', name: 'Договор', desc: 'Основание для перевозки.', penalty: '100% стоимости' },
    { id: 'insurance', name: 'ОСАГО/CMR', desc: 'Страхование ответственности.', penalty: 'Лишение прав' },
    { id: 'license', name: 'Лицензия', desc: 'Право на перевозку грузов.', penalty: 'Конфискация ТС' },
];

export default function LogisticsScanner() {
    const [found, setFound] = useState<string[]>([]);
    const [activeMsg, setActiveMsg] = useState<typeof DOCUMENTS[0] | null>(null);
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        if (timeLeft > 0 && found.length < DOCUMENTS.length) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft, found]);

    const handleFind = (id: string) => {
        if (found.includes(id)) return;
        setFound([...found, id]);
        const doc = DOCUMENTS.find(d => d.id === id)!;
        setActiveMsg(doc);
    };

    return (
        <div className="relative w-full min-h-[440px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-white/10 p-8 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="space-y-6 flex-1">
                    <div>
                        <h3 className="text-2xl font-black text-white uppercase italic">Логистический сканер</h3>
                        <p className="text-slate-400 text-sm mt-1">Найдите все 5 обязательных документов на заваленном столе!</p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <div className="bg-white/5 px-4 py-3 rounded-2xl border border-white/10 flex items-center gap-3">
                            <Search className="w-5 h-5 text-indigo-400" />
                            <div className="text-xl font-mono font-bold text-white tracking-widest">{found.length}/{DOCUMENTS.length}</div>
                        </div>
                        <div className="bg-white/5 px-4 py-3 rounded-2xl border border-white/10">
                            <div className="text-xl font-mono font-bold text-indigo-400">00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}</div>
                        </div>
                    </div>

                    <div className="relative h-20">
                        <AnimatePresence mode="wait">
                            {activeMsg && (
                                <motion.div
                                    key={activeMsg.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="bg-indigo-600/20 border border-indigo-500/50 p-4 rounded-xl"
                                >
                                    <h4 className="font-bold text-white flex items-center gap-2">
                                        <FileCheck className="w-4 h-4 text-emerald-400" /> {activeMsg.name}
                                    </h4>
                                    <p className="text-[10px] text-slate-300 mt-1">{activeMsg.desc} <span className="text-rose-400 font-bold">Штраф: {activeMsg.penalty}</span></p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="relative w-full md:w-[400px] h-[280px] bg-slate-950/40 rounded-2xl border border-white/5 overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&q=80&w=400')] bg-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700" />

                    {DOCUMENTS.map((doc, i) => (
                        <button
                            key={doc.id}
                            onClick={() => handleFind(doc.id)}
                            className={`absolute p-2 transition-all ${found.includes(doc.id) ? 'opacity-30 scale-75' : 'hover:scale-125'}`}
                            style={{
                                left: `${10 + (i * 20)}%`,
                                top: `${20 + (Math.sin(i) * 30 + 30)}%`,
                                transform: `rotate(${i * 15}deg)`
                            }}
                        >
                            <FileText className={`w-8 h-8 ${found.includes(doc.id) ? 'text-emerald-500' : 'text-slate-400'}`} />
                            {found.includes(doc.id) && <CheckCircle className="absolute -top-1 -right-1 w-4 h-4 text-emerald-500" />}
                        </button>
                    ))}

                    {found.length === DOCUMENTS.length && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 bg-emerald-600/90 flex items-center justify-center p-8 text-center text-white">
                            <div className="space-y-4">
                                <FileCheck className="w-12 h-12 mx-auto" />
                                <h4 className="text-xl font-bold">Документы в порядке!</h4>
                                <p className="text-xs">Мы держим документацию в идеале. Проверьте нас!</p>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
