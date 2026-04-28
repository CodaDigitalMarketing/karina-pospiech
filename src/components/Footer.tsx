import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 flex items-center justify-center">
        <Link
          href="/datenschutz"
          className="text-xs text-muted hover:text-foreground tracking-wide transition-colors"
        >
          Datenschutz
        </Link>
      </div>
    </footer>
  );
}
