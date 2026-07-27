import Image from "next/image";

import Container from "./Container";
import Icon from "./Icon";
import Section from "./Section";
import { experiments } from "@/data/experiments";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { skillGroups } from "@/data/skills";

export const ProjectsSection = () => (
    <div className="bg-white">
        <Container>
            <Section
                id="projects"
                eyebrow="Selected work"
                title="Real businesses. Real work. Growth you can see."
                description="A selection of real work across long-term marketing, search, local services and digital products. Performance is non-negotiable in every project—from how quickly a page loads to how clearly it helps a customer act."
            >
                <div className="space-y-20 lg:space-y-28">
                    {projects.map((project, index) => (
                        <article key={project.title} className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
                            <figure className={`${index % 2 ? "lg:order-2" : ""} overflow-hidden rounded-[2rem] bg-hero-background`}>
                                <div className="flex items-center justify-between px-5 py-4">
                                    <span className="font-mono text-xs">0{index + 1}</span>
                                    <span className="text-xs font-semibold uppercase tracking-[0.14em]">Performance · non-negotiable</span>
                                </div>
                                <div className="relative aspect-[16/9] overflow-hidden border-y border-black/10 bg-white">
                                    <Image
                                        src={project.image}
                                        alt={project.imageAlt}
                                        fill
                                        sizes="(min-width: 1024px) 50vw, 100vw"
                                        className="object-contain object-top"
                                    />
                                </div>
                                <figcaption className="px-5 py-4 text-sm font-semibold">{project.title}</figcaption>
                            </figure>

                            <div className={index % 2 ? "lg:order-1" : ""}>
                                <p className="text-base font-semibold uppercase tracking-[0.12em] text-secondary">The work</p>
                                <h3 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">{project.category}</h3>
                                <p className="mt-6 text-xl leading-relaxed text-foreground-accent">{project.summary}</p>
                                <div className="mt-9 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2">
                                    <div>
                                        <p className="text-lg font-semibold">Scope</p>
                                        <p className="mt-3 text-lg leading-relaxed text-foreground-accent">
                                            {project.responsibilities.join(" · ")}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold">Evidence</p>
                                        <p className="mt-3 text-lg leading-relaxed text-foreground-accent">
                                            {project.results.join(" · ")}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-black/15 pt-5">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-sm font-semibold uppercase tracking-wider text-foreground-accent">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {project.evidenceImage && (
                                <figure className="overflow-hidden rounded-[2rem] bg-hero-background lg:col-span-2">
                                    <div className="px-6 py-5 sm:px-8">
                                        <p className="text-2xl font-bold sm:text-3xl">{project.evidenceTitle}</p>
                                        <p className="mt-2 text-base text-foreground-accent">
                                            Measured on mobile with Google PageSpeed Insights.
                                        </p>
                                    </div>
                                    <div className="relative aspect-[2/1] border-t border-black/10 bg-white">
                                        <Image
                                            src={project.evidenceImage}
                                            alt={project.evidenceImageAlt ?? ""}
                                            fill
                                            sizes="100vw"
                                            className="object-contain object-top"
                                        />
                                    </div>
                                </figure>
                            )}
                        </article>
                    ))}
                </div>
            </Section>
        </Container>
    </div>
);

