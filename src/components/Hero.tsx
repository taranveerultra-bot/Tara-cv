import Image from "next/image";
import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";

import Container from "./Container";

const Hero = () => (
    <section id="home" className="relative overflow-hidden bg-hero-background pb-16 pt-28 lg:pb-24 lg:pt-36">
        <Image
            src="/images/hero-network-background.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="pointer-events-none object-cover object-center opacity-35"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-hero-background via-hero-background/80 to-hero-background/30" />
        <Container className="relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
                <div>
                    <h1 className="max-w-5xl text-balance text-5xl font-extrabold leading-[.9] tracking-[-0.055em] sm:text-7xl lg:text-[5.8rem]">
                        I&apos;m Taran. I make things work{" "}
                        <span className="relative inline-block">
                            better.
                            <span className="absolute inset-x-0 bottom-1 -z-10 h-4 -rotate-1 bg-primary lg:h-6" />
                        </span>
                    </h1>
                    <p className="mt-8 max-w-2xl text-lg leading-relaxed text-secondary/80 sm:text-xl">
                        I work across marketing, operations, customer experience and process improvement, backed by
                        10+ years of New Zealand work experience.
                    </p>
                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="#projects"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3 font-semibold text-white transition hover:bg-secondary"
                        >
                            Explore my work <HiArrowDown aria-hidden="true" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-foreground px-7 py-3 font-semibold transition hover:bg-white"
                        >
                            Get in touch <HiArrowUpRight aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] border border-black/15 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
                    <Image
                        src="/images/taran-portrait.png"
                        alt="Taran Veer"
                        fill
                        priority
                        sizes="(min-width: 1024px) 36vw, 90vw"
                        className="object-cover object-top"
                    />
                </div>
            </div>
        </Container>
    </section>
);

export default Hero;
