import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Projects and work from Oliver Benns, a full stack software engineer for early stage startups.",
};

const projects = [
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
      "Student platform enabling students to access coursework and complete assessments.",
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
          organisations across a variety of industries.
        </p>
        <p className="text-gray-600">
          With my transition to freelance being recent, the work below mostly
          represents projects from previous employments.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-1 gap-4 sm:gap-8 w-full sm:w-sm mx-auto">
        {projects.map((project, idx) => (
          <div
            className={`w-full flex flex-col sm:flex-row gap-4 sm:gap-6 overflow-hidden items-center`}
            key={project.href}
          >
            <Link href={project.href} className="w-full sm:w-1/3">
              <Image
                src={project.image}
                alt={project.title}
                width={project.imageWidth}
                height={project.imageHeight}
                className="rounded-lg aspect-square object-cover"
              />
            </Link>
            <div className="flex flex-col gap-1 w-full sm:w-2/3">
              <h2 className="text-sm font-bold text-gray-800">
                <Link href={project.href}>{project.title}</Link>
              </h2>
              <span className="text-xs text-gray-500">{project.date}</span>
              <p className="text-gray-600 text-sm hidden sm:block text-xs">
                {project.description}
              </p>

              <div>
                <Link
                  href={project.href}
                  className="text-gray-600 border-b-1 border-gray-800 text-sm text-xs"
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* 
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
      </div> */}
    </main>
  );
}
