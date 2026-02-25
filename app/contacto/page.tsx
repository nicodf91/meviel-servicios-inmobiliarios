import Link from "next/link";
import { Mail, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contacto",
  description:
    "Contactá a Meviel Servicios Inmobiliarios para compra, venta, alquiler, tasación o inversión.",
  path: "/contacto",
});

export default function ContactPage() {
  return (
    <section className="section-space pt-12">
      <Container>
        <SectionHeading
          eyebrow="Canales directos"
          title="Contacto"
          description="Escribinos para coordinar reunión, visita o tasación profesional."
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="panel p-5">
                <PhoneCall className="h-6 w-6 text-brand-orange" />
                <h2 className="mt-3 text-lg font-semibold">Teléfono</h2>
                <p className="mt-1 text-sm text-brand-charcoal/75">+54 9 351 555 0101</p>
              </article>

              <article className="panel p-5">
                <Mail className="h-6 w-6 text-brand-orange" />
                <h2 className="mt-3 text-lg font-semibold">Email</h2>
                <p className="mt-1 text-sm text-brand-charcoal/75">contacto@meviel.com.ar</p>
              </article>

              <article className="panel p-5 sm:col-span-2">
                <MapPin className="h-6 w-6 text-brand-orange" />
                <h2 className="mt-3 text-lg font-semibold">Oficina</h2>
                <p className="mt-1 text-sm text-brand-charcoal/75">
                  Av. Rafael Núñez 5200, Córdoba Capital
                </p>
              </article>
            </div>

            <article className="panel overflow-hidden p-2">
              <iframe
                title="Ubicación de oficina Meviel Servicios Inmobiliarios"
                src="https://www.google.com/maps?q=-31.356613,-64.243604&z=15&output=embed"
                loading="lazy"
                className="h-[320px] w-full rounded-xl2 border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </article>
          </div>

          <div className="space-y-4">
            <ContactForm />
            <Link
              href="https://wa.me/5493515550101?text=Hola,%20quiero%20asesoramiento%20inmobiliario."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Iniciar chat por WhatsApp
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
