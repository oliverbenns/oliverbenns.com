"use client";

import MapboxMap, { Marker } from "react-map-gl/mapbox";

import styles from "./map.module.css";

import "mapbox-gl/dist/mapbox-gl.css";

type MapProps = {
  long: number;
  lat: number;
  zoom: number;
};

export const Map = ({ long, lat, zoom }: MapProps) => {
  return (
    <div className={`relative w-full h-full ${styles.map}`}>
      <MapboxMap
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        longitude={long}
        latitude={lat}
        zoom={zoom}
      >
        <Marker
          longitude={long}
          latitude={lat}
          style={{ width: 28, height: 28 }}
        >
          <PulseMarker />
        </Marker>
      </MapboxMap>
      {/* Allows ability to page scroll with the map interrupting */}
      <div className="absolute top-0 left-0 w-full h-full opacity-0" />
    </div>
  );
};

const PulseMarker = () => {
  return (
    <div className={`relative h-full w-full ${styles.map}`}>
      <div
        className={`absolute left-1/2 top-1/2 rounded-full bg-[#679BFF] opacity-20 s-3 ${styles.markerPulse}`}
      />
      <div
        className={`relative flex h-full w-full items-center justify-center rounded-full bg-white ${styles.marker}`}
      >
        <div className="absolute inset-[3px] rounded-full bg-[#679BFF]"></div>
        <div
          className={`absolute inset-[3px] rounded-full ${styles.markerBorder}`}
        />
        <div className="absolute inset-[5px] rounded-full bg-[#679BFF]" />
      </div>
    </div>
  );
};
