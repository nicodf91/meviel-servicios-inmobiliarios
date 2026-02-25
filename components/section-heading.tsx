import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  eyebrow?: string;
  actions?: ReactNode;
}

export function SectionHeading({
  title,
  description,
  align = "left",
  eyebrow,
  actions,
}: SectionHeadingProps) {
  const aligned = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`mb-10 max-w-3xl ${aligned}`}>
      {eyebrow ? <span className="kicker mb-4">{eyebrow}</span> : null}
      <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base text-brand-charcoal/80 md:text-lg">{description}</p>
      ) : null}
      {actions ? <div className="mt-6">{actions}</div> : null}
    </div>
  );
}
