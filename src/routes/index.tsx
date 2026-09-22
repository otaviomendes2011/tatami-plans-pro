import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock,
  Crown,
  Layers3,
  Lock,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import heroPadel from "@/assets/hero-padel-sessions-v1.webp";
import bonusWarmups from "@/assets/bonus-padel-warmups-mockup-v2.webp";
import bonusProgressions from "@/assets/bonus-padel-progressions-mockup-v2.webp";
import bonusPlanner from "@/assets/bonus-padel-planner-mockup-v2.webp";
import bonusAdaptations from "@/assets/bonus-padel-adaptations-mockup-v2.webp";
import session024 from "@/assets/padel-session-024-control-v1.webp";
import session087 from "@/assets/padel-session-087-wall-defense-v1.webp";
import session146 from "@/assets/padel-session-146-net-transition-v1.webp";
import session219 from "@/assets/padel-session-219-bandeja-v1.webp";
import session271 from "@/assets/padel-session-271-point-building-v1.webp";
import session308 from "@/assets/padel-session-308-agility-v1.webp";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const CHECKOUT_BASIC = "https://pay.hotmart.com/R107623599U?checkoutMode=10";
const CHECKOUT_FULL = "https://pay.hotmart.com/D107625236U?checkoutMode=10";

function Display({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`font-[family-name:var(--font-display)] uppercase ${className}`}>
      {children}
    </span>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-primary sm:text-xs">
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}

