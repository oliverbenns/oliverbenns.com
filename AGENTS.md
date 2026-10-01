# Agent Rules

## Sitemap dates

`app/sitemap.ts` has a hardcoded `lastModified` date for every page.

Whenever you change a page, update that page's `lastModified` in `app/sitemap.ts` to today's date (`YYYY-MM-DD`).

- A change to a page includes its `page.tsx` and its images in `public/<slug>/`.
- Only update the pages that changed. Do not touch the dates of other pages.
- When adding a new page, add a sitemap entry for it with today's date.
