import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { SiFacebook, SiInstagram, SiMeta, SiX } from "react-icons/si";

import Container from "./Container";
import Icon from "./Icon";
import Section from "./Section";
import { services } from "@/data/services";
import { skillGroups } from "@/data/skills";
import ProjectsCarousel from "./ProjectsCarousel";

export const ProjectsSection = () => (
    <div className="bg-white">
        <Container>
            <Section
                id="projects"
                title="Real businesses. Real work. Growth you can see."
                description="A selection of real, end-to-end builds across long-term marketing, search, local services and digital products. Performance is non-negotiable in every project—from how quickly a page loads to how clearly it helps a customer act."
                centered
            >
                <ProjectsCarousel />
            </Section>
        </Container>
    </div>
);

export const AICreativeSection = () => (
    <div className="bg-foreground text-white">
        <Container>
            <section
                id="ai-creative"
                className="grid gap-12 py-20 lg:grid-cols-[.75fr_1.25fr] lg:items-center lg:gap-16 lg:py-28"
                aria-labelledby="ai-creative-heading"
            >
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                        AI creative work
                    </p>
                    <h2
                        id="ai-creative-heading"
                        className="mt-5 max-w-3xl text-4xl font-extrabold leading-[.95] sm:text-6xl"
                    >
                        100% AI video and image production.
                    </h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/15 bg-black shadow-2xl">
                        <div className="aspect-[9/16]">
                            <iframe
                                className="h-full w-full"
                                src="https://www.youtube-nocookie.com/embed/S-qZfGwx3rQ"
                                title="100% AI-generated video production work sample one"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    </div>
                    <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border border-white/15 bg-black shadow-2xl">
                        <div className="aspect-[9/16]">
                            <iframe
                                className="h-full w-full"
                                src="https://www.youtube-nocookie.com/embed/938mezzkcqw"
                                title="100% AI-generated video production work sample two"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    </div>
                    <div className="space-y-5 border-t border-white/20 pt-6 sm:col-span-2">
                        <div className="flex items-start gap-3">
                            <SiMeta className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                            <p className="text-base leading-relaxed text-white/75">
                                <span className="font-semibold text-white">Meta Ads</span> for targeted paid
                                distribution across Facebook and Instagram when it supports the goal.
                            </p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-1 flex shrink-0 gap-2 text-primary" aria-hidden="true">
                                <SiX className="h-4 w-4" />
                                <SiFacebook className="h-4 w-4" />
                                <SiInstagram className="h-4 w-4" />
                            </div>
                            <p className="text-base leading-relaxed text-white/75">
                                I also adapt and distribute content across X, Facebook and Instagram when an existing
                                audience can give the work greater reach and a longer life.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    </div>
);

export const WhatIThinkSection = () => (
    <div className="bg-white">
        <Container>
            <section
                className="grid items-center gap-8 border-y border-black/15 py-14 sm:py-16 md:grid-cols-[.75fr_1.25fr] md:gap-12"
                aria-labelledby="what-i-think-heading"
            >
                <h2
                    id="what-i-think-heading"
                    className="text-4xl font-extrabold leading-none tracking-tight sm:text-5xl"
                >
                    What I think.
                </h2>
                <Link
                    href="/insights"
                    aria-label="Read Taran's articles and thoughts"
                    className="group relative aspect-[16/9] w-full overflow-hidden rounded-[2rem] bg-black outline-none ring-primary transition focus-visible:ring-4"
                >
                    <Image
                        src="/images/what-i-think-brain.png"
                        alt="A connected wireframe brain representing ideas and thought"
                        fill
                        sizes="(min-width: 768px) 60vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                </Link>
            </section>
        </Container>
    </div>
);

