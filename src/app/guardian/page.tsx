import Link from "next/link";
import Image from "next/image";
import Header from "@/components/sections/guardian/Header";
import EconomicImpact from "@/components/sections/guardian/EconomicImpact";

const losses = [
  {
    id: 1,
    type: "Excessive Idling",
    description: "Engine running for >45m while stationary. Fuel waste detected.",
    cost: "-$12.50 EST",
    time: "10:42 AM",
    icon: "hourglass_top",
    iconColor: "text-yellow-500",
    iconBg: "bg-yellow-500/10",
    statusColor: "text-yellow-400",
    statusBorder: "border-yellow-500/20",
  },
  {
    id: 2,
    type: "Fuel Anomaly",
    description: "Sudden drop rate detected during route break.",
    cost: "CRITICAL",
    time: "09:15 AM",
    icon: "local_gas_station",
    iconColor: "text-red-500",
    iconBg: "bg-red-500/10",
    statusColor: "text-red-400",
    statusBorder: "border-red-500/20",
  },
  {
    id: 3,
    type: "Route Deviation",
    description: "Vehicle left designated geofence zone Sector 4.",
    cost: "LOGGED",
    time: "08:30 AM",
    icon: "wrong_location",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    statusColor: "text-blue-300",
    statusBorder: "border-blue-500/20",
  },
  {
    id: 4,
    type: "Tire Pressure Low",
    description: "",
    cost: "",
    time: "",
    icon: "check_circle",
    iconColor: "text-green-500",
    iconBg: "bg-green-500/10",
    statusColor: "text-slate-600",
    resolved: true,
  },
];

const stats = [
  { label: "Total Loss", value: "-$420.50", color: "text-red-400" },
  { label: "Resolution", value: "84%", color: "text-primary" },
  { label: "Pending", value: "3", color: "text-yellow-400" },
];

