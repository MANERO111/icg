import MarquesHero from "./components/MarquesHero";
import MarquesStatement from "./components/MarquesStatement";
import BrandShowcase from "./components/BrandShowcase";

export default function NosMarquesPage() {
  return (
    <main className="min-h-screen bg-white pb-32">
      <MarquesHero />
      <MarquesStatement />
      <BrandShowcase />
    </main>
  );
}
