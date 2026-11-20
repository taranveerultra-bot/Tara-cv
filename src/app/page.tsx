import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import TigerInterlude from "@/components/TigerInterlude";
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
        <AboutSection />
        <ToolsMarquee />
        <ProjectsSection />
        <ServicesSection />
        <AICreativeSection />
        <WhatIThinkSection />
        <TigerInterlude />
        <CTA />
    </>
);

export default HomePage;
