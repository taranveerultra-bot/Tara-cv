import type { Metadata } from "next";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

import Container from "@/components/Container";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
    title: "Insights",
    description: "Notes, answers and practical observations from Taran.",
    alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
    return (
        <>
            <section className="bg-primary pb-20 pt-36 sm:pb-28 sm:pt-44">
                <Container>
                    <p className="text-sm font-bold uppercase tracking-[0.18em]">Insights</p>
                    <h1 className="mt-5 max-w-5xl text-balance text-6xl font-extrabold leading-[0.95] sm:text-8xl">
                        Notes, answers and things I&apos;ve learned.
                    </h1>
                    <p className="mt-8 max-w-3xl text-xl leading-relaxed sm:text-2xl">
                        A growing collection of practical thoughts about work, marketing, systems and the questions
                        people ask.
                    </p>
                </Container>
            </section>

            <section className="py-20 sm:py-28">
                <Container>
                    <div className="border-t border-black/20">
                        {insights.map((insight, index) => (
                            <article key={insight.slug} className="border-b border-black/20">
                                <Link
                                    href={`/insights/${insight.slug}`}
                                    className="group grid gap-5 py-9 sm:py-12 md:grid-cols-[4rem_minmax(0,1fr)_auto] md:items-start md:gap-8"
                                >
                                    <span className="font-mono text-sm text-secondary">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <div className="max-w-4xl">
                                        <p className="text-sm font-bold uppercase tracking-[0.14em] text-secondary">
                                            {insight.eyebrow}
                                        </p>
                                        <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-5xl">
                                            {insight.title}
                                        </h2>
                                        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground-accent">
                                            {insight.summary}
                                        </p>
                                    </div>
                                    <span className="inline-flex items-center gap-2 font-semibold transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                                        Read insight
                                        <HiArrowUpRight aria-hidden="true" />
                                    </span>
                                </Link>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
