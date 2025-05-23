import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oliver Benns | Full Stack Software Engineer",
  description:
    "Oliver Benns is a full stack software engineer for early stage startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="max-w-xl mx-auto px-4 flex flex-col min-h-screen">
          <Header />

          {children}
        </div>
        <SpeedInsights />
        <Analytics />
        <GoogleAnalytics gaId="G-T5D43YYZE9" />
      </body>
    </html>
  );
}
