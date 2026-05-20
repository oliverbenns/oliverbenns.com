import Image from "next/image";

import { ExpandableImage } from "@/app/components/expandable-image";
import { TechCard } from "@/app/components/tech-card";
import type { Metadata } from "next";
import type { BreadcrumbList, CreativeWork, WithContext } from "schema-dts";
import { AUTHOR_JSON_LD, BASE_URL, WORK_TITLE } from "@/app/metadata";

const title = "Property Track";
const description =
  "Google Chrome extension for Rightmove, the UK's largest property platform.";
const slug = "property-track";

export const metadata: Metadata = { title, description };

const breadcrumbJsonLd: WithContext<BreadcrumbList> = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: WORK_TITLE,
      item: `${BASE_URL}/work`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: title,
      item: `${BASE_URL}/work/${slug}`,
    },
  ],
};

const creativeWorkJsonLd: WithContext<CreativeWork> = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: title,
  description,
  url: `${BASE_URL}/work/${slug}`,
  image: `${BASE_URL}/${slug}/banner.png`,
  author: AUTHOR_JSON_LD,
};

export default function PropertyTrack() {
  return (
    <main className="py-6 sm:py-12 flex flex-col gap-6 sm:gap-12 max-w-3xl mx-auto w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(creativeWorkJsonLd),
        }}
      />
      <div className="px-4 max-w-xl mx-auto w-full">
        <Image
          src="/property-track/banner.png"
          alt="Property Track Logo"
          className="rounded-lg w-full"
          width={1200}
          height={630}
          priority
        />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          Property Track
        </h1>

        <p className="text-gray-600 text-lg">
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

      <ExpandableImage
        src="/property-track/price-history.png"
        alt="Widget injected onto Rightmove page"
        className="rounded-lg mx-auto px-4"
        width={1074}
        height={987}
      />

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <p className="text-gray-600 text-lg">
          The project began with my own house search experience, where I found
          myself frustrated with the lack of transparency on the pricing of
          listings.
        </p>
        <p className="text-gray-600 text-lg">
          So I built a solution that keeps track of asking price changes. The
          extension injects this data into Rightmove pages as a user browses for
          properties. It has over 2000 monthly active users.
        </p>
      </div>

      <ExpandableImage
        src="/property-track/selected-property.png"
        alt="Selected property on Property Track website"
        className="rounded-lg mx-auto px-4"
        width={1094}
        height={742}
      />

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">
          London Map
        </h2>
        <p className="text-gray-600 text-lg">
          My property search concentrated on central London apartments and was a
          painful experience due to potentially high service charges, ground
          rent, and often limited living space.
        </p>

        <p className="text-gray-600 text-lg">
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

      <ExpandableImage
        src="/property-track/london-filters.png"
        alt="Filters on Property Track website"
        className="rounded-lg mx-auto px-4"
        width={938}
        height={527}
      />
      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <p className="text-gray-600 text-lg">
          With this frustration, I built a website that extends these filters.
          It adds options for service charge, ground rent, floor size and
          tenure, while eliminating auction properties.
        </p>
        <p className="text-gray-600 text-lg">
          The prototype displays results in a map view with additional
          information such as price per square foot, parking and whether a
          garden exists without the user having to open each listing.
        </p>
        <p className="text-gray-600 text-lg">
          Since this project, Rightmove have responded to these user complains
          and added some of these filters mentioned above.
        </p>

        <div>
          <a
            href="https://propertytrack.co/london/map"
            className="text-gray-600 border-b-1 border-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            View London map
          </a>
        </div>
      </div>

      <ExpandableImage
        src="/property-track/london-many.png"
        alt="Map view of London properties on Property Track website"
        className="rounded-lg mx-auto px-4"
        width={1752}
        height={1314}
      />

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">
          AI Search
        </h2>
        <p className="text-gray-600 text-lg">
          Building on the London site, I added an AI search as an experiment
          with natural language processing. Users can type queries like "2 bed
          flat in Bermondsey less than 750k" and get matching listings back,
          without having to think about filters or syntax.
        </p>
        <p className="text-gray-600 text-lg">
          The feature was a chance to explore how far a language model could
          replace a traditional search UI, and to ship something end to end
          using Claude Code.
        </p>

        <div>
          <a
            href="https://propertytrack.co/london/ai-search"
            className="text-gray-600 border-b-1 border-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            View AI search
          </a>
        </div>
      </div>

      <ExpandableImage
        src="/property-track/ai-search.png"
        alt="AI search on Property Track returning listings for a natural language query"
        className="rounded-lg mx-auto px-4"
        width={1524}
        height={1228}
      />

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <p className="text-gray-600 text-lg">
          Since October 2023, Property Track has tracked over 8m listings and
          2.4m price changes.
        </p>

        <p className="text-gray-600 text-lg">
          The project has led to serving market data for a commercial real
          estate agent, allowing them to understand market conditions as well as
          provide opportunities for lead generation.
        </p>
      </div>

      <ul className="flex flex-wrap gap-2 w-full max-w-xl mx-auto px-4">
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
