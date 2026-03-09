"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ShieldCheck } from "lucide-react";

interface Props {
    url: string;
    label: string;
    dict: any;
}

export default function TelegramConfirmLink({ url, label, dict }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [host, setHost] = useState("");
    const { TelegramModal } = dict;

    useEffect(() => {
        if (typeof window !== "undefined") {
            setHost(window.location.hostname === "localhost" ? "DevVlad" : window.location.hostname);
        }
    }, []);

    const handleConfirm = () => {
        window.open(url, "_blank", "noopener,noreferrer");
        setIsOpen(false);
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="hover:text-primary transition-colors font-bold text-left flex items-center gap-2"
            >
                {label}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[1100] flex items-center justify-center p-6">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-background-dark/80 backdrop-blur-md"
                        />

                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-md bg-[#161b22] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] pointer-events-none"></div>

                            <div className="flex flex-col items-center text-center space-y-6">
                                <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-inner relative">
                                    <div className="absolute inset-0 rounded-2xl bg-primary/20 animate-pulse"></div>
                                    <ShieldCheck size={32} />
                                </div>

                                <div className="space-y-3">
                                    <h3 className="text-xl font-black text-white uppercase tracking-tight italic">
                                        {TelegramModal?.title || "Transition"}
                                    </h3>
                                    <p className="text-sm text-slate-400 leading-relaxed px-2">
                                        {TelegramModal?.description?.replace("РесурсЛогистика", host) || `You are leaving ${host} for Telegram.`}
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4 w-full pt-4">
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="py-4 px-6 rounded-2xl bg-[#1c2128] text-slate-300 hover:bg-[#282e39] transition-all font-bold text-sm"
                                    >
                                        {TelegramModal?.cancel || "Cancel"}
                                    </button>
                                    <button
                                        onClick={handleConfirm}
                                        className="py-4 px-6 rounded-2xl bg-[#007aff] text-white hover:bg-blue-600 transition-all font-bold text-sm shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                                    >
                                        {TelegramModal?.proceed || "Proceed"}
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
