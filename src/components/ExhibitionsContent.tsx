"use client";

import Link from "next/link";
import { exhibitions } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

export default function ExhibitionsContent() {
  const { language } = useLanguage();
  const de = language === "de";
  const years = [...new Set(exhibitions.map((e) => e.year))];

  return (
    <div className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-2">
            {de ? "Ausstellungen" : "Exhibitions"}
          </p>
          <h1 className="text-4xl md:text-5xl font-light">
            {de ? "Ausstellungen" : "Exhibitions"}
          </h1>
          <div className="h-px w-16 bg-accent mt-6" />
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {years.map((year) => {
            const yearExhibitions = exhibitions.filter(
              (e) => e.year === year
            );
            return (
              <div key={year} className="grid grid-cols-[80px_1fr] gap-8">
                {/* Year */}
                <div className="pt-1">
                  <span className="text-2xl font-light text-accent">
                    {year}
                  </span>
                </div>

                {/* Exhibitions for this year */}
                <div className="space-y-6 border-l border-border pl-8">
                  {yearExhibitions.map((exhibition, i) => (
                    <div key={i} className="relative">
                      {/* Dot */}
                      <div className="absolute -left-[33px] top-2 w-2 h-2 rounded-full bg-accent/40" />

                      <div className="flex items-start justify-between gap-4">
                        <div>
                          {exhibition.projectSlug ? (
                            <Link
                              href={`/projects/${exhibition.projectSlug}`}
                              className="text-base font-light hover:text-accent transition-colors"
                            >
                              {exhibition.title}
                            </Link>
                          ) : (
                            <h3 className="text-base font-light">
                              {exhibition.title}
                            </h3>
                          )}
                          <p className="text-sm text-muted mt-0.5">
                            {de ? exhibition.venue : exhibition.venueEn}
                          </p>
                        </div>
                        <span className="text-[10px] tracking-widest uppercase text-muted whitespace-nowrap border border-border px-2 py-0.5 rounded-full">
                          {de ? exhibition.type : exhibition.typeEn}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