export default function GuardianPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-grain overflow-x-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 z-0 bg-grid-pattern bg-[length:40px_40px] opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#111817]/80 to-[#111817] pointer-events-none"></div>

      {/* Top Navigation */}
      <Header />

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
              UNCOMPROMISED <br />
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
                <Image
                  alt="High-tech fleet of autonomous trucks moving on a highway at night with long exposure lights"
                  className="w-full h-full object-cover opacity-60 grayscale mix-blend-luminosity"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEebJD4kQacPyup3oqNgfhJdZLoA08NMIIwOe7Vm_lyM49cn0kzohsE43EfSzQWL1lxrKcBRHM8DEOu_k1X0kK3xvNAm7FFtoW7Yd32F929h4LrmiuO4zVjPokBRuK62oB5Jfq93hIE848HdcIAnCHJQ-O2YwioTSq3o9ccaw7cRC_jjaWEbOthYQOXaL517yQadSDBo0C1V81o7GDBznhpX2wI-gsXKfbpcJm0BrpGqUk4zXzKjDXE78WaN8FCTJK0WZOiv8VXAkc"
                  width={800}
                  height={1000}
                  priority
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
              <span>{"// SCROLL_DOWN"}</span>
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

      {/* Guardian Fleet Command Section */}
      <section className="relative z-10 border-t border-[#2C3A37] bg-[#101413]">
        {/* Header */}
        <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-[#2C3A37] bg-[#101413]/90 backdrop-blur-md px-6 py-4 lg:px-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 text-white group cursor-pointer">
              <div className="size-8 text-primary flex items-center justify-center bg-[#2C3A37] rounded-full">
                <span className="material-symbols-outlined text-[20px]">local_shipping</span>
              </div>
              <h2 className="text-white text-lg font-bold tracking-tight">
                GUARDIAN <span className="text-primary font-normal text-sm ml-1 opacity-80">| FLEET COMMAND</span>
              </h2>
            </div>
            <nav className="hidden xl:flex items-center gap-1 p-1 bg-[#1c2624] rounded-full border border-[#2C3A37]">
              <Link className="text-slate-300 hover:text-primary hover:bg-[#2C3A37] px-4 py-2 rounded-full text-sm font-medium transition-all" href="#">
                Dashboard
              </Link>
              <Link className="text-slate-300 hover:text-primary hover:bg-[#2C3A37] px-4 py-2 rounded-full text-sm font-medium transition-all" href="#">
                Live Map
              </Link>
              <Link className="bg-primary text-[#101413] px-4 py-2 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(19,236,218,0.3)]" href="#">
                Loss Analysis
              </Link>
              <Link className="text-slate-300 hover:text-primary hover:bg-[#2C3A37] px-4 py-2 rounded-full text-sm font-medium transition-all" href="#">
                Digital Control
              </Link>
              <Link className="text-slate-300 hover:text-primary hover:bg-[#2C3A37] px-4 py-2 rounded-full text-sm font-medium transition-all" href="#">
                Drivers
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-[#1c2624] rounded-full px-4 py-2 border border-[#2C3A37] w-64 focus-within:border-primary/50 transition-colors">
              <span className="material-symbols-outlined text-slate-400 text-[20px]">search</span>
              <input className="bg-transparent border-none text-sm text-white focus:ring-0 w-full placeholder:text-slate-500 font-mono" placeholder="Search Unit ID..." type="text" />
            </div>
            <button className="flex items-center justify-center size-10 rounded-full bg-[#1c2624] text-white hover:bg-primary hover:text-[#101413] transition-colors border border-[#2C3A37] relative">
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-[#1c2624]"></span>
              <span className="material-symbols-outlined text-[20px]">notifications</span>
            </button>
            <button className="flex items-center justify-center size-10 rounded-full bg-[#1c2624] text-white hover:bg-primary hover:text-[#101413] transition-colors border border-[#2C3A37]">
              <span className="material-symbols-outlined text-[20px]">account_circle</span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          {/* Left Panel: Losses Feed */}
          <aside className="w-full lg:w-[420px] xl:w-[480px] flex flex-col border-r border-[#2C3A37] bg-[#101413] relative z-10">
            <div className="p-6 pb-2">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-1">Losses Feed</h1>
                  <p className="text-slate-400 text-sm font-mono">UNIT 734-ALPHA • REAL-TIME</p>
                </div>
                <button className="size-10 rounded-full bg-[#2C3A37] hover:bg-primary hover:text-[#101413] text-primary transition-all flex items-center justify-center">
                  <span className="material-symbols-outlined">tune</span>
                </button>
              </div>

              {/* Stats Strip */}
              <div className="flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col bg-[#1c2624] rounded-2xl p-4 min-w-[120px] border border-[#2C3A37]">
                    <span className="text-xs text-slate-400 font-mono uppercase">{stat.label}</span>
                    <span className={`text-xl font-bold ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scrollable Notes List */}
            <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-4">
              {losses.map((loss) => (
                <div
                  key={loss.id}
                  className={`group transition-all rounded-[2rem] p-5 border relative ${loss.resolved
                    ? "opacity-60 hover:opacity-100 border-dashed border-[#2C3A37]"
                    : "bg-[#2C3A37]/40 hover:bg-[#2C3A37]/60 border-[#2C3A37]/50 hover:border-primary/30"
                    }`}
                >
                  {!loss.resolved && (
                    <div className="absolute top-5 right-5 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="size-8 rounded-full bg-[#101413] text-slate-400 hover:text-white flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px]">close</span>
                      </button>
                      <button className="size-8 rounded-full bg-primary text-[#101413] flex items-center justify-center shadow-lg shadow-primary/20">
                        <span className="material-symbols-outlined text-[18px]">check</span>
                      </button>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <div className={`size-12 rounded-full ${loss.iconBg} ${loss.iconColor} flex items-center justify-center flex-shrink-0`}>
                      <span className="material-symbols-outlined">{loss.icon}</span>
                    </div>
                    <div className={`flex-1 ${loss.resolved ? 'pr-0' : 'pr-16'}`}>
                      {loss.resolved ? (
                        <>
                          <h3 className="text-slate-400 font-medium text-base line-through">{loss.type}</h3>
                          <span className="text-xs text-slate-600 font-mono">RESOLVED</span>
                        </>
                      ) : (
                        <>
                          <h3 className="text-white font-bold text-lg leading-tight mb-1">{loss.type}</h3>
                          <p className="text-slate-300 text-sm mb-3">{loss.description}</p>
                          <div className="flex items-center gap-3">
                            <span className={`px-3 py-1 rounded-full bg-[#101413] text-xs font-mono ${loss.statusColor} border ${loss.statusBorder}`}>
                              {loss.cost}
                            </span>
                            <span className="text-xs text-slate-500 font-mono">{loss.time}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Action */}
            <div className="p-6 border-t border-[#2C3A37] mt-auto bg-[#101413]/95 backdrop-blur">
              <button className="w-full py-3 rounded-full bg-[#2C3A37] hover:bg-slate-700 text-white font-medium transition-colors flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">add</span>
                Add Manual Note
              </button>
            </div>
          </aside>

          {/* Right Panel: Digital Twin */}
          <section className="flex-1 relative bg-[#101413] overflow-hidden flex flex-col">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at center, #2C3A37 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#101413] via-transparent to-[#101413] z-0 pointer-events-none"></div>

            {/* Top Data Bar */}
            <div className="relative z-10 w-full p-6 flex justify-between items-start">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold font-mono tracking-wider mb-2">
                  <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                  LIVE CONNECTION
                </div>
                <h2 className="text-4xl font-bold text-white tracking-tight">Digital Twin</h2>
              </div>
              <div className="flex gap-4">
                <div className="glass-panel px-4 py-3 rounded-2xl flex flex-col items-end">
                  <span className="text-xs text-slate-400 font-mono">UPTIME</span>
                  <span className="text-xl font-bold text-white font-mono">98.4%</span>
                </div>
                <div className="glass-panel px-4 py-3 rounded-2xl flex flex-col items-end">
                  <span className="text-xs text-slate-400 font-mono">HEALTH</span>
                  <span className="text-xl font-bold text-primary font-mono">A-</span>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col xl:flex-row relative z-10 overflow-hidden">
              {/* 3D Visualization Area - Increased Size */}
              <div className="flex-1 relative flex items-center justify-center wireframe-container z-0 order-2 xl:order-1">
                <div className="relative w-full max-w-[900px] aspect-[16/9] wireframe-truck transition-transform duration-500 ease-out group/truck">
                  <Image
                    alt="Truck Wireframe"
                    className="w-full h-full object-contain opacity-100 drop-shadow-[0_0_50px_rgba(19,236,218,0.4)]"
                    src="/images/guardian/truck_sensors.png"
                    width={1200}
                    height={675}
                    priority
                  />

                  {/* Hotspot 1: Cabin */}
                  <div className="absolute top-[25%] left-[45%] group/hotspot">
                    <div className="relative cursor-pointer size-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center transition-all hover:bg-primary hover:text-[#101413]">
                      <div className="size-2 bg-primary rounded-full animate-ping absolute"></div>
                      <div className="size-2 bg-primary rounded-full relative z-10"></div>
                    </div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 glass-panel rounded-2xl p-4 opacity-0 group-hover/hotspot:opacity-100 translate-y-2 group-hover/hotspot:translate-y-0 transition-all duration-300 pointer-events-none group-hover/hotspot:pointer-events-auto z-50">
                      <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
                        <span className="material-symbols-outlined text-primary text-sm">airline_seat_recline_extra</span>
                        <span className="text-white font-bold text-sm">CABIN STATUS</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span className="text-slate-400">Driver Fatigue</span>
                          <span className="text-green-400">Normal</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-1">
                          <div className="bg-green-400 w-[20%] h-full rounded-full"></div>
                        </div>
                        <div className="flex justify-between items-center text-xs font-mono pt-1">
                          <span className="text-slate-400">Temp</span>
                          <span className="text-white">21°C</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hotspot 2: Engine */}
                  <div className="absolute top-[55%] left-[30%] group/hotspot">
                    <div className="relative cursor-pointer size-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center transition-all hover:bg-primary hover:text-[#101413]">
                      <div className="size-2 bg-primary rounded-full animate-ping absolute"></div>
                      <div className="size-2 bg-primary rounded-full relative z-10"></div>
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 glass-panel rounded-2xl p-4 opacity-0 group-hover/hotspot:opacity-100 -translate-y-2 group-hover/hotspot:translate-y-0 transition-all duration-300 pointer-events-none group-hover/hotspot:pointer-events-auto z-50">
                      <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
                        <span className="material-symbols-outlined text-primary text-sm">settings</span>
                        <span className="text-white font-bold text-sm">ENGINE TELEMETRY</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span className="text-slate-400">Oil Pressure</span>
                          <span className="text-green-400">Optimal</span>
                        </div>
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span className="text-slate-400">RPM</span>
                          <span className="text-yellow-400">1250 (Cruise)</span>
                        </div>
                        <div className="flex justify-between items-center text-xs font-mono pt-1">
                          <span className="text-slate-400">Vibration</span>
                          <span className="text-white">0.04mm/s</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hotspot 3: Fuel Tank */}
                  <div className="absolute top-[65%] left-[55%] group/hotspot">
                    <div className="relative cursor-pointer size-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center transition-all hover:bg-primary hover:text-[#101413]">
                      <div className="size-2 bg-primary rounded-full animate-ping absolute"></div>
                      <div className="size-2 bg-primary rounded-full relative z-10"></div>
                    </div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 glass-panel rounded-2xl p-4 opacity-0 group-hover/hotspot:opacity-100 translate-y-2 group-hover/hotspot:translate-y-0 transition-all duration-300 pointer-events-none group-hover/hotspot:pointer-events-auto z-50">
                      <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
                        <span className="material-symbols-outlined text-red-400 text-sm">local_gas_station</span>
                        <span className="text-white font-bold text-sm">FUEL LEVELS</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs font-mono">
                          <span className="text-slate-400">Capacity</span>
                          <span className="text-red-400">64% (Dropping)</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                          <div className="bg-gradient-to-r from-red-500 to-yellow-500 w-[64%] h-full rounded-full"></div>
                        </div>
                        <div className="flex justify-between items-center text-xs font-mono pt-1">
                          <span className="text-slate-400">Est. Range</span>
                          <span className="text-white">450 km</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hotspot 4: Tires */}
                  <div className="absolute bottom-[10%] left-[80%] group/hotspot">
                    <div className="relative cursor-pointer size-8 rounded-full bg-primary/20 border border-primary flex items-center justify-center transition-all hover:bg-primary hover:text-[#101413]">
                      <div className="size-2 bg-primary rounded-full animate-ping absolute"></div>
                      <div className="size-2 bg-primary rounded-full relative z-10"></div>
                    </div>
                    <div className="absolute bottom-full right-0 mb-4 w-64 glass-panel rounded-2xl p-4 opacity-0 group-hover/hotspot:opacity-100 translate-y-2 group-hover/hotspot:translate-y-0 transition-all duration-300 pointer-events-none group-hover/hotspot:pointer-events-auto z-50">
                      <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
                        <span className="material-symbols-outlined text-primary text-sm">tire_repair</span>
                        <span className="text-white font-bold text-sm">TYRE SYSTEMS</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs font-mono font-bold">
                          <span className="text-slate-400">Pressure</span>
                          <span className="text-primary">115 PSI</span>
                        </div>
                        <div className="flex justify-between items-center text-xs font-mono font-bold">
                          <span className="text-slate-400">Tread Wear</span>
                          <span className="text-white text-right">82%</span>
                        </div>
                        <div className="flex justify-between items-center text-xs font-mono font-bold">
                          <span className="text-slate-400">Temp</span>
                          <span className="text-yellow-400 text-right">54°C</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floor Reflection Glow */}
                <div className="absolute bottom-[10%] w-[700px] h-[150px] bg-primary/20 blur-[80px] rounded-[100%] pointer-events-none transform scale-y-50"></div>
              </div>

              {/* Telemetry Table Panel */}
              <div className="w-full xl:w-[400px] order-1 xl:order-2 p-6 xl:border-l border-white/5 bg-black/20 backdrop-blur-sm self-start">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-bold tracking-wider text-sm flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-base">format_list_bulleted</span>
                    SENSOR ARRAY _04
                  </h3>
                  <span className="text-[10px] font-mono text-primary/60">LIVE_DATA_STREAM</span>
                </div>

                <div className="space-y-3 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
                  {[
                    { name: "ENGINE_LOAD", val: "42%", status: "OPTIMAL", color: "text-green-400" },
                    { name: "FUEL_FLOW_RATE", val: "12.4 L/H", status: "NORMAL", color: "text-primary" },
                    { name: "TYRE_PRESSURE_FL", val: "115 PSI", status: "OPTIMAL", color: "text-green-400" },
                    { name: "TYRE_PRESSURE_FR", val: "112 PSI", status: "WARN", color: "text-yellow-400" },
                    { name: "CARGO_TEMP", val: "-18.2 °C", status: "COLD_CHAIN", color: "text-blue-400" },
                    { name: "BRAKE_WEAR_R1", val: "64%", status: "NOMINAL", color: "text-white" },
                    { name: "CHASSIS_VIBRATION", val: "0.02 G", status: "OPTIMAL", color: "text-green-400" },
                    { name: "ADBLUE_LEVEL", val: "92%", status: "NOMINAL", color: "text-white" },
                  ].map((sensor, idx) => (
                    <div key={idx} className="flex flex-col gap-1 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono text-slate-500">{sensor.name}</span>
                        <span className={`text-[10px] font-mono font-black ${sensor.color}`}>{sensor.status}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-base font-mono font-bold text-white">{sensor.val}</span>
                        <div className="w-16 h-4 flex items-end gap-[1px]">
                          {[20, 40, 30, 60, 45, 70, 50].map((h, i) => (
                            <div key={i} className={`flex-1 ${sensor.color} bg-current opacity-40`} style={{ height: `${h}%` }}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="relative z-10 p-6 flex justify-between items-end bg-gradient-to-t from-[#101413] to-transparent">
              <div className="flex gap-2">
                <button className="glass-panel hover:bg-[#2C3A37] text-slate-300 hover:text-white px-5 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">3d_rotation</span>
                  Rotate View
                </button>
                <button className="glass-panel hover:bg-[#2C3A37] text-slate-300 hover:text-white px-5 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined text-lg">view_in_ar</span>
                  Component List
                </button>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500 font-mono mb-1">LAST SYNC</p>
                <p className="text-white font-mono">2026-10-24 14:32:05 UTC</p>
              </div>
            </div>
          </section>
        </main>
      </section>

      {/* Economic Impact Section */}
      <EconomicImpact />
    </div>
  );
}
