import type { Metadata } from "next";
import Image from "next/image";
import { cvData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Lebenslauf",
};

export default function CVPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-2">
            Lebenslauf
          </p>
          <h1 className="text-4xl md:text-5xl font-light">
            Karina Pośpiech
          </h1>
          <div className="h-px w-16 bg-accent mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12">
          {/* Portrait */}
          <div>
            <div className="aspect-[3/4] relative overflow-hidden bg-surface">
              <Image
                src="/images/scraped/bilder/b_karina_pospiech.jpg"
                alt="Karina Pośpiech"
                fill
                className="object-cover object-[33%_13%]"
                unoptimized
              />
            </div>
            <p className="text-xs text-muted mt-4 leading-relaxed">
              Dipl.-Ing. Karina Pośpiech
            </p>
          </div>

          {/* CV Inhalt */}
          <div className="space-y-12">
            {/* Bio */}
            <section>
              <p className="text-muted leading-relaxed">{cvData.bio}</p>
            </section>

            {/* Ausbildung */}
            <section>
              <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-6">
                Ausbildung
              </h2>
              <div className="space-y-4">
                {cvData.education.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 border-b border-border/50 pb-4"
                  >
                    <span className="text-sm text-muted whitespace-nowrap w-24">
                      {item.period}
                    </span>
                    <p className="text-sm">{item.title}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Mitgliedschaften */}
            <section>
              <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-6">
                Mitgliedschaften
              </h2>
              <div className="space-y-3">
                {cvData.memberships.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-sm text-muted">
                      Seit {item.since}
                    </span>
                    <p className="text-sm">{item.organization}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Wichtige Projekte */}
            <section>
              <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-6">
                Wichtige Projekte
              </h2>
              <ul className="space-y-3">
                {cvData.keyProjects.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted pl-4 border-l-2 border-accent/30"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Öffentliche Sammlungen */}
            <section>
              <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-6">
                Arbeiten in öffentlichen Sammlungen
              </h2>
              <ul className="space-y-2">
                {cvData.collections.map((item, i) => (
                  <li key={i} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Links */}
            <section>
              <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-6">
                Externe Links
              </h2>
              <div className="flex flex-wrap gap-4">
                {cvData.externalLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:text-accent-light transition-colors"
                  >
                    {link.label} &rarr;
                  </a>
                ))}
                <a
                  href="https://www.unisono-art.de/eva_scharrer_karina_pospiech.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:text-accent-light transition-colors"
                >
                  Text von Eva Scharrer, Kunsthistorikerin (PDF) &rarr;
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
