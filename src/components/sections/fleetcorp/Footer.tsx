import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#05080f] border-t border-border-dark py-12 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-slate-500">
          <span className="material-symbols-outlined text-2xl">local_shipping</span>
          <span className="text-sm font-semibold">FleetCorp © 2024</span>
        </div>
        <div className="flex gap-6">
          <Link className="text-slate-600 hover:text-white transition-colors" href="#">
            Privacy Policy
          </Link>
          <Link className="text-slate-600 hover:text-white transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-slate-600 hover:text-white transition-colors" href="#">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
