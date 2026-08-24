import { CircleSlash2, Info } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contacto demostrativo",
  description: "Formulario local de una demo de portfolio; no envía, guarda ni comparte datos.",
  path: "/contacto",
});

export default function ContactPage() {
  return (
    <section className="section-space pt-12">
      <Container>
        <SectionHeading
          eyebrow="Alcance transparente"
          title="Formulario de demostración"
          description="Probalo únicamente con datos ficticios. La validación ocurre en el navegador y no existe transporte, almacenamiento ni respuesta posterior."
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <article className="panel p-6">
              <CircleSlash2 className="h-7 w-7 text-brand-orange" />
              <h2 className="mt-4 text-xl font-semibold">Sin canales comerciales</h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/75">
                La demo no publica teléfono, email, oficina, WhatsApp ni ubicación que puedan confundirse con un negocio activo.
              </p>
            </article>
            <article className="panel p-6">
              <Info className="h-7 w-7 text-brand-orange" />
              <h2 className="mt-4 text-xl font-semibold">Sin tratamiento de datos</h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-charcoal/75">
                Al enviar se actualiza solo el estado visual del componente. La información no sale del navegador y se descarta al recargar.
              </p>
            </article>
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
