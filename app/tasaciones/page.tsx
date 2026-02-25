import { Camera, Megaphone, Scale } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { TasacionForm } from "@/components/tasacion-form";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Tasaciones",
  description:
    "Tasación profesional para vender con criterio y estrategia. Meviel Servicios Inmobiliarios, Matrícula N° 7788.",
  path: "/tasaciones",
});

const valueBlocks = [
  {
    title: "Seguridad jurídica",
    icon: Scale,
    text: "Análisis documental y trazabilidad legal para operar con previsibilidad y sin sorpresas.",
  },
  {
    title: "Producción audiovisual",
    icon: Camera,
    text: "Contenido visual profesional para posicionar tu propiedad con estándar comercial premium.",
  },
  {
    title: "Difusión multicanal",
    icon: Megaphone,
    text: "Publicación estratégica en portales, base de datos y redes para acelerar consultas calificadas.",
  },
];

export default function TasacionesPage() {
  return (
    <section className="section-space pt-12">
      <Container>
        <SectionHeading
          eyebrow="Tasaciones estratégicas"
          title="Tasación profesional para vender con criterio y estrategia."
          description="Definimos el valor de mercado y una estrategia de venta clara para que tomes decisiones con respaldo profesional."
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div>
            <div className="panel p-7">
              <h2 className="text-2xl font-semibold">Solicitá tu tasación</h2>
              <p className="mt-2 text-sm text-brand-charcoal/75">
                Evaluación profesional con foco en valor real, tiempos de comercialización y estrategia de posicionamiento.
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
