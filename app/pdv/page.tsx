import HeroSection from "./components/hero";
import LuxurySection from "./components/luxury";
import MissionSection from "./components/mission";
import GammeSection from "./components/gamme";
export default function PdvPage() {
    return (
        <main className="bg-white">
            <HeroSection />
            <LuxurySection />
            <MissionSection />
            <GammeSection />
        </main>
    );
}