import Image from "next/image";
import Link from "next/link";
import { Building, HardHat, Handshake, ShieldCheck } from "lucide-react";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Quiénes Somos",
  description:
    "Conocé a Simon Bustamante Servicios Inmobiliarios: experiencia, criterio técnico y acompañamiento profesional con respaldo estratégico de Meviel.",
  path: "/quienes-somos",
});

const pillars = [
  {
    title: "Experiencia profesional",
    text: "Trayectoria aplicada al análisis, la negociación y el acompañamiento de operaciones inmobiliarias.",
    icon: ShieldCheck,
  },
  {
    title: "Visión técnico-comercial",
    text: "Evaluación integral de cada oportunidad para tomar decisiones con mejor información y menor riesgo.",
    icon: HardHat,
  },
  {
    title: "Acompañamiento personalizado",
    text: "Asesoramiento cercano en cada etapa: búsqueda, análisis, gestión y cierre.",
    icon: Handshake,
  },
  {
    title: "Respaldo estratégico Meviel",
    text: "La trayectoria empresarial y experiencia constructiva de Meviel aportan solidez, soporte técnico y marco de confianza.",
    icon: Building,
  },
];

export default function WhoWeArePage() {
  return (
    <section className="section-space pt-12">
      <Container>
        <SectionHeading
          eyebrow="Quiénes Somos"
          title="Quiénes Somos"
          description="Simon Bustamante Servicios Inmobiliarios lidera un servicio inmobiliario con criterio técnico, lectura de mercado y acompañamiento profesional para decisiones patrimoniales sólidas."
        />

        <div className="space-y-8">
          <div className="panel overflow-hidden">
            <div className="grid lg:grid-cols-[minmax(320px,420px)_1fr]">
              <figure className="relative min-h-[420px] bg-brand-warm">
                <Image
                  src="/brand/perfil-simon.png"
                  alt="Perfil profesional de Simón Bustamante"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/55 via-brand-charcoal/18 to-transparent" />
              </figure>

              <article className="space-y-8 px-6 py-8 md:px-10 md:py-10">
                <header className="border-b border-brand-gray/80 pb-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-charcoal/70">
                    Simon Bustamante Servicios Inmobiliarios
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold leading-tight md:text-3xl">
                    Matrícula N° 7788
                  </h2>
                </header>

                <div className="space-y-5 text-base leading-relaxed text-brand-charcoal/88 md:text-[1.05rem]">
                  <p>
                    Simon Bustamante Servicios Inmobiliarios nace con una misión clara: brindar
                    asesoramiento inmobiliario confiable, personalizado y orientado a resultados
                    reales. Cada operación se aborda como una decisión patrimonial importante, con
                    foco en la claridad, el análisis y el seguimiento en cada etapa.
                  </p>
                  <p>
                    Soy Martillero, Corredor Público e Inmobiliario, y desarrollo mi actividad con
                    una mirada profesional que integra experiencia de campo, criterio técnico y
                    enfoque humano. Mi trabajo está centrado en acompañar a cada cliente con
                    información clara, evaluación responsable y una estrategia adecuada para su
                    objetivo.
                  </p>
                  <p>
                    Mi visión inmobiliaria parte de una premisa simple: una buena decisión no
                    depende solo de encontrar una propiedad, sino de entender su valor, su
                    potencial y el contexto del mercado. Por eso priorizo el análisis, la
                    planificación y el asesoramiento personalizado.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link href="/contacto" className="btn-primary">
                    Agendar reunión
                  </Link>
                  <p className="text-xs text-brand-charcoal/70">
                    Te respondemos en menos de 24 h hábiles.
                  </p>
                </div>
              </article>
            </div>
          </div>

          <article className="panel p-8">
            <p className="max-w-4xl text-lg text-brand-charcoal/85">
              Mi enfoque profesional combina cercanía y método: procesos ordenados, seguimiento
              constante y compromiso en cada instancia de compra, venta, renta o inversión. La
              propuesta de valor es clara: reducir incertidumbre, ordenar la decisión y acompañar
              con criterio en todo el proceso.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-brand-gray/80 bg-brand-warm p-5"
                >
                  <pillar.icon className="h-6 w-6 text-brand-orange" aria-hidden />
                  <h2 className="mt-3 text-xl font-semibold">{pillar.title}</h2>
                  <p className="mt-2 text-sm text-brand-charcoal/80">{pillar.text}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 max-w-4xl text-base leading-relaxed text-brand-charcoal/85">
              La atención y conducción inmobiliaria están a cargo de Simon Bustamante Servicios
              Inmobiliarios. El respaldo estratégico de Meviel suma estructura, trayectoria y
              confianza, fortaleciendo cada operación sin desplazar el protagonismo del servicio
              profesional que la lidera.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
