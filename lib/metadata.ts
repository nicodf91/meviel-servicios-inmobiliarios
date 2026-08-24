import { Metadata } from "next";

export const siteConfig = {
  name: "Meviel Servicios Inmobiliarios",
  shortName: "Meviel — demo",
  description:
    "Demo de portfolio inmobiliario con catálogo y formularios locales. Contenido, propiedades, identidad profesional y métricas ilustrativos.",
  url: "https://meviel-servicios-inmobiliarios.vercel.app",
};

export function buildMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = `${title} | ${siteConfig.shortName}`;
  return {
    title: fullTitle,
    description,
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      locale: "es_AR",
      type: "website",
    },
  };
}
