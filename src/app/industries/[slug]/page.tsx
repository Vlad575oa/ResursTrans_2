import type { Metadata } from "next";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import Footer from "@/components/sections/fleetcorp/Footer";
import Link from "next/link";
import { getServerTranslations } from "@/lib/server-intl";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const slug = (await params).slug;
    return {
        title: `${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} - ResursTrans Industry Solutions`,
        description: `Deep dive into our ${slug.replace(/-/g, ' ')} logistics and fleet management solutions.`,
    };
}

const industryContent: Record<string, any> = {
    "industrial-manufacturing": {
        title: "Industrial Manufacturing",
        subtitle: "Precision Logistics for Heavy Industry",
        description: "In the world of industrial manufacturing, timing is everything. Our fleet management solutions ensure that raw materials arrive exactly when needed and finished goods reach their destination without delay.",
        caseStudy: {
            company: "Global Steels Corp",
            challenge: "High vehicle downtime and unpredictable delivery schedules.",
            solution: "Implementation of predictive maintenance and real-time route optimization for heavy transporters.",
            result: "25% reduction in operational costs and 99.8% on-time delivery rate."
        }
    },
    "oil-and-gas": {
        title: "Oil & Gas",
        subtitle: "Reliability in Extreme Environments",
        description: "Transporting equipment and personnel to remote extraction sites requires extreme reliability. Our AI-driven monitoring ensures safety and compliance in the most challenging conditions.",
        caseStudy: {
            company: "Arctic Energy",
            challenge: "Losing contact with vehicles in remote northern regions.",
            solution: "Satellite-linked telematics and emergency protocol automation.",
            result: "Zero safety incidents in 24 months and 15% better fuel efficiency."
        }
    },
    "construction": {
        title: "Construction",
        subtitle: "Managing Moving Assets Across Sites",
        description: "Construction sites are dynamic. Our platform provides real-time tracking for every piece of equipment, from heavy excavators to support trucks.",
        caseStudy: {
            company: "BuildRight Infrastructure",
            challenge: "Unauthorized use of equipment and difficult asset scheduling.",
            solution: "Geofencing and automated usage reporting for all job sites.",
            result: "30% increase in asset utilization and significant reduction in theft risk."
        }
    },
    "government": {
        title: "Government",
        subtitle: "Secure & Compliant Public Sector Fleet",
        description: "Public sector logistics demand transparency and strict compliance. We provide secure data management and audited reporting for government agencies.",
        caseStudy: {
            company: "City Transport Dept",
            challenge: "Outdated reporting systems and high maintenance backlogs.",
            solution: "Digital fleet department outsourcing with full transparency portals.",
            result: "40% faster maintenance turnaround and complete regulatory compliance."
        }
    },
    "logistics": {
        title: "Logistics",
        subtitle: "The Backbone of Global Commerce",
        description: "Optimize every mile. Our ecosystem integrates with your supply chain to provide end-to-end visibility and efficiency.",
        caseStudy: {
            company: "SwiftPost International",
            challenge: "Rising fuel costs and inefficient last-mile delivery.",
            solution: "AI-based dynamic routing and driver behavior monitoring.",
            result: "20% reduction in fuel consumption and 15% increase in daily deliveries."
        }
    }
};

export default async function IndustryPage({ params }: { params: { slug: string } }) {
    const slug = (await params).slug;
    const content = industryContent[slug] || industryContent["industrial-manufacturing"];

    return (
        <div className="bg-background-dark min-h-screen text-slate-100 flex flex-col">
            <HeaderScroll />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 group">
                        <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Back to Home
                    </Link>

                    <div className="flex flex-col gap-4 mb-12">
                        <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase">{content.title}</h2>
                        <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight">{content.subtitle}</h1>
                    </div>

                    <div className="prose prose-invert max-w-none mb-20 text-slate-400 text-lg leading-relaxed">
                        <p>{content.description}</p>
                    </div>

                    <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-20">
                        <h2 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Success Story: {content.caseStudy.company}</h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-primary font-bold uppercase text-xs tracking-widest mb-4">The Challenge</h3>
                                <p className="text-slate-300 leading-relaxed">{content.caseStudy.challenge}</p>
                            </div>
                            <div>
                                <h3 className="text-primary font-bold uppercase text-xs tracking-widest mb-4">The Solution</h3>
                                <p className="text-slate-300 leading-relaxed">{content.caseStudy.solution}</p>
                            </div>
                        </div>
                        <div className="mt-12 pt-8 border-t border-white/10">
                            <h3 className="text-primary font-bold uppercase text-xs tracking-widest mb-4">The Impact</h3>
                            <p className="text-2xl font-bold text-white italic">"{content.caseStudy.result}"</p>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
