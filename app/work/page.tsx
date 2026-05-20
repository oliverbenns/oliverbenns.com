import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { META_DESCRIPTION_BODY } from "../metadata";
import { metadata as bermudaCommercialBankMetadata } from "./bermuda-commercial-bank/page";
import { metadata as countingupMetadata } from "./countingup/page";
import { metadata as elwoodMetadata } from "./elwood/page";
import { metadata as generalAssemblyMetadata } from "./general-assembly/page";
import { metadata as hedgeUIMetadata } from "./hedge-ui/page";
import { metadata as propertyTrackMetadata } from "./property-track/page";

export const metadata: Metadata = {
  title: "Work",
  description: `Work by Oliver Benns, ${META_DESCRIPTION_BODY}`,
};

const projects = [
  {
    title: "Bermuda Commercial Bank",
    description: bermudaCommercialBankMetadata.description,
    date: "2025 - 2026",
    href: "/work/bermuda-commercial-bank",
    image: "/bermuda-commercial-bank/banner.png",
    imageWidth: 1200,
    imageHeight: 630,
  },
  {
    title: "Hedge UI",
    description: hedgeUIMetadata.description,
    date: "2025 - Present",
    href: "/work/hedge-ui",
    image: "/hedge-ui/banner.png",
    imageWidth: 1200,
    imageHeight: 630,
  },
  {
    title: "Property Track",
    description: propertyTrackMetadata.description,
    date: "2023 - Present",
    href: "/work/property-track",
    image: "/property-track/banner.png",
    imageWidth: 1200,
    imageHeight: 630,
  },
  {
    title: "Elwood",
    description: elwoodMetadata.description,
    date: "2022 - 2025",
    href: "/work/elwood",
    image: "/elwood/banner.png",
    imageWidth: 1200,
    imageHeight: 630,
  },
  {
    title: "Countingup",
    description: countingupMetadata.description,
    date: "2020 - 2021",
    href: "/work/countingup",
    image: "/countingup/banner.png",
    imageWidth: 1200,
    imageHeight: 630,
  },
  {
    title: "General Assembly",
    description: generalAssemblyMetadata.description,
    date: "2018 - 2019",
    href: "/work/general-assembly",
    image: "/general-assembly/banner.png",
    imageWidth: 1200,
    imageHeight: 630,
  },
];

export default function Work() {
  return (
    <main className="py-6 sm:py-12 flex flex-col gap-6 sm:gap-12">
      <h1 className="sr-only">Work</h1>
      <div className="flex flex-col gap-4">
        <p className="text-gray-600 text-lg">
          Twelve years across fintech, banking and crypto, working with startups
          and established organisations. I take products from idea to
          production, solo or with a team.
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

      <div className="grid grid-cols-1 gap-4 sm:gap-8 w-full">
        {projects.map((project, idx) => (
          <div
            className={`w-full flex flex-row gap-4 sm:gap-6 overflow-hidden items-center`}
            key={project.href}
          >
            <Link href={project.href} className="w-2/5 shrink-0">
              <Image
                src={project.image}
                alt={project.title}
                width={project.imageWidth}
                height={project.imageHeight}
                className="rounded-lg aspect-[4/3] object-cover"
              />
            </Link>
            <div className="flex flex-col gap-1 w-3/5">
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
