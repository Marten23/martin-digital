import type { Metadata } from "next";
import Link from "next/link";
import { ChartColumn, CircleCheck, Compass, Handshake, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Demo Nordlicht Beratung",
  description: "Demo-Landingpage fuer eine Unternehmensberatung als Referenz-Mockup.",
};

const focus = [
  { title: "Strategieentwicklung", icon: Compass },
  { title: "Prozessoptimierung", icon: ChartColumn },
  { title: "Change-Begleitung", icon: Handshake },
  { title: "Workshops", icon: Lightbulb },
];

export default function BeratungDemoPage() {
  return (
    <div className="min-h-screen bg-[#f7f5f1] text-slate-800">
      <header className="border-b border-[#e3e1db] bg-[#fdfbf8]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="font-semibold text-[#1e3a45]">Nordlicht Beratung</div>
          <Link href="#kontakt" className="rounded-full bg-[#1e3a45] px-4 py-2 text-sm font-semibold text-white">Erstgespraech</Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-14">
        <section className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[#335d6c]">Business Consulting</p>
            <h1 className="mt-4 text-4xl leading-tight text-slate-900 md:text-5xl">Klarheit in Strategie und Struktur fuer wachsende Unternehmen</h1>
            <p className="mt-4 text-slate-600">Professionelles Demo-Mockup fuer Beratungsunternehmen mit hochwertiger, ruhiger Bildsprache.</p>
            <div className="mt-6 flex gap-3">
              <Link href="#kontakt" className="rounded-full bg-[#1e3a45] px-6 py-3 text-sm font-semibold text-white">Anfrage senden</Link>
              <Link href="#leistungen" className="rounded-full border border-[#d8d6cf] bg-[#fcfbf8] px-6 py-3 text-sm font-semibold text-slate-800">Leistungen</Link>
            </div>
          </div>
          <div className="h-72 rounded-3xl border border-[#e3e1db] bg-gradient-to-br from-[#e9eef2] via-[#f7f5f1] to-[#efe7da]" />
        </section>

        <section id="leistungen" className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {focus.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-2xl border border-[#e5e2dc] bg-[#fcfbf8] p-5">
                <Icon size={18} className="text-[#335d6c]" />
                <h2 className="mt-3 font-semibold text-slate-900">{item.title}</h2>
              </article>
            );
          })}
        </section>

        <section id="kontakt" className="mt-14 rounded-3xl border border-[#e4e1da] bg-[#fbf9f5] px-8 py-10">
          <h2 className="text-3xl text-slate-900">Zusammenarbeit mit klarer Linie</h2>
          <ul className="mt-4 space-y-2 text-slate-700">
            <li className="flex items-center gap-2"><CircleCheck size={16} className="text-[#335d6c]" /> Strukturierte Analyse in der Startphase</li>
            <li className="flex items-center gap-2"><CircleCheck size={16} className="text-[#335d6c]" /> Transparente Priorisierung und Roadmap</li>
            <li className="flex items-center gap-2"><CircleCheck size={16} className="text-[#335d6c]" /> Messbare Ergebnisse in der Umsetzung</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
