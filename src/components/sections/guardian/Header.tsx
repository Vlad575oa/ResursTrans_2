import Link from "next/link";

export default function Header() {
  return (
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
  );
}
