import CommandHeader from "@/components/sections/guardian/CommandHeader";
import LossesFeed from "@/components/sections/guardian/LossesFeed";
import DigitalTwin from "@/components/sections/guardian/DigitalTwin";

export default function GuardianPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-grain overflow-x-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 z-0 bg-grid-pattern bg-[length:40px_40px] opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#111817]/80 to-[#111817] pointer-events-none"></div>
      
      <CommandHeader />
      
      <main className="flex-1 flex flex-col lg:flex-row h-[calc(100vh-80px)] overflow-hidden">
        <LossesFeed />
        <DigitalTwin />
      </main>
    </div>
  );
}