function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-primary-foreground shadow-[var(--shadow-glow)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0 sm:text-base ${className}`}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative">{children}</span>
      <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function SectionTitle({
  eyebrow,
  children,
  description,
  centered = false,
}: {
  eyebrow?: string;
  children: React.ReactNode;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-3xl leading-[1.05] sm:text-4xl md:text-5xl lg:text-6xl">
        <Display>{children}</Display>
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Hero />
      <WhatYouGet />
      <Benefits />
      <MidCTA />
      <IdealFor />
      <Bonuses />
      <Offer />
      <SocialProof />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="dark relative isolate border-b border-border bg-background text-foreground">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_15%,color-mix(in_oklab,var(--primary)_22%,transparent),transparent_34%),linear-gradient(180deg,transparent_70%,var(--background))]" />
      <div className="absolute left-1/2 top-0 -z-10 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/80 to-transparent" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pb-16 pt-10 text-center sm:px-6 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-20">
        <Eyebrow>Para entrenadores, monitores y clubes de pádel</Eyebrow>
        <h1 className="mx-auto mt-5 max-w-5xl text-4xl leading-[0.98] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.1rem]">
          <Display>
            <span className="text-primary">+300 sesiones de</span> entrenamiento de pádel{" "}
            <span className="text-primary">listas para aplicar</span>
          </Display>
        </h1>
        <div className="relative mx-auto mt-9 w-full max-w-5xl sm:mt-11">
          <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-primary/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-surface shadow-[0_32px_90px_-32px_rgba(0,86,255,0.7)]">
            <img
              src={heroPadel}
              alt="Biblioteca completa de sesiones de entrenamiento de pádel en formato digital"
              width={1448}
              height={1086}
              fetchPriority="high"
              decoding="async"
              className="h-auto w-full"
            />
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-xl">
          Deja de improvisar tus clases. Encuentra sesiones listas para aplicar, organizadas por
          nivel, objetivo técnico y número de jugadores.
        </p>
        <div className="mx-auto mt-8 w-full max-w-md">
          <div className="mb-3 flex flex-col items-center gap-1.5">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-muted-foreground line-through decoration-red-500 decoration-2">$37</span>
              <span className="rounded-full bg-amber-400 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-black">Hoy</span>
            </div>
            <span className="text-5xl font-black tracking-tight text-foreground">$5</span>
          </div>
          <PrimaryButton href="#offer">Acceder ahora</PrimaryButton>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <li className="flex items-center gap-1.5"><Zap className="h-4 w-4 text-primary" /> Acceso inmediato</li>
            <li className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" /> Acceso de por vida</li>
            <li className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-primary" /> Garantía de 7 días</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const SESSIONS = [
  {
    category: "Sesión 024 · Iniciación",
    title: "Control y profundidad desde el fondo",
    image: session024,
    width: 960,
    height: 640,
  },
  {
    category: "Sesión 087 · Intermedio",
    title: "Defensa de pared y recuperación",
    image: session087,
    width: 960,
    height: 640,
  },
  {
    category: "Sesión 146 · Intermedio",
    title: "Transición desde el fondo hasta la red",
    image: session146,
    width: 960,
    height: 640,
  },
  {
    category: "Sesión 219 · Avanzado",
    title: "Bandeja y recuperación de la posición",
    image: session219,
    width: 960,
    height: 640,
  },
  {
    category: "Sesión 271 · Avanzado",
    title: "Construcción inteligente del punto en pareja",
    image: session271,
    width: 960,
    height: 640,
  },
  {
    category: "Sesión 308 · Todos los niveles",
    title: "Agilidad, reacción y coordinación en pista",
    image: session308,
    width: 960,
    height: 640,
  },
];

function SessionPreview({ session }: { session: (typeof SESSIONS)[number] }) {
  return (
    <div
      style={{ aspectRatio: `${session.width} / ${session.height}` }}
      className="relative h-64 shrink-0 overflow-hidden rounded-2xl border border-primary/25 bg-white shadow-[0_28px_80px_-28px_rgba(0,86,255,0.55)] sm:h-80 sm:rounded-3xl"
    >
      <div className="absolute -inset-10 -z-10 bg-primary/10 blur-3xl" />
      <img
        src={session.image}
        alt={`${session.category}: ${session.title}`}
        width={session.width}
        height={session.height}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        className="h-full w-full object-cover"
      />
    </div>
  );
}

function WhatYouGet() {
  const loopSessions = [...SESSIONS, ...SESSIONS];
  return (
    <section className="border-b border-border bg-background px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Mira lo que recibes"
          description="Una biblioteca completa para construir clases con intención: técnica, táctica, físico y variantes para diferentes niveles."
        >
          Todo lo que necesitas para planificar mejor
        </SectionTitle>
        <div className="relative mt-10 overflow-hidden">
          <div className="flex w-max animate-[marquee-x_32s_linear_infinite] gap-4 sm:gap-6">
            {loopSessions.map((item, itemIndex) => (
              <SessionPreview key={`${item.category}-${itemIndex}`} session={item} />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-background to-transparent sm:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-background to-transparent sm:w-24" />
        </div>
      </div>
    </section>
  );
}

const BENEFITS = [
  {
    icon: Target,
    number: "01",
    title: "Clases listas para aplicar",
    text: "Cada sesión parte de un objetivo claro y te ayuda a llegar a la pista con una estructura concreta.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Progresión por niveles",
    text: "Organiza iniciación, intermedio, avanzado y competición sin mezclar contenidos al azar.",
  },
  {
    icon: Users,
    number: "03",
    title: "Para clases individuales y grupales",
    text: "Adapta la misma idea técnica a uno, dos, tres o cuatro jugadores y distintos niveles.",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Más intención en cada bloque",
    text: "Combina técnica, táctica, físico y situaciones de partido para que cada minuto tenga un propósito.",
  },
];

function Benefits() {
  return (
    <section className="border-b border-border bg-surface px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article key={benefit.title} className="group relative overflow-hidden rounded-2xl border border-border bg-background p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/50">
                <div className="absolute right-4 top-3 font-[family-name:var(--font-display)] text-5xl text-foreground/[0.05]">{benefit.number}</div>
                <div className="grid h-11 w-11 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary"><Icon className="h-5 w-5" /></div>
                <h3 className="mt-6 text-xl font-black leading-tight">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{benefit.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MidCTA() {
  return (
    <section className="dark relative overflow-hidden border-b border-border bg-background px-4 py-16 text-foreground sm:px-6 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,color-mix(in_oklab,var(--primary)_23%,transparent),transparent_55%)]" />
      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="text-4xl leading-none sm:text-5xl md:text-6xl"><Display>Tu próxima clase ya puede estar lista</Display></h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">Un pago único. Acceso de por vida. Empieza a preparar sesiones más completas esta misma semana.</p>
        <div className="mx-auto mt-7 flex flex-col items-center justify-center gap-1">
          <span className="text-xl font-semibold text-muted-foreground line-through decoration-red-500 decoration-2">$37</span>
          <span className="text-5xl font-black tracking-tight text-foreground">$5</span>
          <span className="rounded-full bg-amber-400 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-black">Hoy</span>
        </div>
        <div className="mx-auto mt-8 max-w-md"><PrimaryButton href="#offer">Acceder ahora</PrimaryButton></div>
      </div>
    </section>
  );
}

const IDEAL_ITEMS = [
  { icon: CalendarDays, title: "Dejar de improvisar", points: ["Sesiones organizadas sin perder horas buscando ideas.", "Una base de clases para diferentes niveles y objetivos."] },
  { icon: Target, title: "Enseñar con un objetivo", points: ["Técnica, táctica, físico y situaciones reales conectadas.", "Clases adaptables al nivel y número de jugadores."] },
  { icon: Trophy, title: "Subir el nivel de tu club", points: ["Alumnos que perciben más orden y progresión.", "Un sistema para preparar más clases en menos tiempo."] },
];

function IdealFor() {
  return (
    <section className="border-b border-border bg-surface px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-3xl border border-border bg-background p-6 sm:p-10">
          <h2 className="text-center text-3xl leading-tight sm:text-4xl"><Display>Ideal para ti <span className="text-primary">si deseas...</span></Display></h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-muted-foreground sm:text-base">Dirigir clases de pádel con más claridad, variedad y progresión, sin pasar horas planificando.</p>
          <div className="mt-8 divide-y divide-border border-t border-border">
            {IDEAL_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-4 py-5">
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="h-5 w-5" /></span>
                  <div><h3 className="text-base font-black sm:text-lg">{item.title}</h3><ul className="mt-1.5 space-y-1.5">{item.points.map((point) => <li key={point} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><span>{point}</span></li>)}</ul></div>
                </div>
              );
            })}
          </div>
          <p className="mt-7 text-center text-sm font-black leading-relaxed">Si te identificaste con estos puntos, esta biblioteca fue hecha para ti.</p>
        </div>
      </div>
    </section>
  );
}

const BONUSES = [
  {
    image: bonusWarmups,
    position: "center",
    value: "Valor individual: $17",
    title: "50 calentamientos específicos para pádel",
    description:
      "Activa desplazamientos, coordinación y reacción con propuestas listas para iniciar cada sesión.",
  },
  {
    image: bonusProgressions,
    position: "center",
    value: "Valor individual: $12",
    title: "Guía de progresiones por nivel",
    description:
      "Conecta objetivos y sesiones para construir semanas de entrenamiento con una evolución lógica.",
  },
  {
    image: bonusPlanner,
    position: "center",
    value: "Valor individual: $15",
    title: "Planificador de ciclos de entrenamiento",
    description:
      "Organiza semanas, bloques técnicos y progresiones para que tus alumnos perciban un camino claro.",
  },
  {
    image: bonusAdaptations,
    position: "center",
    title: "Adaptaciones para 1, 2, 3 y 4 jugadores",
    description:
      "Aprovecha la pista y adapta cada propuesta aunque cambie el número de alumnos de tu clase.",
  },
];

function Bonuses() {
  return (
    <section className="border-b border-border bg-surface px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          centered
          eyebrow="Exclusivos del plan completo"
          description="Los cuatro bonos siguientes se incluyen solamente en el plan de $15 y amplían la biblioteca principal."
        >
          Cuatro bonos para llevar tus clases más lejos
        </SectionTitle>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {BONUSES.map((bonus) => (
            <article
              key={bonus.title}
              className="group overflow-hidden rounded-3xl border border-border bg-background transition duration-300 hover:-translate-y-1 hover:border-primary/60"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={bonus.image}
                  alt={bonus.title}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  width={960}
                  height={960}
                  style={{ objectPosition: bonus.position }}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="relative p-6">
                <div className="inline-flex rounded-md bg-primary px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white">
                  Incluido en el plan completo
                </div>
                <h3 className="mt-4 text-xl font-black leading-tight sm:text-2xl">{bonus.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {bonus.description}
                </p>
                {bonus.value && (
                  <p className="mt-5 border-t border-border pt-4 text-xs font-bold uppercase tracking-wider text-primary">
                    {bonus.value}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const BASIC_ITEMS = [
  "150 sesiones de entrenamiento de pádel",
  "Sesiones con objetivo técnico y estructura completa",
  "Organización por nivel, tema y objetivo",
  "Acceso inmediato y de por vida",
];

const BASIC_EXCLUDED_ITEMS = [
  "50 calentamientos específicos para pádel",
  "Guía de progresiones por nivel",
  "Planificador de ciclos de entrenamiento",
  "Adaptaciones para 1, 2, 3 y 4 jugadores",
];

const FULL_ITEMS = [
  "Todo lo incluido en el plan básico",
  "50 calentamientos específicos para pádel",
  "Guía de progresiones por nivel",
  "Planificador de ciclos de entrenamiento",
  "Adaptaciones para 1, 2, 3 y 4 jugadores",
  "Acceso inmediato y de por vida",
  "Todas las actualizaciones futuras",
];

function Price({ amount }: { amount: string }) {
  return (
    <div className="flex items-start justify-center gap-1">
      <span className="mt-2 text-3xl font-black text-foreground sm:text-4xl">$</span>
      <span className="font-[family-name:var(--font-display)] text-7xl leading-none tracking-tight text-foreground sm:text-8xl">
        {amount}
      </span>
    </div>
  );
}

function Offer() {
  return (
    <section
      id="offer"
      className="relative scroll-mt-6 border-b border-border bg-background px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="absolute left-1/2 top-0 h-px w-[75%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          centered
          eyebrow="Elige tu acceso"
          description="Dos opciones simples para empezar. El plan completo añade herramientas prácticas para planificar y dirigir más tipos de clase."
        >
          Empieza hoy por menos que una clase suelta
        </SectionTitle>
        <div className="mx-auto mt-12 grid max-w-5xl items-stretch gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <article
            id="checkout-basic"
            className="flex scroll-mt-8 flex-col rounded-3xl border border-border bg-surface p-6 sm:p-8 lg:my-5"
          >
            <div className="text-xs font-black uppercase tracking-[0.18em] text-muted-foreground">
              Plan básico
            </div>
            <h3 className="mt-3 text-2xl font-black">Biblioteca principal</h3>
            <p className="mt-2 min-h-12 text-sm leading-relaxed text-muted-foreground">
              Para quien quiere dejar de improvisar y tener una base sólida de sesiones de pádel.
            </p>
            <div className="mt-7">
              <Price amount="5" />
            </div>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              Pago único · Sin mensualidad
            </p>
            <ul className="mt-7 flex-1 space-y-3 border-t border-border pt-7">
              {BASIC_ITEMS.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground/90">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
              {BASIC_EXCLUDED_ITEMS.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted-foreground/70">
                  <span className="grid h-5 w-5 shrink-0 place-items-center font-bold text-red-500">
                    ×
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <PrimaryButton href={CHECKOUT_BASIC} className="mt-8">
              Quiero el plan básico
            </PrimaryButton>
          </article>
          <article
            id="checkout-full"
            className="relative flex scroll-mt-8 flex-col rounded-3xl border-2 border-primary bg-[linear-gradient(145deg,color-mix(in_oklab,var(--primary)_14%,var(--surface)),var(--surface)_48%)] p-6 shadow-[0_25px_90px_-35px_color-mix(in_oklab,var(--primary)_85%,transparent)] sm:p-9"
          >
            <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-primary px-5 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white shadow-lg sm:text-xs">
              <Crown className="h-4 w-4" /> Mejor elección
            </div>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs font-black uppercase tracking-[0.18em] text-primary">
                Plan completo
              </div>
              <div className="rounded-full border border-primary/40 bg-primary/15 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-primary">
                Ahorra $34 + videos
              </div>
            </div>
            <h3 className="mt-3 text-3xl font-black">Biblioteca + 4 bonos</h3>
            <p className="mt-2 min-h-12 text-sm leading-relaxed text-muted-foreground">
              El sistema completo para estudiar videos, organizar técnica, preparar clases y
              planificar ciclos de entrenamiento.
            </p>
            <div className="mt-7 flex flex-col items-center gap-2 text-center">
              <Price amount="15" />
              <p className="text-xs text-muted-foreground">Pago único · Sin mensualidad</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>Valor del paquete</span>
                <span className="text-sm font-black line-through decoration-red-500 decoration-2">
                  $49 + videos
                </span>
              </div>
            </div>
            <div className="mt-7 rounded-xl border border-primary/30 bg-primary/10 p-4 text-sm font-bold leading-relaxed text-foreground">
              Por apenas $10 más, desbloqueas la biblioteca de videos y los cuatro bonos para
              ampliar tus clases y planificar ciclos completos de entrenamiento.
            </div>
            <ul className="mt-7 flex-1 space-y-3 border-t border-primary/25 pt-7">
              {FULL_ITEMS.map((item, index) => (
                <li key={item} className="flex gap-3 text-sm font-semibold text-foreground">
                  <span
                    className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${index === 0 ? "bg-primary/15 text-primary" : "bg-primary text-white"}`}
                  >
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <PrimaryButton href={CHECKOUT_FULL} className="mt-8 py-5">
              Quiero todo por $15
            </PrimaryButton>
            <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
              <Lock className="h-3.5 w-3.5" /> Compra segura · Acceso inmediato · Garantía de 7 días
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

