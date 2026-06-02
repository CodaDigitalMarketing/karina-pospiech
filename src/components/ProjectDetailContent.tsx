"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import type { Project } from "@/lib/data";

interface Props {
  project: Project;
  prev: Project | null;
  next: Project | null;
}

export default function ProjectDetailContent({ project, prev, next }: Props) {
  const { language } = useLanguage();
  const de = language === "de";
  const content = de ? project.content : project.contentEn;

  return (
    <div className="pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Breadcrumb */}
        <Link
          href="/projects"
          className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors"
        >
          &larr; {de ? "Alle Projekte" : "All Projects"}
        </Link>

        {/* Title */}
        <div className="mt-8 mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
            {project.year}
          </p>
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            {de ? project.title : project.titleEn}
          </h1>
          <p className="text-sm text-muted">
            {de ? project.medium : project.mediumEn}
          </p>
          <div className="h-px w-16 bg-accent mt-6" />
        </div>

        {/* Content blocks */}
        <div className="max-w-3xl space-y-6">
          {content.map((block, i) =>
            block.type === "image" ? (
              <div key={i} className="relative w-full bg-surface my-8">
                <Image
                  src={block.src}
                  alt={`${de ? project.title : project.titleEn} — ${de ? "Bild" : "Image"} ${i + 1}`}
                  width={900}
                  height={600}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
            ) : (
              <p key={i} className="text-muted leading-relaxed">
                {block.text}
              </p>
            )
          )}
        </div>

        {/* Previous/Next */}
        <div className="mt-20 pt-8 border-t border-border flex items-center justify-between">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group text-left"
            >
              <p className="text-xs tracking-widest uppercase text-muted mb-1">
                &larr; {de ? "Vorheriges" : "Previous"}
              </p>
              <p className="text-sm group-hover:text-accent transition-colors">
                {de ? prev.title : prev.titleEn}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group text-right"
            >
              <p className="text-xs tracking-widest uppercase text-muted mb-1">
                {de ? "Nächstes" : "Next"} &rarr;
              </p>
              <p className="text-sm group-hover:text-accent transition-colors">
                {de ? next.title : next.titleEn}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
