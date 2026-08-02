import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import ToolsMarquee from "@/components/ToolsMarquee";
import {
    AboutSection,
    ExperimentsSection,
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
        <ExperimentsSection />
        <AboutSection />
        <SkillsSection />
        <CTA />
    </>
);

export default HomePage;
