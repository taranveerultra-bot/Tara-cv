interface SectionProps {
    id: string;
    eyebrow?: string;
    title: string;
    description: string;
}

const Section = ({
    id,
    eyebrow,
    title,
    description,
    children,
}: React.PropsWithChildren<SectionProps>) => (
    <section id={id} className="scroll-mt-20 py-20 lg:py-32">
        <div className="mb-12 grid gap-5 border-t border-black/15 pt-5 lg:mb-16 lg:grid-cols-[.65fr_1.35fr]">
            {eyebrow && (
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">{eyebrow}</p>
            )}
            <div>
                <h2 className="max-w-4xl text-balance text-4xl font-extrabold leading-[.95] sm:text-5xl lg:text-7xl">{title}</h2>
                <p className="mt-6 max-w-2xl leading-relaxed text-foreground-accent">{description}</p>
            </div>
        </div>
        {children}
    </section>
);

export default Section;
