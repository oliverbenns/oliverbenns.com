import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { META_DESCRIPTION_BODY } from "../metadata";
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
      <div className="flex flex-col gap-4 w-full">
        <p className="text-gray-600 text-lg">
          I've worked with a range of companies, from startups to established
          organisations across a variety of industries.
        </p>
        <p className="text-gray-600 text-lg">
          With my transition to freelance being recent, the work below mostly
          represents projects from previous employments.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-8 w-full">
        {projects.map((project, idx) => (
          <div
            className={`w-full flex flex-col sm:flex-row gap-4 sm:gap-6 overflow-hidden items-center`}
            key={project.href}
          >
            <Link href={project.href} className="w-full sm:w-2/5">
              <Image
                src={project.image}
                alt={project.title}
                width={project.imageWidth}
                height={project.imageHeight}
                className="rounded-lg aspect-[4/3] object-cover"
              />
            </Link>
            <div className="flex flex-col gap-1 w-full sm:w-3/5">
              <h2 className="text-lg font-bold text-gray-800">
                <Link href={project.href}>{project.title}</Link>
              </h2>
              <span className="text-base text-gray-500">{project.date}</span>
              <p className="text-gray-600 text-base hidden sm:block">
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
      {/* 
      <div className="flex flex-col gap-4 w-full">
        <p className="text-gray-600">
          Here are some small open source projects I've worked on.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <IconCard
          href="https://oliverbenns.github.io/joy-theme-creator"
          icon={<FaGithub />}
          label="Joy Theme Creator"
          id="github"
          description="oliverbenns"
        />
        <IconCard
          href="https://oliverbenns.github.io/uk-housing-developments"
          icon={<FaGithub />}
          label="UK Developments"
          id="github"
          description="oliverbenns"
        />
        <IconCard
          href="https://github.com/oliverbenns/whatsapp-chatgpt"
          icon={<FaGithub />}
          label="WhatsApp ChatGPT"
          id="github"
          description="oliverbenns"
        />
      </div> */}
    </main>
  );
}
