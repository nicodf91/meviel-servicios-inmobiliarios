import Link from "next/link";
import { Clock3, ShieldCheck } from "lucide-react";
import { Container } from "@/components/container";
import { FaqAccordion } from "@/components/faq-accordion";
import { faqItems } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Preguntas frecuentes",
  description:
    "Preguntas frecuentes sobre compra, venta, alquiler, tasaciones, documentación y comisiones en Meviel Servicios Inmobiliarios.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <section className="section-space pt-12">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start">
          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="rounded-xl2 border border-brand-gray/80 bg-brand-white p-6 shadow-card">
              <span className="kicker mb-4">Soporte y proceso</span>
              <h1 className="text-3xl font-semibold leading-tight md:text-4xl">
                Preguntas frecuentes
              </h1>
              <p className="mt-4 text-base leading-relaxed text-brand-charcoal/80">
                Respuestas claras sobre documentación, reservas, comisión, tasaciones y etapas de
                operación para ayudarte a decidir con más seguridad.
              </p>
            </div>

            <div className="rounded-xl2 border border-brand-gray/80 bg-brand-warm/70 p-6">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden />
                  <p className="text-sm leading-relaxed text-brand-charcoal/80">
                    Información orientativa con enfoque profesional y criterio operativo.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden />
                  <p className="text-sm leading-relaxed text-brand-charcoal/80">
                    La demo no recibe consultas ni promete una respuesta; el contenido es orientativo y ficticio.
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-brand-gray/70 pt-5">
                <Link href="/contacto" className="btn-primary w-full justify-center">
                  Resolver mi consulta
                </Link>
                <p className="mt-2 text-xs text-brand-charcoal/70">
                  Te orientamos según tu operación y documentación.
                </p>
              </div>
            </div>
          </aside>

          <div className="space-y-4">
            <div className="flex flex-col gap-3 rounded-xl2 border border-brand-gray/80 bg-brand-white px-5 py-4 shadow-card sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-charcoal/65">
                Guía de consultas habituales
              </p>
              <span className="chip w-fit">{faqItems.length} respuestas</span>
            </div>

            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </Container>
    </section>
  );
}
