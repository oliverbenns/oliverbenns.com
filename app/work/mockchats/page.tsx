import Image from "next/image";

import { ExpandableImage } from "@/app/components/expandable-image";
import { TechCard } from "@/app/components/tech-card";
import type { Metadata } from "next";
import type { BreadcrumbList, CreativeWork, WithContext } from "schema-dts";
import { AUTHOR_JSON_LD, BASE_URL, WORK_TITLE } from "@/app/metadata";

const slug = "mockchats";

export const metadata = {
  title: "MockChats",
  description:
    "Web app for creating realistic chat videos. Script a conversation, style it like a real messaging thread and export a vertical video for TikTok, Instagram Reels and YouTube Shorts.",
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

export default function MockChats() {
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
          src="/mockchats/banner.png"
          alt="MockChats Logo"
          className="rounded-lg w-full"
          width={1200}
          height={630}
          priority
        />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          MockChats
        </h1>

        <p className="text-gray-600 text-lg">
          MockChats is a web app for creating realistic chat videos. Creators
          script a conversation, style it like a real messaging thread, and
          export a vertical video ready for TikTok, Instagram Reels and YouTube
          Shorts.
        </p>

        <div>
          <a
            href="https://www.mockchats.com"
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
          src="/mockchats/home.png"
          alt="MockChats homepage with a chat video preview"
          className="rounded-lg mx-auto border-1 border-gray-200"
          width={2880}
          height={1566}
        />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <p className="text-gray-600 text-lg">
          The idea came from a friend who was producing chat story videos
          manually. Each one meant staging a conversation between two phones,
          capturing every message, then stitching it all together in a video
          editor. A single video took two to three hours to make.
        </p>
        <p className="text-gray-600 text-lg">
          They had tried generic chat UI generators, but the output never
          passed with viewers. Audiences recognise a real messaging app
          instantly, from the wallpaper to the read receipts, and a familiar
          conversation feels far more genuine than an invented interface. So
          MockChats replicates the real thing closely, down to typing
          indicators, voice notes and reactions.
        </p>
      </div>

      <div className="px-4">
        <ExpandableImage
          src="/mockchats/editor.png"
          alt="MockChats editor with message list and live phone preview"
          className="rounded-lg mx-auto border-1 border-gray-200"
          width={2880}
          height={1800}
        />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">
          Editor
        </h2>
        <p className="text-gray-600 text-lg">
          Chats are written in an editor alongside a live phone preview. Users
          set up the sender and receiver with names and avatars, reorder
          messages with drag and drop, and mix in images, reactions and voice
          notes. Playback speed and typing indicators control the pacing of the
          final video.
        </p>
        <p className="text-gray-600 text-lg">
          With the manual work gone, a video that took hours now takes around
          ten minutes, and most of that is spent writing a good script.
        </p>
      </div>

      <div className="px-4">
        <ExpandableImage
          src="/mockchats/exports.png"
          alt="MockChats exports page with a rendered chat video"
          className="rounded-lg mx-auto border-1 border-gray-200"
          width={2880}
          height={1800}
        />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">
          Exports and billing
        </h2>
        <p className="text-gray-600 text-lg">
          Exports are rendered server side into a retina sharp, phone framed
          video or image. Each export costs credits, with a monthly allowance
          set by the user's plan. Subscriptions are handled through Stripe,
          including upgrades with prorated payments and a customer portal for
          cancellations.
        </p>
      </div>

      <div className="px-4">
        <ExpandableImage
          src="/mockchats/pricing.png"
          alt="MockChats pricing plans"
          className="rounded-lg mx-auto border-1 border-gray-200"
          width={2560}
          height={1464}
        />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <p className="text-gray-600 text-lg">
          The project went from no code to a working MVP in one week - the
          editor, media exporting, Stripe billing, branding and the marketing
          site.
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
