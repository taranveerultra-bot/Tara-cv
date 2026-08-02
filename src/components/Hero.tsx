import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";

import Container from "./Container";

const Hero = () => (
    <section id="home" className="overflow-hidden bg-hero-background pb-16 pt-28 lg:pb-24 lg:pt-36">
        <Container>
            <div className="grid items-end gap-12 lg:grid-cols-[1.18fr_.82fr] lg:gap-16">
                <div>
                    <p className="mb-7 text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
                        Digital marketing consultant · Auckland, NZ
                    </p>
                    <h1 className="max-w-4xl text-5xl font-extrabold leading-[.92] tracking-[-0.05em] sm:text-6xl lg:text-[4.5rem]">
                        <span className="block sm:whitespace-nowrap">Building growth</span>
                        <span className="block">
                            that{" "}
                            <span className="relative inline-block">
                                lasts.
                                <span className="absolute inset-x-0 bottom-0 -z-0 h-2 -rotate-1 bg-primary lg:h-3" />
                            </span>
                        </span>
                    </h1>
                    <p className="mt-8 max-w-2xl text-xl leading-relaxed text-foreground-accent lg:text-2xl">
                        Growth built for the way New Zealand does business—through trust, reputation, useful work and
                        relationships that last.
                    </p>
                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#projects"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3 font-semibold text-white transition hover:bg-secondary"
                        >
                            Explore the work <HiArrowDown aria-hidden="true" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-foreground px-7 py-3 font-semibold transition hover:bg-white"
                        >
                            Discuss your goals <HiArrowUpRight aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <aside className="bg-primary p-7 sm:p-9 lg:translate-y-4 lg:rounded-[2rem]" aria-label="How Taran approaches growth">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">How growth compounds</p>
                    <p className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                        Good marketing is never finished. It becomes more useful with every improvement.
                    </p>
                    <div className="mt-10 border-t border-black/25">
                        {["Get found", "Earn trust", "Build useful systems", "Keep improving"].map((item, index) => (
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
