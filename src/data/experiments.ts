import { IExperiment } from "@/types";

export const experiments: IExperiment[] = [
    {
        title: "AI lead qualification",
        description:
            "Exploring a lightweight agent that summarises enquiries, identifies urgency and prepares a useful first response.",
        status: "Building",
        icon: "automation",
    },
    {
        title: "Local visibility monitor",
        description:
            "A reporting concept that turns rankings, reviews and profile activity into a simple weekly action list.",
        status: "Exploring",
        icon: "local",
    },
    {
        title: "Marketing operations toolkit",
        description:
            "Reusable components and workflows for launching high-quality landing pages and measurement plans faster.",
        status: "Live",
        icon: "growth",
    },
];
