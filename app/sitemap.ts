import { MetadataRoute } from "next";
import { properties } from "@/lib/data";
import { siteConfig } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/propiedades",
    "/tasaciones",
    "/desarrollos-propios",
    "/quienes-somos",
    "/mision-vision",
    "/contacto",
    "/faq",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const propertyEntries = properties.map((property) => ({
    url: `${siteConfig.url}/propiedades/${property.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...propertyEntries];
}
