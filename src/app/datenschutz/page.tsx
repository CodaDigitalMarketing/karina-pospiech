import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function DatenschutzPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-2">
            Rechtliches
          </p>
          <h1 className="text-4xl md:text-5xl font-light">
            Datenschutzerklärung
          </h1>
          <div className="h-px w-16 bg-accent mt-6" />
        </div>

        <div className="space-y-8 text-sm text-muted leading-relaxed">
          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-normal">
              Verantwortlich
            </h2>
            <address className="not-italic leading-relaxed">
              Dipl.-Ing. Karina Pośpiech
              <br />
              Kyffhäuserstraße 23
              <br />
              10781 Berlin
              <br />
              art@unisono-art.de
            </address>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-normal">
              Verarbeitete Datenkategorien
            </h2>
            <ul className="space-y-1">
              <li>Bestandsdaten (Namen, Adressen)</li>
              <li>Kontaktdaten (E-Mail, Telefonnummern)</li>
              <li>Inhaltsdaten (Texte, Fotos, Videos)</li>
              <li>Nutzungsdaten (besuchte Webseiten, Zugriffszeiten)</li>
              <li>Meta-/Kommunikationsdaten (IP-Adressen, Geräte-Informationen)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-normal">
              Zweck der Verarbeitung
            </h2>
            <p>
              Zurverfügungstellung des Onlineangebotes, seiner Funktionen und
              Inhalte. Beantwortung von Kontaktanfragen und Kommunikation mit
              Nutzern. Sicherheitsmaßnahmen. Reichweitenmessung/Marketing.
            </p>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-normal">
              Betroffene Personen
            </h2>
            <p>Besucher und Nutzer des Onlineangebotes.</p>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-normal">
              Rechtsgrundlagen
            </h2>
            <p>
              Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage
              der DSGVO, insbesondere Artikel 6 (Einwilligung,
              Vertragserfüllung, rechtliche Verpflichtung, lebenswichtige
              Interessen, öffentliche Aufgabe, berechtigte Interessen).
            </p>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-normal">
              Haftungsausschluss
            </h2>
            <p>
              Karina Pośpiech übernimmt keine Haftung für die Aktualität, die
              inhaltliche Richtigkeit sowie für die Vollständigkeit der auf
              ihrer Webseite bereitgestellten Informationen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
