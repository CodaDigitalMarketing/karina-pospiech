import type { Metadata } from "next";
import Link from "next/link";
import { exhibitions } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ausstellungen",
};

export default function ExhibitionsPage() {
  const years = [...new Set(exhibitions.map((e) => e.year))];

  return (
    <div className="pt-28 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-2">
            Ausstellungen
          </p>
          <h1 className="text-4xl md:text-5xl font-light">Ausstellungen</h1>
          <div className="h-px w-16 bg-accent mt-6" />
        </div>

        {/* Zeitleiste */}
        <div className="space-y-12">
          {years.map((year) => {
            const yearExhibitions = exhibitions.filter(
              (e) => e.year === year
            );
            return (
              <div key={year} className="grid grid-cols-[80px_1fr] gap-8">
                {/* Jahr */}
                <div className="pt-1">
                  <span className="text-2xl font-light text-accent">
                    {year}
                  </span>
                </div>

                {/* Ausstellungen dieses Jahres */}
                <div className="space-y-6 border-l border-border pl-8">
                  {yearExhibitions.map((exhibition, i) => (
                    <div key={i} className="relative">
                      {/* Punkt */}
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
                            {exhibition.venue}
                          </p>
                        </div>
                        <span className="text-[10px] tracking-widest uppercase text-muted whitespace-nowrap border border-border px-2 py-0.5 rounded-full">
                          {exhibition.type}
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
