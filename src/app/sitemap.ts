import { MetadataRoute } from "next";
import { getAllComponentSlugs } from "@/lib/components-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://auralix-ui.netlify.app";
  const componentSlugs = getAllComponentSlugs();

  // Static routes
  const routes = [
    "",
    "/docs/introduction",
    "/docs/installation",
    "/docs/frameworks/nextjs",
    "/docs/frameworks/vite",
    "/docs/frameworks/laravel",
    "/docs/frameworks/cdn",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Component routes
  const componentRoutes = componentSlugs.map((slug) => ({
    url: `${baseUrl}/components/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...routes, ...componentRoutes];
}
