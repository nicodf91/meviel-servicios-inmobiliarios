import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/5493515550101?text=Hola,%20quiero%20asesoramiento%20inmobiliario."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex min-h-12 min-w-12 items-center gap-2 rounded-full bg-brand-whatsapp px-4 text-sm font-semibold text-brand-white shadow-soft transition-transform duration-200 hover:scale-[1.02]"
      aria-label="Escribir por WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </Link>
  );
}
