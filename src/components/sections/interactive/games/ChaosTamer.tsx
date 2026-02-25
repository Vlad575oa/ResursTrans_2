"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box } from "lucide-react";

type BoxItem = { id: number; x: number; y: number; rotate: number; color: string };

function generateInitialBoxes(): BoxItem[] {
    return Array.from({ length: 9 }, (_, i) => ({
        id: i,
        x: Math.random() * 60 - 30,
        y: Math.random() * 60 - 30,
        rotate: Math.random() * 40 - 20,
        color: ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444"][i % 5],
    }));
}

export default function ChaosTamer() {
    const [isSorted, setIsSorted] = useState(false);
    const [initialBoxes, setInitialBoxes] = useState<ReturnType<typeof generateInitialBoxes>>([]);

    useEffect(() => { setInitialBoxes(generateInitialBoxes()); }, []);

    const gridPositions = Array.from({ length: 9 }, (_, i) => ({
        x: (i % 3) * 70 - 70,
        y: Math.floor(i / 3) * 70 - 70,
    }));

    return (
        <div className="w-full min-h-[400px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-slate-700 flex flex-col items-center justify-center p-8 gap-8">
            <div className="text-center">
                <h3 className="text-2xl font-black text-white mb-2">Укротитель Хаоса</h3>
                <p className="text-slate-400 text-sm max-w-sm">Нажмите кнопку — склад мгновенно организуется.</p>
            </div>

            <div className="relative w-64 h-64 flex items-center justify-center">
                {initialBoxes.map((box, i) => (
                    <motion.div
                        key={box.id}
                        animate={isSorted
                            ? { x: gridPositions[i].x, y: gridPositions[i].y, rotate: 0, opacity: 1 }
                            : { x: box.x, y: box.y, rotate: box.rotate, opacity: 0.85 }
                        }
                        transition={{ type: "spring", stiffness: 100, damping: 14, delay: isSorted ? i * 0.04 : 0 }}
                        className="absolute"
                    >
                        <Box className="w-14 h-14" style={{ color: box.color }} />
                    </motion.div>
                ))}
            </div>

            <button
                onClick={() => setIsSorted(s => !s)}
                className={`px-8 py-3 rounded-full font-bold text-sm transition-all shadow-lg ${isSorted
                        ? "bg-slate-700 text-white hover:bg-slate-600"
                        : "bg-emerald-500 text-white hover:bg-emerald-400 shadow-emerald-500/30"
                    }`}
            >
                {isSorted ? "Устроить хаос" : "Оптимизировать склад"}
            </button>
        </div>
    );
}
