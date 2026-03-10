import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzhinweise von Martin Digital (Platzhalter).",
};

export default function DatenschutzPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl text-slate-900">Datenschutz</h1>
      <p className="mt-6 text-slate-600">
        Platzhalter: Hier können die vollständigen Datenschutzhinweise ergänzt werden.
      </p>
    </section>
  );
}
