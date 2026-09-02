interface SectionProps {
    id: string;
    eyebrow?: string;
    title: string;
    description?: string;
    centered?: boolean;
}

const Section = ({
    id,
    eyebrow,
    title,
    description,
    centered = false,
    children,
}: React.PropsWithChildren<SectionProps>) => (
    <section id={id} className="scroll-mt-20 py-20 lg:py-32">
        <div
            className={`mb-12 gap-5 border-t border-black/15 pt-5 lg:mb-16 ${
                centered ? "text-center" : "grid lg:grid-cols-[.65fr_1.35fr]"
            }`}
        >
            {eyebrow && (
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">{eyebrow}</p>
            )}
            <div className={centered ? "mx-auto" : ""}>
                <h2 className={`max-w-4xl text-balance text-4xl font-extrabold leading-[.95] sm:text-5xl lg:text-7xl ${centered ? "mx-auto" : ""}`}>{title}</h2>
                {description && (
                    <p className={`mt-6 max-w-2xl leading-relaxed text-foreground-accent ${centered ? "mx-auto" : ""}`}>{description}</p>
                )}
            </div>
        </div>
        {children}
    </section>
);

export default Section;
