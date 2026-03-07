"use client";

import { motion } from "framer-motion";

export default function CasesHero() {
    return (
        <section className="relative pt-16 pb-24 px-6 md:px-10 lg:px-40 overflow-hidden bg-background-dark">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Text Content */}
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-primary text-xs font-bold uppercase tracking-wider">Технология 4.0</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white uppercase">
                            ИНТЕЛЛЕКТУАЛЬНОЕ <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">УПРАВЛЕНИЕ</span>
                            {" "}АВТОПАРКОМ
                        </h1>
                        <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                            Единая цифровая экосистема для полного контроля над вашим транспортом. Снижайте издержки и повышайте эффективность с помощью передовых технологий телематики и AI.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                        {[
                            { title: "GPS Мониторинг", desc: "Точность до 1 метра в реальном времени.", icon: "satellite_alt" },
                            { title: "Контроль Топлива", desc: "Защита от сливов и анализ расхода.", icon: "local_gas_station" },
                            { title: "Глубокая Аналитика", desc: "BI-отчеты и предиктивная диагностика.", icon: "analytics" },
                            { title: "Умная Маршрутизация", desc: "Оптимизация логистики AI алгоритмами.", icon: "route" },
                        ].map((item) => (
                            <div key={item.title} className="group flex items-start gap-4 p-4 rounded-xl border border-[#282e39] bg-[#151a23] hover:border-primary/50 transition-colors">
                                <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                                    <p className="text-sm text-slate-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 flex gap-4">
                        <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-bold text-base transition-all shadow-lg shadow-primary/25 flex items-center gap-2">
                            Запросить демо
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                        <button className="px-8 py-3 rounded-lg font-bold text-base border border-slate-700 text-slate-300 hover:bg-slate-800 transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined">play_circle</span>
                            Видео обзор
                        </button>
                    </div>
                </div>

                {/* Dashboard Mockup */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative rounded-2xl border border-[#282e39] bg-[#0c1017] shadow-2xl overflow-hidden aspect-[16/10]">
                        {/* Top Bar */}
                        <div className="h-10 border-b border-[#282e39] bg-[#11161d] flex items-center px-4 gap-2">
                            <div className="flex gap-1.5">
                                <div className="size-3 rounded-full bg-red-500/80"></div>
                                <div className="size-3 rounded-full bg-yellow-500/80"></div>
                                <div className="size-3 rounded-full bg-green-500/80"></div>
                            </div>
                            <div className="ml-4 h-5 w-64 bg-[#1c222e] rounded-md"></div>
                        </div>
                        {/* Content */}
                        <div className="p-4 grid grid-cols-12 grid-rows-6 gap-4 h-[calc(100%-40px)]">
                            <div className="col-span-2 row-span-6 border-r border-[#282e39] hidden sm:flex flex-col gap-4 py-2">
                                <div className="h-8 w-8 bg-primary/20 rounded-md text-primary flex items-center justify-center mx-auto"><span className="material-symbols-outlined text-sm">dashboard</span></div>
                                <div className="h-8 w-8 hover:bg-[#282e39] rounded-md text-slate-500 flex items-center justify-center mx-auto transition-colors"><span className="material-symbols-outlined text-sm">map</span></div>
                                <div className="h-8 w-8 hover:bg-[#282e39] rounded-md text-slate-500 flex items-center justify-center mx-auto transition-colors"><span className="material-symbols-outlined text-sm">bar_chart</span></div>
                                <div className="h-8 w-8 hover:bg-[#282e39] rounded-md text-slate-500 flex items-center justify-center mx-auto transition-colors"><span className="material-symbols-outlined text-sm">settings</span></div>
                            </div>
                            <div className="col-span-12 sm:col-span-7 row-span-4 rounded-lg overflow-hidden relative border border-[#282e39] bg-slate-900/50">
                                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                                <div className="absolute top-4 right-4 bg-[#11161d]/90 backdrop-blur border border-[#282e39] p-2 rounded text-[10px] text-white">
                                    <div className="flex items-center gap-2 mb-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Active: 42</div>
                                    <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500"></span> Idle: 3</div>
                                </div>
                                <div className="absolute bottom-8 left-1/3 transform -translate-x-1/2">
                                    <div className="relative">
                                        <span className="absolute -inset-2 rounded-full bg-primary/30 animate-ping"></span>
                                        <div className="bg-primary text-white text-[10px] px-2 py-1 rounded shadow-lg border border-white/10 flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[10px]">local_shipping</span> Vehicle #402
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-3 row-span-4 flex flex-col gap-3">
                                <div className="bg-[#151a23] border border-[#282e39] rounded-lg p-3 flex-1 flex flex-col justify-center">
                                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Total Distance</span>
                                    <div className="text-xl font-bold text-white mt-1">12,402 <span className="text-xs font-normal text-slate-500">km</span></div>
                                </div>
                                <div className="bg-[#151a23] border border-[#282e39] rounded-lg p-3 flex-1 flex flex-col justify-center">
                                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Fuel Usage</span>
                                    <div className="text-xl font-bold text-white mt-1">840 <span className="text-xs font-normal text-slate-500">L</span></div>
                                </div>
                                <div className="bg-[#151a23] border border-[#282e39] rounded-lg p-3 flex-1 flex flex-col justify-center">
                                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Efficiency</span>
                                    <div className="text-xl font-bold text-white mt-1">94%</div>
                                </div>
                            </div>
                            <div className="col-span-12 sm:col-span-10 row-span-2 bg-[#151a23] border border-[#282e39] rounded-lg p-3 relative overflow-hidden">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase">Activity Timeline</span>
                                </div>
                                <div className="flex items-end justify-between h-8 gap-1">
                                    {[40, 70, 50, 90, 60, 30, 80, 45].map((h, i) => (
                                        <div key={i} className="w-full bg-primary/20 rounded-t-sm transition-all" style={{ height: `${h}%` }}></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
