import HeroSection from "./components/hero";
import Technologie from "./components/technologie";
import Routine from "./components/routine";

export default function ClearePage() {
    return (
        <main className="bg-white">
            <HeroSection />
            <Technologie />
            <Routine />
        </main>
    );
}