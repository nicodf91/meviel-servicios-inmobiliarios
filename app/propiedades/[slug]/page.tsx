import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Bath,
  BedDouble,
  CarFront,
  CheckCircle2,
  MapPin,
  PhoneCall,
  Ruler,
} from "lucide-react";
import { Container } from "@/components/container";
import { PropertyCard } from "@/components/property-card";
import { PropertyGallery } from "@/components/property-gallery";
import { findPropertyBySlug, getSimilarProperties, properties } from "@/lib/data";
import { siteConfig } from "@/lib/metadata";
import { formatCurrency } from "@/lib/utils";

interface PropertyDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export function generateMetadata({ params }: PropertyDetailPageProps): Metadata {
  const property = findPropertyBySlug(params.slug);

  if (!property) {
    return {
      title: "Propiedad no encontrada",
    };
  }

  return {
    title: `${property.title} | ${siteConfig.shortName}`,
    description: property.description,
    alternates: {
      canonical: `${siteConfig.url}/propiedades/${property.slug}`,
    },
    openGraph: {
      title: property.title,
      description: property.description,
      type: "article",
      url: `${siteConfig.url}/propiedades/${property.slug}`,
      images: [
        {
          url: property.images[0],
          width: 1200,
          height: 700,
          alt: property.title,
        },
      ],
    },
  };
}

