const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Global Regions" },
  { value: "10k+", label: "Units Managed" },
  { value: "98%", label: "SLA Adherence" },
  { value: "24/7", label: "Global Support" },
];

export default function NumbersScale() {
  return (
    <section className="bg-[#0d1117] py-24 px-6 border-t border-slate-900 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent opacity-50"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Global Scale. <br />
              <span className="text-slate-500">Unmatched Reliability.</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Our infrastructure is built for mission-critical operations across
              continents.
            </p>
          </div>
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg text-sm font-bold transition-all border border-slate-700 hover:border-primary flex items-center gap-2">
            <span>Download 2024 Report</span>
            <span className="material-symbols-outlined text-sm">download</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-2 p-6 rounded-lg bg-slate-900/30 border border-slate-800/50 backdrop-blur-sm hover:bg-slate-900/50 transition-colors"
            >
              <span className="text-4xl md:text-5xl font-black text-white tracking-tighter text-glow">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-primary font-bold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
