import Image from "next/image";

import { Map } from "@/app/components/map";
import { TechCard } from "@/app/components/tech-card";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Oliver Benns, a full stack software engineer for early stage startups.",
};

// Map coordinates for Bangkok
const long = 100.534544;
const lat = 13.745597;
const zoom = 11.75;

export default function About() {
  return (
    <main className="py-6 sm:py-12 flex flex-col gap-6 sm:gap-12">
      <h1 className="sr-only">About</h1>
      <Image
        src="/profile.jpg"
        alt="Oliver Benns"
        className="rounded-lg w-full"
        width={1400}
        height={933}
        priority
      />

      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-tight text-pretty">
          Hello
        </h2>

        <p className="text-gray-600 text-lg">
          I'm a freelance full stack software engineer with 12 years of
          experience. I really enjoy working with fast-paced startups where I
          can ship with speed and deliver value.
        </p>

        <p className="text-gray-600 text-lg">
          I bring a no-nonsense, minimalist engineering approach with full stack
          capabilities. My expertise in backend systems, frontend development,
          and visual design allows me to deliver complete solutions without
          unnecessary complexity - exactly what fast-moving companies need.
        </p>
        <div className="mt-2">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-md text-base text-white bg-gray-800 hover:bg-gray-950 transition-colors"
          >
            Hire me
          </Link>
        </div>
      </div>

      <div className="w-full border border-gray-200 rounded-4xl shadow-xs aspect-video overflow-hidden">
        <Map long={long} lat={lat} zoom={zoom} />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
          Status
        </h2>
        <p className="text-gray-600 text-lg">
          After years of building solutions for companies in employment, I've
          recently transitioned to freelance work and personal projects where I
          can use my expertise directly and drive impact fast.
        </p>
        <p className="text-gray-600 text-lg">
          I'm currently based in Bangkok and work remotely for clients
          worldwide.
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
          Tech Stack
        </h2>

        <p className="text-gray-600 text-lg">
          My diverse background has taught me to be ruthlessly pragmatic -
          selecting the right tool for the right job. Whilst I adapt quickly to
          any tech stack, my go-to technologies include:
        </p>

        <ul className="flex flex-wrap mt-2 gap-2 w-full">
          <li>
            <TechCard id="react" />
          </li>
          <li>
            <TechCard id="typescript" />
          </li>
          <li>
            <TechCard id="reactNative" />
          </li>
          <li>
            <TechCard id="go" />
          </li>
          <li>
            <TechCard id="node" />
          </li>
          <li>
            <TechCard id="postgresql" />
          </li>
          <li>
            <TechCard id="docker" />
          </li>
        </ul>
      </div>
    </main>
  );
}
