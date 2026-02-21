import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-border-dark bg-[#0f1115]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 text-primary">
            <span className="material-symbols-outlined text-4xl">local_shipping</span>
          </div>
          <h2 className="text-white text-xl font-bold tracking-tight">FleetCorp</h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#solutions">
            Solutions
          </Link>
          <Link className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#why-us">
            Why Us
          </Link>
          <Link className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#process">
            Process
          </Link>
          <Link className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
        <button className="hidden md:flex bg-primary hover:bg-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all duration-300">
          Get Calculation
        </button>
        <button className="md:hidden text-white" aria-label="Menu">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}
