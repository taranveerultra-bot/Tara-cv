import Link from "next/link";
import { HiArrowLeft, HiArrowUpRight, HiCheck } from "react-icons/hi2";

import Container from "./Container";
import { IContentSection } from "@/types";

interface ContentPageProps {
    backHref: string;
    backLabel: string;
    eyebrow: string;
    title: string;
    introduction: string;
    meta: string[];
    sections: IContentSection[];
    takeawayTitle: string;
    takeaway: string;
}

const ContentPage = ({
    backHref,
    backLabel,
    eyebrow,
    title,
    introduction,
    meta,
    sections,
    takeawayTitle,
    takeaway,
}: ContentPageProps) => (
    <>
        <section className="bg-hero-background pb-20 pt-36 sm:pb-28 sm:pt-44">
            <Container>
                <Link
                    href={backHref}
                    className="inline-flex items-center gap-2 text-base font-semibold hover:opacity-60"
                >
                    <HiArrowLeft aria-hidden="true" />
                    {backLabel}
                </Link>
                <p className="mt-16 text-sm font-bold uppercase tracking-[0.18em] text-secondary">{eyebrow}</p>
                <h1 className="mt-5 max-w-5xl text-balance text-5xl font-extrabold leading-[0.98] sm:text-7xl lg:text-[5.5rem]">
                    {title}
                </h1>
                <p className="mt-8 max-w-3xl text-xl leading-relaxed text-foreground-accent sm:text-2xl">
                    {introduction}
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                    {meta.map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-black/15 bg-white/60 px-4 py-2 text-sm font-semibold"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </Container>
        </section>

        <article className="py-20 sm:py-28">
            <Container>
                <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-24">
                    <div className="space-y-16">
                        {sections.map((section) => (
                            <section key={section.heading}>
                                <h2 className="text-3xl font-extrabold sm:text-4xl">{section.heading}</h2>
                                <div className="mt-6 space-y-5 text-xl leading-relaxed text-foreground-accent">
                                    {section.paragraphs.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                                {section.points && (
                                    <ul className="mt-7 space-y-4">
                                        {section.points.map((point) => (
                                            <li key={point} className="flex gap-3 text-lg leading-relaxed">
                                                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary">
                                                    <HiCheck className="h-4 w-4" aria-hidden="true" />
                                                </span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </section>
                        ))}
                    </div>

                    <aside className="h-fit rounded-[2rem] bg-foreground p-7 text-white lg:sticky lg:top-28">
                        <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">
                            {takeawayTitle}
                        </p>
                        <p className="mt-5 text-xl font-semibold leading-relaxed">{takeaway}</p>
                        <Link
                            href="/#contact"
                            className="mt-8 inline-flex items-center gap-2 border-b border-primary pb-1 font-semibold text-primary"
                        >
                            Talk it through
                            <HiArrowUpRight aria-hidden="true" />
                        </Link>
                    </aside>
                </div>
            </Container>
        </article>
    </>
);

export default ContentPage;
