import HeroSection from "./components/hero";
import SoiVrai from "./components/soi";
import Mission from "./components/mission";
import Routine from "./components/routine";

export default function SoivrePage() {
    return (
        <main className="bg-white">
            <HeroSection />
            <SoiVrai />
            <Mission />
            <Routine />
        </main>
    );
}   