import { ICaseStudy } from "@/types";

export const caseStudies: ICaseStudy[] = [
    {
        slug: "harmony-clean-sustainable-local-growth",
        title: "Building a sustainable local growth system for Harmony Clean",
        eyebrow: "Harmony Clean · Ongoing growth partnership",
        summary:
            "A long-term approach connecting search visibility, reviews, content, websites, advertising and internal operating systems across three New Zealand markets.",
        challenge:
            "Create a dependable source of local enquiries while making the customer experience and internal delivery more consistent as the business expanded.",
        role: "Growth strategy, SEO, websites, local visibility, advertising and automation",
        duration: "Ongoing partnership",
        services: ["SEO", "Google Business Profile", "Websites", "Content", "Automation"],
        image: "/images/projects/harmony-clean.png",
        imageAlt: "Harmony Clean Christchurch website",
        links: [
            { label: "Christchurch", href: "https://harmonyclean.co.nz/" },
            { label: "Auckland", href: "https://harmonycleanauckland.co.nz/" },
            { label: "Wellington", href: "https://harmonycleanwellington.co.nz/" },
        ],
        sections: [
            {
                heading: "The business problem",
                paragraphs: [
                    "Cleaning is a competitive local market. Customers often compare several providers quickly, and visibility alone is not enough. The business needed to appear credible at the moment of search and then make it easy for a customer to take the next step.",
                    "Growth also had to be repeatable. As Harmony Clean expanded, knowledge about customer calls, preparation and service delivery could not remain only in people's heads.",
                ],
            },
            {
                heading: "One connected system, not isolated campaigns",
                paragraphs: [
                    "I treated the website, Google Business Profile, reviews, local content and advertising as parts of one customer journey. Search activity helped identify real demand. Website improvements answered the questions behind those searches. Reviews and local signals strengthened trust.",
                    "The work continued after launch. Pages, profiles and campaigns were reviewed using actual performance and customer behaviour rather than being left as finished assets.",
                ],
            },
            {
                heading: "Making growth easier to deliver",
                paragraphs: [
                    "Marketing creates pressure on operations when enquiries grow faster than the systems behind them. I built practical internal tools and the Sophie training bot to standardise guidance for customer calls, job preparation and everyday processes.",
                    "This connected external growth with a more consistent internal experience.",
                ],
            },
        ],
        outcomes: [
            "More than 150 Google reviews supporting local trust",
            "Strong search visibility in Christchurch",
            "Expansion into Auckland and Wellington",
            "Repeatable training and customer-service guidance",
            "An end-to-end foundation that can keep improving",
        ],
    },
    {
        slug: "taxpop-making-tax-information-easier-to-use",
        title: "Making New Zealand tax information easier to explore with TaxPop",
        eyebrow: "TaxPop · Information product and interactive tools",
        summary:
            "A fast, structured reference experience combining New Zealand tax topics, IRD-linked information and calculators without making a complicated subject feel heavier.",
        challenge:
            "Organise a broad and technical subject so users can find the relevant topic, compare information and use practical tools with less friction.",
        role: "Product direction, information architecture, calculators, content structure and performance",
        duration: "Independent product",
        services: ["Information architecture", "Interactive tools", "Technical SEO", "Performance"],
        image: "/images/projects/taxpop.png",
        imageAlt: "TaxPop New Zealand tax reference and calculator website",
        links: [{ label: "Visit TaxPop", href: "https://taxpop.co.nz/" }],
        sections: [
            {
                heading: "Designing around the question",
                paragraphs: [
                    "Tax information is difficult partly because users do not always know the formal name of what they need. The structure had to support searching, browsing by category and moving between explanations and calculators.",
                    "I organised the experience around recognisable topics and plain-language pathways while keeping links to official IRD references available.",
                ],
            },
            {
                heading: "Useful tools, not decorative features",
                paragraphs: [
                    "The calculators were included to help people move from reading to understanding their own situation. Each tool is part of the information journey rather than a separate technical demonstration.",
                ],
            },
            {
                heading: "Performance is part of trust",
                paragraphs: [
                    "An information product should feel immediate, especially on mobile. The build was kept lightweight and achieved a mobile Lighthouse score of 100 for Performance, Best Practices and SEO, with 91 for Accessibility at the time measured.",
                    "Fast loading does not replace useful information, but it removes friction and supports confidence in the product.",
                ],
            },
        ],
        outcomes: [
            "31 structured tax topics",
            "22 interactive calculators",
            "Direct pathways to IRD reference information",
            "100 mobile Lighthouse scores for Performance, Best Practices and SEO",
            "A scalable structure for future educational content",
        ],
    },
];

export const getCaseStudy = (slug: string) =>
    caseStudies.find((caseStudy) => caseStudy.slug === slug);
