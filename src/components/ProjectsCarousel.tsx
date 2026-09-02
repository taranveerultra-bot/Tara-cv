"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiArrowLeft, HiArrowRight, HiArrowUpRight } from "react-icons/hi2";

import { projects } from "@/data/projects";

const slides = projects.flatMap((project, projectIndex) => [
    { kind: "project" as const, project, projectIndex },
    ...(project.evidenceImage ? [{ kind: "evidence" as const, project, projectIndex }] : []),
]);

const ProjectsCarousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const slide = slides[activeSlide];

    const move = (direction: number) => {
        setActiveSlide((current) => (current + direction + slides.length) % slides.length);
    };

    useEffect(() => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let timer: number | undefined;

        const updateAutoplay = () => {
            if (timer) window.clearInterval(timer);
            if (isPaused || reducedMotion.matches) return;

            timer = window.setInterval(() => {
                setActiveSlide((current) => (current + 1) % slides.length);
            }, 9000);
        };

        updateAutoplay();
        reducedMotion.addEventListener("change", updateAutoplay);

        return () => {
            if (timer) window.clearInterval(timer);
            reducedMotion.removeEventListener("change", updateAutoplay);
        };
    }, [isPaused]);

    return (
        <div
            className="relative"
            role="region"
            aria-roledescription="carousel"
            aria-label="Selected work"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
            }}
        >
            <div className="relative">
                <div className="overflow-hidden rounded-[2rem] border border-black/15 bg-hero-background">
                    <article
                    key={`${slide.project.title}-${slide.kind}`}
                    className="animate-[carousel-enter_500ms_ease-out]"
                    aria-label={`Slide ${activeSlide + 1} of ${slides.length}`}
                >
                    <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 sm:px-7">
                        <span className="font-mono text-xs">
                            {String(activeSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                            {slide.kind === "evidence" ? "Measured performance" : slide.project.title}
                        </span>
                    </div>

                    {slide.kind === "project" ? (
                        <div className="grid lg:h-[32rem] lg:grid-cols-2">
                            <div className="relative min-h-72 border-b border-black/10 bg-white sm:min-h-[25rem] lg:min-h-0 lg:border-b-0 lg:border-r">
                                <Image
                                    src={slide.project.image}
                                    alt={slide.project.imageAlt}
                                    fill
                                    priority={activeSlide === 0}
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    className="object-contain object-top"
                                />
                            </div>
                            <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-8">
                                <h3 className="text-3xl font-bold leading-tight sm:text-4xl">{slide.project.category}</h3>
                                <p className="mt-4 text-base leading-relaxed text-foreground-accent sm:text-lg">
                                    {slide.project.summary}
                                </p>
                                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-black/15 pt-4">
                                    {slide.project.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-semibold uppercase tracking-wider">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                {slide.project.links ? (
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {slide.project.links.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                target="_blank"
                                                rel="nofollow noopener noreferrer"
                                                className="inline-flex min-h-10 items-center gap-2 rounded-full border border-foreground px-4 py-2 text-sm font-semibold transition hover:bg-foreground hover:text-white"
                                            >
                                                {link.label}
                                                <HiArrowUpRight aria-hidden="true" />
                                            </Link>
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    ) : (
                        <div className="grid lg:h-[32rem] lg:grid-cols-[1.35fr_.65fr]">
                            <div className="relative min-h-72 border-b border-black/10 bg-white sm:min-h-[30rem] lg:min-h-0 lg:border-b-0 lg:border-r">
                                <Image
                                    src={slide.project.evidenceImage!}
                                    alt={slide.project.evidenceImageAlt ?? ""}
                                    fill
                                    sizes="(min-width: 1024px) 65vw, 100vw"
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-secondary">
                                    {slide.project.title}
                                </p>
                                <h3 className="mt-4 text-3xl font-bold leading-tight sm:text-5xl">
                                    {slide.project.evidenceTitle}
                                </h3>
                                <p className="mt-5 text-lg leading-relaxed text-foreground-accent">
                                    {slide.project.evidenceDescription}
                                </p>
                            </div>
                        </div>
                    )}
                    </article>
                </div>

                <button
                    type="button"
                    onClick={() => move(-1)}
                    className="absolute left-4 top-1/2 z-10 hidden h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-black/20 bg-white/95 text-2xl shadow-lg backdrop-blur transition hover:scale-105 hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary sm:inline-flex"
                    aria-label="Show previous project"
                >
                    <HiArrowLeft aria-hidden="true" />
                </button>
                <button
                    type="button"
                    onClick={() => move(1)}
                    className="absolute right-4 top-1/2 z-10 hidden h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-foreground text-2xl text-white shadow-lg transition hover:scale-105 hover:bg-secondary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary sm:inline-flex"
                    aria-label="Show next project"
                >
                    <HiArrowRight aria-hidden="true" />
                </button>
            </div>

            <div className="mt-6 flex flex-col items-center gap-5">
                <div className="flex gap-3 sm:hidden">
                    <button
                        type="button"
                        onClick={() => move(-1)}
                        className="inline-flex min-h-14 min-w-32 items-center justify-center gap-3 rounded-full border border-foreground px-6 font-semibold transition hover:bg-foreground hover:text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary"
                        aria-label="Show previous project"
                    >
                        <HiArrowLeft aria-hidden="true" /> Previous
                    </button>
                    <button
                        type="button"
                        onClick={() => move(1)}
                        className="inline-flex min-h-14 min-w-32 items-center justify-center gap-3 rounded-full bg-foreground px-6 font-semibold text-white transition hover:bg-secondary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary"
                        aria-label="Show next project"
                    >
                        Next <HiArrowRight aria-hidden="true" />
                    </button>
                </div>
                <div className="flex flex-wrap justify-center gap-2" aria-label="Choose a slide">
                    {slides.map((item, index) => (
                        <button
                            key={`${item.project.title}-${item.kind}`}
                            type="button"
                            onClick={() => setActiveSlide(index)}
                            className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
                                index === activeSlide ? "w-9 bg-secondary" : "w-2.5 bg-black/20 hover:bg-black/40"
                            }`}
                            aria-label={`Go to slide ${index + 1}: ${item.project.title}`}
                            aria-current={index === activeSlide ? "true" : undefined}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsCarousel;
