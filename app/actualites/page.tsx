import HeroSection from "./components/hero";
import LatestNews from "./components/latest_news";
import IcgNewsSection from "./components/chez_icg";
import IcgSection from "./components/icg_mouvement";

export default function Actualites() {
    return (
        <div className="min-h-screen bg-white pb-32">
            <HeroSection />
            <LatestNews />
            <IcgNewsSection />
            <IcgSection />
        </div>
    );
}