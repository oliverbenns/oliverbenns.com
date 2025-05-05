import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
  FaXTwitter,
} from "react-icons/fa6";

import type { Metadata } from "next";
import { IconCard } from "../components/icon-card";

export const metadata: Metadata = {
  title: "Contact - Oliver Benns",
  description: "Full stack software engineer",
};

export default function Contact() {
  return (
    <main className="py-6 sm:py-12 flex flex-col gap-6 sm:gap-12">
      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
        <h1 className="text-xl font-bold text-gray-800 leading-snug tracking-tight">
          Contact
        </h1>

        <p className="text-gray-600">
          Good news! I'm transitioning into freelance work and available for new
          projects.
        </p>

        <p className="text-gray-600">
          If you'd like to discuss how we can collaborate together, email me at{" "}
          <a
            href="mailto:oliver@benns.co"
            className="text-gray-600 border-b-1 border-gray-800"
          >
            oliver@benns.co
          </a>
          .
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
