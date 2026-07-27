import Container from "./Container";
import Icon from "./Icon";
import Section from "./Section";
import { experiments } from "@/data/experiments";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { skillGroups } from "@/data/skills";

const projectSurfaces = ["bg-[#163300] text-primary", "bg-primary text-foreground", "bg-[#ffc091] text-foreground", "bg-[#d7e7ff] text-foreground"];

export const ProjectsSection = () => (
    <div className="bg-white">
        <Container>
            <Section
                id="projects"
                eyebrow="Selected work"
                title="Work with a reason to exist."
                description="Four real projects across local growth, organic content and digital product development. Each one started with a different problem—not a predetermined tool."
            >
                <div className="space-y-20 lg:space-y-28">
                    {projects.map((project, index) => (
                        <article key={project.title} className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className={`${index % 2 ? "lg:order-2" : ""} ${projectSurfaces[index]} flex min-h-[24rem] flex-col justify-between rounded-[2rem] p-7 sm:p-10`}>
                                <div className="flex items-start justify-between gap-6">
                                    <span className="font-mono text-sm">0{index + 1}</span>
                                    <span className="max-w-[15rem] text-right text-xs font-semibold uppercase tracking-[0.14em]">
                                        {project.category}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-5xl font-extrabold leading-[.9] tracking-[-0.05em] sm:text-7xl">
                                        {project.title}
                                    </p>
                                    <p className="mt-6 max-w-md text-base font-medium leading-relaxed opacity-80">
                                        {project.outcome}
                                    </p>
                                </div>
                                {/* TODO: Replace this typographic project panel with an approved project screenshot. */}
                            </div>

                            <div className={index % 2 ? "lg:order-1" : ""}>
                                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-secondary">The work</p>
                                <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">{project.category}</h3>
                                <p className="mt-5 text-lg leading-relaxed text-foreground-accent">{project.summary}</p>
                                <div className="mt-9 grid gap-8 border-t border-black/15 pt-7 sm:grid-cols-2">
                                    <div>
                                        <p className="text-sm font-semibold">Scope</p>
                                        <p className="mt-3 text-sm leading-relaxed text-foreground-accent">
                                            {project.responsibilities.join(" · ")}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold">Evidence</p>
                                        <p className="mt-3 text-sm leading-relaxed text-foreground-accent">
                                            {project.results.join(" · ")}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-black/15 pt-5">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-semibold uppercase tracking-wider text-foreground-accent">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
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
                title="The places where I test my own thinking."
                description="Ongoing ventures let me learn through real decisions: finding an audience, shaping a product and building for the long term."
            >
                <div className="grid gap-5 lg:grid-cols-2">
                    {experiments.map((experiment, index) => (
                        <article
                            key={experiment.title}
                            className={index === 0 ? "rounded-[2rem] bg-primary p-8 text-foreground sm:p-10" : "rounded-[2rem] bg-white p-8 text-foreground sm:p-10"}
                        >
                            <div className="flex items-center justify-between">
                                <span className="font-mono text-sm">0{index + 1}</span>
                                <span className="text-xs font-semibold uppercase tracking-wider">{experiment.status}</span>
                            </div>
                            <h3 className="mt-20 text-4xl font-extrabold sm:text-5xl">{experiment.title}</h3>
                            <p className="mt-5 max-w-xl leading-relaxed opacity-75">{experiment.description}</p>
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
            <div className="grid gap-12 lg:grid-cols-[.55fr_1.45fr]">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">About Taran</p>
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
                    {/* TODO: Add Taran's professional headshot and concise career timeline. */}
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
            title="A broad toolkit, used with focus."
            description="Tools matter when they help answer a real customer or business need."
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
