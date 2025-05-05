import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IconCard } from "@/app/components/icon-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - Oliver Benns",
  description: "Full stack software engineer",
};

const projects = [
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
      "Digital asset trading, portfolio and risk management platform for institutional investors.",
    date: "2022 - Present",
    href: "/work/elwood",
    image: "/elwood/banner.png",
    imageWidth: 1200,
    imageHeight: 630,
  },
  {
    title: "Countingup",
    description:
      "Business current account app with integrated accounting and tax capabilities.",
    date: "2020 - 2021",
    href: "/work/countingup",
    image: "/countingup/banner.png",
    imageWidth: 1200,
    imageHeight: 630,
  },
  {
    title: "General Assembly",
    description:
      "Student platform enabling users to access coursework and complete assessments.",
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
      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
        <h1 className="text-xl font-bold text-gray-800 leading-snug tracking-tight">
          Work
        </h1>
        <p className="text-gray-600">
          I've worked with a range of companies, from startups to established
          companies across a variety of industries. With my recent transition to
          freelancing, the work below represents projects from previous
          employment.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, idx) => (
          <Link
            href={project.href}
            className={`p-4 w-full flex flex-row gap-4 sm:gap-6 hover:bg-gray-50 border border-gray-200 rounded-2xl shadow-xs overflow-hidden items-center ${
              idx % 2 === 1 ? "flex-row-reverse" : ""
            }`}
            key={project.href}
          >
            <div className="flex flex-col gap-1 w-1/2">
              <h2 className="text-sm font-bold text-gray-800">
                {project.title}
              </h2>
              <span className="text-xs text-gray-500">{project.date}</span>
              <p className="text-gray-600 text-xs hidden sm:block">
                {project.description}
              </p>
            </div>
            <Image
              src={project.image}
              alt={project.title}
              width={project.imageWidth}
              height={project.imageHeight}
              className="rounded-lg w-1/2"
            />
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
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
      </div>
    </main>
  );
}
