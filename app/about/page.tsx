import Image from "next/image";

import { Map } from "@/app/components/map";
import { TechCard } from "@/app/components/tech-card";
import { META_DESCRIPTION_BODY } from "@/app/metadata";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: `About Oliver Benns, ${META_DESCRIPTION_BODY}`,
};

// Map coordinates for Bangkok
const long = 100.534544;
const lat = 13.745597;
const zoom = 11.75;

export default function About() {
  return (
    <main className="py-6 sm:py-12 flex flex-col gap-6 sm:gap-12">
      <Image
        src="/profile.jpg"
        alt="Oliver Benns"
        className="rounded-lg w-full"
        width={1400}
        height={933}
        priority
      />

      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight text-pretty">
          Hello
        </h1>

        <p className="text-gray-600 text-lg">
          I'm a freelance full stack software engineer with 12 years of
          experience, working mostly with startups in fintech, banking and
          crypto.
        </p>

        <p className="text-gray-600 text-lg">
          Across backend, frontend, infrastructure and the design that connects
          them, I have a bias toward simple over clever. AI tooling lets me ship
          more in less time - the architecture, review and ownership stay with
          me.
        </p>
        <div className="my-4 flex items-center gap-4">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-md text-base text-white bg-gray-800 hover:bg-gray-950 transition-colors"
          >
            Get in touch
          </Link>
          <span className="text-sm text-gray-500 flex items-center gap-2">
            <span className="relative inline-flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-green-500"></span>
            </span>
            Available now
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">
          Working with me
        </h2>
        <p className="text-gray-600 text-lg">
          Most engagements start with a short scoping call to agree what we're
          building. From there, frequent video calls and regular demos keep us
          aligned - I work as a partner, not a contractor running on autopilot.
        </p>
        <p className="text-gray-600 text-lg">
          I take on new builds, push prototypes to production, or step in
          alongside existing teams when you need extra senior hands. Best fit is
          early or growth-stage teams that want senior engineering without the
          overhead of a full-time hire.
        </p>
      </div>

      <div className="w-full border border-gray-200 rounded-4xl shadow-xs aspect-video overflow-hidden">
        <Map long={long} lat={lat} zoom={zoom} />
      </div>

      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">
          Bangkok-based, clients worldwide
        </h2>
        <p className="text-gray-600 text-lg">
          I work remotely with clients across the UK, EU and US. My hours flex
          to overlap with yours, so calls and collaboration happen on your
          schedule. Outside those hours, progress continues - and someone has
          eyes on the systems while your team is offline. Happy to fly out for
          the moments that genuinely benefit from being in the room.
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">
          Tech Stack
        </h2>

        <p className="text-gray-600 text-lg">
          Tools I lean on most. I pick up new ones as projects demand.
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
