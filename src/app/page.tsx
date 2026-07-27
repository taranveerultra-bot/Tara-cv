import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import {
    AboutSection,
    ExperimentsSection,
    ProjectsSection,
    ServicesSection,
    SkillsSection,
} from "@/components/PortfolioSections";
import Testimonials from "@/components/Testimonials";

const HomePage = () => (
    <>
        <Hero />
        <ProjectsSection />
        <ServicesSection />
        <ExperimentsSection />
        <AboutSection />
        <SkillsSection />
        <Testimonials />
        <CTA />
    </>
);

export default HomePage;
