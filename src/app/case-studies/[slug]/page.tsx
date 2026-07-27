import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiArrowUpRight, HiCheck } from "react-icons/hi2";

import Container from "@/components/Container";
import ContentPage from "@/components/ContentPage";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";

interface CaseStudyPageProps {
    params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => caseStudies.map(({ slug }) => ({ slug }));

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
    const { slug } = await params;
    const study = getCaseStudy(slug);

    if (!study) return {};

    return {
        title: study.title,
        description: study.summary,
        alternates: { canonical: `/case-studies/${slug}` },
    };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
    const { slug } = await params;
    const study = getCaseStudy(slug);

    if (!study) notFound();

    return (
        <>
            <ContentPage
                backHref="/case-studies"
                backLabel="All case studies"
                eyebrow={study.eyebrow}
                title={study.title}
                introduction={study.summary}
                meta={[study.duration, ...study.services]}
                sections={[
                    {
                        heading: "The challenge",
                        paragraphs: [study.challenge],
                    },
                    {
                        heading: "My role",
                        paragraphs: [study.role],
                    },
                    ...study.sections,
                ]}
                takeawayTitle="What changed"
                takeaway={study.outcomes[0]}
            />

            <section className="bg-primary py-20 sm:py-28">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                        <div>
                            <p className="text-sm font-bold uppercase tracking-[0.16em]">Outcomes</p>
                            <h2 className="mt-4 text-5xl font-extrabold sm:text-6xl">Evidence over decoration.</h2>
                            <ul className="mt-8 space-y-4">
                                {study.outcomes.map((outcome) => (
                                    <li key={outcome} className="flex gap-3 text-lg font-semibold">
                                        <HiCheck className="mt-1 shrink-0" aria-hidden="true" />
                                        {outcome}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-9 flex flex-wrap gap-3">
                                {study.links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-semibold text-white"
                                    >
                                        {link.label}
                                        <HiArrowUpRight aria-hidden="true" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem] bg-white">
                            <Image
                                src={study.image}
                                alt={study.imageAlt}
                                fill
                                sizes="(min-width: 1024px) 55vw, 100vw"
                                className="object-contain p-5"
                            />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
}
