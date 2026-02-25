import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <section className="section-space pt-16">
      <Container>
        <div className="panel mx-auto max-w-2xl space-y-4 p-8 text-center">
          <h1 className="text-3xl font-semibold">No encontramos la propiedad solicitada.</h1>
          <p className="text-sm text-brand-charcoal/75">
            Puede que haya sido actualizada o dada de baja. Te mostramos el catálogo completo.
          </p>
          <Link href="/propiedades" className="btn-primary">
            Ver propiedades disponibles
          </Link>
        </div>
      </Container>
    </section>
  );
}
