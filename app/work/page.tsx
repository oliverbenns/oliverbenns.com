import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import type { BreadcrumbList, WithContext } from "schema-dts";
import { BASE_URL, WORK_TITLE } from "@/app/metadata";
import { META_DESCRIPTION_BODY } from "../metadata";

export const metadata: Metadata = {
  title: WORK_TITLE,
  description: `Work by Oliver Benns, ${META_DESCRIPTION_BODY}`,
};

const projects = [
  {
    title: "Bermuda Commercial Bank",
    description:
      "Corporate banking app for institutional and business clients.",
    date: "2025 - 2026",
    href: "/work/bermuda-commercial-bank",
    image: "/bermuda-commercial-bank/banner.png",
    imageWidth: 1200,
    imageHeight: 630,
  },
  {
    title: "Hedge UI",
    description:
      "React starter kit for building high-quality, customisable trading apps.",
    date: "2025 - Present",
    href: "/work/hedge-ui",
    image: "/hedge-ui/banner.png",
    imageWidth: 1200,
    imageHeight: 630,
  },
  {
    title: "Property Track",
    description:
      "Google Chrome extension for Rightmove, the UK's largest property platform.",
    date: "2023 - Present",
    href: "/work/property-track",
    image: "/property-track/banner.png",
    imageWidth: 1200,
    imageHeight: 630,
  },
  {
    title: "Elwood",
    description:
      "Digital asset trading, portfolio and risk platform for institutional investors.",
    date: "2022 - 2025",
    href: "/work/elwood",
    image: "/elwood/banner.png",
    imageWidth: 1200,
    imageHeight: 630,
  },
  {
    title: "Countingup",
    description:
      "Business account app with integrated accounting and tax capabilities.",
    date: "2020 - 2021",
    href: "/work/countingup",
    image: "/countingup/banner.png",
    imageWidth: 1200,
    imageHeight: 630,
  },
  {
    title: "General Assembly",
    description:
      "Student platform enabling access to coursework, assessments and awards.",
    date: "2018 - 2019",
    href: "/work/general-assembly",
    image: "/general-assembly/banner.png",
    imageWidth: 1200,
    imageHeight: 630,
  },
];

const breadcrumbJsonLd: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: WORK_TITLE,
      item: `${BASE_URL}/work`,
    },
  ],
};

export default function Work() {
  return (
    <main className="py-6 sm:py-12 flex flex-col gap-6 sm:gap-12 max-w-xl mx-auto w-full px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <h1 className="sr-only">Work</h1>
      <div className="flex flex-col gap-4 w-full">
        <p className="text-gray-600 text-lg">
          Twelve years across across fintech, banking and trading platforms,
          working with startups and established organisations. I take products
          from idea to production, solo or with a team.
        </p>
        <p className="text-gray-600 text-lg">
          Yours could be next -{" "}
          <Link
            href="/contact"
            className="text-gray-600 border-b-1 border-gray-800"
          >
            get in touch
          </Link>
          .
        </p>
      </div>

      <div className="flex flex-col gap-8 w-full">
        {projects.map((project, idx) => (
          <div
            className={`w-full flex flex-col sm:flex-row gap-4 sm:gap-6 overflow-hidden items-center`}
            key={project.href}
          >
            <Link href={project.href} className="w-full sm:w-2/5 shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                width={project.imageWidth}
                height={project.imageHeight}
                className="rounded-lg sm:aspect-[4/3] object-cover"
              />
            </Link>
            <div className="flex flex-col gap-1 w-full w:w-3/5">
              <h2 className="text-lg font-bold text-gray-800 tracking-tight">
                <Link href={project.href}>{project.title}</Link>
              </h2>
              <span className="text-gray-500">{project.date}</span>
              <p className="text-gray-600 text-sm sm:text-base">
                {project.description}
              </p>

              <div>
                <Link
                  href={project.href}
                  className="text-gray-600 border-b-1 border-gray-800 text-base"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
