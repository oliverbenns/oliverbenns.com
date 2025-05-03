import Image from "next/image";

export default function Countingup() {
  return (
    <main className="py-6 sm:py-12 flex flex-col gap-6 sm:gap-12">
      <Image
        src="/countingup/banner.png"
        alt="@TODO"
        className="rounded-lg mx-auto"
        width={1200}
        height={630}
      />
    </main>
  );
}
