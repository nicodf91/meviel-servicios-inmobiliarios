import { Container } from "@/components/container";
import { PropertiesCatalog } from "@/components/properties-catalog";
import { SectionHeading } from "@/components/section-heading";
import { properties } from "@/lib/data";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Propiedades",
  description:
    "Listado de propiedades en venta y alquiler de Meviel Servicios Inmobiliarios. Filtros por precio, superficie, dormitorios, baños y características.",
  path: "/propiedades",
});

function getParam(value: string | string[] | undefined) {
  if (!value) return "";
  return Array.isArray(value) ? value[0] : value;
}

export default function PropertiesPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const initialFilters = {
    operation: getParam(searchParams?.operation),
    type: getParam(searchParams?.type),
    zone: getParam(searchParams?.zone),
    maxPrice: getParam(searchParams?.maxPrice),
  };

  return (
    <section className="section-space pt-12">
      <Container>
        <div className="rounded-xl2 border border-brand-gray/80 bg-brand-warm/55 p-6 md:p-8">
          <SectionHeading
            eyebrow="Portafolio inmobiliario"
            title="Propiedades en Venta y Alquiler"
            description="Filtrá por tipo, precio, superficie y características para encontrar opciones alineadas a tu objetivo."
          />
        </div>

        <div className="mt-8">
          <PropertiesCatalog properties={properties} initialFilters={initialFilters} />
        </div>
      </Container>
    </section>
  );
}
