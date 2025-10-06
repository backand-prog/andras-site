// app/sitemap.ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://andras-back.vercel.app';
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
  ];
}

