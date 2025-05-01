"use client";

import Image from "next/image";

import { FaGolang, FaNodeJs, FaReact } from "react-icons/fa6";

import { BiLogoTypescript } from "react-icons/bi";
import { SiPostgresql } from "react-icons/si";
import Map, { AttributionControl, Marker } from "react-map-gl/mapbox";

import "mapbox-gl/dist/mapbox-gl.css";

import styles from "./styles.module.css";

// Map coordinates for London
const long = -0.11183162281793102;
const lat = 51.51125954616958;
const zoom = 12.1;

const _Map = () => {
  return (
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      initialViewState={{
        longitude: long,
        latitude: lat,
        zoom: zoom,
      }}
    >
      <Marker longitude={long} latitude={lat} style={{ width: 28, height: 28 }}>
        <PulseMarker />
      </Marker>
    </Map>
  );
};

export default function About() {
  return (
    <main className="pt-12">
      <div className="flex flex-col gap-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-gray-800 leading-snug tracking-tight">
              Hello!
            </h2>
            <p className="text-gray-600 text-sm">
              I’m a Full Stack Software Engineer with 12 years of experience. I
              really enjoy working with fast-paced startups where I can ship
              fast and deliver value.
            </p>

            <p className="text-gray-600 text-sm">
              I bring a no-nonsense, minimalist engineering approach with
              versatile full-stack capabilities. My expertise in backend
              systems, frontend development, and visual design allows me to
              deliver complete solutions without unnecessary complexity -
              exactly what fast-moving companies need.
            </p>
          </div>
          <Image
            src="/team-meeting.jpg"
            alt="Team collaborating on web development project"
            className="rounded-lg object-cover w-full h-full aspect-square"
            width={400}
            height={400}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="w-full border border-gray-200 rounded-4xl shadow-xs aspect-square overflow-hidden">
            <_Map />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-gray-800 leading-snug tracking-tight">
              Current Status
            </h2>
            <p className="text-gray-600 text-sm">
              After years of building solutions for companies, I'm now
              transitioning to freelance work and personal projects that allow
              me to make a direct impact for clients worldwide.
            </p>
            <p className="text-gray-600 text-sm">
              Currently based in London, I’ll be working from Bangkok in the
              second half of 2025 using remote work as a core strength,
              regardless of time zones.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-gray-800 leading-snug tracking-tight">
              Technology
            </h2>

            <p className="text-gray-600 text-sm">
              My diverse background has taught me to be ruthlessly pragmatic -
              selecting the right tool for the right job. Whilst I adapt quickly
              to any tech stack, my go-to technologies include:
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              <TechCard icon={<FaReact title="React" />} label="React" />
              <TechCard
                icon={<BiLogoTypescript title="Typescript" />}
                label="Typescript"
              />
              <TechCard
                icon={<FaReact title="React Native" />}
                label="React Native"
              />

              <TechCard icon={<FaNodeJs title="Node" />} label="Node" />
              <TechCard
                icon={<SiPostgresql title="PostgreSQL" />}
                label="PostgreSQL"
              />
            </div>
          </div>
          <Image
            src="/team-meeting.jpg"
            alt="Team collaborating on web development project"
            className="rounded-lg object-cover w-full h-full aspect-square"
            width={400}
            height={400}
          />
        </div>
      </div>
    </main>
  );
}

type TechCardProps = {
  icon: React.ReactNode;
  label: string;
};

const TechCard = ({ icon, label }: TechCardProps) => {
  return (
    <div className="py-1 px-2 flex gap-2 border border-gray-200 rounded-sm items-center">
      <div className="text-2xl w-[12px] h-[12px] flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-xs">{label}</span>
      </div>
    </div>
  );
};

const PulseMarker = () => {
  return (
    <div className="relative h-full w-full">
      <div
        className={`absolute left-1/2 top-1/2 rounded-full bg-[#679BFF] opacity-20 s-3 ${styles.markerPulse}`}
      ></div>
      <div
        className={`relative flex h-full w-full items-center justify-center rounded-full bg-white ${styles.marker}`}
      >
        <div className="absolute inset-[3px] rounded-full bg-[#679BFF]"></div>
        <div
          className={`absolute inset-[3px] rounded-full ${styles.markerBorder}`}
        ></div>
        <div className="absolute inset-[5px] rounded-full bg-[#679BFF]"></div>
      </div>
    </div>
  );
};
