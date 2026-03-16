import BlogPreviewSection from "@/components/sections/BlogPreviewSection";
import CommunitiesSection from "@/components/sections/CommunitiesSection";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/ui/Navbar";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function HomePage() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CommunitiesSection />
        <BlogPreviewSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
