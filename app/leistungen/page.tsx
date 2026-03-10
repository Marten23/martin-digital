import type { Metadata } from "next";
import Link from "next/link";
import { Code2, LayoutTemplate, Search, TabletSmartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Leistungen von Martin Digital: Webdesign, Webentwicklung, SEO-Basis und responsive Umsetzung für lokale Unternehmen und Praxen.",
};

const services = [
  {
    title: "Webdesign",
    text: "Individuelle Gestaltung mit klarer Struktur, hochwertiger Typografie und ruhiger Nutzerführung.",
    icon: LayoutTemplate,
  },
  {
    title: "Webentwicklung",
    text: "Technisch saubere Umsetzung mit Next.js, schneller Ladezeit und solider Wartbarkeit.",
    icon: Code2,
  },
  {
    title: "SEO-Basis",
    text: "Fundament für lokale Auffindbarkeit durch klare Inhalte, sauberen Aufbau und Performance.",
    icon: Search,
  },
  {
    title: "Responsive Design",
    text: "Perfekte Darstellung auf Desktop, Tablet und Smartphone für alle Zielgruppen.",
    icon: TabletSmartphone,
  },
];

export default function LeistungenPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#2f5e62]">Leistungen</p>
      <h1 className="mt-4 max-w-3xl text-4xl leading-tight text-slate-900 md:text-5xl">
        Alles, was Sie für einen professionellen Website-Auftritt brauchen.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-slate-600">
        Mein Fokus liegt auf hochwertigen Websites für lokale Firmen, Praxen und Vereine - klar,
        modern und auf Vertrauen sowie konkrete Anfragen ausgerichtet.
      </p>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article
              key={service.title}
              className="rounded-2xl border border-[#e8e4dc] bg-[#fcfbf8] p-7 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.72)] transition hover:-translate-y-1 hover:border-[#d4dde1] hover:shadow-[0_24px_40px_-34px_rgba(15,23,42,0.82)]"
            >
              <span className="inline-flex rounded-xl border border-[#dae6e4] bg-[#f8fbfa] p-2 text-[#2f5e62]">
                <Icon size={18} strokeWidth={1.8} />
              </span>
              <h2 className="mt-4 text-2xl text-slate-900">{service.title}</h2>
              <p className="mt-3 text-slate-600">{service.text}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-12 rounded-2xl border border-[#dce7e6] bg-gradient-to-r from-[#f6f1e8] via-[#f4f7f8] to-[#f5f8f6] px-8 py-10 text-slate-900">
        <h2 className="text-3xl leading-tight">Lassen Sie uns Ihr Projekt strukturiert planen.</h2>
        <p className="mt-3 max-w-2xl text-slate-700">
          Sie erhalten eine klare Einschätzung zum passenden Umfang und zur idealen Struktur Ihrer Website.
        </p>
        <Link
          href="/kontakt"
          className="mt-6 inline-flex rounded-full bg-[#183d4a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#123541]"
        >
          Jetzt Kontakt aufnehmen
        </Link>
      </div>
    </section>
  );
}

