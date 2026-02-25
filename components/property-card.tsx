import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, MapPin, Ruler } from "lucide-react";
import { Property } from "@/lib/types";
import { formatCurrency, getPropertyBadge } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  buttonVariant?: "solid" | "outline";
}

export function PropertyCard({ property, buttonVariant = "solid" }: PropertyCardProps) {
  const badge = getPropertyBadge(property);

  return (
    <article className="group overflow-hidden rounded-xl2 border border-brand-gray/80 bg-brand-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft">
      <div className="relative overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          width={900}
          height={620}
          className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-charcoal/55 to-transparent" />
        {badge ? (
          <span
            className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-brand-white shadow-sm ${
              badge === "Destacada" ? "bg-brand-orange" : "bg-brand-red"
            }`}
          >
            {badge}
          </span>
        ) : null}
        <span className="absolute bottom-3 left-4 rounded-full border border-brand-white/25 bg-brand-charcoal/35 px-2.5 py-1 text-xs font-medium text-brand-white backdrop-blur">
          {property.type}
        </span>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="chip">{property.operation}</span>
          <p className="text-xl font-bold text-brand-orange md:text-2xl">
            {formatCurrency(property.price, property.currency)}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold leading-snug text-brand-charcoal md:text-xl">{property.title}</h3>
          <p className="mt-2 flex items-center gap-2 text-sm text-brand-charcoal/75">
            <MapPin className="h-4 w-4" />
            {property.address}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 text-xs text-brand-charcoal/80">
          <span className="flex items-center gap-1.5 rounded-md border border-brand-gray/80 bg-brand-warm/70 px-2 py-2">
            <BedDouble className="h-4 w-4" />
            {property.bedrooms > 0 ? `${property.bedrooms} dorm` : "Sin dorm"}
          </span>
          <span className="flex items-center gap-1.5 rounded-md border border-brand-gray/80 bg-brand-warm/70 px-2 py-2">
            <Bath className="h-4 w-4" />
            {property.bathrooms > 0 ? `${property.bathrooms} baños` : "Sin baños"}
          </span>
          <span className="flex items-center gap-1.5 rounded-md border border-brand-gray/80 bg-brand-warm/70 px-2 py-2">
            <Ruler className="h-4 w-4" />
            {property.areaM2} m2
          </span>
        </div>

        <Link
          href={`/propiedades/${property.slug}`}
          className={buttonVariant === "solid" ? "btn-primary w-full" : "btn-outline-orange w-full"}
        >
          Ver ficha completa
        </Link>
      </div>
    </article>
  );
}
