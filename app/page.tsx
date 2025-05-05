import Link from "next/link";

export default function Home() {
  return (
    <main className="py-24">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-gray-800 sm:leading-12 tracking-tight text-pretty">
          I'm a freelance full stack software engineer for early stage startups.
          Let's build.
        </h1>

        <div>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-md text-sm text-white bg-gray-800 hover:bg-gray-950 transition-colors"
          >
            Hire me
          </Link>
        </div>
      </div>
    </main>
  );
}
