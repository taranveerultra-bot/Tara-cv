import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ContentPage from "@/components/ContentPage";
import { getInsight, insights } from "@/data/insights";

interface InsightPageProps {
    params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => insights.map(({ slug }) => ({ slug }));

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
    const { slug } = await params;
    const insight = getInsight(slug);

    if (!insight) return {};

    return {
        title: insight.title,
        description: insight.summary,
        alternates: { canonical: `/insights/${slug}` },
    };
}

export default async function InsightPage({ params }: InsightPageProps) {
    const { slug } = await params;
    const insight = getInsight(slug);

    if (!insight) notFound();

    return (
        <ContentPage
            backHref="/insights"
            backLabel="All insights"
            eyebrow={insight.category}
            title={insight.title}
            introduction={insight.question}
            meta={[insight.publishedLabel, insight.readTime]}
            sections={insight.sections}
            takeawayTitle="The practical answer"
            takeaway={insight.takeaway}
        />
    );
}
