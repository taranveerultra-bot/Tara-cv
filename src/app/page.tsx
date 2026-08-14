import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import ToolsMarquee from "@/components/ToolsMarquee";
import {
    AICreativeSection,
    AboutSection,
    ProjectsSection,
    ServicesSection,
    SkillsSection,
} from "@/components/PortfolioSections";

const HomePage = () => (
    <>
        <Hero />
        <ToolsMarquee />
        <ProjectsSection />
        <ServicesSection />
        <AICreativeSection />
        <AboutSection />
        <SkillsSection />
        <CTA />
    </>
);

export default HomePage;
