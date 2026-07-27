export interface IMenuItem {
    text: string;
    url: string;
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
    tags: string[];
    accent: string;
    href?: string;
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
}

export interface ISkillGroup {
    title: string;
    skills: string[];
}

export interface ITestimonial {
    name: string;
    role: string;
    message: string;
    initials: string;
}

export interface ISocials {
    github?: string;
    instagram?: string;
    x?: string;
    [key: string]: string | undefined;
}
