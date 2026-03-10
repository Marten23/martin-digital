import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[#e8e3db] bg-[#faf7f2]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="text-lg font-semibold text-slate-900">Martin Digital</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
            Webdesign und Webentwicklung für lokale Unternehmen, Praxen und Vereine.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Navigation</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-slate-900">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Rechtliches</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>
              <Link href="/impressum" className="transition hover:text-slate-900">
                Impressum
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="transition hover:text-slate-900">
                Datenschutz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

