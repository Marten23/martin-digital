"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Bolt,
  CalendarDays,
  CalendarClock,
  CheckCircle2,
  CircleAlert,
  Clock3,
  House,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const services = [
  {
    title: "Elektroinstallationen",
    text: "Neuinstallation, Erweiterung und Modernisierung in Wohn- und Gewerbeobjekten.",
    icon: Bolt,
  },
  {
    title: "Smarthome & Steuerung",
    text: "Intelligente Licht-, Rolladen- und Sicherheitssteuerung für Ihr Objekt.",
    icon: House,
  },
  {
    title: "Wartung & Störung",
    text: "Schnelle Fehleranalyse und fachgerechte Reparatur bei Ausfall oder Defekt.",
    icon: Wrench,
  },
  {
    title: "Sicherheitsprüfung",
    text: "Prüfung nach aktuellen Standards, damit Ihre Anlage sicher und belastbar bleibt.",
    icon: ShieldCheck,
  },
];

const safetyPoints = [
  "Arbeiten nach VDE-Richtlinien",
  "Dokumentierte Sicherheitschecks",
  "Klare, transparente Kostenkommunikation",
  "Verlässliche Termine und saubere Ausführung",
];

const statusCycle = ["frei", "belegt", "wenig", "frei", "wenig", "belegt", "belegt"] as const;

const availability = Array.from({ length: 14 }, (_, index) => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + index);
  const status = statusCycle[index % statusCycle.length];
  const day = date.toLocaleDateString("de-DE", { weekday: "short" }).replace(".", "");
  const dateLabel = date.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit" });

  const window =
    status === "frei"
      ? "09:00-11:30"
      : status === "wenig"
        ? "14:00-16:00"
        : index % 6 === 0 || index % 7 === 0
          ? "Notdienst"
          : "Ausgebucht";

  return { day, date: `${dateLabel}.`, status, window };
});

