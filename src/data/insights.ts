import { IInsight } from "@/types";

export const insights: IInsight[] = [
    {
        slug: "does-your-business-need-a-crm",
        title: "Does your business actually need a CRM?",
        question: "A CRM sounds useful, but will it solve the problem—or add another system nobody uses?",
        summary:
            "A practical way to decide when customer relationship software is worthwhile, what should happen before choosing one, and why the process matters more than the platform.",
        category: "CRM & systems",
        readTime: "6 min read",
        publishedLabel: "Practical guide",
        takeaway:
            "Choose a CRM only after you understand the customer journey, the information your team needs, and the follow-up habits the system must support.",
        sections: [
            {
                heading: "Start with the missed opportunity",
                paragraphs: [
                    "Most businesses do not wake up needing a CRM. They notice a different problem first: enquiries are being forgotten, quotes are not followed up, customer notes live in several places, or nobody can see what is likely to become work.",
                    "A CRM can help, but buying software before understanding that problem usually creates a more organised version of the same confusion.",
                ],
            },
            {
                heading: "When a spreadsheet stops being enough",
                paragraphs: [
                    "A simple spreadsheet can work well for a small volume of enquiries. The point to change is not a particular team size. It is when the business can no longer follow every opportunity consistently.",
                ],
                points: [
                    "More than one person speaks with customers.",
                    "Follow-ups depend on someone remembering.",
                    "You cannot easily see where leads come from or why they are lost.",
                    "Customer history is scattered across inboxes, phones and notes.",
                    "Reporting takes manual work and still feels unreliable.",
                ],
            },
            {
                heading: "Map the process before comparing platforms",
                paragraphs: [
                    "Write down what happens from the first enquiry to completed work and repeat business. Identify who owns each step, what information is needed, and where delays occur.",
                    "That map becomes the CRM brief. Without it, feature lists and impressive demos make the decision for you.",
                ],
            },
            {
                heading: "The best CRM is the one people keep updated",
                paragraphs: [
                    "Ease of use matters more than having every possible feature. A smaller system that matches the team's daily work will create better information than a powerful platform people avoid.",
                    "Start with a few useful stages, automate only the repetitive parts, and review the data after the team has used it in real situations.",
                ],
            },
        ],
    },
    {
        slug: "seo-or-google-ads-where-should-you-start",
        title: "SEO or Google Ads: where should a local business start?",
        question: "Both can generate enquiries, but they solve different timing and visibility problems.",
        summary:
            "How to choose between immediate paid visibility and the slower, compounding value of organic search—without treating them as competing channels.",
        category: "Search strategy",
        readTime: "5 min read",
        publishedLabel: "Decision guide",
        takeaway:
            "Use advertising when speed and controlled testing matter. Build organic visibility when you want trust and demand that continue without paying for every click.",
        sections: [
            {
                heading: "The decision is usually about timing",
                paragraphs: [
                    "Google Ads can place a business in front of active searchers quickly. SEO takes longer because search engines need evidence that a website and business deserve visibility.",
                    "If a new service needs enquiries this month, advertising may be the practical starting point. If the goal is to reduce dependence on paid leads over time, organic search needs to be built alongside it.",
                ],
            },
            {
                heading: "Advertising is useful research",
                paragraphs: [
                    "Paid search can reveal which services, locations and messages attract genuine enquiries. That information should improve landing pages, organic content and the wider offer—not sit inside an advertising account.",
                ],
            },
            {
                heading: "SEO builds an asset",
                paragraphs: [
                    "A helpful service page, a strong Google Business Profile and credible local proof can keep working long after publication. The value compounds when the business continues improving them.",
                    "The trade-off is patience. SEO is not a switch, and early activity without useful content or authority rarely produces lasting results.",
                ],
            },
            {
                heading: "For many local businesses, the answer is both",
                paragraphs: [
                    "Use paid search selectively to create immediate opportunities and learn. At the same time, improve the website, local profiles, reviews and content so the business becomes easier to find naturally.",
                    "The channels work best as one search strategy with different time horizons.",
                ],
            },
        ],
    },
    {
        slug: "why-a-good-looking-website-does-not-generate-enquiries",
        title: "Why a good-looking website may not generate enquiries",
        question: "A polished design creates a first impression, but customers still need reasons to trust and act.",
        summary:
            "The common gaps between an attractive website and a useful business system—from unclear positioning to weak local proof and difficult follow-up.",
        category: "Website strategy",
        readTime: "7 min read",
        publishedLabel: "Website review",
        takeaway:
            "A business website performs when the right people can find it, understand the offer, trust the evidence and take the next step without friction.",
        sections: [
            {
                heading: "Design is only one part of the decision",
                paragraphs: [
                    "People rarely visit a service-business website to admire it. They want to know whether the company handles their problem, works in their area, appears trustworthy and is easy to contact.",
                    "A visually impressive site can still fail when those answers are hidden behind broad claims or complicated navigation.",
                ],
            },
            {
                heading: "The visitor should recognise themselves",
                paragraphs: [
                    "A clear opening should explain who the service is for, what outcome it creates and where it is available. This reduces the mental work required to decide whether to keep reading.",
                ],
                points: [
                    "Use the language customers use when describing the problem.",
                    "Show relevant locations and service areas clearly.",
                    "Connect each service to a business or customer outcome.",
                    "Give one obvious next step instead of several competing actions.",
                ],
            },
            {
                heading: "Proof needs context",
                paragraphs: [
                    "Reviews, photographs, accreditations and case studies are stronger when they sit close to the claim they support. A page saying 'trusted experts' carries less weight than a specific example of work and an identifiable customer outcome.",
                ],
            },
            {
                heading: "The website and follow-up process are one system",
                paragraphs: [
                    "Generating an enquiry is not the finish line. Response speed, qualification, quoting and follow-up determine whether interest becomes revenue.",
                    "Before increasing traffic, check what happens after every form submission, email or call. More leads cannot fix an unreliable process.",
                ],
            },
        ],
    },
];

export const getInsight = (slug: string) => insights.find((insight) => insight.slug === slug);
