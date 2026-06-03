import HeroSection from "./components/hero";
import DermaTechSynergy from "./components/synergie";
import GalbyMissionApproach from "./components/mission";
import GalbyProductRanges from "./components/lesGamme";
export default function Galby() {
    return (
        <div className="bg-white">
            <HeroSection />
            <DermaTechSynergy />
            <GalbyMissionApproach />
            <GalbyProductRanges />
            
        </div>
    );
}