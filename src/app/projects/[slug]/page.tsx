import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.title };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Breadcrumb */}
        <Link
          href="/projects"
          className="text-xs tracking-widest uppercase text-muted hover:text-foreground transition-colors"
        >
          &larr; Alle Projekte
        </Link>

        {/* Titel */}
        <div className="mt-8 mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-2">
            {project.year}
          </p>
          <h1 className="text-4xl md:text-5xl font-light mb-4">
            {project.title}
          </h1>
          <p className="text-sm text-muted">{project.medium}</p>
          <div className="h-px w-16 bg-accent mt-6" />
        </div>

        {/* Content blocks */}
        <div className="max-w-3xl space-y-6">
          {project.content.map((block, i) =>
            block.type === "image" ? (
              <div key={i} className="relative w-full bg-surface my-8">
                <Image
                  src={block.src}
                  alt={`${project.title} — Bild ${i + 1}`}
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

        {/* Vorheriges/Nächstes */}
        <div className="mt-20 pt-8 border-t border-border flex items-center justify-between">
          {prev ? (
            <Link
              href={`/projects/${prev.slug}`}
              className="group text-left"
            >
              <p className="text-xs tracking-widest uppercase text-muted mb-1">
                &larr; Vorheriges
              </p>
              <p className="text-sm group-hover:text-accent transition-colors">
                {prev.title}
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
                Nächstes &rarr;
              </p>
              <p className="text-sm group-hover:text-accent transition-colors">
                {next.title}
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