export const ServicesSection = () => (
    <div className="bg-hero-background">
        <Container>
            <Section
                id="services"
                title="The kind of work I enjoy"
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

export const AboutSection = () => (
    <div id="about" className="bg-primary py-20 lg:py-32">
        <Container>
            <div className="grid items-start gap-12 lg:grid-cols-[.7fr_1.3fr]">
                <div>
                    <h3 className="max-w-md text-2xl font-extrabold leading-tight text-secondary">
                        Digital Marketing Specialist | SEO | Google Ads | AI &amp; Marketing Automation
                    </h3>
                    <p className="mt-4 max-w-md leading-relaxed text-secondary/80">
                        I&apos;ve worked across search, content, websites, automation and analytics. I&apos;m interested
                        in how things work, how people find them and how small improvements create better experiences.
                    </p>
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
                        Practical by background. Curious by nature.
                    </h2>
                    <p className="mt-8 max-w-3xl text-xl leading-relaxed text-secondary">
                        I&apos;m Taran, and I&apos;m 35. I started with a mechanical engineering background, which
                        taught me to be practical, work from the ground up and understand how things fit together.
                        Since then, I&apos;ve studied and worked across engineering, design, business and marketing.
                    </p>
                    <p className="mt-6 max-w-3xl text-xl leading-relaxed text-secondary">
                        Marketing has been a major part of my work for years, but I&apos;m always willing to learn
                        something new and take on an unfamiliar problem. Whatever I work on, I care about doing it
                        properly. I treat every project like my name is on it—because it is.
                    </p>

                    <div className="mt-8 max-w-3xl border-l-4 border-secondary pl-6">
                        <h3 className="text-2xl font-bold text-secondary">
                            A normal workday goes beyond marketing.
                        </h3>
                        <p className="mt-3 leading-relaxed text-secondary/80">
                            I spend a lot of my day talking with people, understanding what they need and helping teams
                            move things forward. I work across sales conversations, process improvements and everyday
                            operational challenges—staying close to customers and the practical side of how things run.
                        </p>
                    </div>

                    <p className="mt-6 max-w-3xl leading-relaxed text-secondary/80">
                        New Zealand has been home for more than a decade. I studied in Christchurch and have spent most
                        of my time here in Auckland and Christchurch. Working closely with people and teams in New
                        Zealand has taught me that trust, reputation and keeping your word matter as much as the
                        marketing itself.
                    </p>

                    <p className="mt-6 max-w-3xl leading-relaxed text-secondary/80">
                        Outside work, I like to stay active through running and the gym. I enjoy dancing, discovering
                        new food and travelling when I get the chance.
                    </p>

                    <div className="mt-10 max-w-3xl border-y border-black/25 py-7">
                        <h3 className="text-2xl font-bold text-secondary">Clear systems make good work easier.</h3>
                        <p className="mt-3 leading-relaxed text-secondary/80">
                            I&apos;m a strong believer in standard operating procedures. Often, the best automation
                            starts with a clear document that a new person can understand. Coordinating work with
                            overseas virtual assistants has reinforced that lesson, while I remain hands-on and
                            accountable for the result.
                        </p>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 border-t border-black/25 pt-6 text-sm font-semibold">
                        <span>Auckland, New Zealand</span>
                        <span>Independent & hands-on</span>
                        <span>Always learning</span>
                    </div>
                </div>
            </div>
            <div className="mt-12 flex flex-col gap-5 border-t border-black/25 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-2xl text-lg font-semibold text-secondary">
                    Common questions you might have.
                </p>
                <Link
                    href="/insights/10-questions-before-we-speak"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3 font-semibold text-white transition hover:bg-secondary"
                >
                    Read my answers
                    <HiArrowUpRight aria-hidden="true" />
                </Link>
            </div>
        </Container>
    </div>
);

export const SkillsSection = () => (
    <Container>
        <Section
            id="skills"
            title="From finding the opportunity to building the solution."
            centered
        >
            <div className="grid border-y border-black/15 sm:grid-cols-2 lg:grid-cols-4">
                {skillGroups.map((group, index) => (
                    <article
                        key={group.title}
                        className={`py-7 sm:px-7 lg:py-9 ${
                            index % 2 === 1 ? "sm:border-l sm:border-black/15" : ""
                        } ${index >= 2 ? "border-t border-black/15 lg:border-t-0" : ""} ${
                            index > 0 ? "lg:border-l lg:border-black/15" : ""
                        }`}
                    >
                        <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-primary px-2 font-mono text-xs">
                            0{index + 1}
                        </span>
                        <h3 className="mt-5 text-xl font-bold sm:text-2xl">{group.title}</h3>
                        <p className="mt-3 text-base leading-relaxed text-foreground-accent">
                            {group.skills.join(" · ")}
                        </p>
                    </article>
                ))}
            </div>
        </Section>
    </Container>
);
