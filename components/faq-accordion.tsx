import { ChevronDown } from "lucide-react";
import { FaqItem } from "@/lib/types";

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="overflow-hidden rounded-xl2 border border-brand-gray/80 bg-brand-white shadow-card">
      {items.map((item) => (
        <details
          key={item.question}
          className="group border-b border-brand-gray/70 last:border-b-0"
        >
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-brand-charcoal marker:content-none transition-colors duration-200 hover:bg-brand-warm/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-charcoal/35 md:px-6 md:text-[1.02rem]">
            <span className="leading-snug">{item.question}</span>
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-gray bg-brand-white text-brand-charcoal/80 transition-colors duration-200 group-hover:border-brand-orange/40 group-hover:text-brand-orange">
              <ChevronDown
                className="h-4 w-4 transition-transform duration-200 group-open:rotate-180"
                aria-hidden
              />
            </span>
          </summary>
          <div className="px-5 pb-5 md:px-6">
            <p className="max-w-[70ch] text-sm leading-relaxed text-brand-charcoal/78 md:text-[0.96rem]">
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
