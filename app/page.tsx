import Hero from "@/components/Hero";
import About from "@/components/About";
import Univyas from "@/components/Univyas";
import PhaseOne from "@/components/PhaseOne";
import EcosystemConnect from "@/components/EcosystemConnect";
import Investor from "@/components/Investor";
import FuturePhases from "@/components/FuturePhases";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative w-full overflow-hidden">
      {/* Abstract background glows */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent-purple/20 blur-[120px] mix-blend-screen animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-blue/10 blur-[120px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      <Hero />
      <About />
      <Univyas />
      <PhaseOne />
      <EcosystemConnect />
      <Investor />
      <FuturePhases />
      <Footer />
    </main>
  );
}