const LATAM_TESTIMONIALS = [
  {
    name: "Javier M.",
    role: "Entrenador de pádel · Madrid",
    quote:
      "Le eché un vistazo y encontré varias ideas muy buenas. Está todo muy bien organizado y ahora llego a cada clase con un plan claro.",
    result: "Clases más completas desde la primera semana",
  },
  {
    name: "Lucía R.",
    role: "Monitora de pádel · Valencia",
    quote:
      "Me ahorra muchísimo tiempo de preparación. Puedo elegir una sesión, adaptarla al nivel del grupo y empezar a trabajar sin improvisar.",
    result: "Menos tiempo preparando, más tiempo entrenando",
  },
  {
    name: "Andrés C.",
    role: "Director de escuela · Sevilla",
    quote:
      "Muy buen material. Las progresiones y las variantes para uno, dos, tres o cuatro jugadores nos ayudaron a ordenar toda la escuela.",
    result: "Una misma metodología para todos los grupos",
  },
  {
    name: "Marcos T.",
    role: "Entrenador de pádel · Buenos Aires",
    quote:
      "La biblioteca está lista para usar y se nota que fue pensada por entrenadores. Mis alumnos perciben mucho más ritmo y propósito en cada sesión.",
    result: "Más ritmo, confianza y evolución en pista",
  },
];

