import type { MetadataRoute } from "next";

const BASE_URL = "https://www.oliverbenns.com";
const buildTime = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: buildTime },
    { url: `${BASE_URL}/about`, lastModified: buildTime },
    { url: `${BASE_URL}/work`, lastModified: buildTime },
    { url: `${BASE_URL}/contact`, lastModified: buildTime },
    {
      url: `${BASE_URL}/work/bermuda-commercial-bank`,
      lastModified: buildTime,
    },
    { url: `${BASE_URL}/work/hedge-ui`, lastModified: buildTime },
    { url: `${BASE_URL}/work/property-track`, lastModified: buildTime },
    { url: `${BASE_URL}/work/elwood`, lastModified: buildTime },
    { url: `${BASE_URL}/work/countingup`, lastModified: buildTime },
    { url: `${BASE_URL}/work/general-assembly`, lastModified: buildTime },
  ];
}
