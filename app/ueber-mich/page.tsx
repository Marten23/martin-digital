import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Lernen Sie Martin Digital kennen: persoenlicher Ansprechpartner für hochwertige Webseiten mit Fokus auf Vertrauen und Ergebnisse.",
};

const values = [
  "Persönliche Zusammenarbeit auf Augenhöhe",
  "Klarer Ablauf von Planung bis Launch",
  "Transparente Kommunikation und verlässliche Umsetzung",
];

export default function UeberMichPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#2f5e62]">Über mich</p>
          <h1 className="mt-4 text-4xl leading-tight text-slate-900 md:text-5xl">
            Ihr persönlicher Partner für starke digitale Auftritte.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Ich bin Martin und unterstütze lokale Unternehmen, Praxen und Vereine dabei, im Web
            professionell und vertrauenswürdig aufzutreten. Mein Anspruch: Webseiten, die nicht nur
            gut aussehen, sondern auch messbar funktionieren.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Sie erhalten keine Agentur-Blackbox, sondern direkte Zusammenarbeit, klare
            Entscheidungen und eine Lösung, die zu Ihrem Alltag passt.
          </p>
          <Link
            href="/kontakt"
            className="mt-8 inline-flex rounded-full bg-[#183d4a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#123541]"
          >
            Kennenlerngespräch vereinbaren
          </Link>
        </div>

        <aside className="rounded-3xl border border-[#e7e2da] bg-[#fcfbf8] p-6 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.72)]">
          <div className="overflow-hidden rounded-2xl border border-[#ece6dc] bg-[#fffdf9]">
            <Image
              src="/portrait-workspace.svg"
              alt="Martin an einem freundlichen Arbeitsplatz"
              width={640}
              height={480}
              className="h-56 w-full object-cover"
            />
          </div>
          <h2 className="mt-5 text-2xl text-slate-900">Was Ihnen wichtig sein darf</h2>
          <ul className="mt-5 space-y-3 text-slate-700">
            {values.map((item) => (
              <li key={item} className="rounded-xl border border-[#e8e4dc] bg-[#f8f6f2] px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-600">
            Schwerpunkt: Webdesign, Webentwicklung und Relaunch für lokale Zielgruppen.
          </p>
        </aside>
      </div>
    </section>
  );
}

