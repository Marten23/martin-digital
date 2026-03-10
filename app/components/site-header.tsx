"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/", label: "Startseite" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/referenzen", label: "Referenzen" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-[#e7e3dc]/90 bg-[#fbf8f4]/88 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "shadow-[0_12px_30px_-24px_rgba(15,23,42,0.45)]" : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900">
          Martin Digital
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Hauptnavigation">
            <ul className="flex flex-wrap items-center justify-end gap-2 text-sm font-medium text-slate-600 md:gap-3">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`rounded-full px-3 py-2 transition ${
                        isActive
                          ? "bg-[#183d4a] text-white"
                          : "hover:bg-[#f2f2ee] hover:text-slate-900"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link
            href="/kontakt"
            className="hidden rounded-full bg-[#183d4a] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_20px_-16px_rgba(24,61,74,0.7)] transition hover:bg-[#123541] md:inline-flex"
          >
            Anfrage
          </Link>
        </div>
      </div>
    </header>
  );
}

