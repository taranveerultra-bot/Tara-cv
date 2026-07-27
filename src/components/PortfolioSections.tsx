import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

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
                                {project.links && (
                                    <div className="mt-6 flex flex-wrap gap-3">
                                        {project.caseStudySlug && (
                                            <Link
                                                href={`/case-studies/${project.caseStudySlug}`}
                                                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-secondary"
                                            >
                                                Read case study
                                                <HiArrowUpRight aria-hidden="true" />
                                            </Link>
                                        )}
                                        {project.links.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-foreground px-5 py-2.5 text-sm font-semibold transition hover:bg-foreground hover:text-white"
                                            >
                                                {link.label}
                                                <HiArrowUpRight aria-hidden="true" />
                                            </Link>
                                        ))}
                                    </div>
                                )}
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
                                {experiment.href && (
                                    <Link
                                        href={experiment.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-full border border-current px-5 py-2.5 text-sm font-semibold transition hover:opacity-60"
                                    >
                                        Visit website
                                        <HiArrowUpRight aria-hidden="true" />
                                    </Link>
                                )}
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
                    <dl className="mt-6 max-w-md divide-y divide-black/20 border-y border-black/20">
                        <div className="py-4">
                            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary/70">Based in</dt>
                            <dd className="mt-1 font-semibold text-secondary">Auckland, New Zealand</dd>
                        </div>
                        <div className="py-4">
                            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary/70">Education</dt>
                            <dd className="mt-1 font-semibold text-secondary">Studied in Christchurch</dd>
                        </div>
                        <div className="py-4">
                            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary/70">Local experience</dt>
                            <dd className="mt-1 font-semibold leading-relaxed text-secondary">
                                More than a decade across New Zealand
                            </dd>
                        </div>
                    </dl>
                </div>
                <div>
                    <h2 className="max-w-5xl text-4xl font-extrabold leading-[.95] sm:text-6xl lg:text-7xl">
                        New Zealand is home. Building businesses here taught me how local trust works.
                    </h2>
                    <p className="mt-8 max-w-3xl text-xl leading-relaxed text-secondary">
                        New Zealand has been home for more than a decade. I studied in Christchurch and have spent most
                        of my time here living in Auckland and Christchurch, with time also spent in Wellington and
                        Tauranga. Auckland is now my main base and commercial focus. The scale of its market, its
                        competition and the variety of businesses operating here create the kind of growth problems I
                        enjoy working on.
                    </p>

                    <ol className="mt-10 border-t border-black/25">
                        {[
                            {
                                title: "It started with a customer problem",
                                copy: "I had built a service business, but a good service meant little if the right people could not find it or understand why they should choose it. Solving that problem pulled me into SEO, websites, content, Google Business Profile and digital strategy.",
                            },
                            {
                                title: "The business became the classroom",
                                copy: "Coaching and experienced marketers gave me useful frameworks. Running real campaigns taught me what those frameworks could not: customers behave differently from theories, mistakes are expensive, and steady improvement usually beats a clever idea that disappears after a month.",
                            },
                            {
                                title: "Living locally changed what I noticed",
                                copy: "Across different parts of New Zealand, I saw how quickly reputation moves. A recommendation, a review and the feeling that a business will keep its word often matter more than polished promotion. Trust is not a marketing extra here; it is part of the offer.",
                            },
                            {
                                title: "That lesson shaped the systems I build",
                                copy: "Now I connect websites, local visibility, useful content and automation so they keep creating value together. I use AI when it makes a real process clearer or more consistent—not simply because it is the latest tool.",
                            },
                        ].map((chapter, index) => (
                            <li
                                key={chapter.title}
                                className="grid gap-3 border-b border-black/25 py-6 sm:grid-cols-[3rem_.65fr_1.35fr] sm:gap-6"
                            >
                                <span className="font-mono text-sm text-secondary/60">0{index + 1}</span>
                                <h3 className="text-xl font-bold leading-tight text-secondary">{chapter.title}</h3>
                                <p className="leading-relaxed text-secondary/80">{chapter.copy}</p>
                            </li>
                        ))}
                    </ol>

                    <p className="mt-10 max-w-3xl leading-relaxed text-secondary/80">
                        Running businesses here has taught me that every marketing decision is an investment. Instead of
                        asking, “What marketing should we do?”, I prefer asking:
                    </p>
                    <blockquote className="mt-7 max-w-3xl border-l-4 border-secondary pl-6 text-3xl font-bold leading-tight text-secondary sm:text-4xl">
                        “What will genuinely help this business grow?”
                    </blockquote>
                    <p className="mt-7 max-w-3xl text-xl font-semibold leading-relaxed text-secondary">
                        I&apos;m naturally curious, always learning and always looking for better ways to help local
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
