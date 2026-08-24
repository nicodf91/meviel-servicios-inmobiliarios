import { Camera, Megaphone, Scale } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { TasacionForm } from "@/components/tasacion-form";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Tasaciones",
  description:
    "Formulario demostrativo de tasación con validación local y sin envío de datos.",
  path: "/tasaciones",
});

const valueBlocks = [
  {
    title: "Bloque informativo",
    icon: Scale,
    text: "Ejemplo de jerarquía visual; no ofrece análisis documental ni asesoramiento legal.",
  },
  {
    title: "Presentación visual",
    icon: Camera,
    text: "Tarjeta ilustrativa para demostrar composición, iconografía y contenido responsive.",
  },
  {
    title: "Flujo local",
    icon: Megaphone,
    text: "El formulario cambia su estado en el navegador, sin publicar ni compartir información.",
  },
];

export default function TasacionesPage() {
  return (
    <section className="section-space pt-12">
      <Container>
        <SectionHeading
          eyebrow="Formulario de muestra"
          title="Demostración de una solicitud de tasación"
          description="No calcula valores ni conecta con profesionales. Usá únicamente datos ficticios para revisar la experiencia de usuario."
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div>
            <div className="panel p-7">
              <h2 className="text-2xl font-semibold">Probá el formulario local</h2>
              <p className="mt-2 text-sm text-brand-charcoal/75">
                No hay tasación, agenda, almacenamiento ni envío; el estado de éxito lo explica explícitamente.
              </p>
              <div className="mt-5">
                <TasacionForm />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {valueBlocks.map((block) => (
              <article key={block.title} className="panel p-6">
                <block.icon className="h-7 w-7 text-brand-orange" />
                <h3 className="mt-4 text-xl font-semibold">{block.title}</h3>
                <p className="mt-2 text-sm text-brand-charcoal/75">{block.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
