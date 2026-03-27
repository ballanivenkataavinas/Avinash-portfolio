import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import SoftSkillsSection from "@/components/SoftSkillsSection";
import HandsOnLabsSection from "@/components/HandsOnLabsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";

import ContactSection from "@/components/ContactSection";
import BlogSection from "@/components/BlogSection";
import CustomCursor from "@/components/CustomCursor";
import BackgroundBlobs from "@/components/BackgroundBlobs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <BackgroundBlobs />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <SoftSkillsSection />
      <HandsOnLabsSection />
      <ProjectsSection />
      <BlogSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
