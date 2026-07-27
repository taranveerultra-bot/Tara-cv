import Link from "next/link";

import Container from "./Container";
import { menuItems } from "@/data/menuItems";
import { siteDetails } from "@/data/siteDetails";

const Footer = () => (
    <footer className="bg-foreground py-12 text-white">
        <Container>
            <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
                <div>
                    <Link href="#home" className="inline-flex items-center gap-3 font-semibold">
                        <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-sm text-foreground">T</span>
                        {siteDetails.siteName}
                    </Link>
                    <p className="mt-4 max-w-md text-sm text-white/60">
                        SEO, websites, AI automation and digital marketing for ambitious New Zealand businesses.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                        <Link href={`mailto:${siteDetails.email}`} className="text-white/60 hover:text-primary">
                            {siteDetails.email}
                        </Link>
                        <Link href={`tel:${siteDetails.phone.href}`} className="text-white/60 hover:text-primary">
                            {siteDetails.phone.display}
                        </Link>
                    </div>
                </div>
                <nav aria-label="Footer navigation">
                    <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                        {menuItems.map((item) => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-white/60 hover:text-primary">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="mt-10 flex flex-col justify-between gap-2 border-t border-white/15 pt-6 text-sm text-white/45 sm:flex-row">
                <p>&copy; {new Date().getFullYear()} Taran. All rights reserved.</p>
                <p>{siteDetails.location}</p>
            </div>
        </Container>
    </footer>
);

export default Footer;
