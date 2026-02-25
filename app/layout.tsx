import type { Metadata } from "next";
import { Cinzel, Montserrat, Source_Sans_3 } from "next/font/google";
import "@/app/globals.css";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/metadata";

const headingFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700", "800"],
});

const bodyFont = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const brandFont = Cinzel({
  subsets: ["latin"],
  variable: "--font-brand",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: [
    "inmobiliaria córdoba",
    "martillero público",
    "tasación inmobiliaria",
    "venta de propiedades",
    "alquileres córdoba",
    "Meviel",
  ],
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${brandFont.variable} site-shell-bg antialiased`}
      >
        <SiteHeader />
        <main className="min-h-screen pt-[86px] sm:pt-[92px]">{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
