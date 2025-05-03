import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ContactCard } from "../contact/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work - Oliver Benns",
  description: "Full stack software engineer",
};

export default function Work() {
  return (
    <main className="py-6 sm:py-12 flex flex-col gap-6 sm:gap-12">
      <h1 className="sr-only">Work</h1>
      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
        <p className="text-gray-600">
          I've worked with a range of companies, from startups to established
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <Link
          href="/work/property-track"
          className={`w-full flex flex-row sm:flex-col gap-4 sm:gap-6 border border-gray-200 rounded-2xl shadow-xs overflow-hidden`}
        >
          <Image
            src="/property-track/banner.png"
            alt="Property Track Logo"
            width={1200}
            height={630}
          />
        </Link>
        <Link
          href="/work/elwood"
          className={`w-full flex flex-row sm:flex-col gap-4 sm:gap-6 border border-gray-200 rounded-2xl shadow-xs overflow-hidden`}
        >
          <Image
            src="/elwood/banner.png"
            alt="Elwood Logo"
            width={1200}
            height={630}
          />
        </Link>
        <Link
          href="/work/countingup"
          className={`w-full flex flex-row sm:flex-col gap-4 sm:gap-6 border border-gray-200 rounded-2xl shadow-xs overflow-hidden  `}
        >
          <Image
            src="/countingup/banner.png"
            alt="Countingup Logo"
            width={1200}
            height={630}
          />
        </Link>
        <Link
          href="/work/general-assembly"
          className={`w-full flex flex-row sm:flex-col gap-4 sm:gap-6 border border-gray-200 rounded-2xl shadow-xs overflow-hidden`}
        >
          <Image
            src="/general-assembly/banner.png"
            alt="General Assembly Logo"
            width={1200}
            height={630}
          />
        </Link>
      </div>

      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
        <p className="text-gray-600">
          Here are some small open source projects I've worked on.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <ContactCard
          href="https://oliverbenns.github.io/joy-theme-creator"
          icon={<FaGithub />}
          label="Joy Theme Creator"
          id="github"
          description="oliverbenns"
        />
        <ContactCard
          href="https://oliverbenns.github.io/uk-housing-developments"
          icon={<FaGithub />}
          label="UK Developments"
          id="github"
          description="oliverbenns"
        />
        <ContactCard
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
