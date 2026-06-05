import HeroSection from "./components/hero";
import Intimite from "./components/intimite";
import Mission from "./components/mission";
import Routine from "./components/routine";

export default function DavajPage() {
    return (
        <main className="bg-white">
            <HeroSection />
            <Intimite />
            <Mission />
            <Routine />
        </main>
    );
}   