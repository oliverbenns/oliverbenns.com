"use client";

import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  const chunks = pathname.split("/");
  const first = chunks[1];

  return (
    <header className="flex justify-between items-center py-4 sm:py-12">
      <a
        href="/"
        className="text-gray-800 font-bold leading-snug tracking-tight"
      >
        <span>Oliver Benns</span>
      </a>
      <nav>
        <ul className="flex gap-4">
          <li>
            <a
              href="/about"
              className={`text-sm text-gray-800 hover:border-b-1 hover:border-gray-800 ${
                first === "about" ? "border-b-1 border-gray-800" : ""
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/work"
              className={`text-sm text-gray-800 hover:border-b-1 hover:border-gray-800 ${
                first === "work" ? "border-b-1 border-gray-800" : ""
              }`}
            >
              Work
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={`text-sm text-gray-800 hover:border-b-1 hover:border-gray-800 ${
                first === "contact" ? "border-b-1 border-gray-800" : ""
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
