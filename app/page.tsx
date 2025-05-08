import Link from "next/link";

export default function Home() {
  return (
    <main className="py-24">
      <h1 className="sr-only">Oliver Benns</h1>
      <div className="flex flex-col gap-8">
        <p className="text-4xl font-bold text-gray-800 sm:leading-12 tracking-tight text-pretty">
          I'm a full stack software engineer for early stage startups. Let’s
          build.
        </p>

        <div className="flex gap-2">
          <Link
            href="/contact"
            className="px-4 py-2 rounded-md text-sm text-white bg-gray-800 hover:bg-gray-950 transition-colors"
          >
            I'm ready
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 rounded-md text-sm text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            Learn more
          </Link>
        </div>
      </div>
    </main>
  );
}
