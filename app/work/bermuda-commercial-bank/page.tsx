import Image from "next/image";

import { ExpandableImage } from "@/app/components/expandable-image";
import { MockDataCaption } from "@/app/components/mock-data-caption";
import { TechCard } from "@/app/components/tech-card";
import type { Metadata } from "next";
import type { BreadcrumbList, CreativeWork, WithContext } from "schema-dts";
import { AUTHOR_JSON_LD, BASE_URL, WORK_TITLE } from "@/app/metadata";

const title = "Bermuda Commercial Bank";
const description =
  "Corporate banking app for institutional and business clients.";
const slug = "bermuda-commercial-bank";

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

export default function BermudaCommercialBank() {
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
          src="/bermuda-commercial-bank/banner.png"
          alt="Bermuda Commercial Bank"
          className="rounded-lg w-full"
          width={1200}
          height={630}
          priority
        />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          Bermuda Commercial Bank
        </h1>

        <p className="text-gray-600 text-lg">
          Bermuda Commercial Bank engaged me to rebuild their corporate banking
          web application and internal management systems for their
          institutional and business clients.
        </p>
        <p className="text-gray-600 text-lg">
          I built the application and its API end to end as the sole engineer,
          taking it from zero to production with real users in four months.
        </p>
      </div>

      <figure className="px-4">
        <ExpandableImage
          src="/bermuda-commercial-bank/transactions.png"
          alt="Bermuda Commercial Bank transactions"
          className="rounded-lg mx-auto border-1 border-gray-200"
          width={3020}
          height={1683}
        />
        <MockDataCaption />
      </figure>

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <p className="text-gray-600 text-lg">
          The application replaced and simplified their existing legacy system,
          covering transaction history, reporting, moving money, requesting
          transfers and account management.
        </p>

        <p className="text-gray-600 text-lg">
          It also powered the bank's virtual account solution, allowing
          corporate clients to provision multi-currency sub-accounts for
          segregating customer funds, managing deposits and routing transfers
          through a controlled account hierarchy.
        </p>
      </div>

      <figure className="px-4">
        <ExpandableImage
          src="/bermuda-commercial-bank/virtual-accounts.png"
          alt="Bermuda Commercial Bank virtual accounts"
          className="rounded-lg mx-auto border-1 border-gray-200"
          width={3022}
          height={1607}
        />
        <MockDataCaption />
      </figure>

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <p className="text-gray-600 text-lg">
          A significant part of the work was migrating users off the legacy
          authentication system and APIs onto new ones. I took a pragmatic
          approach that let us ship quickly while setting the bank up for
          long-term success.
        </p>
        <p className="text-gray-600 text-lg">
          To support the new system, I also built an internal admin tool for
          bank staff to manage users, organisations and roles, so the bank could
          operate independently.
        </p>
      </div>

      <figure className="px-4">
        <ExpandableImage
          src="/bermuda-commercial-bank/profile-edit.png"
          alt="Bermuda Commercial Bank admin tool"
          className="rounded-lg mx-auto border-1 border-gray-200"
          width={2042}
          height={1492}
        />
        <MockDataCaption />
      </figure>

      <div className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4">
        <p className="text-gray-600 text-lg">
          Both applications were built with localisation and colour theming from
          the start, allowing the bank to adapt the experience for different
          audiences without further engineering.
        </p>
      </div>

      <figure className="px-4">
        <ExpandableImage
          src="/bermuda-commercial-bank/color-theme.png"
          alt="Bermuda Commercial Bank colour theming"
          className="rounded-lg mx-auto border-1 border-gray-200"
          width={2993}
          height={1676}
        />
        <MockDataCaption />
      </figure>

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
          <TechCard id="csharp" />
        </li>
        <li>
          <TechCard id="postgresql" />
        </li>
        <li>
          <TechCard id="docker" />
        </li>
        <li>
          <TechCard id="azure" />
        </li>
      </ul>
    </main>
  );
}
