import Scene from "@/components/3d/Scene";
import { Navbar } from "@/components/ui/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseMeSection } from "@/components/sections/WhyChooseMeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { LegalPolicies } from "@/components/sections/LegalPolicies";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Scene />
      
      <div className="relative z-10 isolate">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <WhyChooseMeSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
        <LegalPolicies />
        <Footer />
      </div>
    </main>
  );
}
