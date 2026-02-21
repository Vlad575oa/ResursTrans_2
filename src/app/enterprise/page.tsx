import dynamic from "next/dynamic";
import Header from "@/components/sections/fleetcorp-enterprise/Header";

// Lazy load below-fold components (Performance Rule #5)
const Hero = dynamic(
  () => import("@/components/sections/fleetcorp-enterprise/Hero"),
  { loading: () => <div className="h-[400px] bg-background-dark" /> }
);

const Benefits = dynamic(
  () => import("@/components/sections/fleetcorp-enterprise/Benefits"),
  { loading: () => <div className="h-[600px] bg-background-dark" /> }
);

const Timeline = dynamic(
  () => import("@/components/sections/fleetcorp-enterprise/Timeline"),
  { loading: () => <div className="h-[500px] bg-[#0b0d10]" /> }
);

const CTASection = dynamic(
  () => import("@/components/sections/fleetcorp-enterprise/CTASection"),
  { loading: () => <div className="h-[400px] bg-background-dark" /> }
);

const Footer = dynamic(
  () => import("@/components/sections/fleetcorp-enterprise/Footer"),
  { loading: () => <div className="h-[300px] bg-[#0b0d10]" /> }
);

export default function EnterprisePage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark text-slate-100 overflow-x-hidden font-display">
      <Header />
      <Hero />
      <Benefits />
      <Timeline />
      <CTASection />
      <Footer />
    </div>
  );
}
