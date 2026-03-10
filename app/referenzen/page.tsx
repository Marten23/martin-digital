import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Einblick in Beispielprojekte von Martin Digital für lokale Unternehmen, Praxen und Vereine.",
};

const projects = [
  {
    name: "Praxis am Stadtpark",
    type: "Arztpraxis",
    text: "Neue Website mit Termin-Anfrage und klarer Struktur.",
    badge: "+42 % mehr Kontaktanfragen",
  },
  {
    name: "Elektro Lenz",
    type: "Dienstleister",
    text: "Neuer Auftritt mit Leistungsseiten und sauberer Nutzerführung.",
    badge: "Mehr mobile Projektanfragen",
  },
  {
    name: "SV Blau-Weiß",
    type: "Verein",
    text: "Moderner Vereinsauftritt mit News und Ansprechpartnern.",
    badge: "Bessere Information für Mitglieder",
  },
  {
    name: "Bäckerei Huber",
    type: "Lokales Unternehmen",
    text: "Relaunch mit Filialseiten und klarer Angebotsstruktur.",
    badge: "Höhere Verweildauer auf Mobilgeräten",
  },
];

function WebsitePreview() {
  return (
    <div className="rounded-xl border border-[#e6e1d9] bg-[#fbfaf7] p-3">
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
    </div>
  );
}

export default function ReferenzenPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#2f5e62]">Referenzen</p>
      <h1 className="mt-4 text-4xl leading-tight text-slate-900 md:text-5xl">Beispielprojekte mit klarer Wirkung.</h1>
      <p className="mt-5 max-w-2xl text-lg text-slate-600">
        Diese Beispiele zeigen, wie lokale Zielgruppen durch einen strukturierten Auftritt schneller
        Vertrauen aufbauen und leichter Kontakt aufnehmen.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-2xl border border-[#e8e4dc] bg-[#fdfcf9] p-6 shadow-[0_18px_44px_-36px_rgba(15,23,42,0.75)] transition hover:-translate-y-1 hover:border-[#d4dde1] hover:shadow-[0_26px_40px_-32px_rgba(15,23,42,0.78)]"
          >
            <WebsitePreview />
            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-[#2f5e62]">{project.type}</p>
            <h2 className="mt-2 text-2xl text-slate-900">{project.name}</h2>
            <p className="mt-3 text-slate-600">{project.text}</p>
            <p className="mt-4 inline-flex rounded-full border border-[#dee9ea] bg-[#f5f9f9] px-3 py-1 text-sm font-semibold text-[#234e55]">
              {project.badge}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/kontakt"
          className="inline-flex rounded-full bg-[#183d4a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#123541]"
        >
          Ähnliches Projekt anfragen
        </Link>
      </div>
    </section>
  );
}

