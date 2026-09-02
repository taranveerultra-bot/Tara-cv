import Image from "next/image";
import { HiArrowDown, HiArrowUpRight } from "react-icons/hi2";

import Container from "./Container";
import MeditatingTiger from "./MeditatingTiger";

const Hero = () => (
    <section id="home" className="relative overflow-hidden bg-hero-background pb-16 pt-28 lg:pb-24 lg:pt-36">
        <Image
            src="/images/hero-network-background.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="pointer-events-none object-cover object-center opacity-90"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-hero-background via-hero-background/65 to-transparent" />
        <Container className="relative z-10">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
                <div className="lg:-translate-y-4">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
                        Digital marketing consultant · Auckland, NZ
                    </p>
                    <h1 className="max-w-5xl text-balance text-5xl font-extrabold leading-[.88] tracking-[-0.055em] sm:text-7xl lg:text-[6.5rem]">
                        Building growth that{" "}
                        <span className="relative inline-block">
                            lasts.
                            <span className="absolute inset-x-0 bottom-1 -z-0 h-4 -rotate-1 bg-primary lg:h-6" />
                        </span>
                    </h1>
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
                            Reach out <HiArrowUpRight aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <aside className="flex items-center justify-center lg:translate-y-4" aria-label="Meditating tiger">
                    <MeditatingTiger />
                </aside>
            </div>
        </Container>
    </section>
);

export default Hero;
