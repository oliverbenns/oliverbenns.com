import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { Person, WebSite, WithContext } from "schema-dts";
import { Header } from "./components/header";
import { BASE_URL, META_DESCRIPTION_BODY, SOCIAL_LINKS } from "./metadata";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Oliver Benns - Full Stack Software Engineer",
    template: "%s - Oliver Benns | Full Stack Software Engineer",
  },
  description: `Oliver Benns - ${META_DESCRIPTION_BODY}`,
  twitter: {
    card: "summary_large_image",
    site: "@oliverbenns",
    creator: "@oliverbenns",
  },
  alternates: {
    canonical: "./",
  },
};

const personJsonLd: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Oliver Benns",
  url: BASE_URL,
  image: `${BASE_URL}/profile.jpg`,
  jobTitle: "Full Stack Software Engineer",
  description:
    "Freelance full stack software engineer with 12 years of experience across fintech, banking and trading platforms.",
  knowsAbout: [
    "Full Stack Development",
    "Software Architecture",
    "Web Applications",
    "API Design",
    "Web Design",
  ],
  sameAs: Object.values(SOCIAL_LINKS),
};

const websiteJsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Oliver Benns",
  url: BASE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="w-full mx-auto flex flex-col min-h-screen">
          <Header />

          {children}
        </div>
      </body>
    </html>
  );
}
