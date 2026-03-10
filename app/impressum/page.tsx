import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum von Martin Digital (Platzhalter).",
};

export default function ImpressumPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl text-slate-900">Impressum</h1>
      <p className="mt-6 text-slate-600">
        Platzhalter: Hier können die rechtlich erforderlichen Impressumsangaben ergänzt werden.
      </p>
    </section>
  );
}
