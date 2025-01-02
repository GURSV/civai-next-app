import { AuroraBackground } from "./ui/aurora-background";

export default function HeroSection() {
  return (
    <AuroraBackground>
      <section className="hero flex flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-4xl font-bold text-white font-mono">CivAI: For Citizen By Citizen</h1>
        <p className="text-xl text-gray-400 font-mono">AI-powered platform for seamless, secure government services for all.</p>
        <button className="px-6 py-2 text-gray-400 rounded-md border-white border-2 font-mono">
          More about us
        </button>
      </section>
    </AuroraBackground>
  );
}