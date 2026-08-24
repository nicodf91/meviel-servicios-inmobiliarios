import Link from "next/link";
import { ArrowRight, Building2, ShieldCheck, Target, Telescope } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Misión y Visión",
  description:
    "Sección narrativa ficticia usada para demostrar un layout institucional.",
  path: "/mision-vision",
});

const strategicCards = [
  {
    title: "Misión",
    icon: Target,
    text: "Demostrar cómo una interfaz puede estructurar propósito, valores y contenido institucional sin atribuir una operación real.",
  },
  {
    title: "Visión",
    icon: Telescope,
    text: "Mantener una experiencia responsive, tipada y transparente respecto de sus datos y capacidades ficticias.",
  },
];

const executionPrinciples = [
  "Aviso persistente del alcance de demostración.",
  "Formularios locales sin transporte ni persistencia.",
  "Datos estáticos sanitizados y rutas prerenderizadas.",
];

export default function MissionVisionPage() {
  return (
    <section className="section-space pt-12">
      <Container>
        <SectionHeading
          eyebrow="Marco estratégico"
          title="Misión y Visión"
          description="Contenido ficticio para demostrar una página institucional; no describe una empresa operativa, liderazgo ni trayectoria."
          align="center"
        />

        <div className="relative mx-auto max-w-5xl overflow-hidden panel p-6 md:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-8 top-0 h-36 w-36 rounded-full bg-brand-orange/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-brand-red/8 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="space-y-5">
              <div className="inline-flex items-center rounded-full border border-brand-gray/80 bg-brand-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal/80">
                Narrativa institucional de muestra
              </div>

              <p className="max-w-2xl text-lg leading-relaxed text-brand-charcoal/90">
                Este bloque permite evaluar jerarquía editorial, grillas y tarjetas. Sus afirmaciones
                no se atribuyen a una persona, empresa o unidad de negocio real.
              </p>

              <p className="max-w-2xl text-base leading-relaxed text-brand-charcoal/80">
                Una versión productiva necesitaría autorización de marca, identidad profesional,
                contenidos y evidencia verificables antes de habilitar indexación o contacto.
              </p>

              <div className="rounded-2xl border border-brand-gray/80 bg-brand-warm/65 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-gray/80 bg-brand-white">
                    <Building2 className="h-5 w-5 text-brand-orange" aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal/65">
                      Decisión de portfolio
                    </p>
                    <p className="text-sm text-brand-charcoal/85">Transparencia antes que claims comerciales</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-brand-charcoal/80">
                  El repositorio no acredita solidez operativa, experiencia constructiva ni
                  evaluación de oportunidades; por eso esta narrativa se declara ficticia.
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
              <h2 className="text-xl font-semibold md:text-2xl">Cómo se traduce en la implementación</h2>
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
                Revisá el formulario local para comprobar sus estados sin enviar información.
              </p>
            </div>
            <Link href="/contacto" className="btn-primary mt-5 inline-flex w-full justify-center gap-2">
              Probar formulario demo
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </aside>
        </div>
      </Container>
    </section>
  );
}
