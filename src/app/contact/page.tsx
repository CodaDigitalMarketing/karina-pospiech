import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-2">
            Kontakt
          </p>
          <h1 className="text-4xl md:text-5xl font-light">Kontakt</h1>
          <div className="h-px w-16 bg-accent mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Kontaktdaten */}
          <div className="space-y-10">
            <div>
              <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
                Künstlerin
              </h2>
              <p className="text-lg font-light">Dipl.-Ing. Karina Pośpiech</p>
            </div>

            <div>
              <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
                Atelier
              </h2>
              <address className="not-italic text-sm text-muted leading-relaxed">
                Kyffhäuserstraße 23
                <br />
                10781 Berlin
                <br />
                Raum 37
              </address>
            </div>

            <div>
              <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
                E-Mail
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
                Telefon
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
          <div className="flex items-start justify-center">
            <div className="w-56 aspect-[3/4] relative overflow-hidden bg-surface">
              <Image
                src="/images/scraped/bilder/b_karina_pospiech.jpg"
                alt="Karina Pośpiech"
                fill
                className="object-cover object-[33%_13%]"
                unoptimized
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-20 pt-8 border-t border-border space-y-3">
          <p className="text-xs text-muted leading-relaxed max-w-2xl">
            Copyright für alle Fotos, Webdesign und Texte außer bei dem Projekt
            PUTZ.FRAU und H.Ohde: Karina Pośpiech. PUTZ.FRAU — Barbara
            Kenneweg; H.Ohde — Julie August.
          </p>
          <p className="text-xs text-muted leading-relaxed max-w-2xl">
            Alle Rechte vorbehalten, insbesondere das Recht auf
            Vervielfältigung, Verbreitung und Übersetzung.
          </p>
          <p className="text-xs text-muted leading-relaxed max-w-2xl">
            Karina Pośpiech übernimmt keine Haftung für die Aktualität, die
            inhaltliche Richtigkeit sowie für die Vollständigkeit der auf ihrer
            Webseite bereitgestellten Informationen.
          </p>
        </div>
      </div>
    </div>
  );
}
