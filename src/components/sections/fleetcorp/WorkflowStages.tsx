export default function WorkflowStages() {
    const steps = [
        { num: "01", title: "Audit", desc: "Deep analysis of current fleet efficiency and costs.", icon: "search", active: true },
        { num: "02", title: "Model Dev", desc: "Creating a custom optimization strategy.", icon: "architecture", active: true },
        { num: "03", title: "Launch", desc: "Implementation of new protocols and tools.", icon: "rocket_launch", active: true },
        { num: "04", title: "Control", desc: "Ongoing monitoring and management.", icon: "tune", active: false },
        { num: "05", title: "Reporting", desc: "Regular analytics and improvement steps.", icon: "analytics", active: false },
    ];

    return (
        <section className="py-20 px-6 bg-[#0b0d10] border-y border-[#282e39]">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center md:text-left">
                    <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">Our Process</span>
                    <h2 className="text-white text-3xl md:text-4xl font-bold">Workflow Stages</h2>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden md:grid grid-cols-5 gap-4 relative">
                    <div className="absolute top-16 left-0 w-full h-0.5 bg-[#282e39] z-0"></div>
                    <div className="absolute top-16 left-0 w-3/5 h-0.5 bg-gradient-to-r from-primary to-blue-900 z-0"></div>

                    {steps.map((step) => (
                        <div key={step.num} className="relative z-10 flex flex-col items-center md:items-start group cursor-default">
                            <div className={`text-slate-500 mb-6 font-mono text-sm group-hover:text-primary transition-colors ${step.active ? "text-primary/70" : ""}`}>
                                {step.num}
                            </div>
                            <div className={`w-12 h-12 rounded-full bg-[#0b0d10] border-2 flex items-center justify-center mb-6 transition-all duration-300 ${step.active ? "border-primary shadow-[0_0_15px_rgba(37,106,244,0.3)]" : "border-[#282e39] group-hover:border-slate-400"
                                } group-hover:scale-110`}>
                                <span className={`material-symbols-outlined text-xl ${step.active ? "text-primary" : "text-slate-400"}`}>
                                    {step.icon}
                                </span>
                            </div>
                            <h4 className={`font-bold text-lg mb-2 ${step.active ? "text-white" : "text-slate-200"}`}>{step.title}</h4>
                            <p className="text-slate-500 text-sm leading-snug">{step.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Mobile Timeline */}
                <div className="flex md:hidden flex-col gap-8 relative">
                    <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-[#282e39]"></div>
                    {steps.map((step) => (
                        <div key={step.num} className="flex gap-6 relative">
                            <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center shrink-0 z-10 bg-[#0b0d10] ${step.active ? "border-primary shadow-[0_0_15px_rgba(37,106,244,0.3)]" : "border-[#282e39]"
                                }`}>
                                <span className={`material-symbols-outlined text-lg ${step.active ? "text-primary" : "text-slate-400"}`}>
                                    {step.icon}
                                </span>
                            </div>
                            <div>
                                <span className={`text-[10px] font-mono mb-1 block ${step.active ? "text-primary" : "text-slate-500"}`}>
                                    STEP {step.num}
                                </span>
                                <h4 className="text-white font-bold text-lg">{step.title}</h4>
                                <p className="text-slate-500 text-sm mt-1">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
