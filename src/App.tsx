import { useRevealOnScroll } from "./hooks/useRevealOnScroll";
import { SiteHeader } from "./components/site/SiteHeader";
import { HeroSection } from "./components/site/HeroSection";
import { AboutSection } from "./components/site/AboutSection";
import { WorkSection } from "./components/site/WorkSection";
import { StackSection } from "./components/site/StackSection";
import { ExperienceSection } from "./components/site/ExperienceSection";
import { EducationSection } from "./components/site/EducationSection";
import { ContactSection } from "./components/site/ContactSection";
import { SiteFooter } from "./components/site/SiteFooter";

function App() {
  useRevealOnScroll();

  return (
    <div className="relative overflow-hidden">
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-25" />
      <SiteHeader />

      <main id="top">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <StackSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
