"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const links = [
  { href: "/", label: "Karina Pośpiech", labelDe: "Karina Pośpiech" },
  { href: "/projects", label: "Projects", labelDe: "Projekte" },
  { href: "/exhibitions", label: "Exhibitions", labelDe: "Ausstellungen" },
  { href: "/cv", label: "CV", labelDe: "Lebenslauf" },
  { href: "/contact", label: "Contact", labelDe: "Kontakt" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 relative">
      <nav className="max-w-6xl mx-auto px-6 pr-28 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium tracking-widest uppercase text-foreground hover:text-accent transition-colors"
        >
          Karina Pośpiech
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.slice(1).map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xs tracking-widest uppercase transition-colors ${
                    active
                      ? "text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {language === "de" ? link.labelDe : link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-foreground transition-transform ${
              open ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-foreground transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-px bg-foreground transition-transform ${
              open ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>

      </nav>

      {/* Language toggle — pinned to far right of header */}
      <div className="absolute right-6 top-0 bottom-0 flex items-center">
        <LanguageToggle />
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.slice(1).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors"
                >
                  {language === "de" ? link.labelDe : link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
