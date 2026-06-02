"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function DatenschutzContent() {
  const { language } = useLanguage();
  const de = language === "de";

  return (
    <div className="pt-28 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-muted mb-2">
            {de ? "Rechtliches" : "Legal"}
          </p>
          <h1 className="text-4xl md:text-5xl font-light">
            {de ? "Datenschutzerklärung" : "Privacy Policy"}
          </h1>
          <div className="h-px w-16 bg-accent mt-6" />
        </div>

        <div className="space-y-8 text-sm text-muted leading-relaxed">
          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-normal">
              {de ? "Verantwortlich" : "Responsible Party"}
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
              {de ? "Verarbeitete Datenkategorien" : "Processed Data Categories"}
            </h2>
            <ul className="space-y-1">
              {de ? (
                <>
                  <li>Bestandsdaten (Namen, Adressen)</li>
                  <li>Kontaktdaten (E-Mail, Telefonnummern)</li>
                  <li>Inhaltsdaten (Texte, Fotos, Videos)</li>
                  <li>Nutzungsdaten (besuchte Webseiten, Zugriffszeiten)</li>
                  <li>Meta-/Kommunikationsdaten (IP-Adressen, Geräte-Informationen)</li>
                </>
              ) : (
                <>
                  <li>Inventory data (names, addresses)</li>
                  <li>Contact data (email, phone numbers)</li>
                  <li>Content data (texts, photos, videos)</li>
                  <li>Usage data (visited websites, access times)</li>
                  <li>Meta/communication data (IP addresses, device information)</li>
                </>
              )}
            </ul>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-normal">
              {de ? "Zweck der Verarbeitung" : "Purpose of Processing"}
            </h2>
            <p>
              {de
                ? "Zurverfügungstellung des Onlineangebotes, seiner Funktionen und Inhalte. Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern. Sicherheitsmaßnahmen. Reichweitenmessung/Marketing."
                : "Provision of the online service, its functions and content. Responding to contact inquiries and communication with users. Security measures. Reach measurement/marketing."}
            </p>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-normal">
              {de ? "Betroffene Personen" : "Affected Persons"}
            </h2>
            <p>
              {de
                ? "Besucher und Nutzer des Onlineangebotes."
                : "Visitors and users of the online service."}
            </p>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-normal">
              {de ? "Rechtsgrundlagen" : "Legal Basis"}
            </h2>
            <p>
              {de
                ? "Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage der DSGVO, insbesondere Artikel 6 (Einwilligung, Vertragserfüllung, rechtliche Verpflichtung, lebenswichtige Interessen, öffentliche Aufgabe, berechtigte Interessen)."
                : "The processing of personal data is carried out on the basis of the GDPR, in particular Article 6 (consent, contract fulfillment, legal obligation, vital interests, public task, legitimate interests)."}
            </p>
          </section>

          <section>
            <h2 className="text-xs tracking-[0.3em] uppercase text-accent mb-4 font-normal">
              {de ? "Haftungsausschluss" : "Disclaimer"}
            </h2>
            <p>
              {de
                ? "Karina Pośpiech übernimmt keine Haftung für die Aktualität, die inhaltliche Richtigkeit sowie für die Vollständigkeit der auf ihrer Webseite bereitgestellten Informationen."
                : "Karina Pośpiech assumes no liability for the currency, accuracy, or completeness of the information provided on her website."}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
