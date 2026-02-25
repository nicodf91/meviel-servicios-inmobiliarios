"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="panel space-y-4 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Nombre y apellido
          </label>
          <input id="name" name="name" required className="input-base" placeholder="Ej: Juan Pérez" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Teléfono
          </label>
          <input id="phone" name="phone" required className="input-base" placeholder="+54 9 351 ..." />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email
        </label>
        <input id="email" name="email" type="email" required className="input-base" placeholder="correo@ejemplo.com" />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="input-base resize-none"
          placeholder="Contanos qué propiedad buscás o cómo podemos ayudarte."
        />
      </div>

      <button type="submit" className="btn-primary w-full">
        Quiero asesoramiento inmobiliario
      </button>
      <p className="text-xs text-brand-charcoal/70">Te respondemos en menos de 24 h hábiles.</p>

      {sent ? (
        <div className="rounded-lg border border-brand-orange/40 bg-brand-warm p-4 text-sm text-brand-charcoal">
          Tu consulta fue enviada correctamente. En breve nos vamos a comunicar.
        </div>
      ) : null}
    </form>
  );
}
