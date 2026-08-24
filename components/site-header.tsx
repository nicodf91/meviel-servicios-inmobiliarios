"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { href: "/", label: "Inicio" },
  { href: "/propiedades", label: "Propiedades" },
  { href: "/contacto", label: "Contacto" },
];

const companyActivePrefixes = ["/quienes-somos", "/mision-vision", "/faq"];

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const mobileOpen = openPath === pathname;

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const isCompanyActive = companyActivePrefixes.some((href) => isActive(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-brand-gray/80 bg-brand-white/95 backdrop-blur supports-[backdrop-filter]:bg-brand-white/90">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="group min-w-0">
            <span className="flex flex-col items-center gap-1">
              <Image
                src="/brand/logo.png"
                alt="Logo Simon Bustamante Servicios Inmobiliarios"
                width={936}
                height={170}
                priority
                className="h-auto w-[154px] sm:w-[172px]"
              />
              <span className="mt-1.5 w-full border-t border-brand-gray/80 pt-1.5 text-center font-brand text-[0.49rem] font-semibold uppercase tracking-[0.12em] whitespace-nowrap text-brand-charcoal/85 sm:text-[0.54rem]">
                Simon Bustamante Servicios Inmobiliarios
              </span>
            </span>
          </Link>

          <div className="hidden lg:flex">
            <nav aria-label="Navegación principal" className="flex items-center gap-1 xl:gap-2">
              {primaryLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-semibold text-brand-charcoal transition-colors duration-200 hover:bg-brand-warm hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal/40",
                    isActive(item.href) ? "bg-brand-warm text-brand-orange" : "",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/quienes-somos"
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-semibold text-brand-charcoal transition-colors duration-200 hover:bg-brand-warm hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal/40",
                  isCompanyActive ? "bg-brand-warm text-brand-orange" : "",
                )}
              >
                Quiénes Somos
              </Link>
            </nav>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu-panel"
            onClick={() => setOpenPath(mobileOpen ? null : pathname)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-brand-gray text-brand-charcoal transition-colors duration-200 hover:bg-brand-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal/40 lg:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileOpen ? (
          <div id="mobile-menu-panel" className="border-t border-brand-gray bg-brand-white lg:hidden">
            <nav aria-label="Menú móvil" className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6">
              <div className="space-y-1">
                {primaryLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpenPath(null)}
                    className={cn(
                      "block rounded-md px-3 py-2.5 text-sm font-semibold text-brand-charcoal transition-colors duration-200 hover:bg-brand-warm hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal/40",
                      isActive(item.href) ? "bg-brand-warm text-brand-orange" : "",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/quienes-somos"
                  onClick={() => setOpenPath(null)}
                  className={cn(
                    "block rounded-md px-3 py-2.5 text-sm font-semibold text-brand-charcoal transition-colors duration-200 hover:bg-brand-warm hover:text-brand-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal/40",
                    isCompanyActive ? "bg-brand-warm text-brand-orange" : "",
                  )}
                >
                  Quiénes Somos
                </Link>
              </div>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}