export default function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const property = findPropertyBySlug(params.slug);

  if (!property) {
    notFound();
  }

  const similarProperties = getSimilarProperties(property, 3);

  return (
    <section className="section-space pt-12">
      <Container>
        <div className="mb-8">
          <Link
            href="/propiedades"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-charcoal/75 transition-colors hover:text-brand-orange"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al listado de propiedades
          </Link>
        </div>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_330px]">
          <div className="space-y-8">
            <PropertyGallery title={property.title} images={property.images} />

            <article className="panel space-y-7 border-brand-gray/75 p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="chip">{property.operation}</span>
                <span className="chip">{property.type}</span>
                {property.featured ? (
                  <span className="rounded-full bg-brand-orange px-3 py-1 text-xs font-semibold text-brand-white">
                    Destacada
                  </span>
                ) : null}
                {property.isNew ? (
                  <span className="rounded-full bg-brand-red px-3 py-1 text-xs font-semibold text-brand-white">
                    Nuevo ingreso
                  </span>
                ) : null}
              </div>

              <div>
                <h1 className="text-3xl font-semibold leading-tight md:text-4xl">{property.title}</h1>
                <p className="mt-3 flex items-center gap-2 text-sm text-brand-charcoal/80">
                  <MapPin className="h-4 w-4" />
                  {property.address}
                </p>
              </div>

              <p className="text-4xl font-bold text-brand-orange md:text-[2.7rem]">
                {formatCurrency(property.price, property.currency)}
              </p>

              <div className="grid gap-3 sm:grid-cols-4">
                <div className="rounded-xl border border-brand-gray/80 bg-brand-warm/70 p-3">
                  <p className="text-xs text-brand-charcoal/70">Dormitorios</p>
                  <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
                    <BedDouble className="h-4 w-4 text-brand-orange" />
                    {property.bedrooms > 0 ? property.bedrooms : "N/A"}
                  </p>
                </div>
                <div className="rounded-xl border border-brand-gray/80 bg-brand-warm/70 p-3">
                  <p className="text-xs text-brand-charcoal/70">Baños</p>
                  <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
                    <Bath className="h-4 w-4 text-brand-orange" />
                    {property.bathrooms > 0 ? property.bathrooms : "N/A"}
                  </p>
                </div>
                <div className="rounded-xl border border-brand-gray/80 bg-brand-warm/70 p-3">
                  <p className="text-xs text-brand-charcoal/70">Superficie</p>
                  <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
                    <Ruler className="h-4 w-4 text-brand-orange" />
                    {property.areaM2} m2
                  </p>
                </div>
                <div className="rounded-xl border border-brand-gray/80 bg-brand-warm/70 p-3">
                  <p className="text-xs text-brand-charcoal/70">Cocheras</p>
                  <p className="mt-1 flex items-center gap-2 text-sm font-semibold">
                    <CarFront className="h-4 w-4 text-brand-orange" />
                    {property.garage > 0 ? property.garage : "N/A"}
                  </p>
                </div>
              </div>

              <p className="text-base text-brand-charcoal/85">{property.description}</p>
            </article>

            <article className="panel space-y-5 border-brand-gray/75 p-6 md:p-8">
              <h2 className="text-2xl font-semibold">Descripción completa</h2>
              <p className="text-brand-charcoal/85">{property.longDescription}</p>

              <div className="rounded-xl border border-brand-gray/80 bg-brand-warm/75 p-5">
                <h3 className="text-lg font-semibold">Coordiná una visita con asesoramiento profesional</h3>
                <p className="mt-2 text-sm text-brand-charcoal/75">
                  Recibí análisis de valor, comparables de mercado y asesoramiento profesional para decidir con criterio.
                </p>
                <Link href="/contacto" className="btn-primary mt-4">
                  Agendar visita
                </Link>
                <p className="mt-2 text-xs text-brand-charcoal/70">Te respondemos en menos de 24 h hábiles.</p>
              </div>
            </article>

            <article className="panel grid gap-7 border-brand-gray/75 p-6 md:grid-cols-2 md:p-8">
              <div>
                <h2 className="text-2xl font-semibold">Detalles técnicos</h2>
                <ul className="mt-4 space-y-3">
                  {property.technicalDetails.map((detail) => (
                    <li
                      key={detail.label}
                      className="flex items-start justify-between gap-3 border-b border-brand-gray/80 pb-2 text-sm"
                    >
                      <span className="text-brand-charcoal/75">{detail.label}</span>
                      <span className="font-medium text-brand-charcoal">{detail.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">Servicios</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {property.services.map((service) => (
                    <span key={service} className="chip">
                      {service}
                    </span>
                  ))}
                </div>

                <h3 className="mt-6 text-lg font-semibold">Características destacadas</h3>
                <ul className="mt-3 space-y-2">
                  {property.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-brand-charcoal/80">
                      <CheckCircle2 className="h-4 w-4 text-brand-orange" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="panel overflow-hidden p-2 sm:p-3">
              <iframe
                title={`Mapa de ${property.title}`}
                src={`https://www.google.com/maps?q=${property.mapQuery}&z=15&output=embed`}
                loading="lazy"
                className="h-[320px] w-full rounded-xl2 border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-4">
                <p className="text-sm text-brand-charcoal/80">
                  Ubicación referencial para orientar la búsqueda. Coordiná una visita para conocer la propiedad en detalle.
                </p>
              </div>
            </article>

            <article className="panel flex flex-col gap-4 bg-brand-charcoal p-6 text-brand-white md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-brand-white">¿Querés avanzar con esta propiedad?</h2>
                <p className="mt-2 text-sm text-brand-white/80">
                  Hablemos hoy mismo y definimos estrategia de compra, reserva o inversión.
                </p>
              </div>
              <Link href="/contacto" className="btn-primary">
                Quiero asesoramiento sobre esta propiedad
              </Link>
            </article>

            {similarProperties.length ? (
              <section>
                <h2 className="mb-5 text-2xl font-semibold">Propiedades similares</h2>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {similarProperties.map((similar) => (
                    <PropertyCard key={similar.id} property={similar} buttonVariant="outline" />
                  ))}
                </div>
              </section>
            ) : null}
          </div>

          <aside className="space-y-5 xl:sticky xl:top-[130px] xl:h-fit">
            <article className="panel space-y-4 border-brand-gray/75 p-5">
              <h3 className="text-xl font-semibold">Agendá una visita</h3>
              <p className="text-sm text-brand-charcoal/75">
                Coordiná día y horario para conocer la propiedad con asesoramiento profesional en cada paso.
              </p>

              <Link
                href="https://wa.me/5493515550101?text=Hola,%20me%20interesa%20esta%20propiedad."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
              >
                Hablar por WhatsApp
              </Link>

              <Link href="/contacto" className="btn-primary w-full">
                Agendar visita
              </Link>

              <p className="text-xs text-brand-charcoal/70">Te respondemos en menos de 24 h hábiles.</p>
            </article>

            <article className="panel space-y-2 border-brand-gray/75 p-5">
              <h3 className="text-base font-semibold">Atención directa</h3>
              <p className="flex items-center gap-2 text-sm text-brand-charcoal/80">
                <PhoneCall className="h-4 w-4 text-brand-orange" />
                +54 9 351 555 0101
              </p>
            </article>
          </aside>
        </div>
      </Container>
    </section>
  );
}