function SocialProof() {
  return (
    <section className="border-b border-border bg-background px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          centered
          eyebrow="Entrenadores que ya la están usando"
          description="Profesores y escuelas de distintos niveles están usando la biblioteca para preparar clases más claras, dinámicas y fáciles de adaptar."
        >
          Lo que dicen otros entrenadores de pádel
        </SectionTitle>
        <div
          className="testimonial-marquee relative mt-12"
          aria-label="Testimonios de entrenadores de pádel"
        >
          <div className="testimonial-marquee__track">
            {[false, true].map((isDuplicate) => (
              <div
                key={isDuplicate ? "duplicate" : "original"}
                className="testimonial-marquee__group"
                aria-hidden={isDuplicate}
              >
                {LATAM_TESTIMONIALS.map((testimonial, index) => (
                  <article
                    key={`${isDuplicate ? "duplicate" : "original"}-${index}`}
                    className="testimonial-marquee__item flex min-h-[280px] flex-col rounded-2xl border border-border bg-white p-6 text-left shadow-[0_20px_55px_-28px_rgba(0,86,255,0.6)] sm:min-h-[300px] sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div
                          aria-hidden="true"
                          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-sm font-black text-primary-foreground"
                        >
                          {testimonial.name.slice(0, 1)}
                        </div>
                        <div>
                          <h3 className="text-sm font-black text-foreground">{testimonial.name}</h3>
                          <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <Quote className="h-7 w-7 shrink-0 text-primary/30" aria-hidden="true" />
                    </div>
                    <div className="mt-5 flex gap-0.5 text-amber-400" aria-label="5 de 5 estrellas">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star key={starIndex} className="h-4 w-4 fill-current" aria-hidden="true" />
                      ))}
                    </div>
                    <p className="mt-4 text-sm font-semibold leading-relaxed text-foreground sm:text-base">
                      “{testimonial.quote}”
                    </p>
                    <p className="mt-auto border-t border-border pt-4 text-xs font-black uppercase tracking-[0.08em] text-primary">
                      {testimonial.result}
                    </p>
                  </article>
                ))}
              </div>
            ))}
          </div>
          <div
            className="testimonial-marquee__fade testimonial-marquee__fade--left"
            aria-hidden="true"
          />
          <div
            className="testimonial-marquee__fade testimonial-marquee__fade--right"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="border-b border-border bg-background px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-10 rounded-3xl border border-primary/25 bg-[radial-gradient(circle_at_10%_50%,color-mix(in_oklab,var(--primary)_18%,transparent),transparent_42%),var(--surface)] p-7 sm:p-10 md:grid-cols-[auto_1fr] md:gap-14 lg:p-14">
        <div className="mx-auto grid h-40 w-40 place-items-center rounded-full border-4 border-primary bg-background text-center shadow-[var(--shadow-glow)] sm:h-48 sm:w-48">
          <div>
            <div className="font-[family-name:var(--font-display)] text-7xl leading-none text-primary">
              7
            </div>
            <div className="text-xs font-black uppercase tracking-[0.2em]">días</div>
            <div className="mx-auto mt-2 max-w-[125px] text-[8px] font-bold uppercase leading-tight tracking-[0.08em] text-muted-foreground">
              garantía de devolución
            </div>
          </div>
        </div>
        <div>
          <Eyebrow>Tu compra está protegida</Eyebrow>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl">
            <Display>Prueba todo durante 7 días</Display>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Accede a la biblioteca, revisa las sesiones y comprueba si encaja con tu manera de
            enseñar. Si no cumple tus expectativas, puedes solicitar el reembolso dentro del plazo
            de garantía.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold text-foreground/80">
            <span className="flex items-center gap-2 rounded-full bg-background px-3 py-2">
              <ShieldCheck className="h-4 w-4 text-primary" /> Compra protegida
            </span>
            <span className="flex items-center gap-2 rounded-full bg-background px-3 py-2">
              <Clock className="h-4 w-4 text-primary" /> 7 días completos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "¿Qué tipo de sesiones incluye la biblioteca?",
    a: "Incluye sesiones completas de pádel con objetivos técnicos y tácticos, calentamiento, bloque principal, situaciones de juego y variaciones para adaptar la clase.",
  },
  {
    q: "¿Para qué niveles sirve?",
    a: "El material está organizado para fundamentos, básico, intermedio y avanzado. También puedes usar las variaciones para ajustar la dificultad del grupo.",
  },
  {
    q: "¿Funciona para clases individuales y grupales?",
    a: "Sí. La biblioteca permite adaptar las propuestas para uno, dos, tres o cuatro jugadores y para grupos con distintos niveles.",
  },
  {
    q: "¿Qué recibo en el plan completo?",
    a: "Recibes más de 300 sesiones de pádel, calentamientos específicos, una guía de progresiones, el planificador de ciclos y adaptaciones para diferentes cantidades de jugadores.",
  },
  {
    q: "¿El acceso es de por vida?",
    a: "Sí. Es un pago único con acceso de por vida y sin mensualidad. También recibirás las futuras actualizaciones de los materiales incluidos en tu plan.",
  },
  {
    q: "¿Cómo recibo el acceso?",
    a: "Después de confirmar el pago, recibirás las instrucciones de acceso en el correo electrónico utilizado durante la compra.",
  },
  {
    q: "¿Necesito imprimir el material?",
    a: "No. Todo el contenido es digital y puedes verlo desde el teléfono, tablet u ordenador. Si lo prefieres, puedes imprimir las fichas que más utilices.",
  },
  {
    q: "¿Qué sucede si no me gusta?",
    a: "Tienes 7 días para revisar el material. Dentro de ese plazo, puedes solicitar un reembolso según los términos de la plataforma de pago.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-b border-border bg-surface px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionTitle centered eyebrow="Sin dudas">
          Preguntas frecuentes
        </SectionTitle>
        <div className="mt-10 space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = open === index;
            return (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-2xl border bg-background transition ${isOpen ? "border-primary/50" : "border-border"}`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="grid w-full grid-cols-[1fr_auto] items-center gap-4 px-5 py-5 text-left sm:px-6"
                >
                  <span className="font-bold text-foreground">{faq.q}</span>
                  <span
                    className={`grid h-8 w-8 place-items-center rounded-full transition ${isOpen ? "bg-primary text-white" : "bg-surface text-muted-foreground"}`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t border-border px-5 py-5 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:text-base">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="dark relative isolate overflow-hidden border-b border-border bg-background px-4 py-20 text-foreground sm:px-6 sm:py-28">
      <img
        src={heroPadel}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20 grayscale"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--background),color-mix(in_oklab,var(--background)_82%,transparent),var(--background)),linear-gradient(0deg,var(--background),transparent,var(--background))]" />
      <div className="mx-auto max-w-4xl text-center">
        <Eyebrow>La próxima sesión ya puede estar lista</Eyebrow>
        <h2 className="mt-5 text-4xl leading-[1.02] sm:text-5xl md:text-7xl"><Display>Menos tiempo buscando. Más tiempo enseñando.</Display></h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">Empieza con la biblioteca principal por $5 o recibe el sistema completo y los cuatro bonos por $15.</p>
        <div className="mx-auto mt-8 max-w-md"><PrimaryButton href="#offer">Elegir mi plan ahora</PrimaryButton></div>
        <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1"><Lock className="h-3.5 w-3.5" /> Compra segura</span><span>·</span><span>Acceso inmediato</span><span>·</span><span>Garantía de 7 días</span>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="dark bg-background px-4 pb-28 pt-12 text-foreground sm:px-6 sm:pb-12">
      <div className="mx-auto max-w-5xl text-center">
        <div className="font-[family-name:var(--font-display)] text-3xl uppercase tracking-tight">
          300+ <span className="text-primary">sesiones de pádel</span>
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-muted-foreground sm:text-sm">
          Biblioteca digital de sesiones de entrenamiento de pádel para entrenadores, monitores y clubes.
          Material de uso exclusivo del comprador. No está permitida la copia, reventa o
          distribución de los archivos.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
          <span>Idioma: Español</span>
          <span>·</span>
          <span>Móvil, tablet y computadora</span>
          <span>·</span>
          <span>Garantía de 7 días</span>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
          © 2026 300+ Sesiones de Pádel. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
