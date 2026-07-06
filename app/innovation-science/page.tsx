import InnovationHero from "./components/innovation_hero";
import Technologies from "./components/technologie";
import LaboratoiresSection from "./components/labo";
import SynergieSection from "./components/synergie";
export default function InnovationPage() {
    return (
        <main className="min-h-screen relative bg-white pb-32">
            <InnovationHero />
            <Technologies />
            <LaboratoiresSection />
            {/* <SynergieSection /> */}

        </main>
    );
}