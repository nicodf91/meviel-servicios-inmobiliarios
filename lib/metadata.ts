import { Metadata } from "next";

export const siteConfig = {
  name: "Meviel Servicios Inmobiliarios",
  shortName: "Meviel Inmobiliaria",
  description:
    "Meviel Servicios Inmobiliarios. Martillero y Corredor Público e Inmobiliario, Matrícula N° 7788. Compra, venta, alquiler y tasaciones con respaldo constructivo.",
  url: "https://www.mevielinmobiliaria.com",
};

export function buildMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = `${title} | ${siteConfig.shortName}`;
  const canonicalUrl = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "es_AR",
      type: "website",
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}
