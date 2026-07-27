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
    <section id={id} className="scroll-mt-20 py-20 lg:py-28">
        <div className="mx-auto mb-12 max-w-3xl text-center">
            {eyebrow && (
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{eyebrow}</p>
            )}
            <h2 className="text-balance text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-foreground-accent">{description}</p>
        </div>
        {children}
    </section>
);

export default Section;
