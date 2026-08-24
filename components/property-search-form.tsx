import Link from "next/link";
import { Search } from "lucide-react";

interface PropertySearchFormProps {
  variant?: "default" | "hero";
}

export function PropertySearchForm({ variant = "default" }: PropertySearchFormProps) {
  const isHero = variant === "hero";
  const formClass = isHero
    ? "rounded-2xl border border-brand-white/60 bg-gradient-to-br from-brand-white/95 via-brand-white/92 to-brand-warm/88 p-4 shadow-[0_20px_48px_rgba(51,47,46,0.26)] backdrop-blur-xl ring-1 ring-brand-charcoal/10 sm:p-5 lg:p-6"
    : "mt-10 rounded-[22px] border border-brand-gray/90 bg-brand-white p-4 shadow-card sm:p-5 lg:p-6";
  const dividerClass = isHero ? "border-brand-charcoal/18" : "border-brand-gray/80";
  const headerTitleClass = isHero
    ? "text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal"
    : "text-xs font-semibold uppercase tracking-[0.14em] text-brand-charcoal/80";
  const headerDescClass = isHero ? "text-xs text-brand-charcoal/85" : "text-xs text-brand-charcoal/70";
  const helperClass = isHero
    ? "mt-2 text-center text-xs text-brand-charcoal/80 lg:text-left"
    : "mt-2 text-center text-xs text-brand-charcoal/70 lg:text-left";
  const footerDividerClass = isHero ? "border-brand-charcoal/18" : "border-brand-gray/80";
  const footerLinkClass = isHero
    ? "text-sm font-semibold text-brand-charcoal underline decoration-brand-charcoal/35 underline-offset-4"
    : "text-sm font-medium text-brand-charcoal underline decoration-brand-gray underline-offset-4";

  return (
    <form action="/propiedades" className={formClass}>
      <div className={`flex flex-wrap items-center justify-between gap-3 border-b pb-4 ${dividerClass}`}>
        <p className={headerTitleClass}>Buscador de propiedades</p>
        <p className={headerDescClass}>Filtrá por operación, tipo, zona y precio.</p>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] lg:items-end">
        <div>
          <label htmlFor="operation" className="mb-2 block text-xs font-semibold uppercase tracking-wide">
            Operación
          </label>
          <select id="operation" name="operation" className="input-base">
            <option value="">Todas</option>
            <option value="Venta">Venta</option>
            <option value="Alquiler">Alquiler</option>
          </select>
        </div>

        <div>
          <label htmlFor="type" className="mb-2 block text-xs font-semibold uppercase tracking-wide">
            Tipo
          </label>
          <select id="type" name="type" className="input-base">
            <option value="">Todos</option>
            <option value="Departamento">Departamento</option>
            <option value="Casa">Casa</option>
            <option value="Dúplex">Dúplex</option>
            <option value="Terreno">Terreno</option>
            <option value="Local">Local</option>
          </select>
        </div>

        <div>
          <label htmlFor="zone" className="mb-2 block text-xs font-semibold uppercase tracking-wide">
            Zona
          </label>
          <input id="zone" name="zone" placeholder="Ej: Nueva Córdoba" className="input-base" />
        </div>

        <div>
          <label htmlFor="price" className="mb-2 block text-xs font-semibold uppercase tracking-wide">
            Precio máximo
          </label>
          <input id="price" name="maxPrice" type="number" placeholder="Ej: 180000" className="input-base" />
        </div>

        <div>
          <button type="submit" className="btn-primary w-full lg:min-w-[190px]">
            <Search className="mr-2 h-4 w-4" />
            Buscar Propiedades
          </button>
          <p className={helperClass}>Filtros locales sobre un catálogo ficticio.</p>
        </div>
      </div>

      <div className={`mt-4 border-t pt-4 ${footerDividerClass}`}>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/contacto" className={footerLinkClass}>
            ¿No encontrás la propiedad indicada? Pedí una búsqueda personalizada.
          </Link>
        </div>
      </div>
    </form>
  );
}
