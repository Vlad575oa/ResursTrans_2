import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";

export const metadata: Metadata = {
    title: "About Us - FleetCorp Global",
    description: "Learn more about FleetCorp's mission, history, and the scale of our operations as a leader in fleet management.",
};

const HistoryTimeline = dynamic(() => import("@/components/sections/HistoryTimeline").then(mod => mod.HistoryTimeline));
const Scale = dynamic(() => import("@/components/sections/Scale").then(mod => mod.Scale));
const Footer = dynamic(() => import("@/components/sections/fleetcorp/Footer"));

export default function AboutPage() {
    return (
        <div className="bg-background-dark min-h-screen flex flex-col">
            <HeaderScroll />
            <main className="flex-grow pt-20">
                <section className="py-24 px-6 md:px-10 lg:px-20 relative overflow-hidden bg-[#0c1017]">
                    <div className="absolute inset-0 z-0 opacity-10 bg-grid-pattern pointer-events-none"></div>
                    <div className="max-w-4xl mx-auto relative z-10 text-center">
                        <span className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Our Legacy</span>
                        <h1 className="text-5xl md:text-7xl font-black text-white uppercase mb-8">
                            Лидерство сквозь <span className="text-primary italic">время</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Мы строим будущее логистики, опираясь на десятилетия опыта и инновационные технологии управления.
                        </p>
                    </div>
                </section>
                <HistoryTimeline />
                <Scale />
            </main>
            <Footer />
        </div>
    );
}
