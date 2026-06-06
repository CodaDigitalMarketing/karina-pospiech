"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function ContactContent() {
  const { language } = useLanguage();
  const de = language === "de";

  return (
    <div className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-2">
            {de ? "Kontakt" : "Contact"}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light">
            {de ? "Kontakt" : "Contact"}
          </h1>
          <div className="h-px w-16 bg-accent mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16">
          {/* Contact info */}
          <div className="space-y-8 sm:space-y-10">
            <div>
              <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
                {de ? "Künstlerin" : "Artist"}
              </h2>
              <p className="text-lg font-light">Dipl.-Ing. Karina Pośpiech</p>
            </div>

            <div>
              <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
                {de ? "Atelier" : "Studio"}
              </h2>
              <address className="not-italic text-sm text-muted leading-relaxed">
                Kyffhäuserstraße 23
                <br />
                10781 Berlin
                <br />
                {de ? "Raum" : "Room"} 37
              </address>
            </div>

            <div>
              <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
                {de ? "E-Mail" : "Email"}
              </h2>
              <a
                href="mailto:art@unisono-art.de"
                className="text-sm hover:text-accent transition-colors"
              >
                art@unisono-art.de
              </a>
            </div>

            <div>
              <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
                {de ? "Telefon" : "Phone"}
              </h2>
              <a
                href="tel:+493023628197"
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                +49 (0)30 2362 8197
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="flex items-start justify-center md:justify-start">
            <div className="w-40 sm:w-56 aspect-[3/4] relative overflow-hidden bg-surface">
              <Image
                src="/images/original/Portrait.jpeg"
                alt="Karina Pośpiech"
                fill
                className="object-cover object-[33%_13%]"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 sm:mt-20 pt-8 border-t border-border space-y-3">
          <p className="text-xs text-muted leading-relaxed max-w-2xl">
            {de
              ? "Copyright für alle Fotos, Webdesign und Texte außer bei dem Projekt PUTZ.FRAU und H.Ohde: Karina Pośpiech. PUTZ.FRAU — Barbara Kenneweg; H.Ohde — Julie August."
              : "Copyright for all photos, web design and texts except for the projects PUTZ.FRAU and H.Ohde: Karina Pośpiech. PUTZ.FRAU — Barbara Kenneweg; H.Ohde — Julie August."}
          </p>
          <p className="text-xs text-muted leading-relaxed max-w-2xl">
            {de
              ? "Alle Rechte vorbehalten, insbesondere das Recht auf Vervielfältigung, Verbreitung und Übersetzung."
              : "All rights reserved, in particular the right to reproduction, distribution, and translation."}
          </p>
          <p className="text-xs text-muted leading-relaxed max-w-2xl">
            {de
              ? "Karina Pośpiech übernimmt keine Haftung für die Aktualität, die inhaltliche Richtigkeit sowie für die Vollständigkeit der auf ihrer Webseite bereitgestellten Informationen."
              : "Karina Pośpiech assumes no liability for the currency, accuracy, or completeness of the information provided on her website."}
          </p>
        </div>
      </div>
    </div>
  );
}
