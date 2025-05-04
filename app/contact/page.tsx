import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
  FaXTwitter,
} from "react-icons/fa6";

import type { Metadata } from "next";
import { ContactCard } from "../components/contact-card";

export const metadata: Metadata = {
  title: "Contact - Oliver Benns",
  description: "Full stack software engineer",
};

export default function Contact() {
  return (
    <main className="py-6 sm:py-12">
      <h1 className="sr-only">Contact</h1>
      <div className="flex gap-2 flex-col sm:flex-row">
        <ContactCard
          id="email"
          href="mailto:oliver@benns.co"
          icon={<FaRegEnvelope title="Email" />}
          label="Email"
          description="oliver@benns.co"
        />
        <ContactCard
          id="linkedin"
          href="https://www.linkedin.com/in/oliverbenns/"
          icon={<FaLinkedinIn title="LinkedIn" />}
          label="LinkedIn"
          description="oliverbenns"
        />
      </div>
      <div className="flex gap-2 mt-2 flex-col sm:flex-row">
        <ContactCard
          id="github"
          href="https://github.com/oliverbenns"
          icon={<FaGithub title="GitHub" />}
          label="GitHub"
          description="oliverbenns"
        />
        <ContactCard
          id="instagram"
          href="https://www.instagram.com/oliverbenns/"
          icon={<FaInstagram title="Instagram" />}
          label="Instagram"
          description="oliverbenns"
        />
        <ContactCard
          id="x"
          href="https://x.com/oliverbenns"
          icon={<FaXTwitter title="X (Twitter)" />}
          label="X (Twitter)"
          description="oliverbenns"
        />
      </div>
    </main>
  );
}
