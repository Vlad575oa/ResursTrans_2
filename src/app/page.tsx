import dynamic from "next/dynamic";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";
import Hero from "@/components/sections/fleetcorp/Hero";
import StatsBar from "@/components/sections/fleetcorp/StatsBar";

// Lazy load below-fold components (Performance Rule #5)
const ClientsCarousel = dynamic(
  () => import("@/components/sections/fleetcorp/ClientsCarousel"),
  { loading: () => <div className="h-[100px] bg-background-dark" /> }
);

const Industries = dynamic(
  () => import("@/components/sections/fleetcorp/Industries"),
  { loading: () => <div className="h-[400px] bg-background-dark" /> }
);

const ChallengesSolutions = dynamic(
  () => import("@/components/sections/fleetcorp/ChallengesSolutions"),
  { loading: () => <div className="h-[600px] bg-surface-dark" /> }
);

const ManagementModel = dynamic(
  () => import("@/components/sections/fleetcorp/ManagementModel"),
  { loading: () => <div className="h-[600px] bg-background-dark" /> }
);

const NumbersScale = dynamic(
  () => import("@/components/sections/fleetcorp/NumbersScale"),
  { loading: () => <div className="h-[400px] bg-[#0d1117]" /> }
);

const CTASection = dynamic(
  () => import("@/components/sections/fleetcorp/CTASection"),
  { loading: () => <div className="h-[300px] bg-background-dark" /> }
);

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark text-slate-100 overflow-x-hidden">
      {/* Navigation with scroll effect */}
      <HeaderScroll />

      {/* Main Hero Section - ATF Content (Server Rendered) */}
      <Hero />

      {/* Stats Bar */}
      <StatsBar />

      {/* Below-fold sections - Lazy loaded */}
      <ClientsCarousel />
      <Industries />
      <ChallengesSolutions />
      <ManagementModel />
      <NumbersScale />
      <CTASection />

      {/* Footer */}
      <footer className="bg-[#05080f] border-t border-border-dark py-12 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-slate-500">
            <span className="material-symbols-outlined text-2xl">local_shipping</span>
            <span className="text-sm font-semibold">FleetCorp Global © 2024</span>
          </div>
          <div className="flex gap-6">
            <a className="text-slate-600 hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="text-slate-600 hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
            <a className="text-slate-600 hover:text-white transition-colors" href="#">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
