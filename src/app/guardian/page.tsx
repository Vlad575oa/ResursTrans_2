import Link from "next/link";

export default function GuardianPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-grain overflow-x-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 z-0 bg-grid-pattern bg-[length:40px_40px] opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#111817]/80 to-[#111817] pointer-events-none"></div>
      
      {/* Top Navigation */}
      <header className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12 w-full max-w-[1440px] mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 text-primary flex items-center justify-center border border-primary/30 rounded-full bg-primary/10">
            <span className="material-symbols-outlined text-[20px]">shield</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-white text-base font-bold tracking-[0.2em] leading-none">GUARDIAN</h2>
            <span className="text-primary/60 text-[10px] font-mono tracking-widest leading-none mt-1">TRANSPORT // 2026</span>
          </div>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full glass-panel">
          <Link className="px-5 py-2 text-xs font-bold tracking-wider text-white hover:text-primary transition-colors" href="/">
            FLEET
          </Link>
          <Link className="px-5 py-2 text-xs font-bold tracking-wider text-white hover:text-primary transition-colors" href="#logistics">
            LOGISTICS
          </Link>
          <Link className="px-5 py-2 text-xs font-bold tracking-wider text-white hover:text-primary transition-colors" href="#security">
            SECURITY
          </Link>
          <Link className="px-5 py-2 text-xs font-bold tracking-wider text-white hover:text-primary transition-colors" href="#ops">
            OPS
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-primary/80">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            SYS.ONLINE
          </div>
          <button className="hidden md:flex items-center justify-center rounded-full h-10 px-6 border border-white/10 bg-white/5 text-white text-xs font-bold tracking-wider hover:bg-white/10 transition-all">
            LOGIN
          </button>
          <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white" aria-label="Menu">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="relative z-10 flex flex-col justify-center flex-grow px-6 md:px-12 w-full max-w-[1440px] mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Content: Typography & CTA */}
          <div className="lg:col-span-7 flex flex-col gap-8 relative">
            {/* Tech Decoration Line */}
            <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden lg:block"></div>
            <div className="absolute -left-[27px] top-[10%] w-[7px] h-[7px] bg-primary rounded-full hidden lg:block shadow-[0_0_10px_rgba(19,236,218,0.8)]"></div>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 w-fit">
              <span className="material-symbols-outlined text-primary text-[14px]">radar</span>
              <span className="text-primary text-[10px] font-mono tracking-widest">LIVE SURVEILLANCE FEED_04</span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tighter mix-blend-lighten">
              UNCOMPROMISED <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">LOGISTICS.</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg md:text-xl max-w-xl font-light leading-relaxed">
              Precision hauling under total surveillance. Secure. Autonomous. Inevitable. The 2026 grid ensures zero-loss transport.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button className="btn-liquid h-14 px-10 rounded-full text-charcoal font-bold tracking-wider flex items-center justify-center gap-2 group">
                <span>INITIATE TRANSPORT</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
              <button className="h-14 px-8 rounded-full border border-white/10 bg-white/5 text-white font-bold tracking-wider hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                <span className="material-symbols-outlined text-primary">my_location</span>
                <span>TRACK SHIPMENT</span>
              </button>
            </div>

            {/* Stats Strip */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 border-t border-white/5 mt-4">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-gray-500 font-mono uppercase">Fleet Status</span>
                <span className="text-sm md:text-base text-primary font-mono font-bold tracking-wider">SECURE // ACTIVE</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-gray-500 font-mono uppercase">Global Uptime</span>
                <span className="text-sm md:text-base text-white font-mono font-bold tracking-wider">99.998%</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-gray-500 font-mono uppercase">Encryption</span>
                <span className="text-sm md:text-base text-white font-mono font-bold tracking-wider">QUANTUM-256</span>
              </div>
            </div>
          </div>

          {/* Right Content: Surveillance Visual */}
          <div className="lg:col-span-5 relative mt-10 lg:mt-0">
            {/* Glass Container for Visual */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111817] shadow-2xl group">
              {/* Image with Overlay */}
              <div className="relative aspect-[4/5] md:aspect-video lg:aspect-[3/4]">
                <img
                  alt="High-tech fleet of autonomous trucks moving on a highway at night with long exposure lights"
                  className="w-full h-full object-cover opacity-60 grayscale mix-blend-luminosity"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEebJD4kQacPyup3oqNgfhJdZLoA08NMIIwOe7Vm_lyM49cn0kzohsE43EfSzQWL1lxrKcBRHM8DEOu_k1X0kK3xvNAm7FFtoW7Yd32F929h4LrmiuO4zVjPokBRuK62oB5Jfq93hIE848HdcIAnCHJQ-O2YwioTSq3o9ccaw7cRC_jjaWEbOthYQOXaL517yQadSDBo0C1V81o7GDBznhpX2wI-gsXKfbpcJm0BrpGqUk4zXzKjDXE78WaN8FCTJK0WZOiv8VXAkc"
                />
                {/* Scanlines Overlay */}
                <div className="absolute inset-0 scanlines opacity-30 pointer-events-none"></div>
                {/* Teal Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-40 mix-blend-overlay"></div>
                
                {/* HUD Elements */}
                <div className="absolute top-4 left-4 p-2 bg-black/60 backdrop-blur-md rounded border border-primary/30 flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-mono text-primary">REC ● 00:42:12</span>
                </div>

                {/* Crosshair Center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary/30 rounded-full flex items-center justify-center opacity-60">
                  <div className="w-full h-[1px] bg-primary/30 absolute"></div>
                  <div className="h-full w-[1px] bg-primary/30 absolute"></div>
                  <div className="w-2 h-2 border border-primary rounded-full bg-primary/20"></div>
                </div>

                {/* Floating Data Card 1 */}
                <div className="absolute bottom-8 right-8 p-4 bg-black/80 backdrop-blur-xl border-l-2 border-primary w-48">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] text-gray-400 font-mono">ID: 884-TX</span>
                    <span className="material-symbols-outlined text-primary text-[14px]">lock</span>
                  </div>
                  <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-primary w-[85%]"></div>
                  </div>
                  <p className="text-xs text-white font-mono">Payload: 98% Integrity</p>
                </div>

                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 rounded-tl-lg"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/50 rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/50 rounded-bl-lg"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 rounded-br-lg"></div>
              </div>
            </div>
            
            {/* Back Decoration */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border border-dashed border-white/10 rounded-2xl"></div>
          </div>
        </div>
      </main>

      {/* Feature Capabilities Strip */}
      <section className="relative z-10 px-6 md:px-12 pb-20 max-w-[1440px] mx-auto w-full">
        <div className="glass-panel rounded-xl p-8 border border-white/5 bg-[#1c2726]/40">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              SYSTEM CAPABILITIES
            </h3>
            <div className="flex gap-2 text-primary/60 font-mono text-xs">
              <span>// SCROLL_DOWN</span>
              <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="group p-6 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors cursor-default">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">key</span>
              </div>
              <h4 className="text-white text-lg font-bold mb-2">Quantum Encryption</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Data streams protected by 2026-standard quantum keys. Impenetrable by brute force.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-6 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors cursor-default">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">alt_route</span>
              </div>
              <h4 className="text-white text-lg font-bold mb-2">Autonomous Routing</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                AI-driven pathfinding optimizes for speed and threat avoidance in real-time.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-6 rounded-lg border border-white/5 bg-white/5 hover:bg-white/10 transition-colors cursor-default">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">satellite_alt</span>
              </div>
              <h4 className="text-white text-lg font-bold mb-2">Orbital Telemetry</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Live feed access to cargo status and environmental metrics via dedicated satellite link.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
