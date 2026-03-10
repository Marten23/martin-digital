"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Clock3,
  HeartPulse,
  Leaf,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
  Timer,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type Item = {
  title: string;
  text: string;
  detail?: string;
  icon: LucideIcon;
};

const services: Item[] = [
  {
    title: "Physiotherapie",
    text: "Individuelle Behandlung bei Rücken-, Schulter- und Gelenkbeschwerden mit klaren Therapiezielen.",
    detail: "30-45 Minuten pro Termin",
    icon: HeartPulse,
  },
  {
    title: "Osteopathie",
    text: "Ganzheitliche Diagnostik und manuelle Behandlung zur Lösung funktioneller Störungen.",
    detail: "Auch bei chronischen Beschwerden",
    icon: Stethoscope,
  },
  {
    title: "Prävention & Bewegung",
    text: "Gezielte Übungen für Haltung, Beweglichkeit und spürbare Entlastung im Alltag.",
    detail: "Persönlich abgestimmte Empfehlungen",
    icon: ShieldCheck,
  },
];

const benefits: Item[] = [
  {
    title: "Persönliche Betreuung",
    text: "Fester Ansprechpartner und ein klarer, nachvollziehbarer Behandlungsplan.",
    icon: Users,
  },
  {
    title: "Kurze Wartezeiten",
    text: "Terminvergabe meist innerhalb weniger Werktage.",
    icon: Timer,
  },
  {
    title: "Ruhige Atmosphäre",
    text: "Helle Räume, angenehmes Umfeld und konzentrierte Behandlung.",
    icon: Leaf,
  },
];

const team = [
  { name: "Mara Schneider", role: "Physiotherapeutin", image: "/images/Phisiotherapeuthin.png" },
  { name: "David Klein", role: "Osteopath", image: "/images/Ostheopath.png" },
  { name: "Lea Richter", role: "Praxismanagement", image: "/images/Praxismanagerin, 21_46_43.png" },
];

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

function PhotoCard({ src, alt, caption, className }: { src: string; alt: string; caption: string; className: string }) {
  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.25 }}>
      <div className={`group relative overflow-hidden rounded-2xl border border-stone-300/70 shadow-lg shadow-stone-200/40 ${className}`}>
        <Image src={src} alt={alt} fill className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
      </div>
      <p className="mt-2 px-1 text-sm leading-snug text-stone-600">{caption}</p>
    </motion.div>
  );
}

