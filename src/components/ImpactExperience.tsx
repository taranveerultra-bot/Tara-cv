import Image from "next/image";
import Link from "next/link";

import Container from "./Container";
import { cn } from "@/lib/utils";

const experienceItems = [
    {
        company: "Harmony Clean",
        tagline: "Long-term marketing and operations",
        period: "Ongoing",
        position: "Marketing, SEO & systems",
        location: "New Zealand",
        industry: "Local services",
        website: {
            label: "harmonyclean.co.nz",
            href: "https://harmonyclean.co.nz/",
        },
        image: "/images/projects/harmony-clean.png",
        description: [
            "Hands-on work across search visibility, content, local profiles, customer journeys and ongoing website improvements.",
            "The work also extends into operating guides, staff training, customer communication and practical automation.",
        ],
    },
    {
        company: "Independent projects",
        tagline: "Building and testing useful digital products",
        period: "Current",
        position: "Strategy, content & web",
        location: "Auckland",
        industry: "Digital products",
        image: "/images/projects/festival-for-the-future.png",
        description: [
            "I build projects such as Festival for the Future, TaxPop and Pop Up Penguins to explore content systems, information architecture and organic discovery.",
            "Each project gives me a practical place to test ideas, learn from real use and keep improving the work.",
        ],
    },
    {
        company: "Sales & operations",
        tagline: "People, process and practical problem-solving",
        period: "Day to day",
        position: "Sales, support & operations",
        location: "New Zealand",
        industry: "Service operations",
        image: "/images/projects/taxpop.png",
        description: [
            "A normal workday includes talking with people, answering questions, making sales and helping everyday operations move forward.",
            "I value clear documentation, straightforward communication and systems that make good work easier to repeat.",
        ],
    },
] as const;

const ExperienceItem = ({
    item,
    className,
}: {
    item: (typeof experienceItems)[number];
    className?: string;
}) => (
    <article
        className={cn(
            "group relative grid grid-cols-1 gap-8 overflow-hidden border-black/15 bg-hero-background px-6 py-12 md:grid-cols-12 md:px-8 lg:py-16",
            className,
        )}
    >
        <Image
            src={item.image}
            alt=""
            fill
            sizes="100vw"
            className="pointer-events-none object-cover object-top opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-[0.08] group-focus-within:opacity-[0.08]"
        />

        <div className="relative z-10 space-y-4 md:col-span-3">
            <h3 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">{item.company}</h3>
            <div className="space-y-1 text-sm text-foreground-accent">
                <p className="font-medium">{item.tagline}</p>
                <p className="tabular-nums">{item.period}</p>
            </div>
        </div>

        <dl className="relative z-10 grid grid-cols-2 gap-x-5 gap-y-4 text-sm md:col-span-4">
            <dt className="text-foreground-accent">Focus</dt>
            <dd className="font-semibold">{item.position}</dd>
            <dt className="text-foreground-accent">Location</dt>
            <dd className="font-semibold">{item.location}</dd>
            <dt className="text-foreground-accent">Area</dt>
            <dd className="font-semibold">{item.industry}</dd>
            {"website" in item && item.website ? (
                <>
                    <dt className="text-foreground-accent">Website</dt>
                    <dd>
                        <Link
                            href={item.website.href}
                            target="_blank"
                            rel="nofollow noopener noreferrer"
                            className="inline-flex border-b border-foreground font-semibold"
                        >
                            {item.website.label}
                        </Link>
                    </dd>
                </>
            ) : null}
        </dl>

        <div className="relative z-10 space-y-4 leading-relaxed text-foreground-accent md:col-span-5">
            {item.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
            ))}
        </div>
    </article>
);

const ImpactExperience = () => (
    <section className="bg-white py-20 sm:py-28" aria-labelledby="experience-heading">
        <Container>
            <div className="overflow-hidden rounded-[2rem] border border-black/15">
                <div className="bg-foreground px-6 py-10 text-white sm:px-10 sm:py-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">Experience</p>
                    <h2 id="experience-heading" className="mt-4 text-5xl font-extrabold leading-none sm:text-7xl">
                        Experience in practice.
                    </h2>
                </div>
                {experienceItems.map((item, index) => (
                    <ExperienceItem
                        key={item.company}
                        item={item}
                        className={index > 0 ? "border-t" : undefined}
                    />
                ))}
            </div>
        </Container>
    </section>
);

export default ImpactExperience;
