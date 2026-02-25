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

const CertificationsLight = dynamic(
  () => import("@/components/sections/services/CertificationsLight"),
  { loading: () => <div className="h-[200px] bg-slate-900" /> }
);

const TimelineLight = dynamic(
  () => import("@/components/sections/services/TimelineLight"),
  { loading: () => <div className="h-[500px] bg-slate-900" /> }
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

      {/* Merged "Light Trust" Blocks from Site 3 - Adapted for Site 1 */}
      <section className="bg-slate-900 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
              Доверие и Экспертиза
            </h2>
            <p className="text-slate-400 max-w-2xl">
              Наши достижения, сертификации и история развития в едином блоке прозрачности.
            </p>
          </div>
          <CertificationsLight />
          <div className="mt-16">
            <TimelineLight />
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}
