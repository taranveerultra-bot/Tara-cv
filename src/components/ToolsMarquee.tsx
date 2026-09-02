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
                className="flex min-h-9 shrink-0 items-center gap-2 rounded-full border border-black/15 bg-white px-3.5 py-1.5 text-sm font-semibold text-foreground"
            >
                <ToolIcon className="h-4 w-4 shrink-0 text-foreground" aria-hidden="true" />
                <span>{name}</span>
            </li>
        ))}
    </ul>
);

const ToolsMarquee = () => (
    <section className="border-b border-black/10 bg-white py-12 sm:py-14" aria-labelledby="tools-heading">
        <Container>
            <div className="mb-6 border-t border-black/15 pt-6">
                <h2 id="tools-heading" className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Tools and capabilities I use
                </h2>
            </div>

            <div className="divide-y divide-black/10 border-y border-black/10">
                {toolCategories.map((category, index) => (
                    <div
                        key={category.title}
                        className="grid gap-3 py-4 md:grid-cols-[11rem_minmax(0,1fr)] md:items-center"
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
