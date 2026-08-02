import type { Metadata } from "next";

import Container from "@/components/Container";
import { recruiterQuestions } from "@/data/recruiterQuestions";

export const metadata: Metadata = {
    title: "10 Questions You Might Have",
    description: "Straight answers from Taran about experience, work rights, availability and approach to work.",
    alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
    return (
        <>
            <section className="bg-primary pb-20 pt-36 sm:pb-28 sm:pt-44">
                <Container>
                    <p className="text-sm font-bold uppercase tracking-[0.18em]">A little more about me</p>
                    <h1 className="mt-5 max-w-5xl text-balance text-6xl font-extrabold leading-[0.95] sm:text-8xl">
                        10 questions you might have before we speak.
                    </h1>
                    <p className="mt-8 max-w-3xl text-xl leading-relaxed sm:text-2xl">
                        Straight answers about my experience, work rights, availability and the way I approach work.
                    </p>
                </Container>
            </section>

            <section className="py-20 sm:py-28">
                <Container>
                    <ol className="border-t border-black/20">
                        {recruiterQuestions.map((item, index) => (
                            <li
                                key={item.question}
                                className="grid gap-5 border-b border-black/20 py-8 sm:py-10 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-8"
                            >
                                <span className="font-mono text-sm text-secondary">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div className="max-w-4xl">
                                    <h2 className="text-2xl font-bold leading-tight sm:text-3xl">{item.question}</h2>
                                    <p className="mt-4 text-lg leading-relaxed text-foreground-accent sm:text-xl">
                                        {item.answer}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </Container>
            </section>
        </>
    );
}
