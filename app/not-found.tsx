import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 w-full sm:w-sm mx-auto">
        <h1 className="text-xl font-bold text-gray-800 leading-snug tracking-tight">
          Not Found
        </h1>

        <p className="text-gray-600">That page doesn't seem to be found.</p>
      </div>
    </div>
  );
}
