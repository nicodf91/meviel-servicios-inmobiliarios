"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { Property } from "@/lib/types";
import { PropertyCard } from "@/components/property-card";

interface InitialFilters {
  operation?: string;
  type?: string;
  zone?: string;
  maxPrice?: string;
}

interface PropertiesCatalogProps {
  properties: Property[];
  initialFilters?: InitialFilters;
}

type SortOption = "relevancia" | "precio-asc" | "precio-desc" | "superficie-desc";

export function PropertiesCatalog({ properties, initialFilters }: PropertiesCatalogProps) {
  const [operation, setOperation] = useState(initialFilters?.operation ?? "");
  const [type, setType] = useState(initialFilters?.type ?? "");
  const [zone, setZone] = useState(initialFilters?.zone ?? "");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState(initialFilters?.maxPrice ?? "");
  const [minSurface, setMinSurface] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [feature, setFeature] = useState("");
  const [sort, setSort] = useState<SortOption>("relevancia");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const zones = useMemo(
    () => [...new Set(properties.map((property) => property.zone))].sort((a, b) => a.localeCompare(b)),
    [properties],
  );

  const features = useMemo(
    () => [...new Set(properties.flatMap((property) => property.features))].sort((a, b) => a.localeCompare(b)),
    [properties],
  );

  const filteredProperties = useMemo(() => {
    const safeNumber = (value: string) => {
      const parsed = Number(value);
      return Number.isNaN(parsed) ? 0 : parsed;
    };

    const relevancia = (property: Property) => {
      if (property.featured) return 3;
      if (property.isNew) return 2;
      return 1;
    };

    const result = properties.filter((property) => {
      if (operation && property.operation !== operation) return false;
      if (type && property.type !== type) return false;
      if (zone && !property.zone.toLowerCase().includes(zone.toLowerCase())) return false;
      if (minPrice && property.price < safeNumber(minPrice)) return false;
      if (maxPrice && property.price > safeNumber(maxPrice)) return false;
      if (minSurface && property.areaM2 < safeNumber(minSurface)) return false;
      if (bedrooms && property.bedrooms < safeNumber(bedrooms)) return false;
      if (bathrooms && property.bathrooms < safeNumber(bathrooms)) return false;
      if (feature && !property.features.includes(feature)) return false;
      return true;
    });

    result.sort((a, b) => {
      if (sort === "precio-asc") return a.price - b.price;
      if (sort === "precio-desc") return b.price - a.price;
      if (sort === "superficie-desc") return b.areaM2 - a.areaM2;
      return relevancia(b) - relevancia(a);
    });

    return result;
  }, [bathrooms, bedrooms, feature, maxPrice, minPrice, minSurface, operation, properties, sort, type, zone]);

  const activeFiltersCount = useMemo(
    () =>
      [operation, type, zone, minPrice, maxPrice, minSurface, bedrooms, bathrooms, feature].filter(Boolean)
        .length,
    [bathrooms, bedrooms, feature, maxPrice, minPrice, minSurface, operation, type, zone],
  );

  const clearFilters = () => {
    setOperation("");
    setType("");
    setZone("");
    setMinPrice("");
    setMaxPrice("");
    setMinSurface("");
    setBedrooms("");
    setBathrooms("");
    setFeature("");
    setSort("relevancia");
  };

  const filterPanel = (
    <div className="panel space-y-5 border-brand-gray/75 bg-brand-white p-5 md:p-6">
      <div className="border-b border-brand-gray/80 pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-charcoal/70">Filtro avanzado</p>
        <h3 className="mt-2 text-xl font-semibold">Refinar búsqueda</h3>
      </div>

      <div className="grid gap-4">
        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide">Operación</label>
          <select value={operation} onChange={(event) => setOperation(event.target.value)} className="input-base">
            <option value="">Todas</option>
            <option value="Venta">Venta</option>
            <option value="Alquiler">Alquiler</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide">Tipo</label>
          <select value={type} onChange={(event) => setType(event.target.value)} className="input-base">
            <option value="">Todos</option>
            <option value="Departamento">Departamento</option>
            <option value="Casa">Casa</option>
            <option value="Dúplex">Dúplex</option>
            <option value="Terreno">Terreno</option>
            <option value="Local">Local</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide">Zona</label>
          <select value={zone} onChange={(event) => setZone(event.target.value)} className="input-base">
            <option value="">Todas</option>
            {zones.map((zoneOption) => (
              <option key={zoneOption} value={zoneOption}>
                {zoneOption}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide">Precio min</label>
            <input
              value={minPrice}
              onChange={(event) => setMinPrice(event.target.value)}
              type="number"
              className="input-base"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide">Precio max</label>
            <input
              value={maxPrice}
              onChange={(event) => setMaxPrice(event.target.value)}
              type="number"
              className="input-base"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide">Superficie mínima</label>
          <input
            value={minSurface}
            onChange={(event) => setMinSurface(event.target.value)}
            type="number"
            className="input-base"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide">Dormitorios</label>
            <input
              value={bedrooms}
              onChange={(event) => setBedrooms(event.target.value)}
              type="number"
              className="input-base"
            />
          </div>
          <div>
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide">Baños</label>
            <input
              value={bathrooms}
              onChange={(event) => setBathrooms(event.target.value)}
              type="number"
              className="input-base"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs font-semibold uppercase tracking-wide">Características</label>
          <select value={feature} onChange={(event) => setFeature(event.target.value)} className="input-base">
            <option value="">Todas</option>
            {features.map((featureOption) => (
              <option key={featureOption} value={featureOption}>
                {featureOption}
              </option>
            ))}
          </select>
        </div>

        <button type="button" onClick={clearFilters} className="btn-outline-orange w-full">
          Limpiar filtros
        </button>
      </div>
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)]">
      <aside className="hidden lg:block lg:sticky lg:top-[124px] lg:h-fit">{filterPanel}</aside>

      <div className="space-y-6">
        <div className="panel flex flex-wrap items-end justify-between gap-4 p-4 md:p-5">
          <div className="space-y-3">
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-brand-gray px-4 py-2 text-sm font-semibold text-brand-charcoal lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filtros
            </button>

            <div className="flex flex-wrap items-center gap-2 text-sm text-brand-charcoal/80">
              <span className="rounded-full border border-brand-gray bg-brand-warm/80 px-3 py-1 font-semibold text-brand-charcoal">
                {filteredProperties.length} propiedades
              </span>
              <span className="rounded-full border border-brand-gray/80 px-3 py-1 text-brand-charcoal/75">
                {activeFiltersCount} filtros activos
              </span>
            </div>
          </div>

          <div className="w-full md:w-auto md:min-w-[250px]">
            <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-brand-charcoal/80">
              Ordenar resultados
            </label>
            <select value={sort} onChange={(event) => setSort(event.target.value as SortOption)} className="input-base">
              <option value="relevancia">Más relevantes</option>
              <option value="precio-asc">Precio menor a mayor</option>
              <option value="precio-desc">Precio mayor a menor</option>
              <option value="superficie-desc">Mayor superficie</option>
            </select>
          </div>
        </div>

        {filteredProperties.length ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} buttonVariant="outline" />
            ))}
          </div>
        ) : (
          <div className="panel p-8 text-center">
            <h3 className="text-xl font-semibold">No encontramos propiedades con esos filtros.</h3>
            <p className="mt-2 text-sm text-brand-charcoal/70">
              Ajustá criterios o escribinos para una búsqueda personalizada.
            </p>
          </div>
        )}
      </div>

      {drawerOpen ? (
        <div className="fixed inset-0 z-50 bg-brand-charcoal/55 lg:hidden">
          <div className="ml-auto h-full w-full max-w-sm overflow-y-auto bg-brand-white p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">Filtros</h3>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-brand-gray"
                aria-label="Cerrar filtros"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {filterPanel}
          </div>
        </div>
      ) : null}
    </div>
  );
}
