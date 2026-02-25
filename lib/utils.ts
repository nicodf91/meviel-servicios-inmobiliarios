import { Currency, Property } from "@/lib/types";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatCurrency(value: number, currency: Currency) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export function getPropertyBadge(property: Property) {
  if (property.featured) {
    return "Destacada";
  }

  if (property.isNew) {
    return "Nuevo ingreso";
  }

  return null;
}