function CableBackground() {
  const { scrollY } = useScroll();
  const cableY = useTransform(scrollY, [0, 1800], [0, 180]);
  const cableYTwo = useTransform(scrollY, [0, 1800], [0, -120]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.svg
        style={{ y: cableY }}
        className="absolute -left-40 top-20 h-[720px] w-[1200px] opacity-70"
        viewBox="0 0 1200 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cableMain" x1="120" y1="120" x2="840" y2="560" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f8b400" />
            <stop offset="0.35" stopColor="#4bc5ff" />
            <stop offset="0.7" stopColor="#ff5a5f" />
            <stop offset="1" stopColor="#7dd56f" />
          </linearGradient>
        </defs>
        <path d="M40 160C220 170 220 400 420 410C640 420 640 180 860 190" stroke="url(#cableMain)" strokeWidth="16" strokeLinecap="round" />
        <motion.path
          d="M40 160C220 170 220 400 420 410C640 420 640 180 860 190"
          stroke="#fff7c2"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="48 920"
          animate={{ strokeDashoffset: [0, -968], opacity: [0.25, 0.9, 0.25] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
        />
        <path d="M860 190L940 150" stroke="#f8b400" strokeWidth="7" strokeLinecap="round" />
        <path d="M860 190L942 198" stroke="#4bc5ff" strokeWidth="7" strokeLinecap="round" />
        <path d="M860 190L930 246" stroke="#ff5a5f" strokeWidth="7" strokeLinecap="round" />
      </motion.svg>

      <motion.svg
        style={{ y: cableYTwo }}
        className="absolute right-[-260px] top-[410px] h-[620px] w-[980px] opacity-55"
        viewBox="0 0 980 620"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cableSecondary" x1="120" y1="300" x2="860" y2="260" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ff7b00" />
            <stop offset="0.5" stopColor="#8ad15f" />
            <stop offset="1" stopColor="#5cc3ff" />
          </linearGradient>
        </defs>
        <path d="M940 220C760 220 720 410 530 410C340 410 300 270 120 270" stroke="url(#cableSecondary)" strokeWidth="14" strokeLinecap="round" />
        <motion.path
          d="M940 220C760 220 720 410 530 410C340 410 300 270 120 270"
          stroke="#d7f7ff"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray="42 860"
          animate={{ strokeDashoffset: [0, 902], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
        />
        <path d="M120 270L56 236" stroke="#ff7b00" strokeWidth="6" strokeLinecap="round" />
        <path d="M120 270L54 276" stroke="#8ad15f" strokeWidth="6" strokeLinecap="round" />
      </motion.svg>
    </div>
  );
}

export function ElektroDemoClient() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0e1218] text-[#e8ebf0]">
      <CableBackground />

      <header className="sticky top-0 z-30 border-b border-[#252b35] bg-[#10151d]/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-semibold tracking-wide text-[#f8b400]">Elektro Lenz</p>
            <p className="text-xs text-[#98a2b3]">Handwerk. Power. Sicherheit.</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-[#c4cbd6] md:flex">
            <a href="#leistungen" className="transition hover:text-white">Leistungen</a>
            <a href="#sicherheit" className="transition hover:text-white">Sicherheit</a>
            <a href="#zeiten" className="transition hover:text-white">Zeiten</a>
            <a href="#kontakt" className="transition hover:text-white">Kontakt</a>
          </nav>
          <Link
            href="#kontakt"
            className="rounded-full bg-[#f8b400] px-4 py-2 text-sm font-semibold text-[#1a1a1a] transition hover:bg-[#ffcb45]"
          >
            Auftrag anfragen
          </Link>
        </div>
      </header>

      <main className="relative z-10">
        <section className="relative overflow-hidden border-b border-[#232936] bg-gradient-to-b from-[#121926]/95 to-[#0d1118]/95">
          <div className="pointer-events-none absolute -top-10 -left-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(248,180,0,0.16),_transparent_70%)] blur-3xl" />
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-8 md:grid-cols-[1fr_1fr] md:items-center md:py-12">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#3b465a] bg-[#171f2d] px-4 py-1 text-sm font-semibold text-[#f8c65b]">
                <CircleAlert size={14} /> Starkstrom? Nur vom Profi.
              </p>
              <h1 className="mt-6 text-4xl leading-tight text-white md:text-6xl">
                Elektrik ist kraftvoll, wir sorgen dafür, dass sie sicher funktioniert.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#c3cad5]">
                Ob Neuinstallation, Störung oder Modernisierung, wir sind der Partner für lokale
                Unternehmen, Baustellen und Privathaushalte, die klare Lösungen brauchen.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#kontakt" className="rounded-full bg-[#f8b400] px-6 py-3 text-sm font-semibold text-[#1a1a1a] transition hover:bg-[#ffcb45]">
                  Erstkontakt starten
                </Link>
                <Link href="#leistungen" className="rounded-full border border-[#3b465a] bg-[#151d2a] px-6 py-3 text-sm font-semibold text-[#dce2ec] transition hover:bg-[#1a2332]">
                  Leistungen ansehen
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#2c3342] bg-[#141a25] p-5 shadow-[0_24px_50px_-36px_rgba(0,0,0,0.9)]">
              <div className="relative overflow-hidden rounded-2xl border border-[#343d4f]">
                <Image
                  src="/images/Elektiker.png"
                  alt="Elektriker im Einsatz"
                  width={1400}
                  height={900}
                  priority
                  className="h-auto w-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f141d]/85 via-[#111a27]/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center justify-between text-sm text-[#f8c65b]">
                    <span className="inline-flex items-center gap-2"><Bolt size={15} /> Einsatzstatus</span>
                    <span className="rounded-full bg-[#2f3748] px-3 py-1 text-xs text-[#d1d8e3]">24h Rückruf</span>
                  </div>
                  <p className="mt-4 text-2xl font-semibold text-white">Schnelle Hilfe bei Stromproblemen</p>
                  <p className="mt-3 text-sm text-[#aab3c2]">Unsere Teams sind im Einsatz und koordinieren Termine strukturiert.</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-[#323b4c] bg-[#121824] p-4">
                  <p className="text-xs text-[#8c97a9]">Heute disponiert</p>
                  <p className="mt-2 text-xl font-semibold text-white">12 Einsätze</p>
                </div>
                <div className="rounded-xl border border-[#323b4c] bg-[#121824] p-4">
                  <p className="text-xs text-[#8c97a9]">Notdienstfenster</p>
                  <p className="mt-2 text-xl font-semibold text-white">06:30-20:00</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="leistungen" className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#f8c65b]">Leistungen</p>
          <h2 className="mt-3 text-4xl text-white">Starke Lösungen für Elektro, Sanierung und Sicherheit</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-2xl border border-[#2c3342] bg-[#141b27] p-6 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:border-[#47516a]"
                >
                  <span className="inline-flex rounded-lg border border-[#3a4458] bg-[#1b2432] p-2 text-[#f8c65b]">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-4 text-xl text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#b3bdcc]">{service.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section id="sicherheit" className="border-y border-[#232936] bg-[#101722]/95 py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[0.95fr_1.05fr] md:items-start">
            <div className="rounded-3xl border border-[#2f3747] bg-[#151c29] p-7">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#f8c65b]">Gefahr & Sicherheit</p>
              <h2 className="mt-3 text-3xl text-white">Elektrizität ist kein Spiel, wir arbeiten mit System.</h2>
              <p className="mt-4 text-[#b5bfcd]">
                Wo Strom zur Gefahr werden kann, sorgen wir für Sicherheit, klare Prozesse und fachgerechte Ausführung.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {safetyPoints.map((point) => (
                <div key={point} className="rounded-xl border border-[#2f3747] bg-[#151c29] px-4 py-3 text-sm text-[#d5dce7]">
                  <span className="inline-flex items-center gap-2"><CheckCircle2 size={14} className="text-[#f8c65b]" /> {point}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="zeiten" className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#f8c65b]">Erreichbarkeit</p>
          <h2 className="mt-3 text-4xl text-white">Bürozeiten und Einsatzbetrieb</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-[1fr_1fr]">
            <article className="rounded-2xl border border-[#2c3342] bg-[#141b27] p-6">
              <p className="text-lg font-semibold text-white">Bürozeiten (Ansprechpartner vor Ort)</p>
              <ul className="mt-4 space-y-2 text-sm text-[#c5cedb]">
                <li className="flex items-center gap-2"><Clock3 size={14} className="text-[#f8c65b]" /> Montag-Freitag: 07:30-17:30 Uhr</li>
                <li className="flex items-center gap-2"><Phone size={14} className="text-[#f8c65b]" /> Telefon: 030 45678900</li>
                <li className="flex items-center gap-2"><CalendarClock size={14} className="text-[#f8c65b]" /> Terminabstimmung: 08:00-16:00 Uhr</li>
              </ul>
            </article>

            <article className="rounded-2xl border border-[#2c3342] bg-[#141b27] p-6">
              <p className="text-lg font-semibold text-white">Wenn wir gerade nicht im Büro sind</p>
              <p className="mt-3 text-sm text-[#b7c0cf]">Unsere Teams sind in der Regel direkt im Kundeneinsatz.</p>
              <div className="mt-4 rounded-xl border border-[#313a4c] bg-[#0f1520] p-4">
                <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#f8c65b]"><Truck size={15} /> Einsatzstatus</p>
                <p className="mt-2 text-sm text-[#d2dae7]">Aktuell im Einsatz, Rückruf in der Regel innerhalb von 30 bis 60 Minuten.</p>
              </div>
            </article>
          </div>

          <div className="mt-6 rounded-2xl border border-[#2c3342] bg-[#141b27] p-6">
            <p className="inline-flex items-center gap-2 text-lg font-semibold text-white">
              <CalendarDays size={18} className="text-[#f8c65b]" /> Terminlage der nächsten 2 Wochen
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 md:grid-cols-7">
              {availability.map((slot) => (
                <article key={`${slot.day}-${slot.date}`} className="rounded-lg border border-[#323b4c] bg-[#0f1520] p-2">
                  <p className="text-xs text-[#95a1b5]">{slot.day}</p>
                  <p className="mt-1 text-xs font-semibold text-white">{slot.date}</p>
                  <span
                    className={`mt-2 inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                      slot.status === "frei"
                        ? "bg-[#18321f] text-[#97e5af]"
                        : slot.status === "wenig"
                          ? "bg-[#392f14] text-[#ffd77a]"
                          : "bg-[#34202a] text-[#ffb9c4]"
                    }`}
                  >
                    {slot.status === "frei" ? "Frei" : slot.status === "wenig" ? "Wenige Slots" : "Belegt"}
                  </span>
                  <p className="mt-1 text-[11px] text-[#b7c1d0]">{slot.window}</p>
                </article>
              ))}
            </div>
            <p className="mt-4 text-xs text-[#98a3b6]">
              Demo-Hinweis: In der Live-Version gibt der Elektriker den passenden Termin frei, danach wird die Verfügbarkeit synchronisiert.
            </p>
          </div>
        </section>

        <section id="kontakt" className="border-t border-[#232936] bg-[#101722]/95 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-3xl border border-[#2d3546] bg-[#141b27] p-8 shadow-[0_22px_52px_-35px_rgba(0,0,0,0.9)]">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#f8c65b]">Kontaktformular</p>
              <h2 className="mt-3 text-4xl text-white">Schildern Sie Ihr Anliegen, wir planen den Termin mit Ihnen.</h2>
              <p className="mt-4 max-w-2xl text-sm text-[#b8c2d1]">
                Mit Ihrer Erstbeschreibung und bis zu drei Wunschzeiten können wir den Einsatz direkt einschätzen und schneller einen passenden Termin koordinieren.
              </p>

              <form className="mt-8 grid gap-4 md:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-[#d5dce7]">
                  Name
                  <input type="text" name="name" required className="rounded-xl border border-[#374055] bg-[#0f1520] px-4 py-3 text-[#edf1f7] outline-none focus:border-[#f8c65b]" placeholder="Ihr Name" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-[#d5dce7]">
                  Telefonnummer
                  <input type="tel" name="phone" required className="rounded-xl border border-[#374055] bg-[#0f1520] px-4 py-3 text-[#edf1f7] outline-none focus:border-[#f8c65b]" placeholder="030 ..." />
                </label>
                <label className="grid gap-2 text-sm font-medium text-[#d5dce7] md:col-span-2">
                  Objekt / Einsatzort
                  <input type="text" name="location" required className="rounded-xl border border-[#374055] bg-[#0f1520] px-4 py-3 text-[#edf1f7] outline-none focus:border-[#f8c65b]" placeholder="Adresse oder Baustelle" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-[#d5dce7] md:col-span-2">
                  Schilderung des Problems
                  <textarea name="details" rows={5} required className="rounded-xl border border-[#374055] bg-[#0f1520] px-4 py-3 text-[#edf1f7] outline-none focus:border-[#f8c65b]" placeholder="Was ist passiert? Seit wann? Gibt es Gefahr oder kompletten Ausfall?" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-[#d5dce7]">
                  Wunschtermin 1
                  <input type="datetime-local" name="desiredSlot1" className="rounded-xl border border-[#374055] bg-[#0f1520] px-4 py-3 text-[#edf1f7] outline-none focus:border-[#f8c65b]" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-[#d5dce7]">
                  Wunschtermin 2
                  <input type="datetime-local" name="desiredSlot2" className="rounded-xl border border-[#374055] bg-[#0f1520] px-4 py-3 text-[#edf1f7] outline-none focus:border-[#f8c65b]" />
                </label>
                <label className="grid gap-2 text-sm font-medium text-[#d5dce7] md:col-span-2">
                  Wunschtermin 3 (optional)
                  <input type="datetime-local" name="desiredSlot3" className="rounded-xl border border-[#374055] bg-[#0f1520] px-4 py-3 text-[#edf1f7] outline-none focus:border-[#f8c65b]" />
                </label>
                <label className="md:col-span-2 flex items-start gap-3 rounded-xl border border-[#313b50] bg-[#101722] p-4 text-sm text-[#cad3e0]">
                  <input type="checkbox" required className="mt-0.5 h-4 w-4 rounded border-[#4a566d] bg-[#0f1520] accent-[#f8c65b]" />
                  <span>
                    Ich stimme zu, dass meine Angaben zur Terminabstimmung verarbeitet werden. Es werden nur Verfügbarkeiten und keine Kundendaten im Kalender angezeigt.
                  </span>
                </label>

                <button
                  type="submit"
                  className="md:col-span-2 mt-2 rounded-full bg-[#f8b400] px-6 py-3 text-sm font-semibold text-[#1a1a1a] transition hover:bg-[#ffcb45]"
                >
                  Anfrage absenden und Terminvorschläge anfragen
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
