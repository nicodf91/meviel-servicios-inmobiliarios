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
        Enviar solicitud
      </button>
      <p className="text-xs text-brand-charcoal/70">Te respondemos en menos de 24 h hábiles.</p>
      {sent ? (
        <div className="rounded-lg border border-brand-orange/40 bg-brand-warm p-3 text-xs">
          Solicitud enviada. Te contactaremos a la brevedad.
        </div>
      ) : null}
    </form>
  );
}
