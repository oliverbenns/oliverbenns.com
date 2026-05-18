import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
  FaXTwitter,
} from "react-icons/fa6";

import type { Metadata } from "next";
import { IconCard } from "../components/icon-card";
import { META_DESCRIPTION_BODY } from "../metadata";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Oliver Benns, ${META_DESCRIPTION_BODY}`,
};

export default function Contact() {
  return (
    <main className="py-6 sm:py-12 flex flex-col gap-6 sm:gap-12">
      <h1 className="sr-only">Contact</h1>
      <div className="flex flex-col gap-4 w-full">
        <p className="text-gray-600 text-lg">
          I'm currently available for new projects.
        </p>

        <p className="text-gray-600 text-lg">
          If you'd like to work together,{" "}
          <a
            href="mailto:oliver@benns.co"
            className="text-gray-600 border-b-1 border-gray-800"
          >
            email me
          </a>{" "}
          a short note on what you're building and your rough timeline.
        </p>
      </div>

      <div>
        <div className="flex gap-2 flex-col sm:flex-row">
          <IconCard
            id="email"
            href="mailto:oliver@benns.co"
            icon={<FaRegEnvelope title="Email" />}
            label="Email"
            description="oliver@benns.co"
          />
          <IconCard
            id="linkedin"
            href="https://www.linkedin.com/in/oliverbenns/"
            icon={<FaLinkedinIn title="LinkedIn" />}
            label="LinkedIn"
            description="oliverbenns"
          />
        </div>
        <div className="flex gap-2 mt-2 flex-col sm:flex-row">
          <IconCard
            id="github"
            href="https://github.com/oliverbenns"
            icon={<FaGithub title="GitHub" />}
            label="GitHub"
            description="oliverbenns"
          />
          <IconCard
            id="instagram"
            href="https://www.instagram.com/oliverbenns/"
            icon={<FaInstagram title="Instagram" />}
            label="Instagram"
            description="oliverbenns"
          />
          <IconCard
            id="x"
            href="https://x.com/oliverbenns"
            icon={<FaXTwitter title="X (Twitter)" />}
            label="X (Twitter)"
            description="oliverbenns"
          />
        </div>
      </div>
    </main>
  );
}