export function PraxisDemoClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f4ede2] via-[#f6f0e6] to-[#f3ebe0] text-stone-800">
      <header className="sticky top-0 z-30 border-b border-stone-300/70 bg-[#f6efe4]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-semibold text-[#586f50]">Praxis am Stadtpark</p>
            <p className="text-xs text-stone-500">Physiotherapie & Osteopathie</p>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium text-stone-600 md:flex">
            <a href="#leistungen" className="transition-colors hover:text-stone-900">Leistungen</a>
            <a href="#vorteile" className="transition-colors hover:text-stone-900">Vorteile</a>
            <a href="#team" className="transition-colors hover:text-stone-900">Team</a>
            <a href="#kontakt" className="transition-colors hover:text-stone-900">Kontakt</a>
          </nav>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.99 }}>
            <Link
              href="#kontakt"
              className="rounded-full bg-gradient-to-r from-[#697f5c] to-[#566b4d] px-5 py-2.5 text-sm font-semibold text-[#fffaf0] shadow-lg shadow-stone-300/40 transition-all duration-300 hover:shadow-xl"
            >
              Termin anfragen
            </Link>
          </motion.div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f5eee4] to-[#f3ebe0] py-24 md:py-32">
          <div className="pointer-events-none absolute -top-24 left-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(214,227,206,0.75),_transparent_72%)] blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-8 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(240,224,198,0.65),_transparent_72%)] blur-3xl" />

          <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1.02fr_0.98fr] md:items-center">
            <Reveal>
              <p className="inline-flex rounded-full border border-stone-300/70 bg-[#f8f3ea] px-4 py-1 text-sm font-semibold text-[#5f7456]">
                Ganzheitliche Praxis für Bewegung und Wohlbefinden
              </p>
              <h1 className="mt-6 text-3xl leading-[1.2] text-stone-900 md:text-4xl lg:text-5xl">
                Endlich wieder leichter bewegen, den Alltag entspannter und schmerzärmer erleben.
              </h1>
              <p className="mt-8 max-w-[65ch] text-lg leading-relaxed text-stone-600 xl:text-[1.15rem]">
                Wir begleiten Sie persönlich auf dem Weg zu mehr Beweglichkeit und weniger Beschwerden,
                mit moderner Physiotherapie, Osteopathie und einer warmen, vertrauensvollen Atmosphäre.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.99 }}>
                  <Link
                    href="#kontakt"
                    className="rounded-full bg-gradient-to-r from-[#6d845f] to-[#586f50] px-6 py-3 text-sm font-semibold text-[#fffaf0] shadow-lg shadow-stone-300/40 transition-all duration-300"
                  >
                    Ersttermin vereinbaren
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.99 }}>
                  <Link
                    href="#leistungen"
                    className="rounded-full border border-stone-300 bg-[#f9f3e9] px-6 py-3 text-sm font-semibold text-stone-800 transition-all duration-300 hover:bg-[#f3ecdf]"
                  >
                    Behandlungen ansehen
                  </Link>
                </motion.div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-stone-600">
                <span className="rounded-xl border border-stone-300/70 bg-[#faf5eb] px-3 py-2">Seit 2013 in Berlin</span>
                <span className="rounded-xl border border-stone-300/70 bg-[#faf5eb] px-3 py-2">Termin meist innerhalb 2-5 Tage</span>
                <span className="rounded-xl border border-stone-300/70 bg-[#faf5eb] px-3 py-2">Alle Kassen privat</span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative rounded-[2rem] border border-stone-300/70 bg-[#f7efe4] p-5 shadow-lg shadow-stone-200/40">
                <PhotoCard
                  src="/images/Osthepath.png"
                  alt="Behandlungssituation"
                  caption="Behandlung mit Zeit und Ruhe, individuell auf Beschwerden und Beweglichkeit abgestimmt."
                  className="h-80"
                />
                <div className="mt-4 grid grid-cols-[1.1fr_0.9fr] gap-4">
                  <PhotoCard
                    src="/images/Behandlungszimmer.png"
                    alt="Heller Praxisraum"
                    caption="Heller Praxisraum mit warmer, freundlicher Atmosphäre."
                    className="h-44"
                  />
                  <PhotoCard
                    src="/images/Beratung2.png"
                    alt="Nachbehandlung"
                    caption="Persönliche Besprechung und Nachbehandlung in ruhigem Rahmen."
                    className="h-44"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-stone-50 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="rounded-[2rem] border border-stone-300/70 bg-[#f7f0e5] p-4 shadow-lg shadow-stone-200/40">
                <PhotoCard
                  src="/images/empfang.png"
                  alt="Empfangsbereich"
                  caption="Freundlicher Empfangsbereich, ein warmer erster Eindruck für Patientinnen und Patienten."
                  className="h-[380px] md:h-[460px]"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="leistungen" className="bg-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#63795a]">Leistungen</p>
              <h2 className="mt-4 text-4xl text-stone-900 md:text-5xl">Behandlungsschwerpunkte für Ihre Gesundheit</h2>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.title} delay={index * 0.06}>
                    <motion.article
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.25 }}
                      className="rounded-2xl border border-stone-300/70 bg-[#fbf6ec] p-6 shadow-lg shadow-stone-200/40"
                    >
                      <span className="inline-flex rounded-lg border border-[#d7decd] bg-[#eef2e7] p-2 text-[#63795a]">
                        <Icon size={18} strokeWidth={1.8} />
                      </span>
                      <h3 className="mt-4 text-2xl text-stone-900">{service.title}</h3>
                      <p className="mt-3 max-w-[62ch] text-stone-600">{service.text}</p>
                      <p className="mt-4 text-sm font-semibold text-[#63795a]">{service.detail}</p>
                    </motion.article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="vorteile" className="bg-gradient-to-b from-stone-50 to-emerald-50/30 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-[2rem] border border-stone-300/70 bg-[#f7efe4] px-8 py-10 shadow-lg shadow-stone-200/40">
              <Reveal>
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#63795a]">Warum wir</p>
                    <h2 className="mt-4 text-4xl text-stone-900 md:text-5xl">Menschlich, modern und vertrauensvoll</h2>
                    <p className="mt-6 max-w-[66ch] text-stone-600 xl:text-[1.05rem]">
                      Wir verbinden moderne Therapie mit einem naturverbundenen, achtsamen Ansatz,
                      klar in der Diagnostik und persönlich in der Begleitung.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    {benefits.map((benefit, index) => {
                      const Icon = benefit.icon;
                      return (
                        <Reveal key={benefit.title} delay={index * 0.05}>
                          <motion.article
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.22 }}
                            className="rounded-xl border border-stone-300/70 bg-[#fbf6ec] p-5 shadow-lg shadow-stone-200/40"
                          >
                            <span className="inline-flex rounded-lg border border-[#d7decd] bg-[#eef2e7] p-2 text-[#63795a]">
                              <Icon size={17} strokeWidth={1.8} />
                            </span>
                            <h3 className="mt-3 font-sans text-lg font-semibold leading-snug text-stone-900">{benefit.title}</h3>
                            <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-stone-600">{benefit.text}</p>
                          </motion.article>
                        </Reveal>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="team" className="bg-white py-24">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[1fr_1fr] md:items-start">
            <Reveal>
              <div className="rounded-[2rem] border border-stone-300/70 bg-[#f7efe4] p-5 shadow-lg shadow-stone-200/40">
                <PhotoCard
                  src="/images/empfang.png"
                  alt="Praxisatmosphäre"
                  caption="Ein Ort für alternative Heilkunde, mit Ruhe, Achtsamkeit und persönlicher Begleitung."
                  className="h-[420px]"
                />
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#63795a]">Praxis-Team</p>
              <h2 className="mt-4 text-4xl text-stone-900 md:text-5xl">Persönlich. Erfahren. Für Sie da.</h2>
              <p className="mt-6 max-w-[66ch] text-stone-600 xl:text-[1.05rem]">
                Unser Team aus Physiotherapeuten und Osteopathen arbeitet eng zusammen,
                damit Sie eine alltagstaugliche und langfristig wirksame Behandlung erhalten.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {team.map((member, index) => (
                  <Reveal key={member.name} delay={index * 0.04}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-xl border border-stone-300/70 bg-[#fbf6ec] p-4 shadow-lg shadow-stone-200/40"
                    >
                      <div className="relative mb-3 h-56 w-full overflow-hidden rounded-lg border border-stone-300/70">
                        <Image src={member.image} alt={member.name} fill className="object-cover" />
                      </div>
                      <p className="font-semibold text-stone-900">{member.name}</p>
                      <p className="mt-1 text-sm text-stone-600">{member.role}</p>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="kontakt" className="bg-stone-50 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="grid gap-6 rounded-[2rem] border border-stone-300/70 bg-[#f7efe4] p-8 shadow-lg shadow-stone-200/40 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#63795a]">Kontakt & Öffnungszeiten</p>
                  <h2 className="mt-4 text-4xl text-stone-900 md:text-5xl">Wir freuen uns auf Ihre Anfrage</h2>
                  <div className="mt-6 space-y-3 text-stone-600">
                    <p className="flex items-center gap-2"><Phone size={16} className="text-[#63795a]" /> 030 12345678</p>
                    <p className="flex items-center gap-2"><MapPin size={16} className="text-[#63795a]" /> Stadtparkallee 8, 10115 Berlin</p>
                    <p className="flex items-center gap-2"><CalendarDays size={16} className="text-[#63795a]" /> Mo-Fr: 08:00-19:00 Uhr</p>
                    <p className="flex items-center gap-2"><Clock3 size={16} className="text-[#63795a]" /> Terminannahme telefonisch und online</p>
                  </div>
                </div>

                <div className="rounded-xl border border-stone-300/70 bg-[#fbf6ec] p-5 text-sm text-stone-600">
                  <p className="font-semibold text-stone-900">Heute geöffnet bis 19:00 Uhr</p>
                  <ul className="mt-3 space-y-2">
                    <li>Montag: 08:00-19:00</li>
                    <li>Dienstag: 08:00-19:00</li>
                    <li>Mittwoch: 08:00-18:00</li>
                    <li>Donnerstag: 08:00-19:00</li>
                    <li>Freitag: 08:00-17:00</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-white pb-24">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <div className="rounded-[2rem] border border-stone-300/70 bg-gradient-to-r from-[#e9efe1] via-[#f3eadc] to-[#e8decc] px-8 py-12 text-center shadow-lg shadow-stone-200/40">
                <h2 className="text-4xl text-stone-900 md:text-5xl">Jetzt den ersten Schritt zu mehr Wohlbefinden machen</h2>
                <p className="mx-auto mt-5 max-w-[65ch] text-stone-600 xl:text-[1.05rem]">
                  Vereinbaren Sie Ihr unverbindliches Erstgespräch, wir nehmen uns Zeit für Ihre Fragen.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.99 }}>
                    <Link
                      href="#kontakt"
                      className="rounded-full bg-gradient-to-r from-[#6d845f] to-[#586f50] px-6 py-3 text-sm font-semibold text-[#fffaf0] shadow-lg shadow-stone-300/40 transition-all duration-300"
                    >
                      Termin anfragen
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.99 }}>
                    <Link
                      href="#leistungen"
                      className="rounded-full border border-stone-300 bg-[#f8efe2] px-6 py-3 text-sm font-semibold text-stone-800 transition-all duration-300 hover:bg-[#efe5d6]"
                    >
                      Behandlungen ansehen
                    </Link>
                  </motion.div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
