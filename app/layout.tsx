import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.oliverbenns.com"),
  title: {
    default: "Oliver Benns - Full Stack Software Engineer",
    template: "%s - Oliver Benns | Full Stack Software Engineer",
  },
  description:
    "Oliver Benns is a full stack engineer with twelve years across fintech, banking and crypto. I take products from idea to production, solo or with a team.",
  twitter: {
    card: "summary_large_image",
    site: "@oliverbenns",
    creator: "@oliverbenns",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="w-full max-w-xl mx-auto px-4 flex flex-col min-h-screen">
          <Header />

          {children}
        </div>
      </body>
    </html>
  );
}
