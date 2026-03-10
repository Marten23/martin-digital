import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Martin Digital für professionelle Webseiten für lokale Firmen, Praxen und Vereine.",
};

export default function KontaktPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">Kontakt</p>
      <h1 className="mt-4 text-4xl text-slate-900 md:text-5xl">Lassen Sie uns über Ihr Projekt sprechen.</h1>
      <p className="mt-5 max-w-2xl text-lg text-slate-600">
        Schreiben Sie mir kurz, was Sie planen. Ich melde mich zeitnah mit einer klaren
        Ersteinschätzung.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <form className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Name
              <input
                type="text"
                name="name"
                required
                className="rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                placeholder="Ihr Name"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              E-Mail
              <input
                type="email"
                name="email"
                required
                className="rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                placeholder="name@unternehmen.de"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Nachricht
              <textarea
                name="message"
                rows={5}
                required
                className="rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                placeholder="Worum geht es bei Ihrem Projekt?"
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
            >
              Anfrage senden
            </button>
          </div>
        </form>

        <aside className="rounded-2xl border border-slate-200 bg-white p-7">
          <h2 className="text-2xl text-slate-900">Kontaktdaten</h2>
          <ul className="mt-5 space-y-3 text-slate-700">
            <li>
              <span className="font-semibold">Martin Digital</span>
            </li>
            <li>Musterstraße 12, 12345 Musterstadt</li>
            <li>
              <a href="tel:+491701234567" className="transition hover:text-slate-900">
                +49 170 1234567
              </a>
            </li>
            <li>
              <a href="mailto:kontakt@martin-digital.de" className="transition hover:text-slate-900">
                kontakt@martin-digital.de
              </a>
            </li>
          </ul>
          <p className="mt-6 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
            Antwortzeit in der Regel innerhalb von 24 Stunden an Werktagen.
          </p>
        </aside>
      </div>
    </section>
  );
}
