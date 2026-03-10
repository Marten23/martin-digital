"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Code2,
  Gauge,
  Handshake,
  LayoutTemplate,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  Search,
  Sparkles,
  Spline,
  TabletSmartphone,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { useRef } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
};

function Reveal({ children, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

type FeatureItem = {
  title: string;
  text: string;
  icon: LucideIcon;
};

function SectionDivider() {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d9e0df] to-transparent" />
    </div>
  );
}

function WebsitePreview({ compact = false, withOverlay = false }: { compact?: boolean; withOverlay?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-[#e6e1d9] bg-[#fbfaf7] ${compact ? "p-3" : "p-4"}`}>
      {withOverlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#183d4a]/5 via-transparent to-[#2f5e62]/8 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
      <div className="mb-3 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#d9d4cb]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#e4dfd6]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ece8e0]" />
        <div className="ml-1 h-6 flex-1 rounded-full border border-[#e8e3da] bg-[#fffdf9]" />
      </div>
      <div className="space-y-2.5">
        <div className="h-7 w-3/4 rounded-lg bg-[#f0ece5]" />
        <div className="grid grid-cols-[1.2fr_0.8fr] gap-2.5">
          <div className="h-16 rounded-lg border border-[#dde8e5] bg-gradient-to-br from-[#edf4f2] to-[#f8faf9]" />
          <div className="h-16 rounded-lg bg-[#f2eee7]" />
        </div>
        <div className="h-12 rounded-lg bg-[#f1ede6]" />
      </div>
      {!compact && (
        <div className="mt-3 ml-auto w-20 rounded-lg border border-[#e0e7e8] bg-[#f7fbfb] p-2">
          <div className="h-10 rounded-md bg-[#e8f1f2]" />
        </div>
      )}
    </div>
  );
}

export function HomePageContent() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start end", "end start"],
  });

  const ambientA = useTransform(scrollYProgress, [0, 1], ["-2%", "3%"]);
  const ambientB = useTransform(scrollYProgress, [0, 1], ["2%", "-3%"]);

  const serviceItems: FeatureItem[] = [
    {
      title: "Webdesign",
      text: "Ruhige, klare Gestaltung mit hochwertiger visueller Hierarchie.",
      icon: LayoutTemplate,
    },
    {
      title: "Webentwicklung",
      text: "Sauber umgesetzt mit moderner Technik und wartbarer Struktur.",
      icon: Code2,
    },
    {
      title: "SEO-Basis",
      text: "Technische und inhaltliche Grundlagen für lokale Auffindbarkeit.",
      icon: Search,
    },
    {
      title: "Responsive Design",
      text: "Perfekte Darstellung auf Desktop, Tablet und Smartphone.",
      icon: TabletSmartphone,
    },
  ];

  const benefitItems: FeatureItem[] = [
    {
      title: "Persönliche Betreuung",
      text: "Direkter Ansprechpartner und klare Abstimmung in jedem Schritt.",
      icon: Handshake,
    },
    {
      title: "Schnelle Ladezeiten",
      text: "Performance-orientierte Umsetzung für ein professionelles Nutzererlebnis.",
      icon: Gauge,
    },
    {
      title: "Modernes Design",
      text: "Zeitgemäßer Auftritt, der Vertrauen auf den ersten Blick schafft.",
      icon: Sparkles,
    },
    {
      title: "Klare Struktur",
      text: "Inhalte werden so aufgebaut, dass Besucher schnell entscheiden können.",
      icon: Spline,
    },
  ];

  const references = [
    {
      title: "Praxis am Stadtpark",
      branch: "Beispiel: Arztpraxis",
      text: "Demo-Website für eine moderne, warme und vertrauensvolle Praxisdarstellung.",
      badge: "Designbeispiel",
      image: "/images/Praxis am stadtpark.png",
      demoLink: "/demo/praxis",
    },
    {
      title: "Elektro Lenz",
      branch: "Beispiel: Dienstleister",
      text: "Beispielhafter Webauftritt mit klaren Leistungsseiten und lokaler Ausrichtung.",
      badge: "Designbeispiel",
    },
    {
      title: "SV Blau-Weiß",
      branch: "Beispiel: Verein",
      text: "Beispielseite für Vereine mit News, Ansprechpartnern und klarer Navigation.",
      badge: "Designbeispiel",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Erstgespräch",
      text: "Wir klären Ziele, Zielgruppe und Umfang Ihres Projekts.",
      icon: MessageCircle,
    },
    {
      step: "2",
      title: "Konzept & Struktur",
      text: "Sie erhalten eine klare Seitenlogik mit sinnvoller Nutzerführung.",
      icon: Spline,
    },
    {
      step: "3",
      title: "Design & Entwicklung",
      text: "Ich setze den Auftritt hochwertig, responsiv und präzise um.",
      icon: MonitorSmartphone,
    },
    {
      step: "4",
      title: "Launch der Website",
      text: "Nach finaler Abstimmung geht Ihre Website professionell online.",
      icon: Rocket,
    },
  ];

  return (
    <div ref={rootRef} className="relative overflow-hidden pb-12">
      <motion.div
        className="pointer-events-none absolute left-[-10%] top-[-180px] h-[430px] w-[430px] rounded-full bg-[radial-gradient(circle,_rgba(243,234,220,0.5),_transparent_72%)] blur-3xl"
        style={{ y: ambientA }}
      />
      <motion.div
        className="pointer-events-none absolute right-[-110px] top-[16%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_rgba(226,236,244,0.5),_transparent_72%)] blur-3xl"
        style={{ y: ambientB }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[9%] left-[35%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,_rgba(226,242,237,0.34),_transparent_74%)] blur-3xl"
        style={{ y: ambientA }}
      />

      <section className="mx-auto grid max-w-6xl gap-14 px-6 pt-16 pb-12 md:grid-cols-[1.03fr_0.97fr] md:pt-24">
        <Reveal>
          <p className="inline-flex rounded-full border border-[#d5e5e2] bg-[#fbf9f5] px-4 py-1 text-sm font-semibold text-[#2f5e62]">
            Webdesign und Webentwicklung für lokale Unternehmen
          </p>
          <h1 className="mt-8 max-w-3xl text-4xl leading-[1.12] text-slate-900 md:text-[3.5rem]">
            Eine hochwertige Website, die Vertrauen sichtbar macht.
          </h1>
          <p className="mt-6 max-w-xl text-[1.04rem] leading-relaxed text-slate-600">
            Ich erstelle professionelle Webauftritte für <span className="keyword-emphasis">Firmen, Praxen und Vereine</span> - modern,
            klar strukturiert und mit einem ruhigen <span className="keyword-emphasis">Premium-Eindruck</span>.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-[#183d4a] px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_26px_-18px_rgba(24,61,74,0.62)] transition hover:bg-[#123541]"
              >
                Projektgespräch starten
                <span>→</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                href="/referenzen"
                className="inline-flex items-center rounded-full border border-[#d8d4cd] bg-[#fcfbf8] px-7 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#c7d1d7] hover:bg-[#f8f7f3]"
              >
                Referenzen ansehen
              </Link>
            </motion.div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <aside className="rounded-[2rem] border border-[#e6e2da] bg-[#fefdfa] p-6 shadow-[0_24px_56px_-44px_rgba(15,23,42,0.9)]">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#365e62]">Desktop-Mockup</p>
              <span className="rounded-full border border-[#d7e1df] bg-[#f7faf8] px-3 py-1 text-xs font-semibold text-[#355459]">
                Premium Layout
              </span>
            </div>
            <WebsitePreview />
          </aside>
        </Reveal>
      </section>

      <SectionDivider />

      <section className="relative mx-auto max-w-6xl px-6 py-8">
        <div className="pointer-events-none absolute right-8 top-10 h-16 w-16 rounded-full border border-[#e4e8e6] bg-[#f7f9f8]/80" />
        <Reveal>
          <div className="mb-7">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#2f5e62]">Leistungen</p>
            <h2 className="mt-3 text-4xl leading-tight text-slate-900">Klare Leistungen für Ihren Webauftritt</h2>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {serviceItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <motion.article
                  className="rounded-[1.5rem] border border-[#e8e4dc] bg-[#fcfbf8] p-6 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.72)]"
                  whileHover={{ y: -4, borderColor: "rgb(214 223 227)", boxShadow: "0 24px 40px -34px rgba(15,23,42,0.82)" }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="inline-flex rounded-xl border border-[#dae6e4] bg-[#f8fbfa] p-2 text-[#2f5e62]">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 text-xl text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <SectionDivider />

      <section className="relative mx-auto max-w-6xl px-6 py-14">
        <div className="pointer-events-none absolute left-8 top-16 h-10 w-10 rounded-lg border border-[#e6e3dc] bg-[#f9f7f2]/90" />
        <Reveal>
          <div className="mb-7">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#2f5e62]">Vorteile</p>
            <h2 className="mt-3 text-4xl leading-tight text-slate-900">Warum lokale Unternehmen mit mir arbeiten</h2>
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefitItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <motion.article
                  className="rounded-[1.5rem] border border-[#e8e4dc] bg-[#fcfbf8] p-6 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.72)]"
                  whileHover={{ y: -4, borderColor: "rgb(214 223 227)", boxShadow: "0 24px 40px -34px rgba(15,23,42,0.82)" }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="inline-flex rounded-xl border border-[#dae6e4] bg-[#f8fbfa] p-2 text-[#2f5e62]">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 text-xl text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <SectionDivider />

      <section className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#2f5e62]">Referenzen</p>
              <h2 className="mt-3 text-4xl leading-tight text-slate-900">Beispiele, wie Ihre Website aussehen kann</h2>
            </div>
            <Link href="/referenzen" className="text-sm font-semibold text-[#214f57] transition hover:text-[#173a42]">
              Alle Referenzen ansehen
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {references.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <motion.article
                className="group rounded-[1.65rem] border border-[#e8e4dc] bg-[#fdfcf9] p-5 shadow-[0_18px_44px_-36px_rgba(15,23,42,0.75)]"
                whileHover={{ y: -5, borderColor: "rgb(208 219 224)", boxShadow: "0 26px 40px -32px rgba(15,23,42,0.78)" }}
                transition={{ duration: 0.2 }}
              >
                {item.image ? (
                  item.demoLink ? (
                    <Link href={item.demoLink} className="relative block h-64 overflow-hidden rounded-2xl border border-[#e8e4dc] bg-[#f6f2ea]">
                      <Image src={item.image} alt={item.title} fill className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]" />
                    </Link>
                  ) : (
                    <div className="relative h-64 overflow-hidden rounded-2xl border border-[#e8e4dc] bg-[#f6f2ea]">
                      <Image src={item.image} alt={item.title} fill className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]" />
                    </div>
                  )
                ) : (
                  <WebsitePreview compact withOverlay />
                )}
                <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-[#2f5e62]">{item.branch}</p>
                <h3 className="mt-2 text-2xl text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                <p className="mt-4 inline-flex rounded-full border border-[#dee9ea] bg-[#f5f9f9] px-3 py-1 text-sm font-semibold text-[#234e55]">
                  {item.badge}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <SectionDivider />

      <section className="mx-auto max-w-6xl px-6 py-14">
        <Reveal>
          <div className="rounded-[2rem] border border-[#e7e2da] bg-[#fdfbf8] px-7 py-10 shadow-[0_26px_60px_-46px_rgba(15,23,42,0.85)] md:px-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#2f5e62]">Ablauf</p>
            <h2 className="mt-3 text-4xl leading-tight text-slate-900">So läuft die Zusammenarbeit ab</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {process.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.step} delay={index * 0.06}>
                    <motion.article
                      className="rounded-2xl border border-[#e8e4dc] bg-[#faf8f4] p-5"
                      whileHover={{ y: -3, borderColor: "rgb(214 223 227)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-[#2f5e62]">Schritt {item.step}</p>
                        <span className="inline-flex rounded-lg border border-[#d9e5e3] bg-[#f6fbfa] p-2 text-[#2f5e62]">
                          <Icon size={16} strokeWidth={1.8} />
                        </span>
                      </div>
                      <h3 className="mt-3 text-2xl text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </motion.article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Reveal>
      </section>

      <SectionDivider />

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-14 md:grid-cols-[1fr_1fr] md:items-center">
        <Reveal>
          <div className="rounded-[2rem] border border-[#e7e2da] bg-[#fcfbf8] p-7 shadow-[0_22px_56px_-44px_rgba(15,23,42,0.85)]">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#2f5e62]">Über mich</p>
            <h2 className="mt-3 text-4xl leading-tight text-slate-900">Persönlich, klar und zuverlässig</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Sie erhalten keine unpersönliche Agentur-Blackbox, sondern einen festen Partner für
              Konzeption, Design und technische Umsetzung. Ziel ist ein Auftritt, der <span className="keyword-emphasis">professionell wirkt</span> und <span className="keyword-emphasis">echte Anfragen erzeugt</span>.
            </p>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }} className="mt-6 inline-flex">
              <Link
                href="/ueber-mich"
                className="inline-flex rounded-full border border-[#d8d4cd] bg-[#fcfbf8] px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-[#c7d1d7] hover:bg-[#f8f7f3]"
              >
                Mehr über Martin Digital
              </Link>
            </motion.div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="rounded-[2rem] border border-[#e6e1d8] bg-gradient-to-br from-[#fbf5ea] via-[#f2f6f8] to-[#f8faf7] p-4 shadow-[0_22px_58px_-46px_rgba(15,23,42,0.9)]">
            <div className="overflow-hidden rounded-[1.4rem] border border-[#ece6dc] bg-[#fffdf9]">
              <Image
                src="/portrait-workspace.svg"
                alt="Portrait von Martin in einem freundlichen Arbeitsplatz"
                width={640}
                height={480}
                className="h-[340px] w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-8 pb-6">
        <Reveal>
          <div className="rounded-[2rem] border border-[#e4e7e4] bg-gradient-to-r from-[#f6f1e8] via-[#f4f7f8] to-[#f5f8f6] px-8 py-10 shadow-[0_24px_58px_-46px_rgba(15,23,42,0.8)] md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-4xl leading-tight text-slate-900">Bereit für einen starken Webauftritt?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700">
                Lassen Sie uns in einem kurzen Gespräch klären, welche Struktur und Gestaltung am
                besten zu Ihrem Unternehmen, Ihrer Praxis oder Ihrem Verein passt.
              </p>
            </div>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                href="/kontakt"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#183d4a] px-7 py-3 text-sm font-semibold text-white shadow-[0_14px_26px_-18px_rgba(24,61,74,0.62)] transition hover:bg-[#123541] md:mt-0"
              >
                Jetzt unverbindlich anfragen
                <span>→</span>
              </Link>
            </motion.div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
