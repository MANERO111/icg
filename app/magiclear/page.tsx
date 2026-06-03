import Hero from "./components/hero";
import Diffrence from "./components/diffrence";
import Mission from "./components/mission";
import Routine from "./components/routine";
export default function MagiclearPage() {
    return (
        <main className="bg-white">
            <Hero />
            <Diffrence />
            <Mission />
            <Routine />
        </main>
    );
}