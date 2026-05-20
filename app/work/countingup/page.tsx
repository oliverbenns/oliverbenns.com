import { ExpandableImage } from "@/app/components/expandable-image";
import { TechCard } from "@/app/components/tech-card";
import type { Metadata } from "next";
import Image from "next/image";
import type { BreadcrumbList, CreativeWork, WithContext } from "schema-dts";
import { AUTHOR_JSON_LD, BASE_URL, WORK_TITLE } from "@/app/metadata";

const title = "Countingup";
const description =
  "Business account app with integrated accounting and tax capabilities.";
const slug = "countingup";

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

export default function Countingup() {
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
          src="/countingup/banner.png"
          alt="Countingup Logo"
          className="rounded-lg w-full"
          width={1200}
          height={630}
        />
      </div>
      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          Countingup
        </h1>

        <p className="text-gray-600 text-lg">
          Countingup is a business current account with integrated accounting
          and tax capabilities. The app automates bookkeeping through its
          built-in accounting software.
        </p>

        <div>
          <a
            href="https://countingup.com"
            className="text-gray-600 border-b-1 border-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
      </div>

      <ExpandableImage
        src="/countingup/app-tax.png"
        alt="Countingup app showing tax features"
        className="rounded-lg mx-auto px-4"
        width={823}
        height={617}
      />
      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <p className="text-gray-600 text-lg">
          As a full stack engineer, I was responsible for the development of the
          core business offering - the mobile app. It offered a business current
          account with integrated accounting and tax capabilities.
        </p>

        <p className="text-gray-600 text-lg">
          One of the biggest projects I worked on was digital VAT returns. The
          UK government's Making Tax Digital initiative required our customers
          to submit their VAT returns to HMRC digitally. I built an integrated
          VAT solution that calculated, prepared, and submitted VAT returns
          directly to HMRC, significantly reducing administrative burden for our
          customers.
        </p>
      </div>
      <ExpandableImage
        src="/countingup/app-payment.png"
        alt="Countingup app showing payment options"
        className="rounded-lg mx-auto px-4"
        width={823}
        height={617}
      />

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <p className="text-gray-600 text-lg">
          After the VAT solution was launched, I tackled our clients' biggest
          frustration: payment collection. By developing a shareable payment
          link system powered by Stripe, we eliminated cumbersome bank detail
          exchanges entirely. This solution dramatically accelerated the time to
          get paid by creating an easy to use payment experience for our
          customers' end clients.
        </p>
        <p className="text-gray-600 text-lg">
          By the end of 2021, the platform was serving over 40,000 UK small
          and medium businesses.
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
          <TechCard id="reactNative" />
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
          <TechCard id="terraform" />
        </li>
        <li>
          <TechCard id="aws" />
        </li>
      </ul>
    </main>
  );
}
