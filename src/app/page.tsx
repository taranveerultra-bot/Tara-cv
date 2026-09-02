import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import ToolsMarquee from "@/components/ToolsMarquee";
import {
    AICreativeSection,
    AboutSection,
    ProjectsSection,
    ServicesSection,
    SkillsSection,
    WhatIThinkSection,
} from "@/components/PortfolioSections";

const HomePage = () => (
    <>
        <Hero />
        <ToolsMarquee />
        <ProjectsSection />
        <ServicesSection />
        <AICreativeSection />
        <WhatIThinkSection />
        <AboutSection />
        <SkillsSection />
        <CTA />
    </>
);

export default HomePage;
