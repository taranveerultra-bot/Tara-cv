export interface RecruiterQuestion {
    question: string;
    answer: string | string[];
}

export const recruiterQuestions: RecruiterQuestion[] = [
    {
        question: "Do you have the right to work in New Zealand?",
        answer:
            "I am a New Zealand citizen, so there are no visa or sponsorship requirements for an employer to manage.",
    },
    {
        question: "How many years of experience do you have in marketing?",
        answer:
            "I have around five years of hands-on experience using marketing tools, platforms and systems, with broader involvement in marketing before that.",
    },
    {
        question: "What marketing tools do you use?",
        answer:
            "I use a broad mix of established marketing tools, including Google Ads, Analytics, Search Console and SEO platforms. I also regularly test newer AI and automation tools, choosing what fits the work rather than relying on one platform.",
    },
    {
        question: "What is your expected salary?",
        answer:
            "I prefer to understand the role, expectations and fit first. If we both feel the role is right, I am flexible and confident we can agree on fair compensation.",
    },
    {
        question: "Are you comfortable working in a hybrid role?",
        answer:
            "Yes. I am comfortable with hybrid work and value the face-to-face connection that comes from spending time with a team in person.",
    },
    {
        question: "Are you willing to work flexible hours?",
        answer:
            "Yes. I focus on completing goals and delivering outcomes, so I am flexible with working hours when needed.",
    },
    {
        question: "Do you have reliable transport, and can you travel?",
        answer: "Yes. I have my own car and can travel nationally or internationally when required.",
    },
    {
        question: "Are you comfortable with background checks?",
        answer: "Yes. Background checks are completely fine.",
    },
    {
        question: "Why are you applying for this position?",
        answer:
            "I answer this in the cover letter I prepare for each application, because the reasons should be specific to the role and the team.",
    },
    {
        question: "Why should you hire me?",
        answer: [
            "I go out and find solutions. Even when a problem is new or sits outside marketing, I am willing to understand it and help move it forward. If something is beyond my reach, I will say so early, discuss it openly and help find the right person to solve it.",
            "I value time and do not waste it. I work in a straightforward, accountable and honest way because clear communication saves time and builds trust. I take loyalty seriously and keep improving the work and systems around me—including this portfolio—as I learn. Those are the qualities I would bring to your team.",
        ],
    },
];
