"use client";
import dynamic from "next/dynamic";

const AntiStressTruck = dynamic(() => import("./games/AntiStressTruck"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });
const ChaosTamer = dynamic(() => import("./games/ChaosTamer"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });
const RouteMap = dynamic(() => import("./games/RouteMap"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });

// New Games
const LogisticsTetris = dynamic(() => import("./games/LogisticsTetris"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });
const RouteMaster = dynamic(() => import("./games/RouteMaster"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });
const FineDetector = dynamic(() => import("./games/FineDetector"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });
const DeadlineRunner = dynamic(() => import("./games/DeadlineRunner"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });
const ForkliftSim = dynamic(() => import("./games/ForkliftSim"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });
const TariffAlchemy = dynamic(() => import("./games/TariffAlchemy"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });
const EcoDrive = dynamic(() => import("./games/EcoDrive"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });
const LogisticsScanner = dynamic(() => import("./games/LogisticsScanner"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });
const WeightControl = dynamic(() => import("./games/WeightControl"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });
const TimeMachine = dynamic(() => import("./games/TimeMachine"), { loading: () => <div className="h-64 bg-slate-800 rounded-3xl animate-pulse" /> });

export default function InteractiveShowcase() {
    return (
        <div className="space-y-16">
            <section id="home-transferred" className="pt-8 border-t border-white/5">
                <h2 className="text-xl font-bold text-slate-500 uppercase tracking-[0.3em] mb-8">Базовые механики</h2>
                <div className="space-y-12">
                    <AntiStressTruck />
                    <ChaosTamer />
                    <RouteMap />
                </div>
            </section>

            <section id="new-games" className="pt-8 border-t border-white/5">
                <h2 className="text-xl font-bold text-slate-500 uppercase tracking-[0.3em] mb-8">Новые испытания</h2>
                <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
                    <LogisticsTetris />
                    <RouteMaster />
                    <FineDetector />
                    <DeadlineRunner />
                    <ForkliftSim />
                    <TariffAlchemy />
                    <EcoDrive />
                    <LogisticsScanner />
                    <WeightControl />
                    <TimeMachine />
                </div>
            </section>
        </div>
    );
}
