import dynamic from "next/dynamic";
import Header from "@/components/sections/fleettech/Header";

// Lazy load below-fold components (Performance Rule #5)
const Hero = dynamic(
  () => import("@/components/sections/fleettech/Hero"),
  { loading: () => <div className="h-[800px] bg-background-dark" /> }
);

const CaseStudies = dynamic(
  () => import("@/components/sections/fleettech/CaseStudies"),
  { loading: () => <div className="h-[600px] bg-[#0c1017]" /> }
);

const Footer = dynamic(
  () => import("@/components/sections/fleettech/Footer"),
  { loading: () => <div className="h-[100px] bg-[#0c1017]" /> }
);

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark text-slate-100 overflow-x-hidden font-display">
      {/* Navigation */}
      <Header />

      {/* Main Hero Section - ATF Content (Server Rendered) */}
      <Hero />

      {/* Case Studies Section - Lazy loaded */}
      <CaseStudies />

      {/* Footer */}
      <Footer />
    </div>
  );
}
