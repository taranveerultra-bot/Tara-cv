import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import ToolsMarquee from "@/components/ToolsMarquee";
import {
    AICreativeSection,
    AboutSection,
    ProjectsSection,
    ServicesSection,
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
        <CTA />
    </>
);

export default HomePage;
