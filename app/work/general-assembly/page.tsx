import { TechCard } from "@/app/components/tech-card";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "General Assembly - Oliver Benns",
  description: "Full stack software engineer",
};

export default function GeneralAssembly() {
  return (
    <main className="py-6 sm:py-12 flex flex-col gap-6 sm:gap-12">
      <Image
        src="/general-assembly/banner.png"
        alt="General Assembly Logo"
        className="rounded-lg mx-auto"
        width={1200}
        height={630}
      />
      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
        <h1 className="text-xl font-bold text-gray-800 leading-snug tracking-tight">
          General Assembly
        </h1>

        <p className="text-gray-600">
          General Assembly provides bootcamps and courses in tech skills like
          web development, data science, and UX/UI design with campuses
          worldwide.
        </p>

        <div>
          <a
            href="https://generalassemb.ly"
            className="text-gray-600 border-b-1 border-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
      </div>
      image here
      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
        <p className="text-gray-600">
          Hired as a frontend engineer, I worked on building MyGA, the portal
          for students to view their coursework, take assessments and view their
          awards.
        </p>
      </div>
      <ul className="flex flex-wrap  gap-2 w-full sm:w-sm mx-auto">
        <li>
          <TechCard id="react" />
        </li>
        <li>
          <TechCard id="typescript" />
        </li>
        <li>
          <TechCard id="ruby" />
        </li>
        <li>
          <TechCard id="mysql" />
        </li>
        <li>
          <TechCard id="heroku" />
        </li>
      </ul>
    </main>
  );
}
