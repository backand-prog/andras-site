// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import GaListener from "./ga-listener";


export const metadata: Metadata = {
    metadataBase: new URL("https://andras-back.vercel.app"),
    title: "András – Magamról",
    description: "Egy pet project keretein belül készített oldal magam bemutatásáról.",
    alternates: { canonical: "/" },
    openGraph: {
        type: "website",
        url: "https://andras-back.vercel.app",
        siteName: "andras-site",
        title: "Bäck András",
        description: "Pet project magamról.",
        images: [{ url: "/og.jpg", width: 1200, height: 630 }],
        locale: "hu_HU",
    },
    twitter: {
        card: "summary_large_image",
        title: "Bäck András",
        description: "Pet project magamról.",
        images: ["/og.jpg"],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="hu">
            <head>
                {/* GA4 – legegyszerűbb, közvetlen (ID-t cseréld a sajátodra) */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-PVDSHD4FW3"
                    strategy="afterInteractive"
                />
                <Script id="ga4-init" strategy="afterInteractive">
                    {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PVDSHD4FW3');
          `}
                </Script>
            </head>
            <body>
                <GaListener />
                {children}
            </body>
        </html>
    );
}
