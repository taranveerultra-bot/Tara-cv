import type { CSSProperties } from "react";

import Container from "./Container";
import { toolCategories, type ToolItem } from "@/data/toolCategories";

interface ToolListProps {
    items: ToolItem[];
    duplicate?: boolean;
}

const ToolList = ({ items, duplicate = false }: ToolListProps) => (
    <ul
        className="flex shrink-0 gap-3 pr-3"
        aria-hidden={duplicate ? "true" : undefined}
    >
        {items.map(({ name, icon: ToolIcon }) => (
            <li
                key={`${duplicate ? "duplicate-" : ""}${name}`}
                className="flex min-h-11 shrink-0 items-center gap-2.5 rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-[0_1px_0_rgba(14,15,12,0.05)] sm:text-base"
            >
                <ToolIcon className="h-4 w-4 shrink-0 text-foreground sm:h-[1.125rem] sm:w-[1.125rem]" aria-hidden="true" />
                <span>{name}</span>
            </li>
        ))}
    </ul>
);

const ToolsMarquee = () => (
    <section className="border-b border-black/10 bg-white py-16 sm:py-20" aria-labelledby="tools-heading">
        <Container>
            <div className="mb-10 grid gap-4 border-t border-black/15 pt-8 md:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] md:items-end">
                <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                        Skills and tools
                    </p>
                    <h2 id="tools-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Tools and capabilities I use
                    </h2>
                </div>
                <p className="min-w-0 max-w-xl text-base leading-relaxed text-foreground-accent sm:text-lg md:justify-self-end">
                    Tools I&apos;ve picked up working across content, websites, automation and analytics.
                </p>
            </div>

            <div className="divide-y divide-black/10 border-y border-black/10">
                {toolCategories.map((category, index) => (
                    <div
                        key={category.title}
                        className="grid gap-4 py-5 md:grid-cols-[13rem_minmax(0,1fr)] md:items-center"
                    >
                        <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-foreground">
                            {category.title}
                        </h3>
                        <div
                            className="tools-marquee overflow-hidden"
                            style={{ "--marquee-duration": `${34 + index * 3}s` } as CSSProperties}
                            aria-label={`${category.title} tools and capabilities`}
                        >
                            <div className="tools-marquee-track flex w-max">
                                <ToolList items={category.items} />
                                <ToolList items={category.items} duplicate />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Container>
    </section>
);

export default ToolsMarquee;
