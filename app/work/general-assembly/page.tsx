import { TechCard } from "@/app/components/tech-card";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "General Assembly",
  description:
    "Student platform enabling access to coursework, assessments and awards.",
};

export default function GeneralAssembly() {
  return (
    <main className="py-6 sm:py-12 flex flex-col gap-6 sm:gap-12 max-w-3xl mx-auto w-full px-4">
      <Image
        src="/general-assembly/banner.png"
        alt="General Assembly Logo"
        className="rounded-lg mx-auto max-w-xl w-full"
        width={1200}
        height={630}
      />
      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          General Assembly
        </h1>

        <p className="text-gray-600 text-lg">
          General Assembly provides bootcamps and courses in technical skills
          like web development, data science, and UX/UI design with campuses
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

      <Image
        src="/general-assembly/all.jpg"
        alt="Overview of General Assembly UI"
        className="rounded-lg mx-auto"
        width={1920}
        height={1777}
      />

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto">
        <p className="text-gray-600 text-lg">
          As a frontend engineer, I developed MyGA, General Assembly's
          comprehensive student portal that enabled users to access coursework,
          complete assessments, and track achievements.
        </p>

        <p className="text-gray-600 text-lg">
          The student portal featured diverse interactive learning modules
          including code assessments, multiple-choice questions, ordering
          quizzes, videos and word matching exercises. At the time, the platform
          served students across 20+ campuses in 6 countries, along with 300+
          Fortune 500 clients using it to upskill their teams.
        </p>
      </div>

      <Image
        src="/general-assembly/course-intro.png"
        alt="Course intro page on MyGA"
        className="rounded-lg mx-auto"
        width={2096}
        height={1394}
      />

      <Image
        src="/general-assembly/course.png"
        alt="Course page on MyGA"
        className="rounded-lg mx-auto"
        width={1680}
        height={916}
      />

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto">
        <p className="text-gray-600 text-lg">
          Whilst building out MyGA, we found that we lacked some consistency in
          our design approach and branding. Working closely with the design
          team, I built Cog, a component library that created a consistent brand
          and direction for the look and feel of our software.
        </p>

        <p className="text-gray-600 text-lg">
          This design system was adopted across many of General Assembly’s
          stack, establishing cohesive visual identity and improving development
          efficiency.
        </p>
      </div>

      <Image
        src="/general-assembly/cog-intro.png"
        alt="Cog intro page"
        className="rounded-lg mx-auto"
        width={2102}
        height={1396}
      />

      <Image
        src="/general-assembly/cog-feedback.png"
        alt="Cog component library"
        className="rounded-lg mx-auto"
        width={1600}
        height={1756}
      />

      <ul className="flex flex-wrap gap-2 w-full max-w-xl mx-auto">
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
