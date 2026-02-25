import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/container";

const quickLinks = [
  { href: "/propiedades", label: "Propiedades" },
  { href: "/tasaciones", label: "Tasaciones" },
  { href: "/contacto", label: "Contacto" },
  { href: "/desarrollos-propios", label: "Desarrollos propios" },
];

const institutionalLinks = [
  { href: "/quienes-somos", label: "Quiénes Somos" },
  { href: "/mision-vision", label: "Misión y Visión" },
  { href: "/faq", label: "Preguntas frecuentes" },
];

const contactItems = [
  { label: "Teléfono", value: "+54 9 351 555 0101", icon: Phone },
  { label: "Email", value: "contacto@meviel.com.ar", icon: Mail },
  { label: "Dirección", value: "Av. Rafael Núñez 5200, Córdoba", icon: MapPin },
];

const socialItems = [
  { label: "LinkedIn", detail: "Meviel Servicios Inmobiliarios", icon: Linkedin },
  { label: "Facebook", detail: "Presencia institucional", icon: Facebook },
  { label: "Instagram", detail: "@mevielinmobiliaria", icon: Instagram },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-gray bg-brand-charcoal text-brand-white">
      <Container className="section-space pb-10 pt-12">
        <div className="rounded-2xl border border-brand-white/10 bg-brand-white/[0.03] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.16)] sm:p-7 lg:p-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
            <section aria-labelledby="footer-brand">
              <h3 id="footer-brand" className="sr-only">
                Marca
              </h3>

              <Link
                href="/"
                aria-label="Ir al inicio"
                className="inline-flex flex-col items-center rounded-xl bg-brand-white px-2.5 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.22)] ring-1 ring-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-white/60"
              >
                <Image
                  src="/brand/logo.png"
                  alt="Simon Bustamante Servicios Inmobiliarios"
                  width={936}
                  height={170}
                  className="h-auto w-[154px] sm:w-[172px]"
                />
                <span className="mt-1.5 w-full border-t border-brand-gray/80 pt-1.5 text-center font-brand text-[0.49rem] font-semibold uppercase tracking-[0.12em] whitespace-nowrap text-brand-charcoal/85 sm:text-[0.54rem]">
                  Simon Bustamante Servicios Inmobiliarios
                </span>
              </Link>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-white/78">
                Asesoramiento inmobiliario profesional para compra, venta, alquiler y tasaciones.
                Meviel aporta respaldo estratégico y constructivo como marco de confianza.
              </p>
            </section>

            <nav aria-label="Accesos principales">
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-white/65">
                Accesos
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-brand-white/82">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center rounded-md px-1 py-0.5 transition-colors hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-white/40"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Información institucional">
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-white/65">
                Información
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-brand-white/82">
                {institutionalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex items-center rounded-md px-1 py-0.5 transition-colors hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-white/40"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <section aria-labelledby="footer-contact">
              <h4
                id="footer-contact"
                className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-white/65"
              >
                Contacto
              </h4>
              <ul className="mt-4 space-y-3">
                {contactItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-brand-white/12 bg-brand-white/5">
                      <item.icon className="h-4 w-4 text-brand-orange" aria-hidden />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.12em] text-brand-white/55">
                        {item.label}
                      </p>
                      <p className="text-sm leading-relaxed text-brand-white/85">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-10 grid gap-8 border-t border-brand-white/12 pt-7 lg:grid-cols-[1.35fr_1fr] lg:items-start">
            <section aria-labelledby="footer-legal">
              <h4
                id="footer-legal"
                className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-white/65"
              >
                Legal
              </h4>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-brand-white/10 bg-brand-white/[0.02] p-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-brand-white/55">
                    Datos profesionales
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-brand-white/82">
                    <li>Simon Bustamante Servicios Inmobiliarios</li>
                    <li>Matrícula N° 7788</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-brand-white/10 bg-brand-white/[0.02] p-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-brand-white/55">
                    Condiciones
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm text-brand-white/82">
                    <li>Términos y condiciones</li>
                    <li>Política de privacidad</li>
                  </ul>
                </div>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-brand-white/60">
                La información, disponibilidad y condiciones de las propiedades pueden modificarse
                sin previo aviso.
              </p>
            </section>

            <section aria-labelledby="footer-social">
              <h4
                id="footer-social"
                className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-white/65"
              >
                Redes
              </h4>

              <ul className="mt-4 grid gap-3">
                {socialItems.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-brand-white/10 bg-brand-white/[0.02] px-4 py-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-white/12 bg-brand-white/5">
                      <item.icon className="h-4 w-4 text-brand-orange" aria-hidden />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-brand-white">{item.label}</p>
                      <p className="truncate text-xs text-brand-white/65">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="mt-8 border-t border-brand-white/12 pt-5 text-center text-xs text-brand-white/58">
            © 2026 Simon Bustamante Servicios Inmobiliarios.
          </div>
        </div>
      </Container>
    </footer>
  );
}
