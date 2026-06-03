import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import MissionSection from "./components/MissionSection";
import VisionSection from "./components/VisionSection";
import ValeursSection from "./components/ValeursSection";

export default function MissionVisionPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <IntroSection />
      <MissionSection />
      <VisionSection />
      <ValeursSection />
    </main>
  );
}
