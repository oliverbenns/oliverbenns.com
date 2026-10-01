import Image from "next/image";

import { ExpandableImage } from "@/app/components/expandable-image";
import { TechCard } from "@/app/components/tech-card";
import type { Metadata } from "next";
import type { BreadcrumbList, CreativeWork, WithContext } from "schema-dts";
import { AUTHOR_JSON_LD, BASE_URL, WORK_TITLE } from "@/app/metadata";

const slug = "property-track";

export const metadata = {
  title: "Property Track",
  description:
    "Browser extension that adds asking price history to Rightmove listings, with Plus for comparables, recent sales and trends, and a London map and AI search.",
} satisfies Metadata;

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
      name: metadata.title,
      item: `${BASE_URL}/work/${slug}`,
    },
  ],
};

const creativeWorkJsonLd: WithContext<CreativeWork> = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: metadata.title,
  description: metadata.description,
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
          Property Track is a browser extension for Rightmove, the UK's largest
          property platform that hosts ~90% of all listings across England,
          Scotland, and Wales.
        </p>

        <div>
          <a
            href="https://www.propertytrack.co"
            className="text-gray-600 border-b-1 border-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
      </div>

      <div className="px-4">
        <ExpandableImage
          src="/property-track/price-history.png"
          alt="Widget injected onto Rightmove page"
          className="rounded-lg mx-auto"
          width={1074}
          height={987}
        />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <p className="text-gray-600 text-lg">
          The project began with my own house search experience, where I found
          myself frustrated with the lack of transparency on the pricing of
          listings.
        </p>
        <p className="text-gray-600 text-lg">
          So I built a solution that keeps track of asking price changes. The
          extension injects this data into Rightmove pages as a user browses for
          properties.
        </p>
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">
          London Map
        </h2>
        <p className="text-gray-600 text-lg">
          My property search concentrated on central London apartments and was a
          painful experience due to potentially high service charges, ground
          rent, and often limited living space.
        </p>
      </div>

      <div className="px-4">
        <ExpandableImage
          src="/property-track/selected-property.png"
          alt="Selected property on Property Track website"
          className="rounded-lg mx-auto"
          width={1094}
          height={742}
        />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
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

      <div className="px-4">
        <ExpandableImage
          src="/property-track/london-filters.png"
          alt="Filters on Property Track website"
          className="rounded-lg mx-auto"
          width={938}
          height={527}
        />
      </div>
      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <p className="text-gray-600 text-lg">
          So I added a London map to the Property Track website that extends
          these filters. It adds options for service charge, ground rent, floor
          size and tenure, while eliminating auction properties.
        </p>
        <p className="text-gray-600 text-lg">
          The prototype displays results in a map view with additional
          information such as price per square foot, parking and whether a
          garden exists without the user having to open each listing.
        </p>
        <p className="text-gray-600 text-lg">
          Rightmove has since responded to these complaints and added some of
          these filters.
        </p>

        <div>
          <a
            href="https://www.propertytrack.co/london/map"
            className="text-gray-600 border-b-1 border-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            View London map
          </a>
        </div>
      </div>

      <div className="px-4">
        <ExpandableImage
          src="/property-track/london-many.png"
          alt="Map view of London properties on Property Track website"
          className="rounded-lg mx-auto"
          width={1752}
          height={1314}
        />
      </div>

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
            href="https://www.propertytrack.co/london/ai-search"
            className="text-gray-600 border-b-1 border-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            View AI search
          </a>
        </div>
      </div>

      <div className="px-4">
        <ExpandableImage
          src="/property-track/ai-search.png"
          alt="AI search on Property Track returning listings for a natural language query"
          className="rounded-lg mx-auto"
          width={1524}
          height={1228}
        />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">Plus</h2>
        <p className="text-gray-600 text-lg">
          I assumed the data was the most valuable part of Property Track. But
          when I spoke to potential acquirers, every conversation went straight
          to the user base.
        </p>
        <p className="text-gray-600 text-lg">
          No deal was made, but it changed how I saw the project. If an engaged
          user base is what people value, it makes sense to build on it. So I
          added Plus, an optional subscription that helps a buyer judge whether
          a home is fairly priced, right on the listing.
        </p>
      </div>

      <div className="px-4">
        <ExpandableImage
          src="/property-track/plus-recent-sales-map.png"
          alt="Recent sales tab on a Rightmove listing showing sold prices nearby on a map"
          className="rounded-lg mx-auto"
          width={1522}
          height={1158}
        />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <p className="text-gray-600 text-lg">
          It adds three tabs beside the price history. Comparables shows similar
          homes for sale or to rent nearby. Recent sales shows what homes nearby
          actually sold for, from HM Land Registry. Trends shows sold prices and
          the number of sales in the area over time. Price history stays free.
        </p>

        <div>
          <a
            href="https://www.propertytrack.co/pricing"
            className="text-gray-600 border-b-1 border-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Plus
          </a>
        </div>
      </div>

      <div className="px-4">
        <ExpandableImage
          src="/property-track/plus-recent-sales-list.png"
          alt="Recent sales tab on a Rightmove listing listing each nearby sale with its date, type, floor area and price"
          className="rounded-lg mx-auto"
          width={1522}
          height={1110}
        />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <p className="text-gray-600 text-lg">
          Since October 2023, Property Track has tracked over 9m listings and 4m
          price changes. It has over 2,000 monthly active users.
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
        <li>
          <TechCard id="stripe" />
        </li>
      </ul>
    </main>
  );
}
