import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0b0d10] border-t border-border-dark pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Address */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 text-primary">
                <span className="material-symbols-outlined text-2xl">local_shipping</span>
              </div>
              <h2 className="text-white text-lg font-bold">FleetCorp</h2>
            </div>
            <div className="text-slate-400 text-sm space-y-2">
              <p>
                123 Logistics Way,<br />
                Tech Park, NY 10001
              </p>
              <p>USA</p>
            </div>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full bg-surface-dark border border-border-dark flex items-center justify-center text-slate-400 hover:text-white hover:border-primary transition-all"
                href="#"
                aria-label="Email"
              >
                <span className="material-symbols-outlined text-sm">alternate_email</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-surface-dark border border-border-dark flex items-center justify-center text-slate-400 hover:text-white hover:border-primary transition-all"
                href="#"
                aria-label="Phone"
              >
                <span className="material-symbols-outlined text-sm">call</span>
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Careers
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Press
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="text-white font-bold mb-6">Resources</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Documentation
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  API Reference
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="#">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Map / Presence */}
          <div className="relative h-48 rounded-lg overflow-hidden bg-surface-dark border border-border-dark group">
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <span className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded text-xs text-white font-bold border border-white/10">
                Global Presence
              </span>
            </div>
            <img
              alt="Stylized dark map of the world showing network connections and data points"
              className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity grayscale hover:grayscale-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1ZHBoiI6K51N-lVJeB_SSOhLKk2nSzZinVm_u9rVzWKRVZWCLs9X73dXfgdbTAB9mSXoAzziF9qnsmPW-ry1rdVgxaI42x0W_w2dTCfk-PVhT9d3XzUVTO6GDICAWZY1mDd2wZDB4Wc-FjRmO_094qDmOem7_T6rZ4lbTmm_kiE37DxObmL88CO3AT8b8MGAg-G8YwBv5E5GmSnmTNKfCgURDtvaj0tO76dNBelD02NHJ-AglpVsGpYi2csEEBcObmiCzVN1DyR0"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-dark pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2024 FleetCorp Management. All rights reserved.</p>
          <div className="flex gap-6">
            <Link className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
