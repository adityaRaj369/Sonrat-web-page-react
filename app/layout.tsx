import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sonrat.ai";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050507",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SonRat AI | Enterprise AI Voice Agents",
    template: "%s | SonRat AI",
  },
  description:
    "Deploy enterprise AI voice agents for customer support and sales. Connect voice automation to your data, APIs, and workflows for always-on customer conversations.",
  applicationName: "SonRat AI",
  category: "Artificial intelligence",
  keywords: [
    "AI voice agents",
    "voice infrastructure",
    "customer support AI",
    "sales voice agent",
    "telephony AI",
    "autonomous reasoning",
    "WebRTC voice",
    "SonRat AI",
  ],
  authors: [{ name: "SonRat AI Infrastructure" }],
  creator: "SonRat AI",
  publisher: "SonRat AI",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "SonRat AI | Enterprise AI Voice Agents",
    description: "AI agents that understand, decide, and act across your customer support and sales workflows.",
    url: "/",
    siteName: "SonRat AI",
    type: "website",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SonRat AI voice agents" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SonRat AI | Enterprise AI Voice Infrastructure",
    description: "AI agents that don't just talk. They understand, decide, and act.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#050507] text-[#ededed] antialiased selection:bg-white/20 selection:text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "SonRat AI",
                  url: siteUrl,
                  logo: `${siteUrl}/icon.svg`,
                  description:
                    "Enterprise AI voice agents for customer support and sales teams.",
                },
                {
                  "@type": "WebSite",
                  name: "SonRat AI",
                  url: siteUrl,
                  description:
                    "Enterprise AI voice agent infrastructure for customer support and sales.",
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
