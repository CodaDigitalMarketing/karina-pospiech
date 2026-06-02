"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type Language = "en" | "de";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "de" : "en"));
  }, []);

  return (
    <LanguageContext value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
