import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

import Container from "@/components/Container";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
    title: "Case Studies",
    description: "How Taran approaches search visibility, websites, systems and sustainable business growth.",
    alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
    return (
        <>
            <section className="bg-foreground pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
                <Container>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">The work behind the work</p>
                    <h1 className="mt-5 max-w-5xl text-balance text-6xl font-extrabold leading-[0.95] sm:text-8xl">
                        Real business problems. Connected solutions.
                    </h1>
                    <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/70 sm:text-2xl">
                        A closer look at the decisions, systems and continuous work behind selected projects.
                    </p>
                </Container>
            </section>

            <section className="py-20 sm:py-28">
                <Container className="space-y-10">
                    {caseStudies.map((study, index) => (
                        <article
                            key={study.slug}
                            className="grid overflow-hidden rounded-[2.25rem] bg-hero-background lg:grid-cols-2"
                        >
                            <div className={`p-8 sm:p-12 ${index % 2 ? "lg:order-2" : ""}`}>
                                <p className="text-sm font-bold uppercase tracking-[0.16em] text-secondary">
                                    {study.eyebrow}
                                </p>
                                <h2 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">{study.title}</h2>
                                <p className="mt-6 text-xl leading-relaxed text-foreground-accent">{study.summary}</p>
                                <div className="mt-8 flex flex-wrap gap-2">
                                    {study.services.map((service) => (
                                        <span key={service} className="rounded-full bg-white px-4 py-2 text-sm font-semibold">
                                            {service}
                                        </span>
                                    ))}
                                </div>
                                <Link
                                    href={`/case-studies/${study.slug}`}
                                    className="mt-10 inline-flex min-h-12 items-center gap-2 rounded-full bg-foreground px-6 py-3 font-semibold text-white"
                                >
                                    Read the case study
                                    <HiArrowUpRight aria-hidden="true" />
                                </Link>
                            </div>
                            <div className={`relative min-h-[22rem] bg-white ${index % 2 ? "lg:order-1" : ""}`}>
                                <Image
                                    src={study.image}
                                    alt={study.imageAlt}
                                    fill
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    className="object-contain p-5"
                                />
                            </div>
                        </article>
                    ))}
                </Container>
            </section>
        </>
    );
}
