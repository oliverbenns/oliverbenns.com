import Image from "next/image";

import { TechCard } from "@/app/components/tech-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Property Track",
  description:
    "Google Chrome extension for Rightmove, the UK's largest property platform.",
};

export default function PropertyTrack() {
  return (
    <main className="py-6 sm:py-12 flex flex-col gap-6 sm:gap-12">
      <Image
        src="/property-track/banner.png"
        alt="Property Track Logo"
        className="rounded-lg mx-auto"
        width={1200}
        height={630}
      />

      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
        <h1 className="text-xl font-bold text-gray-800 leading-snug tracking-tight">
          Property Track
        </h1>

        <p className="text-gray-600">
          Property Track is a Google Chrome extension for Rightmove, the UK's
          largest property platform that hosts ~90% of all properties across
          England, Scotland, and Wales.
        </p>

        <div>
          <a
            href="https://propertytrack.co"
            className="text-gray-600 border-b-1 border-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
      </div>

      <Image
        src="/property-track/price-history.png"
        alt="Widget injected onto Rightmove page"
        className="rounded-lg mx-auto"
        width={1074}
        height={987}
      />

      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
        <p className="text-gray-600">
          The project began with my own house search experience, where I found
          myself frustrated with the lack of transparency on the pricing of
          listings.
        </p>
        <p className="text-gray-600">
          So I built a solution that keeps track of asking price changes. The
          extension injects this data into Rightmove pages as a user browses for
          properties. It has over 1250 monthly active users.
        </p>
      </div>

      <Image
        src="/property-track/selected-property.png"
        alt="Selected property on Property Track website"
        className="rounded-lg mx-auto"
        width={1094}
        height={742}
      />

      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
        <h2 className="text-lg font-bold text-gray-800 leading-snug tracking-tight">
          London
        </h2>
        <p className="text-gray-600">
          My property search concentrated on central London apartments and was a
          painful experience due to potentially high service charges, ground
          rent, and often limited living space.
        </p>

        <p className="text-gray-600">
          Rightmove's basic filters forced me to open each listing to check if
          it met my criteria. When{" "}
          <a
            href="https://www.reddit.com/r/HousingUK/comments/1dvfza4/what_struggles_do_you_have_with_your_rightmove"
            className="border-b-1 border-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            I asked Reddit
          </a>{" "}
          about their struggles, they shared similar problems with tenure types
          and auction listings.
        </p>
      </div>

      <Image
        src="/property-track/london-filters.png"
        alt="Filters on Property Track website"
        className="rounded-lg mx-auto"
        width={938}
        height={527}
      />
      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
        <p className="text-gray-600">
          With this frustration, I built a website that extends these filters.
          It adds options for service charge, ground rent, floor size and
          tenure, while eliminating auction properties.
        </p>
        <p className="text-gray-600">
          The prototype displays results in a map view with additional
          information such as price per square foot, parking and whether a
          garden exists without the user having to open each listing.
        </p>
        <p className="text-gray-600">
          Since this project, Rightmove have responded to these user complains
          and added some of these filters mentioned above.
        </p>

        <div>
          <a
            href="https://propertytrack.co/london"
            className="text-gray-600 border-b-1 border-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            View site
          </a>
        </div>
      </div>

      <Image
        src="/property-track/london-many.png"
        alt="Map view of London properties on Property Track website"
        className="rounded-lg mx-auto"
        width={1752}
        height={1314}
      />

      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
        <p className="text-gray-600">
          Since October 2023, Property Track has tracked over 4.5m listings and
          2m price changes.
        </p>

        <p className="text-gray-600">
          The project has led to serving market data for a commercial real
          estate agent, allowing them to understand market conditions as well as
          provide opportunities for lead generation.
        </p>
      </div>

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
