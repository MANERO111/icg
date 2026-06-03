import HeroSection from "./components/hero";
import JobsSection from "./components/job";
import DepartmentsSection from "./components/departement";
import CultureSection from "./components/culture";
export default function Career() {
    return (
        <main className="bg-white" >
            <HeroSection />
            <JobsSection />
            <DepartmentsSection />
            <CultureSection />

        </main>
    );
}