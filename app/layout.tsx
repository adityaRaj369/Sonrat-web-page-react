import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "SonRat AI | Next-Generation Enterprise AI Voice Agents",
  description:
    "Deploy human-like AI voice agents that handle customer support and sales 24/7. Connected directly to your company data, APIs, and workflows with sub-240ms turnaround latency.",
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
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#050507",
  openGraph: {
    title: "SonRat AI | Next-Generation Enterprise AI Voice Agents",
    description: "AI agents that don't just talk. They understand, decide, and act.",
    url: "https://sonrat.ai",
    siteName: "SonRat AI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SonRat AI | Enterprise AI Voice Infrastructure",
    description: "AI agents that don't just talk. They understand, decide, and act.",
  },
  icons: {
    icon: "/favicon.ico",
  },
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
        {children}
      </body>
    </html>
  );
}
