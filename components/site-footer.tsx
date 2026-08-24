import Link from "next/link";
import { Container } from "@/components/container";

const links = [
  { href: "/propiedades", label: "Catálogo ficticio" },
  { href: "/contacto", label: "Formulario local" },
  { href: "/faq", label: "Preguntas frecuentes" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-gray bg-brand-charcoal text-brand-white">
      <Container className="section-space pb-10 pt-12">
        <div className="rounded-2xl border border-brand-white/10 bg-brand-white/[0.03] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
          <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-start">
            <section>
              <h2 className="font-brand text-xl font-semibold">Meviel — demo de portfolio</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-white/75">
                Este frontend no representa una inmobiliaria operativa. Identidad profesional, matrícula,
                contactos, propiedades, precios, métricas y testimonios son ilustrativos y no deben usarse
                para tomar decisiones ni iniciar operaciones.
              </p>
            </section>

            <nav aria-label="Accesos de la demo">
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-white/60">
                Explorar
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-brand-white/80">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-brand-orange">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <p className="mt-8 border-t border-brand-white/10 pt-5 text-center text-xs text-brand-white/55">
            Proyecto de portfolio de Nicolás De Felippe · Sin canal comercial, backend ni tratamiento de datos.
          </p>
        </div>
      </Container>
    </footer>
  );
}
