"use client";

import { FormEvent, useState } from "react";

export function TasacionForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="panel space-y-4 p-6">
      <div>
        <label htmlFor="owner-name" className="mb-2 block text-sm font-medium">
          Nombre
        </label>
        <input id="owner-name" name="ownerName" required className="input-base" />
      </div>

      <div>
        <label htmlFor="owner-phone" className="mb-2 block text-sm font-medium">
          Teléfono
        </label>
        <input id="owner-phone" name="ownerPhone" required className="input-base" />
      </div>

      <div>
        <label htmlFor="address" className="mb-2 block text-sm font-medium">
          Dirección
        </label>
        <input id="address" name="address" required className="input-base" />
      </div>

      <div>
        <label htmlFor="property-type" className="mb-2 block text-sm font-medium">
          Tipo de propiedad
        </label>
        <select id="property-type" name="propertyType" required className="input-base">
          <option value="">Seleccionar tipo</option>
          <option value="Departamento">Departamento</option>
          <option value="Casa">Casa</option>
          <option value="Dúplex">Dúplex</option>
          <option value="Terreno">Terreno</option>
          <option value="Local">Local</option>
        </select>
      </div>

      <div>
        <label htmlFor="meters" className="mb-2 block text-sm font-medium">
          Superficie aproximada (m²)
        </label>
        <input id="meters" name="meters" required className="input-base" placeholder="Ej: 180 m2" />
      </div>

      <button type="submit" className="btn-primary w-full text-base">
        Quiero mi tasación
      </button>
      <p className="text-xs text-brand-charcoal/70">Te respondemos en menos de 24 h hábiles.</p>

      {sent ? (
        <div className="rounded-lg border border-brand-orange/40 bg-brand-warm p-4 text-sm text-brand-charcoal">
          Recibimos tu solicitud de tasación. Te vamos a contactar para coordinar la visita.
        </div>
      ) : null}
    </form>
  );
}
