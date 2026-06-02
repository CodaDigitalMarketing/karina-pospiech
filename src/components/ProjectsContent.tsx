"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

export default function ProjectsContent() {
  const { language } = useLanguage();
  const de = language === "de";

  return (
    <div className="pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 sm:mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-2">
            Portfolio
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light">
            {de ? "Projekte" : "Projects"}
          </h1>
          <div className="h-px w-16 bg-accent mt-6" />
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 sm:gap-y-12 max-w-4xl mx-auto">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group"
            >
              <div className="aspect-[3/2] relative overflow-hidden bg-surface mb-4">
                <Image
                  src={project.thumbnail}
                  alt={de ? project.title : project.titleEn}
                  fill
                  className="object-cover img-hover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-base sm:text-xl font-light group-hover:text-accent transition-colors">
                    {de ? project.title : project.titleEn}
                  </h2>
                  <p className="text-xs text-muted mt-1">
                    {de ? project.medium : project.mediumEn}
                  </p>
                </div>
                <span className="text-xs tracking-widest text-muted whitespace-nowrap mt-1">
                  {project.year}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
