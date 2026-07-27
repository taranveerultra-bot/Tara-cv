import Link from "next/link";
import { HiArrowUpRight, HiCheck } from "react-icons/hi2";

import Container from "./Container";
import Icon from "./Icon";
import Section from "./Section";
import { experiments } from "@/data/experiments";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { skillGroups } from "@/data/skills";

const ProjectPreview = ({ accent, category }: { accent: string; category: string }) => (
    <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${accent} bg-[#101318] p-5`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="relative h-full rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur">
            <div className="flex items-center justify-between">
                <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-white/30" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                    <span className="h-2 w-2 rounded-full bg-white/10" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-white/45">{category}</span>
            </div>
            <div className="mt-7 grid grid-cols-[1fr_.6fr] gap-3">
                <div className="space-y-3">
                    <div className="h-3 w-4/5 rounded-full bg-white/60" />
                    <div className="h-2 w-full rounded-full bg-white/15" />
                    <div className="h-2 w-3/4 rounded-full bg-white/15" />
                    <div className="mt-5 h-16 rounded-lg border border-white/10 bg-white/5" />
                </div>
                <div className="flex items-end gap-1 rounded-lg border border-white/10 bg-white/5 p-3">
                    {[35, 58, 44, 75, 62, 90].map((height, index) => (
                        <span
                            key={`${height}-${index}`}
                            className="flex-1 rounded-t-sm bg-primary/80"
                            style={{ height: `${height}%` }}
                        />
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export const ProjectsSection = () => (
    <Container>
        <Section
            id="projects"
            eyebrow="Selected work"
            title="Real projects shaped by long-term thinking."
            description="SEO, content, websites and digital platforms built to solve practical business and customer problems."
        >
            <div className="grid gap-6 lg:grid-cols-2">
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="group rounded-[1.75rem] border border-black/10 bg-white p-3 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/10"
                    >
                        <ProjectPreview accent={project.accent} category={project.category} />
                        <div className="p-4 pb-5">
                            <p className="text-sm font-semibold text-secondary">{project.category}</p>
                            <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                            <p className="mt-3 text-base leading-relaxed text-foreground-accent">{project.summary}</p>
                            <p className="mt-4 border-l-2 border-primary pl-3 text-sm font-medium">{project.outcome}</p>
                            <div className="mt-6 grid gap-5 sm:grid-cols-2">
                                <div>
                                    <h4 className="text-sm font-semibold">What I worked on</h4>
                                    <ul className="mt-3 space-y-2">
                                        {project.responsibilities.map((item) => (
                                            <li key={item} className="flex gap-2 text-sm text-foreground-accent">
                                                <HiCheck className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold">Outcomes</h4>
                                    <ul className="mt-3 space-y-2">
                                        {project.results.map((item) => (
                                            <li key={item} className="flex gap-2 text-sm text-foreground-accent">
                                                <HiCheck className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="rounded-full bg-hero-background px-3 py-1 text-xs font-medium">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            {project.href && (
                                <Link href={project.href} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold">
                                    View case study <HiArrowUpRight aria-hidden="true" />
                                </Link>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    </Container>
);

export const ServicesSection = () => (
    <div className="bg-hero-background">
        <Container>
            <Section
                id="services"
                eyebrow="Services"
                title="The strategy and technical execution to move forward."
                description="Engage me for a focused project, a growth sprint or ongoing support across your most important digital priorities."
            >
                <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-black/10 bg-black/10 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <article key={service.title} className="bg-white p-7 md:p-8">
                            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-black">
                                <Icon name={service.icon} />
                            </span>
                            <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
                            <p className="mt-3 text-base leading-relaxed text-foreground-accent">{service.description}</p>
                            <ul className="mt-5 space-y-2">
                                {service.deliverables.map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm font-medium">
                                        <HiCheck className="h-4 w-4 text-secondary" aria-hidden="true" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </Section>
        </Container>
    </div>
);

export const ExperimentsSection = () => (
    <Container>
        <Section
            id="experiments"
            eyebrow="Experiments & ventures"
            title="Building, testing and learning through my own platforms."
            description="Ongoing ventures where I explore scalable digital businesses, thoughtful user experiences and practical marketing systems."
        >
            <div className="grid gap-5 md:grid-cols-2">
                {experiments.map((experiment) => (
                    <article key={experiment.title} className="rounded-3xl border border-black/10 p-6">
                        <div className="flex items-center justify-between">
                            <Icon name={experiment.icon} className="h-7 w-7 text-secondary" />
                            <span className="rounded-full bg-hero-background px-3 py-1 text-xs font-semibold">
                                {experiment.status}
                            </span>
                        </div>
                        <h3 className="mt-8 text-xl font-semibold">{experiment.title}</h3>
                        <p className="mt-3 text-base leading-relaxed text-foreground-accent">{experiment.description}</p>
                    </article>
                ))}
            </div>
        </Section>
    </Container>
);

export const AboutSection = () => (
    <div id="about" className="bg-[#0b0d10] py-20 text-white lg:py-28">
        <Container>
            <div className="grid items-start gap-12 lg:grid-cols-[.9fr_1.1fr]">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">About Taran</p>
                    <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
                        I enjoy solving business problems with technology.
                    </h2>
                </div>
                <div>
                    <p className="text-xl leading-relaxed text-white/75">
                        I combine marketing and technical execution to help businesses become easier to find, easier
                        to trust and easier to engage with.
                    </p>
                    <p className="mt-5 leading-relaxed text-white/55">
                        I believe strong businesses are built through trust, useful content, good user experiences and
                        patient marketing. Paid advertising can accelerate growth, but lasting visibility comes from
                        understanding how people search, what customers need and which systems will keep creating value
                        over time.
                    </p>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        {["Independent & hands-on", "Based in Auckland", "Clear, direct communication", "Built for measurable progress"].map(
                            (item) => (
                                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 p-4 text-sm">
                                    <span className="h-2 w-2 rounded-full bg-primary" />
                                    {item}
                                </div>
                            ),
                        )}
                    </div>
                    {/* TODO: Add Taran's professional headshot and a concise career timeline. */}
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
            title="A practical full-stack growth toolkit."
            description="The disciplines and platforms I use to move from opportunity to execution."
        >
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {skillGroups.map((group) => (
                    <article key={group.title} className="rounded-3xl border border-black/10 bg-white p-6">
                        <h3 className="text-lg font-semibold">{group.title}</h3>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <span key={skill} className="rounded-full bg-hero-background px-3 py-1.5 text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    </Container>
);
