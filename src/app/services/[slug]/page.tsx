import type { Metadata } from "next";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import Footer from "@/components/sections/fleetcorp/Footer";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const slug = (await params).slug;
    return {
        title: `${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} - ResursTrans Service Solutions`,
        description: `Explore our specialized ${slug.replace(/-/g, ' ')} services for enterprise fleet management.`,
    };
}

const serviceContent: Record<string, any> = {
    "strategic-outsourcing": {
        title: "Strategic Outsourcing",
        tagline: "Your Dedicated Fleet Partnership",
        description: "Focus on your core business while we handle the complexity of your fleet. Our strategic outsourcing model provides a full-scale fleet department integrated into your operations.",
        benefits: [
            "Guaranteed SLA and performance metrics",
            "Fixed management costs and budget predictability",
            "Access to specialized fleet expertise and technology",
            "Comprehensive risk management and compliance"
        ]
    },
    "fleet-management": {
        title: "Fleet Management",
        tagline: "Complete Lifecycle Control",
        description: "From acquisition to disposal, we manage every aspect of your vehicle lifecycle. Our platform provides 360-degree visibility into asset performance and utilization.",
        benefits: [
            "Optimized acquisition and financing strategies",
            "Continuous maintenance and repair management",
            "Real-time asset tracking and utilization analysis",
            "Data-driven remarketing and disposal optimization"
        ]
    },
    "predictive-maintenance": {
        title: "Predictive Maintenance",
        tagline: "AI-Powered Fleet Health",
        description: "Eliminate unexpected breakdowns. Our AI-driven maintenance platform analyzes telematics data to predict failures before they happen, extending vehicle life and reducing costs.",
        benefits: [
            "Significant reduction in unplanned downtime",
            "Automated service scheduling and logistics",
            "Extended vehicle lifespan and residual value",
            "Optimized parts inventory and labor scheduling"
        ]
    },
    "driver-management": {
        title: "Driver Management",
        tagline: "Safety, Performance & Compliance",
        description: "Your drivers are your most valuable asset. We provide the tools to keep them safe, productive, and fully compliant with all regional regulations.",
        benefits: [
            "Comprehensive safety training and monitoring",
            "Automated compliance and licensing tracking",
            "Driver performance scoring and incentive programs",
            "Seamless payroll and expense integration"
        ]
    },
    "digital-monitoring": {
        title: "Digital Monitoring",
        tagline: "Real-Time Telematics & Analytics",
        description: "Harness the power of data. Our monitoring suite provides real-time insights into every mile driven, helping you make smarter, faster decisions for your fleet.",
        benefits: [
            "Full-fleet GPS and telematics visibility",
            "EV performance and charging optimization",
            "Customizable BI dashboards and reporting",
            "Instant alerts for safety or technical issues"
        ]
    },
    "cost-optimization": {
        title: "Cost Optimization",
        tagline: "Driving Efficiency and ROI",
        description: "Logistics is one of your biggest costs. We use advanced analytics to root out inefficiencies, reduce fuel waste, and lower your Total Cost of Ownership (TCO).",
        benefits: [
            "Deep TCO analysis and benchmarking",
            "Dynamic fuel reduction and route optimization",
            "Optimized maintenance and part sourcing",
            "Scalable cost-saving strategies for global fleets"
        ]
    }
};

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const slug = (await params).slug;
    const content = serviceContent[slug] || serviceContent["strategic-outsourcing"];

    return (
        <div className="bg-background-dark min-h-screen text-slate-100 flex flex-col">
            <HeaderScroll />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors mb-12 group">
                        <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                        Back to Home
                    </Link>

                    <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">{content.title}</h2>
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase leading-tight mb-8">{content.tagline}</h1>
                    <p className="text-xl text-slate-400 font-light leading-relaxed max-w-2xl mx-auto">{content.description}</p>
                </div>

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
                    {content.benefits.map((benefit: string, i: number) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-start gap-4">
                            <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                                <span className="material-symbols-outlined text-sm">check</span>
                            </div>
                            <p className="text-slate-200 font-medium">{benefit}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto text-center">
                    <button className="bg-primary hover:bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-2xl shadow-primary/20">
                        Discuss Implementation
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
}
