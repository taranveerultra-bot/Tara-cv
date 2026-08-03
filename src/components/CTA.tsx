import Link from "next/link";
import { HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";

import { siteDetails } from "@/data/siteDetails";

const CTA = () => (
    <section
        id="contact"
        className="scroll-mt-20 bg-gradient-to-br from-primary/25 via-hero-background to-white px-5 py-20 lg:py-32"
    >
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/80 bg-white/55 p-7 shadow-[0_24px_80px_rgba(22,51,0,0.10)] backdrop-blur-xl sm:p-10 lg:grid-cols-[1.35fr_.65fr] lg:p-16">
            <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">Let&apos;s connect</p>
                <h2 className="mt-5 max-w-4xl text-balance text-4xl font-extrabold leading-[.95] sm:text-6xl">
                    Let&apos;s see where a conversation leads.
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground-accent">
                    If you think my experience could be useful, let&apos;s meet for a coffee or jump on a call and
                    explore the possibilities.
                </p>
            </div>
            <div className="flex flex-col justify-end gap-3">
                <Link
                    href={`mailto:${siteDetails.email}`}
                    className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-black transition hover:bg-primary-accent"
                >
                    <HiOutlineEnvelope aria-hidden="true" />
                    Get in touch
                </Link>
                <Link
                    href={`tel:${siteDetails.phone.href}`}
                    className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full border border-foreground bg-white/35 px-7 py-3.5 font-semibold backdrop-blur-md transition hover:bg-white/70"
                >
                    <HiOutlinePhone aria-hidden="true" />
                    {siteDetails.phone.display}
                </Link>
            </div>
        </div>
    </section>
);

export default CTA;
