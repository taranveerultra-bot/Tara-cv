import Link from "next/link";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";

import { siteDetails } from "@/data/siteDetails";

const CTA = () => (
    <section id="contact" className="scroll-mt-20 bg-hero-background px-5 py-20 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-white p-7 sm:p-10 lg:grid-cols-[1.35fr_.65fr] lg:p-16">
            <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">Start a conversation</p>
                <h2 className="mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-[.95] sm:text-6xl">
                    What would meaningful growth look like for your business?
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground-accent">
                    Tell me about your goals, current challenges and where you want to go. I&apos;ll bring an honest
                    perspective and a practical next step.
                </p>
            </div>
            <div className="flex flex-col justify-end gap-3">
                <Link
                    href={`mailto:${siteDetails.email}`}
                    className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-black transition hover:bg-primary-accent"
                >
                    <HiOutlineEnvelope aria-hidden="true" />
                    Let&apos;s Talk About Your Business
                </Link>
                <Link
                    href={`tel:${siteDetails.phone.href}`}
                    className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full border border-foreground px-7 py-3.5 font-semibold transition hover:bg-hero-background"
                >
                    <HiOutlinePhone aria-hidden="true" />
                    {siteDetails.phone.display}
                </Link>
            </div>
        </div>
    </section>
);

export default CTA;
