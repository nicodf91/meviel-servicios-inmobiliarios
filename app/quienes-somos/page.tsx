import Image from "next/image";
import Link from "next/link";
import { Building, HardHat, Handshake, ShieldCheck } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Quiénes Somos",
  description:
    "Sección institucional ficticia de una demo de portfolio inmobiliario.",
  path: "/quienes-somos",
});

const pillars = [
  {
    title: "Composición responsive",
    text: "Distribución adaptable de perfil, narrativa, acciones y tarjetas informativas.",
    icon: ShieldCheck,
  },
  {
    title: "Contenido estructurado",
    text: "Componentes tipados para separar presentación, navegación y datos de muestra.",
    icon: HardHat,
  },
  {
    title: "Alcance visible",
    text: "Avisos persistentes diferencian la interfaz de una operación inmobiliaria real.",
    icon: Handshake,
  },
  {
    title: "Uso de portfolio",
    text: "La marca y el perfil son parte de la narrativa visual; no acreditan identidad o experiencia.",
    icon: Building,
  },
];

export default function WhoWeArePage() {
  return (
    <section className="section-space pt-12">
      <Container>
        <SectionHeading
          eyebrow="Quiénes Somos"
          title="Quiénes Somos"
          description="Esta página demuestra un layout institucional. La identidad, la fotografía y la biografía son ilustrativas y no acreditan una habilitación profesional."
        />

        <div className="space-y-8">
          <div className="panel overflow-hidden">
            <div className="grid lg:grid-cols-[minmax(320px,420px)_1fr]">
              <figure className="relative min-h-[420px] bg-brand-warm">
                <Image
                  src="/brand/perfil-simon.png"
                  alt="Fotografía ilustrativa de un perfil inmobiliario"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/55 via-brand-charcoal/18 to-transparent" />
              </figure>

              <article className="space-y-8 px-6 py-8 md:px-10 md:py-10">
                <header className="border-b border-brand-gray/80 pb-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-charcoal/70">
                    Perfil institucional de muestra
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">
                    Sin identidad ni matrícula verificadas
                  </h2>
                </header>

                <div className="space-y-5 text-base leading-relaxed text-brand-charcoal/88 md:text-[1.05rem]">
                  <p>
                    El bloque representa cómo podría presentarse una marca inmobiliaria en un sitio
                    institucional. No describe una empresa operativa ni resultados reales.
                  </p>
                  <p>
                    Una versión productiva debería usar identidad, habilitación, dominio, contactos
                    y contenidos verificados por el titular antes de habilitar formularios o indexación.
                  </p>
                  <p>
                    En esta demo, las acciones conducen a formularios locales y deben probarse
                    únicamente con datos ficticios.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link href="/contacto" className="btn-primary">
                    Ver formulario demostrativo
                  </Link>
                  <p className="text-xs text-brand-charcoal/70">
                    No se envían datos ni se promete respuesta.
                  </p>
                </div>
              </article>
            </div>
          </div>

          <article className="panel p-8">
            <p className="max-w-4xl text-lg text-brand-charcoal/85">
              El objetivo de esta sección es mostrar jerarquía editorial, navegación y componentes
              reutilizables. Todo texto comercial requiere validación externa antes de publicarse.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-brand-gray/80 bg-brand-warm p-5"
                >
                  <pillar.icon className="h-6 w-6 text-brand-orange" aria-hidden />
                  <h2 className="mt-3 text-xl font-semibold">{pillar.title}</h2>
                  <p className="mt-2 text-sm text-brand-charcoal/80">{pillar.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-4xl text-base leading-relaxed text-brand-charcoal/85">
              El repositorio no aporta evidencia de clientes, operaciones, matrícula o trayectoria;
              por eso esta versión se declara únicamente como demo frontend de portfolio.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
