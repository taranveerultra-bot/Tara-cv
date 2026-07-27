import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

import Container from "@/components/Container";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
    title: "Insights",
    description:
        "Practical answers about SEO, CRM, websites, automation and sustainable business growth.",
    alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
    return (
        <>
            <section className="bg-primary pb-20 pt-36 sm:pb-28 sm:pt-44">
                <Container>
                    <p className="text-sm font-bold uppercase tracking-[0.18em]">Useful thinking, clearly explained</p>
                    <h1 className="mt-5 max-w-5xl text-balance text-6xl font-extrabold leading-[0.95] sm:text-8xl">
                        Questions businesses ask before they know what they need.
                    </h1>
                    <p className="mt-8 max-w-3xl text-xl leading-relaxed sm:text-2xl">
                        Practical answers about marketing, CRM, websites, search and automation—written to help
                        you understand the problem before choosing a solution.
                    </p>
                </Container>
            </section>

            <section className="py-20 sm:py-28">
                <Container>
                    <div className="grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10">
                        {insights.map((insight, index) => (
                            <article
                                key={insight.slug}
                                className="group relative grid gap-8 bg-white p-7 transition hover:bg-hero-background sm:p-10 lg:grid-cols-[7rem_1fr_auto] lg:items-start"
                            >
                                <span className="text-5xl font-extrabold text-black/15">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div>
                                    <div className="flex flex-wrap gap-2 text-sm font-semibold text-foreground-accent">
                                        <span>{insight.category}</span>
                                        <span aria-hidden="true">·</span>
                                        <span>{insight.readTime}</span>
                                    </div>
                                    <h2 className="mt-4 max-w-3xl text-3xl font-extrabold sm:text-4xl">
                                        <Link href={`/insights/${insight.slug}`} className="before:absolute before:inset-0">
                                            {insight.title}
                                        </Link>
                                    </h2>
                                    <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground-accent">
                                        {insight.summary}
                                    </p>
                                </div>
                                <span className="relative grid h-12 w-12 place-items-center rounded-full bg-primary transition group-hover:translate-x-1">
                                    <HiArrowRight aria-hidden="true" />
                                </span>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
