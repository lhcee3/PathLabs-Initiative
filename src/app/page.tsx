import { Navbar } from "@/components/landing/navbar";
import { HeroSection } from "@/components/landing/hero-section";
import { RoadmapSection } from "@/components/landing/roadmap-section";
import { ValuePropsSection } from "@/components/landing/value-props-section";
import { InstructorsSection } from "@/components/landing/instructors-section";
import { RegistrationSection } from "@/components/landing/registration-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <RoadmapSection />
        <ValuePropsSection />
        <InstructorsSection />
        <RegistrationSection />
      </main>
      <Footer />
    </div>
  );
}
