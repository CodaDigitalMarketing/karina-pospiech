"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="border-t border-border mt-16 sm:mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex items-center justify-center">
        <Link
          href="/datenschutz"
          className="text-xs text-muted hover:text-foreground tracking-wide transition-colors"
        >
          {language === "de" ? "Datenschutz" : "Privacy Policy"}
        </Link>
      </div>
    </footer>
  );
}
