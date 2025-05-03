import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa6";

import styles from "./styles.module.css";

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

type ContactCardProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  id: string;
  description: string;
};

export const ContactCard = ({
  href,
  icon,
  label,
  id,
  description,
}: ContactCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`p-3 sm:p-4 w-full flex flex-row sm:flex-col gap-4 sm:gap-6 border border-gray-200 rounded-2xl shadow-xs hover:bg-gray-50 items-center sm:items-start ${styles[id]} transition duration-300`}
    >
      <div
        className={`text-2xl w-[40px] h-[40px] flex items-center justify-center rounded-lg shadow-sm ${styles.icon}`}
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-gray-800">{label}</span>
        <span className="text-xs text-gray-500">{description}</span>
      </div>
    </a>
  );
};
