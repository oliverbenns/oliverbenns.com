import type { MetadataRoute } from "next";
import { BASE_URL } from "./metadata";

// Hardcoded per page. Update the date whenever a page changes - see AGENTS.md.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: "2026-08-03" },
    { url: `${BASE_URL}/about`, lastModified: "2026-08-03" },
    { url: `${BASE_URL}/work`, lastModified: "2026-10-01" },
    { url: `${BASE_URL}/contact`, lastModified: "2026-08-03" },
    {
      url: `${BASE_URL}/work/mockchats`,
      lastModified: "2026-08-03",
    },
    {
      url: `${BASE_URL}/work/bermuda-commercial-bank`,
      lastModified: "2026-08-03",
    },
    { url: `${BASE_URL}/work/hedge-ui`, lastModified: "2026-08-03" },
    { url: `${BASE_URL}/work/property-track`, lastModified: "2026-08-06" },
    { url: `${BASE_URL}/work/elwood`, lastModified: "2026-08-03" },
    { url: `${BASE_URL}/work/countingup`, lastModified: "2026-08-03" },
    { url: `${BASE_URL}/work/general-assembly`, lastModified: "2026-08-03" },
  ];
}
