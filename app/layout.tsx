// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

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
                {/* Google Analytics – csak ha van ID az .env.local-ban */}
                {process.env.NEXT_PUBLIC_GA_ID && (
                    <>
                        <Script
                            strategy="afterInteractive"
                            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                        />
                        <Script
                            id="ga4-init"
                            strategy="afterInteractive"
                            dangerouslySetInnerHTML={{
                                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
                            }}
                        />
                    </>
                )}
            </head>
            <body>{children}</body>
        </html>
    );
}
