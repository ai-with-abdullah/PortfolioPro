import { posts } from "./blog/data";

const BASE_URL = "https://ai-with-abdullah.vercel.app";

// Fixed site launch date — use a stable date so sitemap doesn't change on every request
const SITE_UPDATED = "2026-05-13T00:00:00Z";

// ✅ Clean W3C timestamp — strip milliseconds, required by sitemap spec
const cleanDate = (date) =>
  new Date(date).toISOString().replace(/\.\d{3}Z$/, "Z");

export default function sitemap() {
  const staticPages = [
    {
      url: `${BASE_URL}/`,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/gulf-real-estate-ai`,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  const blogPages = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: cleanDate(post.lastUpdated || post.date),
    changeFrequency: "monthly",
    priority: post.slug === posts[0]?.slug ? 0.8 : 0.7,
  }));

  return [...staticPages, ...blogPages];
}