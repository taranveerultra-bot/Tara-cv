import type { Metadata } from "next";

import Container from "@/components/Container";

export const metadata: Metadata = {
    title: "Insights",
    description: "Original insights from Taran about marketing, business systems and sustainable growth.",
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
                    <div className="rounded-[2rem] bg-hero-background p-8 sm:p-12">
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-secondary">Coming soon</p>
                        <h2 className="mt-5 max-w-3xl text-4xl font-extrabold sm:text-5xl">
                            Insights coming soon.
                        </h2>
                        {/* TODO: Add only articles based on Taran's original ideas and final approval. */}
                    </div>
                </Container>
            </section>
        </>
    );
}
