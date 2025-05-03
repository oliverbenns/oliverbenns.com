import Link from "next/link";

export default function Work() {
  return (
    <main className="py-6 sm:py-12">
      <h1 className="text-4xl font-bold">Work</h1>
      <ul>
        <li>
          <Link href="/work/property-track">Property Track</Link>
        </li>
        <li>
          <Link href="/work/elwood">Elwood</Link>
        </li>
        <li>
          <Link href="/work/countingup">Countingup</Link>
        </li>
        <li>
          <Link href="/work/general-assembly">General Assembly</Link>
        </li>
      </ul>
    </main>
  );
}
