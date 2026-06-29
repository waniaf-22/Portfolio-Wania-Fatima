import { useState, useCallback } from "react";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import NoiseOverlay from "@/components/NoiseOverlay";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MetricsSection from "@/components/MetricsSection";
import ToolsSection from "@/components/ToolsSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import LeadershipSection from "@/components/LeadershipSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Divider = () => <div className="section-divider" />;

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  const handlePreloaderDone = useCallback(() => {
    setLoaded(true);
    // Unlock body scroll
    document.body.style.overflow = "";
  }, []);

  // Lock scroll while preloader is showing
  if (!loaded) {
    document.body.style.overflow = "hidden";
  }

  return (
    <>
      {/* Preloader — unmounts itself after fade-out */}
      {!loaded && <Preloader onComplete={handlePreloaderDone} />}

      {/* Main content — fades in once preloader completes */}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? "translateY(0)" : "translateY(16px)",
          transition: loaded ? "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s" : "none",
        }}
      >
        <CustomCursor />
        <NoiseOverlay />
        <Navbar />
        <HeroSection />
        <Divider />
        <AboutSection />
        <Divider />
        <MetricsSection />
        <Divider />
        <ToolsSection />
        <Divider />
        <SkillsSection />
        <Divider />
        <ProjectsSection />
        <Divider />
        <LeadershipSection />
        <Divider />
        <ExperienceSection />
        <Divider />
        <EducationSection />
        <Divider />
        <TestimonialsSection />
        <Divider />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
