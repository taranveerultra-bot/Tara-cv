import type { IconType } from "react-icons";
import {
    HiArrowPathRoundedSquare,
    HiBeaker,
    HiChartBar,
    HiCodeBracket,
    HiCpuChip,
    HiCursorArrowRays,
    HiDocumentMagnifyingGlass,
    HiDocumentText,
    HiEnvelope,
    HiFilm,
    HiFunnel,
    HiLightBulb,
    HiMagnifyingGlass,
    HiMapPin,
    HiPaintBrush,
    HiPresentationChartLine,
} from "react-icons/hi2";
import {
    SiAnthropic,
    SiCanva,
    SiCss3,
    SiGithub,
    SiGoogleads,
    SiGoogleanalytics,
    SiGooglesearchconsole,
    SiHtml5,
    SiMeta,
    SiNextdotjs,
    SiOpenai,
    SiSemrush,
    SiWordpress,
} from "react-icons/si";

export interface ToolItem {
    name: string;
    icon: IconType;
}

export interface ToolCategory {
    title: string;
    items: ToolItem[];
}

export const toolCategories: ToolCategory[] = [
    {
        title: "Performance marketing",
        items: [
            { name: "Google Ads", icon: SiGoogleads },
            { name: "Meta Ads", icon: SiMeta },
            { name: "Google Analytics 4", icon: SiGoogleanalytics },
            { name: "Google Search Console", icon: SiGooglesearchconsole },
            { name: "SEO", icon: HiMagnifyingGlass },
            { name: "Technical SEO", icon: HiDocumentMagnifyingGlass },
            { name: "Local SEO", icon: HiMapPin },
            { name: "Lead Generation", icon: HiFunnel },
            { name: "Conversion Rate Optimisation", icon: HiCursorArrowRays },
            { name: "A/B Testing", icon: HiBeaker },
        ],
    },
    {
        title: "Web and development",
        items: [
            { name: "WordPress", icon: SiWordpress },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "HTML", icon: SiHtml5 },
            { name: "CSS", icon: SiCss3 },
            { name: "GitHub", icon: SiGithub },
        ],
    },
    {
        title: "Content and operations",
        items: [
            { name: "Canva", icon: SiCanva },
            { name: "Copywriting", icon: HiDocumentText },
            { name: "Content Strategy", icon: HiLightBulb },
            { name: "Email Marketing", icon: HiEnvelope },
            { name: "CRM", icon: HiPresentationChartLine },
            { name: "Marketing Automation", icon: HiArrowPathRoundedSquare },
        ],
    },
    {
        title: "AI and research",
        items: [
            { name: "OpenAI", icon: SiOpenai },
            { name: "Claude AI", icon: SiAnthropic },
            { name: "AI Automation", icon: HiCpuChip },
            { name: "AI Workflows", icon: HiCodeBracket },
            { name: "Seedance", icon: HiFilm },
            { name: "OpenArt AI", icon: HiPaintBrush },
            { name: "SEMrush", icon: SiSemrush },
            { name: "Ahrefs", icon: HiChartBar },
        ],
    },
];
