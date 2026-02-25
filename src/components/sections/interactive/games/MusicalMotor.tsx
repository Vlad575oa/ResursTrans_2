"use client";
import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Volume2, AudioLines, Settings, Play, Pause, Zap } from "lucide-react";

export default function MusicalMotor() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [rpm, setRpm] = useState(1000);
    const audioCtxRef = useRef<AudioContext | null>(null);
    const oscillatorRef = useRef<OscillatorNode | null>(null);
    const gainRef = useRef<GainNode | null>(null);

    const startMotor = () => {
        if (!audioCtxRef.current) audioCtxRef.current = new AudioContext();
        const ctx = audioCtxRef.current;

        oscillatorRef.current = ctx.createOscillator();
        gainRef.current = ctx.createGain();

        oscillatorRef.current.type = "sawtooth";
        oscillatorRef.current.frequency.setValueAtTime(rpm / 20, ctx.currentTime);

        gainRef.current.gain.setValueAtTime(0.05, ctx.currentTime);

        oscillatorRef.current.connect(gainRef.current);
        gainRef.current.connect(ctx.destination);

        oscillatorRef.current.start();
        setIsPlaying(true);
    };

    const stopMotor = () => {
        oscillatorRef.current?.stop();
        oscillatorRef.current?.disconnect();
        setIsPlaying(false);
    };

    const updateRpm = (val: number) => {
        setRpm(val);
        if (oscillatorRef.current && audioCtxRef.current) {
            oscillatorRef.current.frequency.setTargetAtTime(val / 20, audioCtxRef.current.currentTime, 0.1);
        }
    };

    return (
        <div className="relative w-full min-h-[500px] bg-gradient-to-br from-slate-950 via-zinc-900 to-slate-950 rounded-3xl border border-white/10 p-8 overflow-hidden group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.1),transparent)] pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-12 relative z-10 h-full">
                <div className="flex flex-col justify-between">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Music className="w-5 h-5 text-purple-500 animate-pulse" />
                                <span className="text-[10px] uppercase font-black tracking-[0.4em] text-purple-500">Acoustic Diagnostics Unit</span>
                            </div>
                            <h3 className="text-3xl font-black text-white uppercase tracking-tighter italic">Музыкальный мотор</h3>
                            <p className="text-slate-400 text-sm max-w-sm">Слушай ритм своего автопарка. Настрой обороты двигателя до идеального звучания — так звучит эффективность.</p>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-3">
                                <div className="flex justify-between items-end">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Engine Speed (RPM)</span>
                                    <span className="text-2xl font-black text-purple-400 font-mono italic">{rpm}</span>
                                </div>
                                <input
                                    type="range"
                                    min="800" max="6000" step="50"
                                    value={rpm}
                                    onChange={(e) => updateRpm(Number(e.target.value))}
                                    className="w-full h-1.5 bg-white/10 rounded-full accent-purple-500 cursor-pointer appearance-none"
                                />
                            </div>

                            <div className="flex gap-4">
                                <button
                                    onClick={isPlaying ? stopMotor : startMotor}
                                    className={`flex-1 py-5 rounded-2xl font-black text-sm uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 border ${isPlaying
                                            ? 'bg-purple-600/20 border-purple-500 text-purple-400'
                                            : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10'
                                        }`}
                                >
                                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                                    {isPlaying ? 'ГЛУШИТЬ' : 'ЗАПУСК'}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-purple-500/5 rounded-2xl border border-purple-500/10 flex items-center gap-4">
                        <Volume2 className="w-8 h-8 text-purple-500/40" />
                        <div className="flex-1 space-y-1">
                            <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    animate={{ x: isPlaying ? ["0%", "-100%"] : "0%" }}
                                    transition={{ repeat: Infinity, duration: 10 / rpm * 1000, ease: "linear" }}
                                    className="w-[200%] h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                                />
                            </div>
                            <span className="text-[8px] font-black text-slate-600 uppercase tracking-widest">Audio Stream v8.2 // Engine_Harmonics_Sync</span>
                        </div>
                    </div>
                </div>

                <div className="relative bg-black/60 rounded-3xl border border-purple-500/20 flex flex-col items-center justify-center overflow-hidden min-h-[350px]">
                    <AnimatePresence>
                        {isPlaying && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center gap-8"
                            >
                                <div className="relative">
                                    <motion.div
                                        animate={{ scale: [1, 1.1 + (rpm / 10000), 1], rotate: [0, 5, -5, 0] }}
                                        transition={{ repeat: Infinity, duration: 60 / rpm }}
                                        className="p-12 bg-purple-500/20 rounded-full border-4 border-purple-500/40 shadow-[0_0_80px_rgba(168,85,247,0.3)]"
                                    >
                                        <AudioLines className="w-24 h-24 text-purple-400" />
                                    </motion.div>
                                    <motion.div
                                        animate={{ scale: [1, 2], opacity: [0.5, 0] }}
                                        transition={{ repeat: Infinity, duration: 1, ease: "easeOut" }}
                                        className="absolute inset-0 border-2 border-purple-500 rounded-full"
                                    />
                                </div>
                                <div className="flex gap-2">
                                    {[...Array(8)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: [10, 40 + Math.random() * 40, 10] }}
                                            transition={{ repeat: Infinity, duration: 0.2 + i * 0.1 }}
                                            className="w-1 bg-purple-500 rounded-full"
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {!isPlaying && (
                        <div className="flex flex-col items-center gap-6 opacity-30">
                            <Settings className="w-20 h-20 text-slate-500" />
                            <span className="text-[10px] uppercase font-black tracking-[0.4em] text-slate-500">Wait for ignition</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
