import { IProject } from "@/types";

export const projects: IProject[] = [
    {
        title: "Local service growth engine",
        category: "SEO + Lead generation",
        summary:
            "A search-led acquisition system combining service pages, local intent content and conversion tracking for a New Zealand service business.",
        outcome: "Built to turn local search demand into qualified enquiries.",
        tags: ["Local SEO", "Content", "GA4", "CRO"],
        accent: "from-blue-500/25 via-cyan-400/10 to-transparent",
        // TODO: Add the live case-study URL and verified growth metrics.
    },
    {
        title: "Operations automation hub",
        category: "AI + Automation",
        summary:
            "A practical workflow layer that connects lead capture, team notifications and follow-up tasks so fewer opportunities fall through the cracks.",
        outcome: "Designed to reduce admin and speed up response times.",
        tags: ["AI workflows", "APIs", "Automation", "CRM"],
        accent: "from-violet-500/25 via-fuchsia-400/10 to-transparent",
        // TODO: Replace the interface placeholder with a real workflow screenshot.
    },
    {
        title: "Conversion-focused web platform",
        category: "Design + Development",
        summary:
            "A fast, responsive website architecture for a growing business, with clear service positioning, structured analytics and scalable content.",
        outcome: "Optimised for trust, speed and measurable action.",
        tags: ["Next.js", "TypeScript", "UX", "Technical SEO"],
        accent: "from-amber-400/30 via-orange-400/10 to-transparent",
        // TODO: Add a real client name, screenshot and performance result.
    },
];
