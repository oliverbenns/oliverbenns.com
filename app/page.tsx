import Link from "next/link";
export default function Home() {
  return (
    <main className="py-24">
      <div className="flex flex-col gap-8">
        <h1 className="text-xl sm:text-4xl font-bold text-gray-800 sm:leading-12 tracking-tight text-pretty">
          I'm a Full Stack Software Engineer for early stage startups. Let's
          build.
        </h1>

        <div>
          <Link
            href="/contact"
            className="mt-4 px-4 py-2 text-gray-800 rounded-md border border-gray-800 text-sm hover:bg-gray-800 hover:text-white transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  );
}
