"use client";

/* eslint-disable @next/next/no-html-link-for-pages -- Native anchors prevent Next.js from appending repeated URL fragments. */

import Link from "next/link";
import { useState } from "react";
import { HiArrowUpRight, HiBars3, HiOutlineXMark } from "react-icons/hi2";

import Container from "./Container";
import { menuItems } from "@/data/menuItems";
import { siteDetails } from "@/data/siteDetails";

const headerMenuItems = menuItems
    .filter((item) => item.text !== "Experiments")
    .map((item) => {
        if (item.text === "Projects") return { ...item, text: "Work samples" };
        if (item.text === "Services") return { ...item, text: "Areas I enjoy" };
        return item;
    });

const BrandMark = () => (
    <span className="grid h-9 w-9 place-items-center rounded-full bg-foreground text-sm font-bold text-white">
        T
    </span>
);

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 mx-auto w-full">
            <Container className="!px-0">
                <nav className="flex items-center justify-between border-b border-black/10 bg-hero-background/95 px-5 py-3 backdrop-blur-xl md:px-6 md:py-4">
                    <Link href="/" className="flex items-center gap-3" aria-label="Taran home">
                        <BrandMark />
                        <span className="manrope text-xl font-semibold text-foreground">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    <ul className="hidden items-center gap-7 md:flex">
                        {headerMenuItems.map((item) => (
                            <li key={item.text}>
                                <a
                                    href={item.url}
                                    className="text-base font-semibold text-foreground-accent transition-colors hover:text-foreground"
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="/#contact"
                        className="hidden min-h-12 items-center gap-2 rounded-full bg-foreground px-7 py-3 text-base font-semibold text-white transition hover:bg-secondary md:flex"
                    >
                        Say hello
                        <HiArrowUpRight aria-hidden="true" />
                    </a>

                    <button
                        onClick={() => setIsOpen((open) => !open)}
                        type="button"
                        className="grid h-10 w-10 place-items-center rounded-full bg-primary text-black md:hidden"
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <HiBars3 className="h-6 w-6" aria-hidden="true" />
                        )}
                        <span className="sr-only">Toggle navigation</span>
                    </button>
                </nav>
            </Container>

            {isOpen && (
                <div id="mobile-menu" className="border-b bg-white px-6 pb-6 shadow-lg md:hidden">
                    <ul className="space-y-1">
                        {headerMenuItems.map((item) => (
                            <li key={item.text}>
                                <a
                                    href={item.url}
                                    className="block rounded-xl px-3 py-3 font-medium hover:bg-hero-background"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
