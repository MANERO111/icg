import EcosystemHero from "./components/ecosystem_hero";
import CollaborateursSection from "./components/collaborateur";
import PartenaireSection from "./components/partenaire";
import FormationSection from "./components/formation";
import DistributionSection from "./components/distribution";
export default function EcosystemPage() {
    return (
        <main className="min-h-screen bg-white pb-32">
            <EcosystemHero />
            <CollaborateursSection />
            <PartenaireSection />
            <FormationSection />
            <DistributionSection />
        </main>
    );
}