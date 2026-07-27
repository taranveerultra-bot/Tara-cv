import { IExperiment } from "@/types";

export const experiments: IExperiment[] = [
    {
        title: "Pop Up Penguins",
        description:
            "My live SEO testing environment. I research keyword opportunities, study search intent and test content, internal linking and AI-assisted editing. It currently attracts approximately 1,200–1,500 monthly organic visitors.",
        status: "Live",
        icon: "search",
        image: "/images/projects/pop-up-penguins.png",
        imageAlt: "Pop Up Penguins content website homepage",
    },
    {
        title: "TaxPop",
        description:
            "A New Zealand tax information experiment with structured educational content and custom calculators. It explores how better information architecture can make complicated subjects easier to understand.",
        status: "Building",
        icon: "code",
        image: "/images/projects/taxpop.png",
        imageAlt: "TaxPop New Zealand tax reference and calculator platform",
    },
];
