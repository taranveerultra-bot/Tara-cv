import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
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
        <ProjectsSection />
        <ServicesSection />
        <ExperimentsSection />
        <AboutSection />
        <SkillsSection />
        <CTA />
    </>
);

export default HomePage;
