import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Infinity as InfinityIcon,
  Lock,
  ShieldCheck,
  Zap,
} from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";
import sheet1 from "@/assets/sheet-1.jpg";
import sheet2 from "@/assets/sheet-2.jpg";
import sheet3 from "@/assets/sheet-3.jpg";
import bonus1 from "@/assets/bonus-1.jpg";
import bonus2 from "@/assets/bonus-2.jpg";
import bonus3 from "@/assets/bonus-3.jpg";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

const CHECKOUT_BASIC = "#checkout-basico";
const CHECKOUT_FULL = "#checkout-completo";

function Display({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`font-[family-name:var(--font-display)] uppercase tracking-tight ${className}`}
    >
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
      className={`group relative inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-4 text-base font-bold uppercase tracking-wide text-primary-foreground shadow-[var(--shadow-glow)] transition-all hover:brightness-110 active:scale-[0.98] sm:text-lg ${className}`}
    >
      {children}
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function LandingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Pain />
      <Mechanism />
      <WhatYouGet />
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
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--primary) 30%, transparent) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-16 pt-12 sm:pt-16 lg:pb-24">
        <div className="w-full text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary sm:text-sm">
            Para profesores de jiu-jitsu infantil
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl">
            <Display>
              +400 Sesiones de Entrenamiento de{" "}
              <span className="text-primary">Jiu-Jitsu Infantil</span> Listas para Aplicar
            </Display>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Deja de improvisar la clase 10 minutos antes de subir al tatami. Planifica meses de
            entrenamiento en minutos — con actividades que mantienen a los niños atentos de
            principio a fin.
          </p>
        </div>

        <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-card)]">
          <img
            src={heroMockup}
            alt="Tablet y celular mostrando fichas de entrenamiento de jiu-jitsu infantil"
            width={1600}
            height={1200}
            className="h-auto w-full"
          />
        </div>

        <div className="flex w-full max-w-md flex-col items-center gap-4">
          <div className="flex items-baseline gap-3">
            <span className="text-sm text-muted-foreground line-through">De $37</span>
            <span className="text-lg font-bold text-muted-foreground">·</span>
            <div>
              <span className="text-sm text-muted-foreground">Hoy </span>
              <span className="text-4xl font-black text-foreground sm:text-5xl">$5</span>
            </div>
          </div>
          <PrimaryButton href={CHECKOUT_FULL}>Acceder ahora</PrimaryButton>
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground sm:text-sm">
            <li className="flex items-center gap-1.5">
              <Zap className="h-4 w-4 text-primary" /> Acceso inmediato
            </li>
            <li className="flex items-center gap-1.5">
              <InfinityIcon className="h-4 w-4 text-primary" /> Acceso de por vida
            </li>
            <li className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" /> Garantía 7 días
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const PAINS = [
  "Llegas al tatami y decides la clase en el momento, repitiendo lo de la semana pasada.",
  "Los niños se dispersan a mitad del entrenamiento y pierdes 15 minutos pidiendo atención.",
  "Los padres preguntan qué está aprendiendo su hijo y no tienes una respuesta concreta.",
  "Mezclas a un niño de 5 años con uno de 11 en la misma actividad porque no tienes alternativa.",
  "Pasas horas en YouTube buscando dinámicas nuevas y siempre encuentras lo mismo.",
  "El grupo infantil se vacía después de dos meses y no sabes exactamente por qué.",
];

