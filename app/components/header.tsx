"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  const chunks = pathname.split("/");
  const first = chunks[1];

  return (
    <header className="flex justify-between items-center py-4 sm:py-8 max-w-xl mx-auto w-full px-4">
      <Link
        href="/"
        className="text-lg sm:text-xl text-gray-800 font-bold tracking-tight"
      >
        <span>Oliver Benns</span>
      </Link>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link
              href="/about"
              className={` text-gray-800 hover:border-b-1 hover:border-gray-800 ${
                first === "about" ? "border-b-1 border-gray-800" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/work"
              className={` text-gray-800 hover:border-b-1 hover:border-gray-800 ${
                first === "work" ? "border-b-1 border-gray-800" : ""
              }`}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={` text-gray-800 hover:border-b-1 hover:border-gray-800 ${
                first === "contact" ? "border-b-1 border-gray-800" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
