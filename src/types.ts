export interface IMenuItem {
    text: string;
    url: string;
}

export interface IContentSection {
    heading: string;
    paragraphs: string[];
    points?: string[];
}

export interface IInsight {
    slug: string;
    title: string;
    question: string;
    summary: string;
    category: string;
    readTime: string;
    publishedLabel: string;
    sections: IContentSection[];
    takeaway: string;
}

export interface ICaseStudy {
    slug: string;
    title: string;
    eyebrow: string;
    summary: string;
    challenge: string;
    role: string;
    duration: string;
    services: string[];
    image: string;
    imageAlt: string;
    links: Array<{ label: string; href: string }>;
    sections: IContentSection[];
    outcomes: string[];
}

export type IconName =
    | "analytics"
    | "automation"
    | "code"
    | "growth"
    | "local"
    | "search"
    | "strategy";

export interface IProject {
    title: string;
    category: string;
    summary: string;
    outcome: string;
    responsibilities: string[];
    results: string[];
    tags: string[];
    accent: string;
    image: string;
    imageAlt: string;
    evidenceImage?: string;
    evidenceImageAlt?: string;
    evidenceTitle?: string;
    links?: Array<{
        label: string;
        href: string;
    }>;
}

export interface IService {
    title: string;
    description: string;
    icon: IconName;
    deliverables: string[];
}

export interface IExperiment {
    title: string;
    description: string;
    status: "Building" | "Exploring" | "Live";
    icon: IconName;
    image: string;
    imageAlt: string;
    href?: string;
}

export interface ISkillGroup {
    title: string;
    skills: string[];
}

export interface ISocials {
    github?: string;
    instagram?: string;
    x?: string;
    [key: string]: string | undefined;
}
