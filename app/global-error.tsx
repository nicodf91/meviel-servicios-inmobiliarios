"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="es">
      <body>
        <section className="section-space pt-16">
          <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="panel space-y-4 p-8 text-center">
              <h1 className="text-3xl font-semibold">No pudimos cargar el sitio correctamente.</h1>
              <p className="text-sm text-brand-charcoal/75">
                Reintentá en unos segundos. Si persiste, contactanos por WhatsApp.
              </p>
              {error.digest ? (
                <p className="text-xs text-brand-charcoal/60">Código de referencia: {error.digest}</p>
              ) : null}
              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <button type="button" onClick={reset} className="btn-primary">
                  Reintentar
                </button>
                <Link href="/contacto" className="btn-outline-orange">
                  Ir a contacto
                </Link>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
