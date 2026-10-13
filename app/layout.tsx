import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sonrat.ai";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#eef3f8",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sonrat — AI voice workspace for orders, support, and sales",
    template: "%s | Sonrat",
  },
  description:
    "Sonrat is an AI voice workspace in build phase for company agents, phone orders, support tickets, outbound campaigns, transcripts, recordings, and business outcomes.",
  applicationName: "Sonrat",
  category: "Artificial intelligence",
  keywords: [
    "AI voice agents",
    "outbound dialer",
    "inbound support AI",
    "AI phone orders",
    "AI support tickets",
    "Exotel AI calling",
    "Hindi voice agent",
    "sales campaign AI",
    "Sonrat",
  ],
  authors: [{ name: "Sonrat" }],
  creator: "Sonrat",
  publisher: "Sonrat",
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
    title: "Sonrat — AI voice agents for live phone calls",
    description:
      "Development preview of Sonrat: company-trained voice agents for orders, support tickets, sales follow-up, transcripts, recordings, and admin controls.",
    url: "/",
    siteName: "Sonrat",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Sonrat AI voice workspace preview" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonrat — AI voice workspace preview",
    description:
      "In-build preview for voice agents, phone orders, support tickets, sales follow-up, and dashboard records.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/brand/sonrat-logo.png",
    apple: "/brand/sonrat-logo.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-[#0a0a0a] selection:text-white`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Sonrat",
                  url: siteUrl,
                  logo: `${siteUrl}/brand/sonrat-logo.png`,
                  description:
                    "AI voice workspace in build phase for company agents, orders, support tickets, sales follow-up, and call evidence.",
                },
                {
                  "@type": "WebSite",
                  name: "Sonrat",
                  url: siteUrl,
                  description:
                    "AI voice agents that sell and support on live phone calls.",
                },
                {
                  "@type": "SoftwareApplication",
                  name: "Sonrat",
                  applicationCategory: "BusinessApplication",
                  operatingSystem: "Web",
                  url: siteUrl,
                  description:
                    "Train AI voice agents, run outbound dialer campaigns, answer inbound support, and review call outcomes.",
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
