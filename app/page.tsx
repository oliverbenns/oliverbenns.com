import Link from "next/link";

export default function Home() {
  return (
    <main className="py-24 flex-1 flex flex-col justify-center -mt-24">
      <div className="flex flex-col gap-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-tight text-pretty">
          Built well. Shipped fast.
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 leading-normal text-pretty">
          A full stack engineer with twelve years across fintech, banking and
          crypto. I take products from idea to production, solo or with a team.
        </p>

        <div className="flex gap-2">
          <Link
            href="/work"
            className="px-5 py-2.5 rounded-md text-base text-white bg-gray-800 hover:bg-gray-950 transition-colors"
          >
            View work
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-md text-base text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  );
}
