"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ru from "@/app/messages/ru.json";

export default function TelegramFab() {
    const [isOpen, setIsOpen] = useState(false);
    const { TelegramModal } = ru;

    const telegramLink = "https://t.me/resurslogistics"; // Example link

    const handleProceed = () => {
        window.open(telegramLink, "_blank", "noopener,noreferrer");
        setIsOpen(false);
    };

    return (
        <>
            <div className="fixed bottom-8 right-8 z-[100]">
                <button
                    onClick={() => setIsOpen(true)}
                    className="size-14 rounded-full bg-[#24A1DE] flex items-center justify-center text-white shadow-lg hover:scale-110 active:scale-95 transition-all group relative"
                    aria-label="Telegram"
                >
                    <div className="absolute inset-0 rounded-full bg-[#24A1DE] animate-ping opacity-20 pointer-events-none"></div>
                    <svg
                        className="size-7"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                    </svg>
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-md bg-[#161b22] border border-[#282e39] rounded-2xl p-8 shadow-2xl overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] pointer-events-none"></div>

                            <div className="size-20 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500 mb-6 mx-auto">
                                <span className="material-symbols-outlined text-4xl">info</span>
                            </div>

                            <div className="text-center space-y-4 mb-8">
                                <h3 className="text-2xl font-bold text-white tracking-tight">
                                    {TelegramModal.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {TelegramModal.description}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="py-4 px-6 rounded-2xl bg-[#1c2128] text-slate-300 hover:bg-[#282e39] transition-all font-bold text-sm"
                                >
                                    {TelegramModal.cancel}
                                </button>
                                <button
                                    onClick={handleProceed}
                                    className="py-4 px-6 rounded-2xl bg-[#007aff] text-white hover:bg-blue-600 transition-all font-bold text-sm shadow-lg shadow-blue-500/20"
                                >
                                    {TelegramModal.proceed}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
