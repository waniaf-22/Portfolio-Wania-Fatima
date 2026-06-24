import CustomCursor from "@/components/CustomCursor";
import NoiseOverlay from "@/components/NoiseOverlay";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MetricsSection from "@/components/MetricsSection";
import ToolsSection from "@/components/ToolsSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CreativeSection from "@/components/CreativeSection";
import LeadershipSection from "@/components/LeadershipSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Divider = () => <div className="section-divider" />;

const Index = () => (
  <>
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
    <CreativeSection />
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
  </>
);

export default Index;
