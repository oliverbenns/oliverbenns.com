import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "Page not found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
          Not Found
        </h1>

        <p className="text-gray-600 text-lg">
          That page doesn't seem to be found.
        </p>
      </div>
    </div>
  );
}
