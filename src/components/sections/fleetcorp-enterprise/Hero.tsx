export default function Hero() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-background-dark">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-background-dark to-background-dark pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark border border-border-dark text-xs font-medium text-primary uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Enterprise Logistics
        </div>

        {/* H1 */}
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
          Optimizing <span className="text-primary">Corporate Fleets</span> at Scale
        </h1>

        {/* Description */}
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Reduce operational costs and increase efficiency with our data-driven fleet
          management solutions designed for large enterprises.
        </p>
      </div>
    </section>
  );
}
