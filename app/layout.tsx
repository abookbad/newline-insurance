import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallFAB from "@/components/layout/MobileCallFAB";
import ScrollProgress from "@/components/layout/ScrollProgress";
import { buildMetadata } from "@/lib/seo";
import { buildJsonLd } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const brandUi = Inter({
  variable: "--font-brand-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${brandUi.variable} antialiased min-h-screen flex flex-col`}>
        <ScrollProgress />
        <Header />
        <main className="flex-1 min-h-[60vh]">{children}</main>
        <Footer />
        <MobileCallFAB />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
        />
      </body>
    </html>
  );
}
