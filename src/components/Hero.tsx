import Link from "next/link";
import {
    HiArrowDown,
    HiArrowUpRight,
    HiCheckCircle,
    HiOutlineBolt,
    HiOutlineChartBar,
    HiOutlineCodeBracket,
    HiOutlineMagnifyingGlass,
} from "react-icons/hi2";

const capabilities = [
    { label: "SEO", icon: HiOutlineMagnifyingGlass },
    { label: "Websites", icon: HiOutlineCodeBracket },
    { label: "AI automation", icon: HiOutlineBolt },
    { label: "Analytics", icon: HiOutlineChartBar },
];

const Hero = () => (
    <section id="home" className="relative overflow-hidden px-5 pb-20 pt-32 md:pt-44">
        <div className="absolute inset-0 -z-10 bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_75%_70%_at_50%_35%,#000_55%,transparent_100%)]" />

        <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Available for select New Zealand projects
                </div>

                <h1 className="text-balance text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-7xl">
                    I help New Zealand businesses{" "}
                    <span className="relative whitespace-nowrap">
                        grow online
                        <span className="absolute inset-x-0 -bottom-1 h-3 -rotate-1 bg-primary/70 -z-10" />
                    </span>
                    .
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground-accent md:text-xl">
                    SEO, AI, high-performance websites, automation and digital marketing—
                    brought together by one independent consultant who can think and build.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        href="#projects"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black sm:w-auto"
                    >
                        See selected work
                        <HiArrowDown aria-hidden="true" />
                    </Link>
                    <Link
                        href="#contact"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-7 py-3.5 font-semibold transition hover:-translate-y-0.5 hover:border-black/25 sm:w-auto"
                    >
                        Talk about your project
                        <HiArrowUpRight aria-hidden="true" />
                    </Link>
                </div>
            </div>

            <div className="relative mx-auto mt-14 max-w-5xl rounded-[2rem] border border-black/10 bg-white/90 p-3 shadow-2xl shadow-blue-950/10 backdrop-blur md:mt-20 md:p-5">
                <div className="overflow-hidden rounded-[1.5rem] border border-black/5 bg-[#0b0d10] text-white">
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                        <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <span className="text-xs text-white/50">taran / growth-system</span>
                        <span className="text-xs text-emerald-300">● live</span>
                    </div>

                    <div className="grid gap-8 p-6 md:grid-cols-[1.2fr_.8fr] md:p-10">
                        <div>
                            <p className="text-sm font-medium text-primary">One connected growth system</p>
                            <h2 className="mt-3 max-w-xl text-2xl font-semibold leading-tight sm:text-3xl">
                                Strategy, execution and measurement without the agency layers.
                            </h2>
                            <div className="mt-8 grid grid-cols-2 gap-3">
                                {capabilities.map(({ label, icon: Icon }) => (
                                    <div
                                        key={label}
                                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                                    >
                                        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                                        <span className="text-sm font-medium">{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                            <p className="text-xs uppercase tracking-[0.2em] text-white/45">Working style</p>
                            <ul className="mt-5 space-y-4">
                                {[
                                    "Commercial thinking first",
                                    "Clear weekly priorities",
                                    "Hands-on implementation",
                                    "Measurement built in",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                                        <HiCheckCircle className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-7 rounded-xl bg-primary p-4 text-black">
                                <p className="text-xs font-semibold uppercase tracking-wider">Based in</p>
                                <p className="mt-1 font-semibold">Auckland, New Zealand</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* TODO: Replace this crafted interface with a real montage of Taran's work when approved screenshots are available. */}
            </div>
        </div>
    </section>
);

export default Hero;
