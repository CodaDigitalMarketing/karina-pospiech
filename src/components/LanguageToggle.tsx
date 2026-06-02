"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 rounded-full border border-accent/60 text-xs font-medium tracking-widest uppercase text-accent hover:bg-accent hover:text-background transition-all duration-300 flex items-center gap-1.5 shrink-0"
      aria-label={language === "en" ? "Switch to German" : "Auf Englisch wechseln"}
      title={language === "en" ? "Deutsch" : "English"}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      {language === "en" ? "DE" : "EN"}
    </button>
  );
}
