import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oliver Benns",
  description: "Full stack software engineer",
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
      </body>
    </html>
  );
}
