import HeroSection from "./components/hero";
import Mission from "./components/mission";
import Love from "./components/love";
import Gamme from "./components/gamme";
export default function Evoluderm() {
    return (
        <main className="bg-white">
            <HeroSection />
            <Love />
            <Mission />
            <Gamme />
        </main>
    );
}