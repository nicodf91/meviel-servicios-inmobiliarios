import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, ShieldCheck, UserCheck } from "lucide-react";
import { AnimatedCount } from "@/components/animated-count";
import { Container } from "@/components/container";
import { PropertyCard } from "@/components/property-card";
import { PropertySearchForm } from "@/components/property-search-form";
import { SectionHeading } from "@/components/section-heading";
import { developments, getFeaturedProperties, getInvestmentLots } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Inicio",
  description:
    "Demo de portfolio con catálogo inmobiliario ficticio, filtros, fichas y formularios sin envío.",
  path: "/",
});

const trustPillars = [
  {
    title: "Contenido de demostración",
    text: "La identidad, matrícula, propiedades y operaciones no se presentan como datos verificados.",
    icon: ShieldCheck,
  },
  {
    title: "Arquitectura con App Router",
    text: "Páginas estáticas, rutas dinámicas y componentes tipados para recorrer un catálogo local.",
    icon: Building2,
  },
  {
    title: "Formularios transparentes",
    text: "Validación local sin backend, persistencia, agenda ni promesas de contacto.",
    icon: UserCheck,
  },
];

const heroStats = [
  { label: "Fichas demo", value: 9, prefix: "", suffix: "", delayMs: 0 },
  { label: "Backends", value: 0, prefix: "", suffix: "", delayMs: 90 },
  { label: "Datos reales", value: 0, prefix: "", suffix: "", delayMs: 180 },
];

export default function HomePage() {
  const featuredProperties = getFeaturedProperties(3);
  const investmentLots = getInvestmentLots(2);
  const featuredDevelopments = developments.slice(0, 2);

  return (
    <>
      <section className="section-space pb-12 pt-12 md:pt-16">
        <Container>
          <div className="relative min-h-[580px] overflow-hidden rounded-[30px] border border-brand-gray/80 shadow-soft md:min-h-[640px] lg:min-h-[680px]">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=80"
              alt="Casa moderna con diseño arquitectónico"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/82 via-brand-charcoal/64 to-brand-charcoal/38" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/72 via-brand-charcoal/15 to-transparent" />

            <div className="relative z-10 px-5 pb-7 pt-9 sm:px-8 md:px-10 md:pb-10 md:pt-12 lg:px-12">
              <div className="mx-auto max-w-[1080px]">
                <h1 className="mt-1 max-w-4xl rounded-xl border border-brand-white/20 bg-brand-charcoal/55 px-4 py-3 text-[2.35rem] font-semibold leading-[1.08] text-brand-white shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-[2px] md:text-[3rem] lg:text-[3.35rem]">
                  {`Explorá una experiencia inmobiliaria construida como demo frontend.`}
                </h1>

                <div className="mt-10 max-w-[1020px] md:mt-12">
                  <PropertySearchForm variant="hero" />
                </div>

                <div className="mt-7 mx-auto grid w-full max-w-3xl grid-cols-3 gap-3 text-brand-white">
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex min-h-[92px] flex-col items-center justify-center rounded-xl border border-brand-white/20 bg-brand-charcoal/35 p-4 text-center backdrop-blur"
                    >
                      <p className="text-2xl font-bold leading-none md:text-[1.75rem]">
                        <AnimatedCount
                          value={stat.value}
                          prefix={stat.prefix}
                          suffix={stat.suffix}
                          delayMs={stat.delayMs}
                        />
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-[0.12em] text-brand-white/80">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space bg-brand-warm/70 py-14">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {trustPillars.map((pillar) => (
              <article key={pillar.title} className="panel p-6">
                <pillar.icon className="h-7 w-7 text-brand-orange" />
                <h2 className="mt-4 text-xl font-semibold">{pillar.title}</h2>
                <p className="mt-2 text-sm text-brand-charcoal/75">{pillar.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <SectionHeading
            eyebrow="Selección destacada"
            title="Propiedades Destacadas"
            description="Oportunidades seleccionadas por ubicación, calidad constructiva y potencial de inversión."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space bg-brand-warm/60">
        <Container>
          <SectionHeading
            eyebrow="Inversión inmobiliaria"
            title="Lotes y Terrenos Premium"
            description="Opciones con alto potencial de valorización para desarrollar, resguardar capital o planificar tu próximo proyecto."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {investmentLots.map((lot) => (
              <article key={lot.id} className="panel overflow-hidden md:grid md:grid-cols-[1.1fr_1fr]">
                <Image
                  src={lot.images[0]}
                  alt={lot.title}
                  width={900}
                  height={680}
                  className="h-64 w-full object-cover"
                />
                <div className="p-6">
                  <span className="chip">{lot.zone}</span>
                  <h3 className="mt-3 text-2xl font-semibold">{lot.title}</h3>
                  <p className="mt-3 text-sm text-brand-charcoal/80">{lot.description}</p>
                  <p className="mt-4 text-xl font-bold text-brand-orange">
                    {new Intl.NumberFormat("es-AR", {
                      style: "currency",
                      currency: lot.currency,
                      maximumFractionDigits: 0,
                    }).format(lot.price)}
                  </p>
                  <Link href={`/propiedades/${lot.slug}`} className="btn-outline-orange mt-5">
                    Ver ficha completa
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space">
        <Container>
          <SectionHeading
            eyebrow="Ecosistema Meviel"
            title="Desarrollos propios"
            description="Tarjetas ficticias para demostrar la presentación de desarrollos; no representan proyectos u ofertas activas."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {featuredDevelopments.map((development) => (
              <article key={development.id} className="panel overflow-hidden">
                <Image
                  src={development.image}
                  alt={development.name}
                  width={1100}
                  height={680}
                  className="h-56 w-full object-cover"
                />
                <div className="space-y-4 p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="chip">{development.zone}</span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold text-brand-white ${
                        development.stage === "En construcción" ? "bg-brand-orange" : "bg-brand-red"
                      }`}
                    >
                      {development.stage}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold">{development.name}</h3>
                  <p className="text-sm text-brand-charcoal/75">{development.summary}</p>
                  <p className="text-sm font-semibold text-brand-charcoal">{development.units}</p>
                  <Link href="/desarrollos-propios" className="btn-outline-orange">
                    Ver desarrollo
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-space bg-brand-warm">
        <Container>
          <div className="panel flex flex-col items-start justify-between gap-6 bg-brand-warm px-7 py-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold">
                ¿Querés vender tu propiedad con estrategia?
              </h2>
              <p className="mt-2 text-sm text-brand-charcoal/80">
                Tasación profesional y plan comercial con criterio técnico para vender mejor.
              </p>
            </div>
            <div>
              <Link href="/tasaciones" className="btn-primary">
                Tasá tu propiedad <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <p className="mt-2 text-xs text-brand-charcoal/70">
                Formulario local sin envío ni respuesta posterior.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-space pt-10">
        <Container>
          <div className="panel grid gap-6 bg-brand-charcoal p-8 text-brand-white md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-brand-white">
                Agendá una reunión de asesoramiento
              </h2>
              <p className="mt-2 text-sm text-brand-white/80">
                Resolvé dudas de compra, venta o inversión con acompañamiento profesional.
              </p>
            </div>
            <Link href="/contacto" className="btn-primary">
              Quiero asesoramiento <CheckCircle2 className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}


