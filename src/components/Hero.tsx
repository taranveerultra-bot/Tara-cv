import Link from "next/link";
import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";

import Container from "./Container";

const Hero = () => (
    <section id="home" className="overflow-hidden bg-hero-background pb-16 pt-28 lg:pb-24 lg:pt-36">
        <Container>
            <div className="grid items-end gap-12 lg:grid-cols-[1.18fr_.82fr] lg:gap-16">
                <div>
                    <p className="mb-7 text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
                        Business Growth & Digital Marketing Consultant · Auckland, NZ
                    </p>
                    <h1 className="max-w-5xl text-balance text-5xl font-extrabold leading-[.9] tracking-[-0.05em] sm:text-6xl lg:text-[5.25rem]">
                        Business Growth & Digital Marketing Consultant
                    </h1>
                    <p className="mt-8 max-w-2xl text-xl leading-relaxed text-foreground-accent lg:text-2xl">
                        Helping New Zealand businesses build sustainable growth through SEO, websites, AI, automation
                        and digital strategy.
                    </p>
                    <p className="mt-5 max-w-2xl leading-relaxed text-foreground-accent">
                        I work with businesses that want more than a website. I help build systems that improve
                        visibility, generate enquiries, strengthen brands and create long-term growth.
                    </p>
                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="#contact"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3 font-semibold text-white transition hover:bg-secondary"
                        >
                            Let&apos;s Talk About Your Business <HiArrowUpRight aria-hidden="true" />
                        </Link>
                        <Link
                            href="#projects"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-foreground px-7 py-3 font-semibold transition hover:bg-white"
                        >
                            View My Work <HiArrowDown aria-hidden="true" />
                        </Link>
                    </div>
                </div>

                <aside className="bg-primary p-7 sm:p-9 lg:translate-y-4 lg:rounded-[2rem]" aria-label="How Taran approaches growth">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">What I help build</p>
                    <p className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                        A stronger business, not just another marketing campaign.
                    </p>
                    <div className="mt-10 border-t border-black/25">
                        {["More visibility", "Better enquiries", "A stronger brand", "Systems that improve"].map((item, index) => (
                            <div key={item} className="flex items-center gap-5 border-b border-black/25 py-4">
                                <span className="font-mono text-xs">0{index + 1}</span>
                                <span className="font-semibold">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-sm leading-relaxed text-secondary">
                        Available for marketing roles and selected long-term projects.
                    </p>
                </aside>
            </div>
        </Container>
    </section>
);

export default Hero;
