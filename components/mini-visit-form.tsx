"use client";

import { FormEvent, useState } from "react";

export function MiniVisitForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label htmlFor="visit-name" className="mb-1 block text-xs font-semibold uppercase tracking-wide">
          Nombre
        </label>
        <input id="visit-name" required className="input-base py-2.5 text-sm" />
      </div>
      <div>
        <label htmlFor="visit-phone" className="mb-1 block text-xs font-semibold uppercase tracking-wide">
          Teléfono
        </label>
        <input id="visit-phone" required className="input-base py-2.5 text-sm" />
      </div>
      <div>
        <label htmlFor="visit-note" className="mb-1 block text-xs font-semibold uppercase tracking-wide">
          Mensaje
        </label>
        <textarea
          id="visit-note"
          rows={3}
          className="input-base resize-none py-2.5 text-sm"
          placeholder="Quiero coordinar visita."
        />
      </div>
      <button type="submit" className="btn-outline-orange w-full">
        Validar formulario de demo
      </button>
      <p className="text-xs text-brand-charcoal/70">Sin backend: la información no sale del navegador ni queda almacenada.</p>
      {sent ? (
        <div className="rounded-lg border border-brand-orange/40 bg-brand-warm p-3 text-xs">
          Validación completada. La demo no envió ni guardó la solicitud.
        </div>
      ) : null}
    </form>
  );
}
