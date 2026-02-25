"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="section-space pt-16">
      <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="panel space-y-4 p-8 text-center">
          <h1 className="text-3xl font-semibold">Ocurrió un error inesperado.</h1>
          <p className="text-sm text-brand-charcoal/75">
            Estamos trabajando para resolverlo. Podés reintentar o ir al inicio.
          </p>
          {error.digest ? (
            <p className="text-xs text-brand-charcoal/60">Código de referencia: {error.digest}</p>
          ) : null}
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <button type="button" onClick={reset} className="btn-primary">
              Reintentar
            </button>
            <Link href="/" className="btn-outline-orange">
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
