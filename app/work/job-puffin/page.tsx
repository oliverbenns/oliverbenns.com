import Image from "next/image";

import { ExpandableImage } from "@/app/components/expandable-image";
import { TechCard } from "@/app/components/tech-card";
import type { Metadata } from "next";
import type { BreadcrumbList, CreativeWork, WithContext } from "schema-dts";
import { AUTHOR_JSON_LD, BASE_URL, WORK_TITLE } from "@/app/metadata";

const slug = "job-puffin";

export const metadata = {
  title: "Job Puffin",
  description:
    "Web app and Chrome extension that uses AI to rate LinkedIn job posts against your CV. Send a whole search in one click, read the best fits first and track the ones worth pursuing in a pipeline.",
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

export default function JobPuffin() {
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
          src="/job-puffin/banner.png"
          alt="Job Puffin Logo"
          className="rounded-lg w-full"
          width={1200}
          height={630}
          priority
        />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          Job Puffin
        </h1>

        <p className="text-gray-600 text-lg">
          Job Puffin uses AI to rate LinkedIn job posts against your CV before
          you read them. The Chrome extension sends every posting from a LinkedIn
          search to an inbox, where each one is scored out of 100 against your
          profile and what you are looking for, so the time goes on the few
          worth applying for.
        </p>

        <div>
          <a
            href="https://www.jobpuffin.com"
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
          src="/job-puffin/home.png"
          alt="Job Puffin homepage with an example job assessment"
          className="rounded-lg mx-auto border-1 border-gray-200"
          width={2880}
          height={1484}
        />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <p className="text-gray-600 text-lg">
          A LinkedIn search returns hundreds of postings, and most of the time
          goes on reading each one only to find it is the wrong level, the wrong
          location or the wrong terms. Job Puffin does that reading first and
          puts the best fits at the top.
        </p>
      </div>

      <div className="px-4">
        <ExpandableImage
          src="/job-puffin/inbox.png"
          alt="Job Puffin inbox with job postings ranked by score"
          className="rounded-lg mx-auto border-1 border-gray-200"
          width={2880}
          height={1800}
        />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">
          Inbox
        </h2>
        <p className="text-gray-600 text-lg">
          The Chrome extension sits on LinkedIn's own jobs pages. One click
          sends every posting on the page, along with the people named on it,
          to the inbox. Jobs arrive unrated and are assessed in the background,
          then listed best first with anything that breaks a requirement moved
          below the rest.
        </p>
      </div>

      <div className="px-4">
        <ExpandableImage
          src="/job-puffin/assessment.png"
          alt="Job Puffin assessment with an overall score and scored criteria"
          className="rounded-lg mx-auto border-1 border-gray-200"
          width={2880}
          height={1800}
        />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">
          Assessments
        </h2>
        <p className="text-gray-600 text-lg">
          Each job is assessed by AI on seven criteria, from seniority and
          career direction to skills, evidence in the CV and working
          arrangement. The AI also writes the user's profile from an uploaded
          CV during onboarding. Every score comes with the sentence it followed
          from, so the user can weigh it and disagree with it. A must in the search that the posting
          contradicts is called out as a dealbreaker rather than averaged into
          the score, and each assessment ends with a recommendation on whether
          to apply and what to lead with.
        </p>
        <p className="text-gray-600 text-lg">
          Jobs worth pursuing move into a pipeline that tracks them from
          shortlist to offer, with notes along the way and an introduction to a
          contact on the posting drafted in the user's name. It never
          applies or sends anything on the user's behalf.
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
          <TechCard id="tanstack" />
        </li>
        <li>
          <TechCard id="node" />
        </li>
        <li>
          <TechCard id="postgresql" />
        </li>
        <li>
          <TechCard id="stripe" />
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
