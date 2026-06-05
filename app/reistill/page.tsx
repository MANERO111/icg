import HeroSection from "./components/hero";
import Expertise from "./components/expertise";
import Routine from "./components/routine";


export default function ReistillPage() {
    return (
        <main className="bg-white">
            <HeroSection />
            <Expertise />
            <Routine />
        </main>
    );
}