import HeroSection from "./components/hero";

import Routine from "./components/routine";
import Technologie from "./components/technologie";

export default function CapiliftPage() {
    return (
        <main className="bg-white">
            <HeroSection />
            <Technologie />
            {/* <Mission /> */}
            <Routine />
        </main>
    );
}