import Image from "next/image";
export default function PropertyTrack() {
  return (
    <main className="py-6 sm:py-12">
      <div className="flex flex-col gap-6 sm:gap-12 ">
        <Image
          src="/property-track/banner.png"
          alt="@TODO"
          className="rounded-lg object-cover mx-auto"
          width={1200}
          height={630}
        />

        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          <h1 className="text-xl font-bold text-gray-800 leading-snug tracking-tight">
            Property Track
          </h1>

          <p className="text-gray-600">
            Property Track is a Google Chrome extension for Rightmove, the UK's
            largest property platform that hosts and represents ~90% of all
            properties across England, Scotland, and Wales.
          </p>

          <div>
            <a
              href="https://propertytrack.co"
              className="text-gray-600 border-b-1 border-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
          </div>
        </div>

        <Image
          src="/property-track/price-history.png"
          alt="@TODO"
          className="rounded-lg object-cover mx-auto"
          width={1074}
          height={987}
        />

        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          <p className="text-gray-600">
            The project began with my own house search experience, where I found
            myself frustrated with the lack of transparency on the pricing of
            listings.
          </p>
          <p className="text-gray-600">
            So I built a solution that keeps track of asking price changes. This
            information is then injected into Rightmove pages as a user browses
            for properties. It has over 1250 monthly active users.
          </p>
        </div>
        <Image
          src="/property-track/selected-property.png"
          alt="@TODO"
          className="rounded-lg object-cover mx-auto"
          width={1094}
          height={742}
        />

        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          <h2 className="text-xl font-bold text-gray-800 leading-snug tracking-tight">
            London
          </h2>
          <p className="text-gray-600">
            My property search concentrated on central London. It was still
            painful experience.
          </p>
          <p className="text-gray-600">
            Central London primarily offers apartments. This was challenging due
            to potentially high service charges, ground rent, and often limited
            living space.
          </p>

          <p className="text-gray-600">
            Rightmove's basic filters forced me to open each listing to check if
            it met my criteria. When{" "}
            <a
              href="https://www.reddit.com/r/HousingUK/comments/1dvfza4/what_struggles_do_you_have_with_your_rightmove"
              className="border-b-1 border-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              I asked Reddit
            </a>{" "}
            about their struggles, they shared similar problems with tenure
            types and auction listings.
          </p>
        </div>

        <Image
          src="/property-track/london-filters.png"
          alt="@TODO"
          className="rounded-lg object-cover mx-auto"
          width={938}
          height={527}
        />
        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          <p className="text-gray-600">
            With this frustration, I built a website that extends Rightmove's
            filters. It adds options for service charge, ground rent, floor size
            and tenure, while eliminating auction properties.
          </p>
          <p className="text-gray-600">
            The prototype displays results in a map view with additional
            information such as price per square foot, parking and whether a
            garden exists, without the user having to open each listing.
          </p>

          <div>
            <a
              href="https://propertytrack.co/london"
              className="text-gray-600 border-b-1 border-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              View site
            </a>
          </div>
        </div>

        <Image
          src="/property-track/london-many.png"
          alt="@TODO"
          className="rounded-lg object-cover mx-auto"
          width={1752}
          height={1314}
        />

        <div className="flex flex-col gap-4 max-w-sm mx-auto">
          <p className="text-gray-600">
            Since October 2023, Property Track has tracked over xx listings and
            xx price changes.
          </p>

          <p className="text-gray-600">
            The market data has served a commercial real estate agent, allowing
            them to understand market conditions as well as provide
            opportunities for lead generation.
          </p>
        </div>
      </div>
    </main>
  );
}
