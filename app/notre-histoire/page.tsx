import React from "react";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import TimelineSection from "./components/TimelineSection";

export default function NotreHistoirePage() {
  return (
    <main className="w-full bg-white min-h-screen">
      <HeroSection />
      <IntroSection />
      <TimelineSection />
    </main>
  );
}
