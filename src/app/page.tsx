import dynamic from "next/dynamic";
import HeaderScroll from "@/components/sections/fleetcorp/HeaderScroll";

// Lazy load below-fold components (Performance Rule #5)
const Hero = dynamic(
  () => import("@/components/sections/fleetcorp/Hero"),
  { loading: () => <div className="h-[800px] bg-background-dark" /> }
);

const StatsBar = dynamic(
  () => import("@/components/sections/fleetcorp/StatsBar"),
  { loading: () => <div className="h-[200px] bg-background-dark" /> }
);

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

const Footer = dynamic(
  () => import("@/components/sections/fleetcorp/Footer"),
  { loading: () => <div className="h-[100px] bg-[#05080f]" /> }
);

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-dark text-slate-100 overflow-x-hidden">
      <HeaderScroll />
      <Hero />
      <StatsBar />
      <ClientsCarousel />
      <Industries />
      <ChallengesSolutions />
      <ManagementModel />
      <NumbersScale />
      <CTASection />
      <Footer />
    </div>
  );
}
