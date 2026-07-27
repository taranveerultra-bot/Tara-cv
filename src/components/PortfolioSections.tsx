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
                description="A selection of real, end-to-end builds across long-term marketing, search, local services and digital products. Performance is non-negotiable in every project—from how quickly a page loads to how clearly it helps a customer act."
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
                        I learned marketing because my own business needed customers.
                    </h2>
                    <p className="mt-8 max-w-3xl text-xl leading-relaxed text-secondary">
                        I didn&apos;t get into marketing because I wanted to become a marketer. I got into it because I
                        started my own business in New Zealand and needed people to find it, trust it and choose it.
                    </p>
                    <p className="mt-6 max-w-3xl leading-relaxed text-secondary/80">
                        I quickly learned that providing a good service wasn&apos;t enough. Customers had to understand
                        why the business was right for them. That problem led me into SEO, website development, content
                        strategy, Google Business Profile optimisation and digital marketing.
                    </p>
                    <p className="mt-6 max-w-3xl leading-relaxed text-secondary/80">
                        I invested in coaching, learned from experienced marketers and spent countless hours studying how
                        businesses grow. The most useful lessons, however, came from applying those ideas—building real
                        businesses, testing different approaches, making mistakes and improving what worked.
                    </p>
                    <p className="mt-6 max-w-3xl leading-relaxed text-secondary/80">
                        In New Zealand, reputation travels quickly. A recommendation, a Google review, a useful answer or
                        a professional first impression can carry real weight. People rarely choose a business on price
                        or promotion alone; they look for signs that it is credible, local and likely to keep its promise.
                        That understanding shapes how I approach search, content, websites and customer journeys.
                    </p>
                    <p className="mt-6 max-w-3xl leading-relaxed text-secondary/80">
                        I prefer building systems rather than one-off campaigns. A useful website, strong local
                        visibility, helpful content and thoughtful automation can continue creating value long after
                        launch. AI is another tool within that work—not the goal itself. I use it when it can simplify a
                        real process, make knowledge easier to access or help a team work more consistently.
                    </p>
                    <p className="mt-6 max-w-3xl leading-relaxed text-secondary/80">
                        Running my own businesses has taught me that every marketing decision is an investment. Instead
                        of asking, “What marketing should we do?”, I prefer asking:
                    </p>
                    <blockquote className="mt-7 max-w-3xl border-l-4 border-secondary pl-6 text-3xl font-bold leading-tight text-secondary sm:text-4xl">
                        “What will genuinely help this business grow?”
                    </blockquote>
                    <p className="mt-7 max-w-3xl text-xl font-semibold leading-relaxed text-secondary">
                        I&apos;m naturally curious, always learning and always looking for better ways to help New Zealand
                        businesses grow stronger over time.
                    </p>
                    <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 border-t border-black/25 pt-6 text-sm font-semibold">
                        <span>Auckland, New Zealand</span>
                        <span>Independent & hands-on</span>
                        <span>Marketing + development</span>
                    </div>
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
