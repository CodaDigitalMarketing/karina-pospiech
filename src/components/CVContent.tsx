"use client";

import Image from "next/image";
import { cvData } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

export default function CVContent() {
  const { language } = useLanguage();
  const de = language === "de";

  return (
    <div className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-2">
            {de ? "Lebenslauf" : "Curriculum Vitae"}
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light">
            Karina Pośpiech
          </h1>
          <div className="h-px w-16 bg-accent mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 sm:gap-12">
          {/* Portrait */}
          <div>
            <div className="aspect-[3/4] relative overflow-hidden bg-surface max-w-[200px] sm:max-w-none">
              <Image
                src="/images/original/Portrait.jpeg"
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

          {/* CV Content */}
          <div className="space-y-8 sm:space-y-12">
            {/* Bio */}
            <section>
              <p className="text-muted leading-relaxed">
                {de ? cvData.bio : cvData.bioEn}
              </p>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-6">
                {de ? "Ausbildung" : "Education"}
              </h2>
              <div className="space-y-4">
                {cvData.education.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 border-b border-border/50 pb-4"
                  >
                    <span className="text-xs sm:text-sm text-muted whitespace-nowrap sm:w-24">
                      {item.period}
                    </span>
                    <p className="text-sm">
                      {de ? item.title : item.titleEn}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Memberships */}
            <section>
              <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-6">
                {de ? "Mitgliedschaften" : "Memberships"}
              </h2>
              <div className="space-y-3">
                {cvData.memberships.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="text-sm text-muted">
                      {de ? "Seit" : "Since"} {item.since}
                    </span>
                    <p className="text-sm">{item.organization}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Projects */}
            <section>
              <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-6">
                {de ? "Wichtige Projekte" : "Key Projects"}
              </h2>
              <ul className="space-y-3">
                {(de ? cvData.keyProjects : cvData.keyProjectsEn).map(
                  (item, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted pl-4 border-l-2 border-accent/30"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </section>

            {/* Public Collections */}
            <section>
              <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-6">
                {de
                  ? "Arbeiten in öffentlichen Sammlungen"
                  : "Works in Public Collections"}
              </h2>
              <ul className="space-y-2">
                {(de ? cvData.collections : cvData.collectionsEn).map(
                  (item, i) => (
                    <li key={i} className="text-sm text-muted">
                      {item}
                    </li>
                  )
                )}
              </ul>
            </section>

            {/* Links */}
            <section>
              <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-6">
                {de ? "Externe Links" : "External Links"}
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
                  {de
                    ? "Text von Eva Scharrer, Kunsthistorikerin (PDF)"
                    : "Text by Eva Scharrer, Art Historian (PDF)"}{" "}
                  &rarr;
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
