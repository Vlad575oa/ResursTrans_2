import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";

export const metadata: Metadata = {
    title: "FleetTech - Intelligent Fleet Management Cases",
    description: "Real-world implementation results and efficiency gains with FleetTech system.",
};

const CasesHero = dynamic(() => import("@/components/sections/fleettech/CasesHero"));
const CaseStudies = dynamic(() => import("@/components/sections/fleettech/CaseStudies"));
const Footer = dynamic(() => import("@/components/sections/fleetcorp/Footer"));

const EnterpriseHero = dynamic(() => import("@/components/sections/fleetcorp/EnterpriseHero"));
const EnterpriseAdvantages = dynamic(() => import("@/components/sections/fleetcorp/EnterpriseAdvantages"));
const WorkflowStages = dynamic(() => import("@/components/sections/fleetcorp/WorkflowStages"));
const EnterpriseImpactCTA = dynamic(() => import("@/components/sections/fleetcorp/EnterpriseImpactCTA"));

export default function CasesPage() {
    return (
        <div className="bg-background-dark min-h-screen flex flex-col">
            <HeaderScroll />
            <main className="flex-grow">
                <CasesHero />
                <CaseStudies />
                <div className="border-t border-slate-800 my-20"></div>
                <EnterpriseHero />
                <EnterpriseAdvantages />
                <WorkflowStages />
                <EnterpriseImpactCTA />
            </main>
            <Footer />
        </div>
    );
}
