"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

export default function HomeContent() {
  const featured = projects.slice(0, 3);
  const { language } = useLanguage();
  const de = language === "de";

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/5 to-transparent pointer-events-none" />
        <div className="relative text-center max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-6 animate-fade-in-up opacity-0">
            {de ? "Europäische Künstlerprojekte" : "European Art Projects"}
          </p>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-tight mb-6 animate-fade-in-up opacity-0 animate-delay-100">
            Karina
            <br />
            Pośpiech
          </h1>
          <div className="h-px bg-accent mx-auto animate-line-reveal mb-8" />
          <p className="text-sm md:text-base text-muted leading-relaxed max-w-xl mx-auto animate-fade-in-up opacity-0 animate-delay-200">
            {de
              ? "Filme · Rauminstallationen · Fotografie · Siebdruck"
              : "Film · Room Installations · Photography · Screen Printing"}
          </p>
          <p className="text-xs text-muted/60 mt-2 animate-fade-in-up opacity-0 animate-delay-300">
            {de
              ? "Deutsch-polnisches Künstlerinnenprojekt"
              : "German-Polish Artist Project"}
          </p>
          <div className="mt-12 animate-fade-in-up opacity-0 animate-delay-400">
            <Link
              href="/projects"
              className="inline-block text-xs tracking-widest uppercase border border-foreground/20 px-8 py-3 hover:bg-foreground hover:text-background transition-all duration-300"
            >
              {de ? "Projekte ansehen" : "View Projects"}
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex items-center justify-between mb-16">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-muted mb-2">
              {de ? "Ausgewählte Arbeiten" : "Selected Works"}
            </p>
            <h2 className="text-3xl font-light">
              {de ? "Projekte" : "Projects"}
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors"
          >
            {de ? "Alle ansehen" : "View All"} &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-surface mb-4">
                <Image
                  src={project.thumbnail}
                  alt={de ? project.title : project.titleEn}
                  fill
                  className="object-cover img-hover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              </div>
              <p className="text-xs tracking-widest uppercase text-muted mb-1">
                {project.year}
              </p>
              <h3 className="text-lg font-light group-hover:text-accent transition-colors">
                {de ? project.title : project.titleEn}
              </h3>
              <p className="text-xs text-muted mt-1">
                {de ? project.medium : project.mediumEn}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Current Event */}
      <section className="bg-surface border-y border-border">
        <div className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-[1fr_360px] gap-12 items-center">
          <div className="text-center md:text-left">
            <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">
              {de ? "Aktuell" : "Current"}
            </p>
            <h2 className="text-2xl md:text-3xl font-light mb-6">
              {de
                ? "Offene Ateliers und Ausstellung im Rahmen der schöneberger art"
                : "Open Studios and Exhibition as part of schöneberger art"}
            </h2>
            <p className="text-muted leading-relaxed mb-2">
              {de
                ? "Das erste Wochenende im November"
                : "The first weekend in November"}
            </p>
            <p className="text-sm text-muted">
              {de
                ? "Im Kulturhaus Schöneberg · Kyffhäuserstraße 23 · 10781 Berlin"
                : "At Kulturhaus Schöneberg · Kyffhäuserstraße 23 · 10781 Berlin"}
            </p>
            <p className="text-sm text-muted mt-1">
              {de
                ? "Samstag von 14–20 Uhr · Sonntag von 12–18 Uhr"
                : "Saturday 2–8 PM · Sunday 12–6 PM"}
            </p>
            <div className="flex items-center justify-center md:justify-start gap-6 mt-6">
              <a
                href="https://www.kulturhaus-schoeneberg.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent hover:text-accent-light transition-colors"
              >
                www.kulturhaus-schoeneberg.de
              </a>
              <a
                href="https://www.schoeneberger-art.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent hover:text-accent-light transition-colors"
              >
                www.schoeneberger-art.de
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden bg-surface mx-auto md:ml-auto md:mr-0">
            <Image
              src="/images/scraped/bilder/unisono_karina.jpg"
              alt="Karina Pośpiech"
              width={360}
              height={270}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </section>
    </>
  );
}
