// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

