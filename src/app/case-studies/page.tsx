import type { Metadata } from "next";

import Container from "@/components/Container";

export const metadata: Metadata = {
    title: "Case Studies",
    description: "Detailed project case studies from Taran.",
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
                <Container>
                    <div className="rounded-[2rem] bg-hero-background p-8 sm:p-12">
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-secondary">
                            In preparation
                        </p>
                        <h2 className="mt-5 max-w-3xl text-4xl font-extrabold sm:text-5xl">
                            Case studies will be written from verified project details.
                        </h2>
                        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-foreground-accent">
                            Nothing will be published here until the problem, work and outcomes have been
                            reviewed and approved by Taran.
                        </p>
                        {/* TODO: Add approved case studies after Taran provides the source material. */}
                    </div>
                </Container>
            </section>
        </>
    );
}