function Pain() {
  return (
    <section className="border-b border-border bg-background px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
          <Display>¿Te identificas con alguna de estas situaciones?</Display>
        </h2>
        <p className="mt-6 text-base text-muted-foreground sm:text-lg">
          Si das clases al grupo infantil, seguramente ya pasaste por esto — y no es falta de
          técnica tuya. Es falta de material organizado.
        </p>

        <ul className="mt-10 space-y-4">
          {PAINS.map((pain) => (
            <li
              key={pain}
              className="flex gap-3 rounded-lg border border-border bg-surface p-4 sm:p-5"
            >
              <ArrowRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-sm leading-relaxed text-foreground sm:text-base">{pain}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-r-lg border-l-4 border-primary bg-surface-elevated p-6 sm:p-8">
          <p className="text-base leading-relaxed text-foreground sm:text-lg">
            Y aquí está el problema real: un niño no abandona el jiu-jitsu porque sea difícil. Lo
            abandona porque es <span className="font-bold text-primary">repetitivo</span>. Cada
            alumno que deja el grupo infantil es una mensualidad menos cada mes — y es el alumno
            que sería tu cinturón morado dentro de ocho años.
          </p>
        </div>
      </div>
    </section>
  );
}

function Mechanism() {
  return (
    <section className="border-b border-border bg-surface px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
          <Display>
            El problema nunca fue tu técnica.
            <br />
            <span className="text-primary">Fue tu planificación.</span>
          </Display>
        </h2>
        <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
          <p>
            Un profesor de jiu-jitsu aprende a luchar. Nadie le enseña a armar una clase infantil.
            Sabes pasar la guardia, pero armar 3 clases por semana con progresión, variedad y
            juegos que además enseñen técnica — eso es otro trabajo completamente distinto.
          </p>
          <p>
            Quien tiene el grupo infantil lleno no es quien sabe más jiu-jitsu. Es quien tiene un{" "}
            <span className="font-semibold text-foreground">
              banco de actividades organizado
            </span>{" "}
            y nunca repite la misma clase dos semanas seguidas. Eso es exactamente lo que este
            material te entrega, listo, desde el primer día.
          </p>
        </div>
      </div>
    </section>
  );
}

const CAROUSEL = [
  { src: sheet1, alt: "Ficha de entrenamiento con diagrama de tatami" },
  { src: sheet2, alt: "Ficha de progresión técnica de guardia" },
  { src: sheet3, alt: "Circuito de coordinación en el tatami" },
  { src: sheet1, alt: "Ficha de dinámica grupal" },
  { src: sheet2, alt: "Ficha de pasaje y control" },
  { src: sheet3, alt: "Ficha de calentamiento infantil" },
];

const FEATURES = [
  {
    num: "01",
    title: "Ahorra horas de planificación",
    desc: "Encuentra en segundos la actividad exacta para el objetivo del día.",
    bullets: [
      "Más de 400 entrenamientos, juegos y dinámicas catalogadas",
      "Planificador de clases organizado por categoría y objetivo",
    ],
  },
  {
    num: "02",
    title: "Clases dinámicas que mantienen al niño atento",
    desc: "Actividades que mantienen al grupo participando del calentamiento al final.",
    bullets: [
      "Entrenamientos separados por edad: 4-6, 7-9 y 10-13 años",
      "Variaciones de dificultad para grupos mixtos y distintos niveles",
    ],
  },
  {
    num: "03",
    title: "Objetivo claro en cada actividad",
    desc: "Cada entrenamiento indica qué trabaja y cómo aplicarlo, paso a paso.",
    bullets: [
      "Diagramas visuales y explicación práctica en cada ficha",
      "Progresión técnica: base, caídas, guardia, pasaje y control",
    ],
  },
  {
    num: "04",
    title: "Grupo infantil más lleno",
    desc: "Estructura profesional que los padres perciben desde la primera semana.",
    bullets: [
      "Acceso de por vida y actualizaciones futuras incluidas",
      "Material que acompaña el crecimiento de tu grupo",
    ],
  },
];

function WhatYouGet() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % CAROUSEL.length);
  const prev = () => setIdx((i) => (i - 1 + CAROUSEL.length) % CAROUSEL.length);

  return (
    <section className="border-b border-border bg-background px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
            <Display>Lo que vas a recibir</Display>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Un material completo y organizado: fichas listas, actividades separadas por edad y
            objetivo. Sin complicaciones.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden rounded-2xl border border-border bg-surface">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${idx * 100}%)` }}
          >
            {CAROUSEL.map((slide, i) => (
              <img
                key={i}
                src={slide.src}
                alt={slide.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="h-auto w-full shrink-0"
              />
            ))}
          </div>
          <button
            type="button"
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/80 backdrop-blur transition hover:bg-background sm:left-4 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Siguiente"
            className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-border bg-background/80 backdrop-blur transition hover:bg-background sm:right-4 sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {CAROUSEL.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div
              key={f.num}
              className="rounded-2xl border border-border bg-surface p-6 transition hover:border-primary/60 sm:p-8"
            >
              <div className="text-xs font-bold tracking-wider text-primary">{f.num}</div>
              <h3 className="mt-2 text-xl font-black leading-tight text-foreground sm:text-2xl">
                {f.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground sm:text-base">{f.desc}</p>
              <ul className="mt-5 space-y-2">
                {f.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-foreground/90 sm:text-base">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MidCTA() {
  return (
    <section className="border-b border-border bg-surface px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
          <Display>Asegura hoy tu acceso</Display>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
          Un solo pago. Acceso de por vida. Empieza a preparar mejores clases esta misma semana.
        </p>
        <div className="mt-8 flex items-baseline justify-center gap-3">
          <span className="text-lg text-muted-foreground line-through">$37</span>
          <span className="text-5xl font-black text-foreground sm:text-6xl">$5</span>
          <span className="text-base text-muted-foreground">Hoy</span>
        </div>
        <div className="mx-auto mt-8 max-w-md">
          <PrimaryButton href={CHECKOUT_FULL}>Acceder ahora</PrimaryButton>
        </div>
      </div>
    </section>
  );
}

const IDEAL = [
  {
    title: "Dejar de improvisar",
    bullets: [
      "Clases organizadas sin perder horas buscando actividades.",
      "Dinámicas nuevas cada semana, sin repetir siempre lo mismo.",
    ],
  },
  {
    title: "Entrenar con objetivo",
    bullets: [
      "Coordinación, base, caídas, guardia, disciplina y más.",
      "Actividades adaptadas de los 4 a los 13 años.",
    ],
  },
  {
    title: "Subir el nivel de la academia",
    bullets: [
      "Dinámicas que aumentan la participación de los niños.",
      "Grupo infantil más lleno y padres que renuevan la matrícula.",
    ],
  },
];

function IdealFor() {
  return (
    <section className="border-b border-border bg-background px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
            <Display>Ideal para ti que quieres...</Display>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Dar clases como un profesional, sin pasar horas planificando.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {IDEAL.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <h3 className="text-xl font-black text-foreground sm:text-2xl">{card.title}</h3>
              <ul className="mt-5 space-y-3">
                {card.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-muted-foreground sm:text-base">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-base font-semibold text-foreground sm:text-lg">
          Si te identificaste con estos puntos, este material fue hecho para ti.
        </p>
      </div>
    </section>
  );
}

const BONUSES = [
  {
    img: bonus1,
    title: "100 Juegos de Calentamiento y Activación Infantil",
    desc: "Dinámicas rápidas y divertidas para iniciar el entrenamiento con energía, atención y todo el grupo participando desde el primer minuto.",
  },
  {
    img: bonus2,
    title: "50 Circuitos de Coordinación, Agilidad y Caída Segura",
    desc: "Actividades prácticas para desarrollar coordinación motora, equilibrio, ukemi y reacción — la base que todo alumno infantil necesita antes de la técnica.",
  },
  {
    img: bonus3,
    title: "Guía de Disciplina y Manejo del Grupo Infantil",
    desc: "Cómo mantener a 20 niños concentrados en el tatami, crear rutina, aplicar reglas y manejar al alumno disperso sin perder el control de la clase.",
  },
];

function Bonuses() {
  return (
    <section className="border-b border-border bg-surface px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
            Bonos incluidos
          </span>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl">
            <Display>Bonos exclusivos por tu compra hoy</Display>
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {BONUSES.map((b) => (
            <div
              key={b.title}
              className="overflow-hidden rounded-2xl border border-border bg-background transition hover:border-primary/60"
            >
              <div className="aspect-square overflow-hidden bg-surface-elevated">
                <img
                  src={b.img}
                  alt={b.title}
                  loading="lazy"
                  width={1000}
                  height={1000}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-md bg-primary/15 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary">
                  Valor: Incluido
                </span>
                <h3 className="mt-3 text-lg font-black leading-tight text-foreground sm:text-xl">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section
      id="oferta"
      className="border-b border-border bg-background px-4 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-3xl text-center text-3xl leading-tight sm:text-4xl md:text-5xl">
          <Display>Obtén hoy la biblioteca completa de entrenamientos</Display>
        </h2>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Plan Inicial */}
          <div
            id="checkout-basico-anchor"
            className="flex flex-col rounded-2xl border border-border bg-surface p-6 sm:p-8"
          >
            <span className="inline-block w-fit rounded-full border border-border bg-background px-3 py-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Plan Inicial
            </span>
            <p className="mt-4 text-sm text-muted-foreground">
              Para empezar con una biblioteca práctica.
            </p>
            <div className="mt-6">
              <div className="text-sm text-muted-foreground">
                Precio habitual: <span className="line-through">$37</span>
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-sm text-muted-foreground">Hoy por solo:</span>
                <span className="text-5xl font-black text-foreground">$5</span>
              </div>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {[
                "400 sesiones de entrenamiento de jiu-jitsu infantil",
                "Actividades organizadas por categoría y edad",
                "Acceso inmediato después del pago",
                "Material completamente digital",
              ].map((b) => (
                <li key={b} className="flex gap-2 text-sm text-foreground/90 sm:text-base">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
              <li className="flex gap-2 text-sm text-muted-foreground/70 sm:text-base">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center text-muted-foreground">
                  —
                </span>
                <span>No incluye los bonos exclusivos</span>
              </li>
            </ul>
            <a
              href={CHECKOUT_BASIC}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-4 text-sm font-bold uppercase tracking-wide text-foreground transition hover:border-primary hover:text-primary sm:text-base"
            >
              Quiero el plan inicial <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Oferta Completa */}
          <div
            id="checkout-completo-anchor"
            className="relative flex flex-col rounded-2xl border-2 border-primary bg-surface p-6 shadow-[var(--shadow-glow)] sm:p-8"
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
              Recomendado
            </span>
            <span className="inline-block w-fit rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              Oferta completa con bonos
            </span>
            <p className="mt-4 text-sm text-muted-foreground">
              La experiencia completa con todo el material y los bonos.
            </p>
            <div className="mt-6">
              <div className="text-sm text-muted-foreground">
                Precio habitual: <span className="line-through">$111</span>
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-sm text-muted-foreground">Hoy por solo:</span>
                <span className="text-5xl font-black text-foreground sm:text-6xl">$15</span>
              </div>
            </div>
            <ul className="mt-6 flex-1 space-y-3">
              {[
                "Más de 400 entrenamientos, juegos y dinámicas",
                "Todas las fichas de clase completas",
                "Incluye los 3 bonos exclusivos",
                "Acceso inmediato después del pago",
                "Acceso de por vida y actualizaciones futuras",
              ].map((b) => (
                <li key={b} className="flex gap-2 text-sm text-foreground sm:text-base">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <PrimaryButton href={CHECKOUT_FULL}>Quiero la oferta completa</PrimaryButton>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
          Elige el plan inicial si quieres empezar con las 400 sesiones. Elige la oferta completa
          si quieres todo el material y los bonos.
        </p>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    name: "Carlos Mendoza",
    role: "Profesor de jiu-jitsu",
    country: "México",
    quote:
      "Antes armaba la clase infantil sobre la marcha, improvisando. Ahora abro el material y ya sé exactamente qué voy a trabajar toda la semana.",
  },
  {
    name: "Diego Ramírez",
    role: "Dueño de academia",
    country: "Colombia",
    quote:
      "Lo que más me ayudó fue la división por edades. Tenía niños de 5 y de 11 en el mismo grupo y ahora puedo adaptar sin desordenar la clase.",
  },
  {
    name: "Andrés González",
    role: "Profesor de grupo infantil",
    country: "Chile",
    quote:
      "Los niños participan mucho más porque ya no repetimos siempre lo mismo. En dos meses el grupo infantil creció.",
  },
  {
    name: "Sebastián Torres",
    role: "Profesor de educación física",
    country: "Argentina",
    quote:
      "Uso las dinámicas de calentamiento en cada clase. Es simple, fácil de aplicar y se puede adaptar al espacio que tengo.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

function SocialProof() {
  return (
    <section className="border-b border-border bg-surface px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
            <Display>Profesores que ya están dando mejores clases</Display>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Descubre cómo este material está ayudando a profesores y dueños de academia a ahorrar
            tiempo y variar sus actividades.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border bg-background p-6 sm:p-8"
            >
              <blockquote className="text-base leading-relaxed text-foreground/90 sm:text-lg">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/15 text-sm font-bold text-primary">
                  {initials(t.name)}
                </div>
                <div className="min-w-0">
                  <div className="truncate text-sm font-bold text-foreground">{t.name}</div>
                  <div className="truncate text-xs text-muted-foreground">
                    {t.role} · {t.country}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  return (
    <section className="border-b border-border bg-background px-4 py-16 sm:py-24">
      <div className="mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[auto_1fr] md:gap-12">
        <div className="mx-auto md:mx-0">
          <div className="relative grid h-40 w-40 place-items-center rounded-full border-4 border-primary bg-surface text-center shadow-[var(--shadow-glow)] sm:h-48 sm:w-48">
            <div>
              <div className="font-[family-name:var(--font-display)] text-5xl leading-none text-primary sm:text-6xl">
                7
              </div>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                días
              </div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wider text-foreground">
                Garantía
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
            <Display>Tu compra está protegida durante 7 días</Display>
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Accede a todo el material y revísalo con tranquilidad. Tienes 7 días desde la compra
            para solicitar el reembolso si el producto no cumple con tus expectativas. Sin
            burocracia, sin preguntas. El riesgo es todo mío.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Garantía incondicional de 7 días",
              "Solicitud directamente en la plataforma de pago",
              "Compra protegida",
              "Sin riesgo",
            ].map((b) => (
              <li key={b} className="flex gap-2 text-sm text-foreground/90 sm:text-base">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "¿El acceso es de por vida?",
    a: "Sí. Pagas una sola vez y accedes al material para siempre, incluyendo las actualizaciones futuras.",
  },
  {
    q: "¿Cómo recibiré mi acceso?",
    a: "Inmediatamente después de la confirmación del pago recibes el acceso en tu correo. En menos de 2 minutos.",
  },
  {
    q: "¿El pago es seguro y qué métodos aceptan?",
    a: "El pago es procesado por Hotmart, con cifrado. Acepta tarjeta de crédito, débito y métodos locales según tu país.",
  },
  {
    q: "¿Necesito experiencia para aplicar los entrenamientos?",
    a: "No. Cada actividad tiene diagrama, objetivo y paso a paso. Sirve tanto para el profesor con experiencia como para quien recién empieza con el grupo infantil.",
  },
  {
    q: "¿Funciona para grupos con edades mezcladas?",
    a: "Sí. Los entrenamientos están separados por edad y cada uno trae variaciones de dificultad para adaptar al grupo.",
  },
  {
    q: "¿Y si pierdo el acceso al material?",
    a: "Solo tienes que contactar por la plataforma. Tu acceso queda vinculado a tu correo de compra, para siempre.",
  },
  {
    q: "¿Qué sucede si no me gusta?",
    a: "Tienes 7 días para solicitar el reembolso completo, directamente en la plataforma de pago.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-b border-border bg-surface px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl leading-tight sm:text-4xl md:text-5xl">
          <Display>Preguntas frecuentes</Display>
        </h2>
        <div className="mt-10 space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-xl border border-border bg-background"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 text-left transition hover:bg-surface sm:px-6 sm:py-5"
                >
                  <span className="min-w-0 text-sm font-bold text-foreground sm:text-base">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="border-t border-border px-5 py-4 text-sm text-muted-foreground sm:px-6 sm:text-base">
                    {f.a}
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
    <section className="relative overflow-hidden border-b border-border bg-background px-4 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 100%, color-mix(in oklab, var(--primary) 30%, transparent) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-4xl leading-tight sm:text-5xl md:text-6xl">
          <Display>¿Listo para tu próxima clase?</Display>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground sm:text-lg">
          Accede hoy desde $5 y empieza a aplicar el material esta semana.
        </p>
        <div className="mx-auto mt-8 max-w-md">
          <PrimaryButton href={CHECKOUT_FULL}>Acceder ahora</PrimaryButton>
        </div>
        <p className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Lock className="h-3.5 w-3.5" /> Compra 100% segura
          </span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> Acceso inmediato
          </span>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5" /> Garantía de 7 días
          </span>
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background px-4 py-12">
      <div className="mx-auto max-w-4xl text-center">
        <div className="font-[family-name:var(--font-display)] text-2xl uppercase tracking-tight text-foreground">
          +400 <span className="text-primary">Entrenamientos JJ</span>
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
          +400 Sesiones de Entrenamiento de Jiu-Jitsu Infantil. Material completamente digital en
          español. Uso exclusivo del comprador. No está permitida la copia, reventa o distribución
          de los archivos.
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <li>Idioma: Español</li>
          <li>·</li>
          <li>Móvil, tablet y computadora</li>
          <li>·</li>
          <li>Garantía de 7 días</li>
        </ul>
        <div className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
          © 2026 +400 Entrenamientos JJ. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}