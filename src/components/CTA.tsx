import Link from "next/link";
import { HiArrowUpRight, HiOutlineEnvelope, HiOutlinePhone } from "react-icons/hi2";

import { siteDetails } from "@/data/siteDetails";

const CTA = () => (
    <section id="contact" className="scroll-mt-20 px-5 py-16 lg:py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0b0d10] px-6 py-16 text-center text-white sm:px-10 lg:py-24">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:5rem_4rem]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_110%,#304fff55,transparent)]" />
            <div className="relative mx-auto max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Let&apos;s build momentum</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight sm:text-5xl">
                    Have a digital problem worth solving?
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/65">
                    Tell me what you are trying to improve. I&apos;ll bring a clear point of view and a practical next step.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        href={`mailto:${siteDetails.email}`}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-black transition hover:bg-primary-accent sm:w-auto"
                    >
                        <HiOutlineEnvelope aria-hidden="true" />
                        Email Taran
                    </Link>
                    <Link
                        href={`tel:${siteDetails.phone.href}`}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold transition hover:bg-white/10 sm:w-auto"
                    >
                        <HiOutlinePhone aria-hidden="true" />
                        {siteDetails.phone.display}
                    </Link>
                    <Link
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-semibold transition hover:bg-white/10 sm:w-auto"
                    >
                        Connect on LinkedIn
                        <HiArrowUpRight aria-hidden="true" />
                    </Link>
                    {/* TODO: Replace the generic LinkedIn URL with Taran's public profile. */}
                </div>
            </div>
        </div>
    </section>
);

export default CTA;
