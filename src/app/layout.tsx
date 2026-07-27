import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Manrope, Source_Sans_3 } from "next/font/google";

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
        "SEO consultant Auckland",
        "Next.js developer New Zealand",
        "AI automation consultant",
        "Google Business Profile optimisation",
    ],
    alternates: { canonical: "/" },
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
    "@type": "ProfessionalService",
    name: "Taran",
    url: siteDetails.siteUrl,
    description: siteDetails.metadata.description,
    areaServed: { "@type": "Country", name: "New Zealand" },
    address: {
        "@type": "PostalAddress",
        addressLocality: "Auckland",
        addressCountry: "NZ",
    },
    knowsAbout: ["SEO", "Digital Marketing", "Web Development", "AI Automation", "Analytics"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang={siteDetails.language}>
            <body className={`${manrope.variable} ${sourceSans.variable} antialiased`}>
                {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
                />
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
