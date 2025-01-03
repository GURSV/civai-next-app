import { AuroraBackground } from "./ui/aurora-background";

export default function HeroSection() {
  return (
    <AuroraBackground>
      <section className="hero flex flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-4xl font-bold text-white font-mono">CivAI: For Citizen By Citizen</h1>
        <p className="text-xl text-gray-400 font-mono">सभी के लिए निर्बाध, सुरक्षित सरकारी सेवाओं के लिए एआई-संचालित मंच।</p>
        <button className="px-6 py-2 text-gray-400 rounded-md border-white border-2 font-mono">
          हमारे बारे में और अधिक
        </button>
      </section>
    </AuroraBackground>
  );
}