export const ServicesSection = () => (
    <div className="bg-hero-background">
        <Container>
            <Section
                id="services"
                eyebrow="What I do"
                title="Strategy and execution, connected."
                description="Support can begin with one focused problem or develop into an ongoing working relationship."
            >
                <div className="border-t border-black/20">
                    {services.map((service, index) => (
                        <article key={service.title} className="group grid gap-4 border-b border-black/20 py-7 md:grid-cols-[4rem_.8fr_1.2fr] md:items-start md:gap-8">
                            <span className="font-mono text-sm text-foreground-accent">0{index + 1}</span>
                            <div className="flex items-center gap-4">
                                <Icon name={service.icon} className="h-6 w-6 text-secondary" />
                                <h3 className="text-2xl font-bold">{service.title}</h3>
                            </div>
                            <div>
                                <p className="leading-relaxed text-foreground-accent">{service.description}</p>
                                <p className="mt-3 text-sm font-semibold">{service.deliverables.join(" · ")}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </Section>
        </Container>
    </div>
);

export const ExperimentsSection = () => (
    <div className="bg-foreground text-white [&_section>div:first-child>p]:text-primary [&_section>div:first-child_div>p]:text-white/60">
        <Container>
            <Section
                id="experiments"
                eyebrow="Experiments & ventures"
                title="Where I test ideas with real users and real search demand."
                description="These are my working laboratories for SEO, content systems, information architecture and long-term organic growth."
            >
                <div className="grid gap-5 lg:grid-cols-2">
                    {experiments.map((experiment, index) => (
                        <article
                            key={experiment.title}
                            className={index === 0 ? "overflow-hidden rounded-[2rem] bg-primary text-foreground" : "overflow-hidden rounded-[2rem] bg-white text-foreground"}
                        >
                            <div className="relative aspect-[16/9] overflow-hidden border-b border-black/10">
                                <Image
                                    src={experiment.image}
                                    alt={experiment.imageAlt}
                                    fill
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    className="object-contain object-top"
                                />
                            </div>
                            <div className="p-8 sm:p-10">
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-sm">0{index + 1}</span>
                                    <span className="text-xs font-semibold uppercase tracking-wider">{experiment.status}</span>
                                </div>
                                <h3 className="mt-12 text-4xl font-extrabold sm:text-5xl">{experiment.title}</h3>
                                <p className="mt-5 max-w-xl leading-relaxed opacity-75">{experiment.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </Section>
        </Container>
    </div>
);

export const AboutSection = () => (
    <div id="about" className="bg-primary py-20 lg:py-32">
        <Container>
            <div className="grid items-start gap-12 lg:grid-cols-[.7fr_1.3fr]">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">About Taran</p>
                    <div className="relative mt-7 aspect-[4/5] max-w-md overflow-hidden rounded-[2rem] bg-white">
                        <Image
                            src="/images/taran-portrait.jpg"
                            alt="Portrait of Taran"
                            fill
                            sizes="(min-width: 1024px) 35vw, 100vw"
                            className="object-cover object-top"
                        />
                    </div>
                </div>
                <div>
                    <h2 className="max-w-5xl text-4xl font-extrabold leading-[.95] sm:text-6xl lg:text-7xl">
                        Curious about the business. Comfortable with the build.
                    </h2>
                    <p className="mt-8 max-w-3xl text-xl leading-relaxed text-secondary">
                        I enjoy solving business problems with technology. My work sits between marketing strategy and
                        hands-on execution, which means I can follow an idea from customer insight through to launch.
                    </p>
                    <p className="mt-6 max-w-3xl leading-relaxed text-secondary/80">
                        I believe durable growth comes from trust, useful content and good experiences. Paid advertising
                        can create momentum, but organic visibility and systems that improve over time create resilience.
                    </p>
                    <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 border-t border-black/25 pt-6 text-sm font-semibold">
                        <span>Auckland, New Zealand</span>
                        <span>Independent & hands-on</span>
                        <span>Marketing + development</span>
                    </div>
                    {/* TODO: Replace the draft biography with Taran's full personal story after the content interview. */}
                </div>
            </div>
        </Container>
    </div>
);

export const SkillsSection = () => (
    <Container>
        <Section
            id="skills"
            eyebrow="Capabilities"
            title="From finding the opportunity to building the solution."
            description="I work across the full growth cycle: understanding demand, creating the experience, automating repeated work and learning from the results."
        >
            <div className="grid gap-px overflow-hidden rounded-[2rem] bg-black/15 sm:grid-cols-2 lg:grid-cols-4">
                {skillGroups.map((group, index) => (
                    <article key={group.title} className={index === 0 ? "bg-primary p-7" : "bg-hero-background p-7"}>
                        <p className="font-mono text-xs">0{index + 1}</p>
                        <h3 className="mt-16 text-2xl font-bold">{group.title}</h3>
                        <p className="mt-4 text-sm leading-relaxed text-foreground-accent">{group.skills.join(" · ")}</p>
                    </article>
                ))}
            </div>
        </Section>
    </Container>
);
