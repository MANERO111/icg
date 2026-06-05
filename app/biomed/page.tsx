import Hero from "./components/hero";
import Titless from "./components/titless";
import Mission from "./components/mission";
import Routine from "./components/routine";
export default function Biomed() {
    return (
        <main className="bg-white">
            <Hero />
            <Titless />
            <Mission />
            <Routine />
        </main>
    );
}