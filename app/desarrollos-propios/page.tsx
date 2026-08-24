import Image from "next/image";
import Link from "next/link";
import { Building2, ShieldCheck } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { developments } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Desarrollos propios",
  description:
    "Tarjetas de desarrollos ficticios usadas para demostrar una interfaz de portfolio.",
  path: "/desarrollos-propios",
});

export default function OwnedDevelopmentsPage() {
  return (
    <section className="section-space pt-12">
      <Container>
        <SectionHeading
          eyebrow="Dataset ilustrativo"
          title="Desarrollos de demostración"
          description="Nombres, etapas, unidades, imágenes y descripciones son ficticios; no representan proyectos ni ofertas activas."
        />

        <div className="mb-8 rounded-2xl border border-brand-gray/80 bg-brand-warm/60 p-5 md:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-gray/80 bg-brand-white">
                <ShieldCheck className="h-5 w-5 text-brand-orange" aria-hidden />
              </div>
              <p className="text-sm leading-relaxed text-brand-charcoal/85">
                La interfaz muestra cómo presentar una colección de proyectos sin afirmar comercialización real.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-gray/80 bg-brand-white">
                <Building2 className="h-5 w-5 text-brand-orange" aria-hidden />
              </div>
              <p className="text-sm leading-relaxed text-brand-charcoal/85">
                El repositorio no acredita diseño, dirección de obra, respaldo técnico ni titularidad de desarrollos.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {developments.map((development) => (
            <article key={development.id} className="panel overflow-hidden">
              <Image
                src={development.image}
                alt={development.name}
                width={1200}
                height={760}
                className="h-60 w-full object-cover"
              />
              <div className="space-y-4 p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="chip">{development.zone}</span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold text-brand-white ${
                      development.stage === "En construcción" ? "bg-brand-orange" : "bg-brand-red"
                    }`}
                  >
                    {development.stage}
                  </span>
                  <span className="chip">Desarrollo ficticio</span>
                </div>
                <h2 className="text-2xl font-semibold">{development.name}</h2>
                <p className="text-sm text-brand-charcoal/80">{development.summary}</p>
                <p className="text-sm font-semibold">{development.units}</p>
                <p className="text-xs leading-relaxed text-brand-charcoal/70">
                  Contenido de portfolio: sin comercialización, titularidad, diseño ni dirección de obra verificados.
                </p>
                <Link href="/contacto" className="btn-outline-orange">
                  Probar formulario demostrativo
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
