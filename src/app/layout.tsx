import type { Metadata } from "next";
import { Manrope, Source_Sans_3 } from "next/font/google";

import CanvasCursor from "@/components/CanvasCursor";
import CornerCat from "@/components/CornerCat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { siteDetails } from "@/data/siteDetails";

import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans" });

export const metadata: Metadata = {
    metadataBase: new URL(siteDetails.siteUrl),
    title: {
        default: siteDetails.metadata.title,
        template: `%s | ${siteDetails.siteName}`,
    },
    description: siteDetails.metadata.description,
    keywords: [
        "digital marketing consultant New Zealand",
        "business growth consultant Auckland",
        "SEO consultant Auckland",
        "website development New Zealand",
        "AI automation consultant",
        "Google Business Profile optimisation",
    ],
    alternates: { canonical: "/" },
    robots: {
        index: false,
        follow: false,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
        },
    },
    openGraph: {
        title: siteDetails.metadata.title,
        description: siteDetails.metadata.description,
        url: "/",
        siteName: siteDetails.siteName,
        locale: siteDetails.locale,
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: siteDetails.metadata.title,
        description: siteDetails.metadata.description,
    },
};

const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Taran",
    url: siteDetails.siteUrl,
    description: siteDetails.metadata.description,
    address: {
        "@type": "PostalAddress",
        addressLocality: "Auckland",
        addressCountry: "NZ",
    },
    knowsAbout: ["SEO", "Digital Marketing", "Website Strategy", "AI Automation", "Analytics"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang={siteDetails.language} data-scroll-behavior="smooth">
            <body className={`${manrope.variable} ${sourceSans.variable} antialiased`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
                <CanvasCursor />
                <CornerCat />
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
