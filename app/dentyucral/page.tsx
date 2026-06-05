import HeroSection from "./components/hero";
import Titless from "./components/titless";
import Mission from "./components/mission";
import Routine from "./components/routine";

export default function DentyucralPage() {
    return (
        <main className="bg-white">
            <HeroSection />
            <Titless />
            <Mission />
            <Routine />
        </main>
    );
}