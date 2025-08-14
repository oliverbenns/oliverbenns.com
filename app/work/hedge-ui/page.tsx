import Image from "next/image";

import { TechCard } from "@/app/components/tech-card";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hedge UI",
  description:
    "React starter kit for building high-quality, customisable trading apps.",
};

export default function HedgeUI() {
  return (
    <main className="py-6 sm:py-12 flex flex-col gap-6 sm:gap-12">
      <Image
        src="/hedge-ui/banner.png"
        alt="Hedge UI Logo"
        className="rounded-lg mx-auto"
        width={1200}
        height={630}
      />

      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
        <h1 className="text-xl font-bold text-gray-800 leading-snug tracking-tight">
          Hedge UI
        </h1>

        <p className="text-gray-600">
          Hedge UI is a React starter kit for building high-quality,
          customisable trading apps. It provides a set of components and
          utilities that can be used to build trading apps quickly and
          efficiently.
        </p>

        <div>
          <a
            href="https://www.hedgeui.com"
            className="text-gray-600 border-b-1 border-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
      </div>
      <Image
        src="/hedge-ui/main.png"
        alt="Hedge UI overview"
        className="rounded-lg mx-auto"
        width={2828}
        height={1768}
      />

      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
        <p className="text-gray-600">
          After working at{" "}
          <Link href="/work/elwood" className="border-b-1 border-gray-800">
            Elwood
          </Link>{" "}
          for a few years, it came to my attention that traders often have very
          similar needs for the trading applications they interact with, whether
          it be crypto, equities, derivatives, or other asset classes.
        </p>
        <p className="text-gray-600">
          Despite this, it seems that institutions are often building their own
          inhouse solutions, all of which with similar base features to their
          competitiors. This is wasteful as we are all reinventing the wheel and
          is becoming more apparent as more crypto companies enter the space.
        </p>
      </div>
      <video
        src="/hedge-ui/layout.mp4"
        autoPlay
        loop
        muted
        className="rounded-lg mx-auto"
        aria-label="Layout in Hedge UI"
      />

      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
        <p className="text-gray-600">
          With this in mind, I built a framework that allows institutions to get
          started with building their own trading applications quickly and
          efficiently. It is built with React and Typescript and is designed to
          be highly customisable and extensible.
        </p>
      </div>

      <Image
        src="/hedge-ui/color-theme.png"
        alt="Hedge UI color theme"
        className="rounded-lg mx-auto border-1 border-gray-200"
        width={1224}
        height={816}
      />

      <ul className="flex flex-wrap gap-2 w-full sm:w-sm mx-auto">
        <li>
          <TechCard id="react" />
        </li>
        <li>
          <TechCard id="typescript" />
        </li>
        <li>
          <TechCard id="nextjs" />
        </li>
        <li>
          <TechCard id="go" />
        </li>
        <li>
          <TechCard id="postgresql" />
        </li>
        <li>
          <TechCard id="docker" />
        </li>
        <li>
          <TechCard id="digitalocean" />
        </li>
      </ul>
    </main>
  );
}
