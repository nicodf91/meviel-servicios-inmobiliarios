import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck, Target, Telescope } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Misión y Visión",
  description:
    "Conocé la misión y visión de Simon Bustamante Servicios Inmobiliarios, con respaldo estratégico de Meviel.",
  path: "/mision-vision",
});

const strategicCards = [
  {
    title: "Misión",
    icon: Target,
    text: "Brindar asesoramiento y gestión inmobiliaria profesional, clara y personalizada para que cada cliente tome decisiones patrimoniales con mejor información, menor incertidumbre y acompañamiento responsable en todo el proceso.",
  },
  {
    title: "Visión",
    icon: Telescope,
    text: "Consolidar a Simon Bustamante Servicios Inmobiliarios como referente de confianza en comercialización y asesoramiento inmobiliario, integrando lectura de mercado, criterio técnico y enfoque humano en cada operación.",
  },
];

const executionPrinciples = [
  "Procesos claros y seguimiento constante para reducir fricción y riesgo percibido.",
  "Evaluación técnico-comercial para tomar decisiones con criterio, no por impulso.",
  "Acompañamiento cercano en compra, venta, renta e inversión con foco patrimonial.",
];

export default function MissionVisionPage() {
  return (
    <section className="section-space pt-12">
      <Container>
        <SectionHeading
          eyebrow="Marco estratégico"
          title="Misión y Visión"
          description="Principios que guían el servicio inmobiliario liderado por Simon Bustamante Servicios Inmobiliarios, con Meviel como respaldo estratégico y marco de confianza."
          align="center"
        />

        <div className="relative mx-auto max-w-5xl overflow-hidden panel p-6 md:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-8 top-0 h-36 w-36 rounded-full bg-brand-orange/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-brand-red/8 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="space-y-5">
              <div className="inline-flex items-center rounded-full border border-brand-gray/80 bg-brand-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal/80">
                Simon Bustamante Servicios Inmobiliarios
              </div>

              <p className="max-w-2xl text-lg leading-relaxed text-brand-charcoal/90">
                La misión y la visión de esta unidad de negocio están enfocadas en una prioridad:
                ofrecer un servicio inmobiliario profesional, confiable y estratégicamente orientado
                a la toma de decisiones patrimoniales.
              </p>

              <p className="max-w-2xl text-base leading-relaxed text-brand-charcoal/80">
                Simon lidera la dirección comercial y el acompañamiento operativo de cada proceso.
                Meviel aporta trayectoria empresarial, experiencia en construcción y soporte técnico
                como respaldo que fortalece la propuesta sin desplazar el liderazgo del servicio
                inmobiliario.
              </p>

              <div className="rounded-2xl border border-brand-gray/80 bg-brand-warm/65 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-gray/80 bg-brand-white">
                    <Building2 className="h-5 w-5 text-brand-orange" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal/65">
                      Respaldo Estratégico
                    </p>
                    <p className="text-sm text-brand-charcoal/85">Meviel como transferencia de confianza</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">
                  La solidez operativa y la experiencia constructiva de Meviel reducen riesgo
                  percibido y suman consistencia técnica en la evaluación de oportunidades.
                </p>
              </div>
            </article>

            <div className="grid gap-4 content-start">
              {strategicCards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-brand-gray/80 bg-brand-white/95 p-6 shadow-[0_12px_32px_rgba(51,47,46,0.05)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-gray/80 bg-brand-warm">
                      <card.icon className="h-5 w-5 text-brand-orange" aria-hidden />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-charcoal/60">
                        {card.title}
                      </p>
                      <p className="mt-2 text-base leading-relaxed text-brand-charcoal/88">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-6 lg:grid-cols-[1fr_280px]">
          <article className="panel p-6 md:p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-gray/80 bg-brand-warm">
                <ShieldCheck className="h-5 w-5 text-brand-orange" aria-hidden />
              </div>
              <h2 className="text-xl font-semibold md:text-2xl">Cómo se traduce en cada operación</h2>
            </div>

            <ul className="mt-5 grid gap-3">
              {executionPrinciples.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-brand-gray/80 bg-brand-warm/55 px-4 py-3 text-sm leading-relaxed text-brand-charcoal/85"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <aside className="panel flex flex-col justify-between p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-charcoal/60">
                Siguiente paso
              </p>
              <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/85">
                Coordiná una reunión para evaluar tu operación con criterio profesional y una
                estrategia adecuada a tu objetivo.
              </p>
            </div>
            <Link href="/contacto" className="btn-primary mt-5 inline-flex w-full justify-center gap-2">
              Coordinar asesoramiento
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </aside>
        </div>
      </Container>
    </section>
  );
}
