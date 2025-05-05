import { TechCard } from "@/app/components/tech-card";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Countingup - Oliver Benns | Full Stack Software Engineer",
  description:
    "Business current account app with integrated accounting and tax capabilities.",
};

export default function Countingup() {
  return (
    <main className="py-6 sm:py-12 flex flex-col gap-6 sm:gap-12">
      <Image
        src="/countingup/banner.png"
        alt="Countingup Logo"
        className="rounded-lg mx-auto"
        width={1200}
        height={630}
      />
      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
        <h1 className="text-xl font-bold text-gray-800 leading-snug tracking-tight">
          Countingup
        </h1>

        <p className="text-gray-600">
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

      <Image
        src="/countingup/app-tax.png"
        alt="Countingup app showing tax features"
        className="rounded-lg mx-auto"
        width={823}
        height={617}
      />
      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
        <p className="text-gray-600">
          As a full stack engineer, I was responsible for the development of the
          core business offering - the mobile app. It offered a business current
          account with integrated accounting and tax capabilities.
        </p>

        <p className="text-gray-600">
          One of the biggest projects I worked on was digital VAT returns. The
          UK government's Making Tax Digital initiative required our customers
          to submit their VAT returns to HMRC digitally. I built an integrated
          VAT solution that calculated, prepared, and submitted VAT returns
          directly to HMRC, significantly reducing administrative burden for our
          customers.
        </p>
      </div>
      <Image
        src="/countingup/app-payment.png"
        alt="Countingup app showing payment options"
        className="rounded-lg mx-auto"
        width={823}
        height={617}
      />

      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
        <p className="text-gray-600">
          After the VAT solution was launched, I tackled our clients' biggest
          frustration: payment collection. By developing a shareable payment
          link system powered by Stripe, we eliminated cumbersome bank detail
          exchanges entirely. This solution dramatically accelerated the time to
          get paid by creating an easy to use payment experience for our
          customers' end clients.
        </p>
      </div>

      <ul className="flex flex-wrap  gap-2 w-full sm:w-sm mx-auto">
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
