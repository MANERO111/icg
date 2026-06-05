import Hero from "./components/hero";
import Doux from "./components/doux";
import Mission from "./components/mission";
import Routine from "./components/routine";

export default function Cipollino() {
    return (
        <main className="bg-white">
            <Hero />
            <Doux />
            <Mission />
            <Routine />
        </main>
    );
}