import Link from "next/link";

import Container from "./Container";
import { menuItems } from "@/data/menuItems";
import { siteDetails } from "@/data/siteDetails";

const Footer = () => (
    <footer className="border-t border-black/10 py-10">
        <Container>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
                <div>
                    <Link href="#home" className="inline-flex items-center gap-3 font-semibold">
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-sm text-white">T</span>
                        {siteDetails.siteName}
                    </Link>
                    <p className="mt-3 max-w-md text-sm text-foreground-accent">
                        SEO, websites, AI automation and digital marketing for ambitious New Zealand businesses.
                    </p>
                </div>
                <nav aria-label="Footer navigation">
                    <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                        {menuItems.map((item) => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-foreground-accent hover:text-foreground">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="mt-8 flex flex-col justify-between gap-2 border-t border-black/10 pt-6 text-sm text-foreground-accent sm:flex-row">
                <p>© {new Date().getFullYear()} Taran. All rights reserved.</p>
                <p>{siteDetails.location}</p>
            </div>
        </Container>
    </footer>
);

export default Footer;
