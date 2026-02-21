const services = [
  {
    title: "Strategic Outsourcing",
    description: "Full operational takeover with guaranteed SLA adherence. We become your dedicated fleet department.",
    icon: "business_center",
    largeIcon: true,
  },
  {
    title: "Fleet Management",
    description: "Lifecycle tracking from acquisition to remarketing. Complete asset visibility and control.",
    icon: "directions_car",
    largeIcon: false,
  },
  {
    title: "Predictive Maintenance",
    description: "AI-driven scheduling and repair logistics to minimize downtime and extend vehicle lifespan.",
    icon: "build_circle",
    largeIcon: false,
  },
  {
    title: "Driver Management",
    description: "Safety training, compliance handling, and payroll integration. Keeping your team safe and compliant.",
    icon: "sports_motorsports",
    largeIcon: false,
  },
  {
    title: "Digital Monitoring",
    description: "Real-time telematics and EV performance analytics. Data-driven insights for smarter decisions.",
    icon: "monitoring",
    largeIcon: false,
  },
  {
    title: "Cost Optimization",
    description: "Fuel reduction strategies and Total Cost of Ownership (TCO) analysis to maximize ROI.",
    icon: "account_balance_wallet",
    largeIcon: false,
  },
];

export default function ManagementModel() {
  return (
    <section className="relative pt-20 pb-16 px-6 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] bg-grid-fade"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 text-center mb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Premium Enterprise Solutions
        </div>

        {/* H1 */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          End-to-End{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            Fleet Optimization
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
          Comprehensive outsourcing and management services designed for enterprise
          scale. We handle the complexity of global logistics so you can focus on
          core business operations.
        </p>
      </div>

      {/* Service Grid */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="group relative bg-[#0d1117] border border-slate-800 rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden card-hover"
          >
            {/* Large background icon */}
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[100px] text-primary">
                {service.icon}
              </span>
            </div>

            {/* Small icon */}
            <div className="w-12 h-12 rounded-lg bg-[#111827] flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700 group-hover:border-primary">
              <span className="material-symbols-outlined">{service.icon}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-3 text-slate-100 group-hover:text-primary transition-colors">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {service.description}
            </p>

            {/* Link */}
            <a
              className="inline-flex items-center text-sm font-semibold text-slate-300 hover:text-primary transition-colors gap-1 group/link"
              href="#"
            >
              Learn more{" "}
              <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
