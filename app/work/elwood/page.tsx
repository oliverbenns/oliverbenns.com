import Image from "next/image";

import { TechCard } from "@/app/components/tech-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elwood - Oliver Benns | Full Stack Software Engineer",
  description:
    "Digital asset trading, portfolio and risk management platform for institutional investors.",
};

export default function Elwood() {
  return (
    <main className="py-6 sm:py-12 flex flex-col gap-6 sm:gap-12">
      <Image
        src="/elwood/banner.png"
        alt="Elwood Logo"
        className="rounded-lg mx-auto"
        width={1200}
        height={630}
      />

      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
        <h1 className="text-xl font-bold text-gray-800 leading-snug tracking-tight">
          Elwood
        </h1>

        <p className="text-gray-600">
          Elwood is a digital asset trading, portfolio and risk management
          platform for institutional investors.
        </p>

        <div>
          <a
            href="https://elwood.io"
            className="text-gray-600 border-b-1 border-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </div>
      </div>

      <Image
        src="/elwood/spreader.png"
        alt="Spreader Tool on Elwood"
        className="rounded-lg mx-auto"
        width={821}
        height={489}
      />

      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
        <p className="text-gray-600">
          As a full stack engineer, I had our web application adopt modern
          practices, implementing rapid component driven development at the
          height of the crypto market.
        </p>
        <p className="text-gray-600">
          Following FTX's collapse, market volatility decreased. During this
          time, I guided our team to embrace testing frameworks, static type
          checking, and continuous integration to create a more reliable product
          experience.
        </p>
        <p className="text-gray-600">
          With my standards of software being recognised, I transitioned to the
          market data team. Here, I lead the development of live pricing streams
          for thousands of instruments. The product delivered real-time ticks,
          trades, and order book data to allow our customers to make informed
          decisions in their execution strategies.
        </p>
      </div>
      <Image
        src="/elwood/ems.png"
        alt="Elwood EMS solution"
        className="rounded-lg mx-auto"
        width={1094}
        height={742}
      />

      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
        <p className="text-gray-600">
          With executions on the market picking up, we needed to improve our
          database performance to keep up with the demand. I optimised our
          database by implementing intelligent indexing and data partitioning.
          This dramatically improved response times for our most heavy users.
        </p>
        <p className="text-gray-600">
          Finally, with being one of the only full stack engineers, I delivered
          comprehensive end-to-end functionality on a variety of features across
          the stack.
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
          <TechCard id="go" />
        </li>
        <li>
          <TechCard id="postgresql" />
        </li>
        <li>
          <TechCard id="redis" />
        </li>
        <li>
          <TechCard id="docker" />
        </li>
        <li>
          <TechCard id="pulumi" />
        </li>
        <li>
          <TechCard id="gcp" />
        </li>
      </ul>
    </main>
  );
}
