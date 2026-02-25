"use client";

import dynamic from "next/dynamic";

const NeoBrutalism = dynamic(() => import("./styles/NeoBrutalism"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const Glassmorphism = dynamic(() => import("./styles/Glassmorphism"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const Blueprint = dynamic(() => import("./styles/Blueprint"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const ActiveDashboard = dynamic(() => import("./styles/ActiveDashboard"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const Soft3D = dynamic(() => import("./styles/Soft3D"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const MinimalistOutline = dynamic(() => import("./styles/MinimalistOutline"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const RetroLogistics = dynamic(() => import("./styles/RetroLogistics"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const HighTechGlow = dynamic(() => import("./styles/HighTechGlow"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const EcoGreen = dynamic(() => import("./styles/EcoGreen"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const InteractiveCard = dynamic(() => import("./styles/InteractiveCard"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const XRay = dynamic(() => import("./styles/XRay"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const PaperCut = dynamic(() => import("./styles/PaperCut"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const GridMaster = dynamic(() => import("./styles/GridMaster"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const ComicStyle = dynamic(() => import("./styles/ComicStyle"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const Isolayer = dynamic(() => import("./styles/Isolayer"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const CarbonFiber = dynamic(() => import("./styles/CarbonFiber"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const EcoKraft = dynamic(() => import("./styles/EcoKraft"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const LiquidStyle = dynamic(() => import("./styles/LiquidStyle"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const GoldenPremium = dynamic(() => import("./styles/GoldenPremium"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });
const LowPoly = dynamic(() => import("./styles/LowPoly"), { loading: () => <div className="h-64 bg-slate-800 rounded-2xl animate-pulse" /> });

const stylesArray = [
    { id: 1, name: "NeoBrutalism", component: NeoBrutalism },
    { id: 2, name: "Glassmorphism", component: Glassmorphism },
    { id: 3, name: "Blueprint", component: Blueprint },
    { id: 4, name: "ActiveDashboard", component: ActiveDashboard },
    { id: 5, name: "Soft3D", component: Soft3D },
    { id: 6, name: "MinimalistOutline", component: MinimalistOutline },
    { id: 7, name: "RetroLogistics", component: RetroLogistics },
    { id: 8, name: "High-Tech Glow", component: HighTechGlow },
    { id: 9, name: "Eco-Green", component: EcoGreen },
    { id: 10, name: "Interactive Flip", component: InteractiveCard },
    { id: 11, name: "X-Ray", component: XRay },
    { id: 12, name: "Paper Cut", component: PaperCut },
    { id: 13, name: "Grid Master", component: GridMaster },
    { id: 14, name: "Comic Style", component: ComicStyle },
    { id: 15, name: "Isolayer", component: Isolayer },
    { id: 16, name: "Carbon Fiber", component: CarbonFiber },
    { id: 17, name: "Eco-Kraft", component: EcoKraft },
    { id: 18, name: "Liquid", component: LiquidStyle },
    { id: 19, name: "Golden Premium", component: GoldenPremium },
    { id: 20, name: "Low Poly", component: LowPoly },
];

export default function StyleVariants() {
    return (
        <div className="space-y-16">
            {stylesArray.map((style) => (
                <section key={style.id} id={`style-${style.id}`}>
                    <style.component />
                </section>
            ))}
        </div>
    );
}
