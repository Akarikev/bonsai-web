import { MetadataRoute } from "next";
import { siteConfig } from "./metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/docs",
    "/roadmap",
    // "/docs/getting-started",
    // "/docs/api",
    // "/docs/examples",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
