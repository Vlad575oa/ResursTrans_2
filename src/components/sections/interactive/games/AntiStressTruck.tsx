"use client";
import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { Truck } from "lucide-react";

export default function AntiStressTruck() {
    const [isHovered, setIsHovered] = useState(false);
    const [burstKey, setBurstKey] = useState(0);
    const audioCtxRef = useRef<AudioContext | null>(null);

    const playHonk = useCallback(() => {
        try {
            if (!audioCtxRef.current) audioCtxRef.current = new AudioContext();
            const ctx = audioCtxRef.current;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = "square";
            osc.frequency.setValueAtTime(220, ctx.currentTime);
            osc.frequency.setValueAtTime(180, ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.15, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.3);
        } catch (_) { }
    }, []);

    const handleClick = () => {
        playHonk();
        setBurstKey(k => k + 1);
    };

    return (
        <div
            className="relative w-full min-h-[340px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-slate-700 flex flex-col items-center justify-center overflow-hidden p-8 cursor-pointer select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
        >
            <h3 className="text-2xl font-black text-white mb-2">Анти-стресс КАМАЗ</h3>
            <p className="text-slate-400 text-sm mb-10 text-center max-w-sm">Наведи мышку — он приедет. Кликни — загудит и запустит конфетти.</p>

            {/* Confetti burst */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={`${burstKey}-${i}`}
                    initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                    animate={burstKey > 0 ? {
                        opacity: [1, 1, 0],
                        x: Math.cos((i / 12) * Math.PI * 2) * (80 + Math.random() * 60),
                        y: Math.sin((i / 12) * Math.PI * 2) * (80 + Math.random() * 60),
                        scale: [0, 1.5, 0],
                        rotate: Math.random() * 360,
                    } : {}}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="absolute w-3 h-3 rounded-sm"
                    style={{ backgroundColor: ["#10b981", "#f59e0b", "#3b82f6", "#ef4444", "#8b5cf6"][i % 5] }}
                />
            ))}

            {/* Truck */}
            <motion.div
                animate={{ x: isHovered ? 0 : -320 }}
                transition={{ type: "spring", stiffness: 80, damping: 15 }}
                className="flex items-center gap-2"
            >
                <Truck className="w-24 h-24 text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
            </motion.div>

            {/* Lights flash on click */}
            <motion.div
                key={burstKey}
                initial={{ opacity: 0 }}
                animate={burstKey > 0 ? { opacity: [0, 0.4, 0] } : {}}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-yellow-300 pointer-events-none rounded-3xl"
            />
        </div>
    );
}
