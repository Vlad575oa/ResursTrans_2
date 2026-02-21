const benefits = [
  {
    icon: "visibility",
    title: "Transparency",
    description: "Full visibility into cost structures, vehicle status, and driver performance with real-time analytics dashboards.",
  },
  {
    icon: "support_agent",
    title: "Personal Manager",
    description: "A dedicated expert assigned to your account for 24/7 support, strategy planning, and rapid issue resolution.",
  },
  {
    icon: "encrypted",
    title: "Security",
    description: "Enterprise-grade data protection protocols and asset security measures to safeguard your business intelligence.",
  },
  {
    icon: "verified",
    title: "SLA Guarantee",
    description: "Contractually binding Service Level Agreements ensuring uptime, response times, and quality of service.",
  },
];

export default function Benefits() {
  return (
    <section className="py-16 px-6 relative bg-background-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-white text-3xl font-bold mb-4">Enterprise Advantages</h2>
          <p className="text-slate-400 max-w-xl">
            We provide scalable, secure, and transparent solutions tailored for
            complex logistical needs.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group glass-card border border-border-dark rounded-xl p-8 hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Large background icon */}
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl text-white">
                  {benefit.icon}
                </span>
              </div>

              {/* Small icon */}
              <div className="w-12 h-12 rounded-lg bg-surface-dark border border-border-dark flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined">{benefit.icon}</span>
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-bold mb-3">{benefit.title}</h3>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}

          {/* Large Business Experience Card - spans 2 columns */}
          <div className="group glass-card border border-border-dark rounded-xl p-8 hover:border-primary/50 transition-all duration-300 relative overflow-hidden md:col-span-2 lg:col-span-2 bg-gradient-to-br from-surface-dark to-[#1a1f2e]">
            {/* Large background icon */}
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-8xl text-white">
                domain
              </span>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center h-full">
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-surface-dark border border-border-dark flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined">domain</span>
              </div>

              <div>
                <h3 className="text-white text-xl font-bold mb-3">
                  Large Business Experience
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-lg">
                  Proven track record managing fleets of 500+ vehicles for Fortune 500
                  companies. We understand the complexity of scale and deliver seamless
                  transitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
