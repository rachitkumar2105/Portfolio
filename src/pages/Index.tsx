import { SpaceBackground } from '@/components/SpaceBackground';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { EducationSection } from '@/components/EducationSection';
import { ResumeSection } from '@/components/ResumeSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <SpaceBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
