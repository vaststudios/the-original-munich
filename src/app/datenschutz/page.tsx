import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function DatenschutzPage() {
  return (
    <main className="flex flex-col w-full min-h-full">
      <Navigation />

      {/* Hero Section */}
      <section className="w-full bg-[var(--color-primary-light)]">
        <div className="flex flex-col w-full max-w-[1180px] mx-auto border-x-2 border-b-2 border-[var(--color-primary)] bg-white p-6 md:p-12">
          <span className="inline-block px-3 md:px-4 py-1.5 md:py-2 border-2 border-[var(--color-primary)] rounded-full text-xs md:text-sm text-[var(--color-primary)] tracking-[2px] w-fit mb-4 md:mb-6">
            RECHTLICHES
          </span>
          <h1 className="text-[32px] md:text-[64px] leading-[0.9] text-[var(--color-primary)] mb-3 md:mb-4">
            DATENSCHUTZ
          </h1>
          <p className="text-sm md:text-lg text-[var(--color-dark)] opacity-70">
            ZULETZT AKTUALISIERT: JANUAR 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-[var(--color-primary-light)]">
        <div className="w-full max-w-[1180px] mx-auto border-x-2 border-b-2 border-[var(--color-primary)] bg-white p-6 md:p-12">
          <div className="flex flex-col gap-8 md:gap-12 max-w-[800px]">

            {/* Section 1 */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="text-xl md:text-2xl text-[var(--color-dark)] border-b-2 border-[var(--color-primary)] pb-2">
                1. VERANTWORTLICHER
              </h2>
              <p className="text-sm md:text-base text-[var(--color-dark)] leading-relaxed">
                Verantwortlicher für die Datenverarbeitung auf dieser Website ist:
              </p>
              <div className="bg-[var(--color-primary-light)] p-4 md:p-6 border-l-4 border-[var(--color-primary)]">
                <p className="text-sm md:text-base text-[var(--color-dark)] leading-relaxed">
                  The Original München<br />
                  Musterstraße 123<br />
                  80331 München<br />
                  Deutschland<br /><br />
                  E-Mail: info@original.catering<br />
                  Telefon: +49 89 123456789
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="text-xl md:text-2xl text-[var(--color-dark)] border-b-2 border-[var(--color-primary)] pb-2">
                2. ERHEBUNG UND SPEICHERUNG PERSONENBEZOGENER DATEN
              </h2>
              <p className="text-sm md:text-base text-[var(--color-dark)] leading-relaxed">
                Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers und ähnliches.
              </p>
              <p className="text-sm md:text-base text-[var(--color-dark)] leading-relaxed">
                Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              </p>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="text-xl md:text-2xl text-[var(--color-dark)] border-b-2 border-[var(--color-primary)] pb-2">
                3. KONTAKTAUFNAHME
              </h2>
              <p className="text-sm md:text-base text-[var(--color-dark)] leading-relaxed">
                Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben einschließlich der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <p className="text-sm md:text-base text-[var(--color-dark)] leading-relaxed">
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </div>

            {/* Section 4 */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="text-xl md:text-2xl text-[var(--color-dark)] border-b-2 border-[var(--color-primary)] pb-2">
                4. COOKIES
              </h2>
              <p className="text-sm md:text-base text-[var(--color-dark)] leading-relaxed">
                Unsere Website verwendet keine Tracking-Cookies. Es werden lediglich technisch notwendige Cookies eingesetzt, die für den Betrieb der Website erforderlich sind.
              </p>
              <p className="text-sm md:text-base text-[var(--color-dark)] leading-relaxed">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben.
              </p>
            </div>

            {/* Section 5 */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="text-xl md:text-2xl text-[var(--color-dark)] border-b-2 border-[var(--color-primary)] pb-2">
                5. IHRE RECHTE
              </h2>
              <p className="text-sm md:text-base text-[var(--color-dark)] leading-relaxed">
                Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:
              </p>
              <ul className="list-none flex flex-col gap-2 ml-2 md:ml-4">
                <li className="text-sm md:text-base text-[var(--color-dark)] leading-relaxed flex items-start gap-2">
                  <span className="text-[var(--color-primary)] flex-shrink-0">→</span>
                  <span>Recht auf Auskunft (Art. 15 DSGVO)</span>
                </li>
                <li className="text-sm md:text-base text-[var(--color-dark)] leading-relaxed flex items-start gap-2">
                  <span className="text-[var(--color-primary)] flex-shrink-0">→</span>
                  <span>Recht auf Berichtigung (Art. 16 DSGVO)</span>
                </li>
                <li className="text-sm md:text-base text-[var(--color-dark)] leading-relaxed flex items-start gap-2">
                  <span className="text-[var(--color-primary)] flex-shrink-0">→</span>
                  <span>Recht auf Löschung (Art. 17 DSGVO)</span>
                </li>
                <li className="text-sm md:text-base text-[var(--color-dark)] leading-relaxed flex items-start gap-2">
                  <span className="text-[var(--color-primary)] flex-shrink-0">→</span>
                  <span>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</span>
                </li>
                <li className="text-sm md:text-base text-[var(--color-dark)] leading-relaxed flex items-start gap-2">
                  <span className="text-[var(--color-primary)] flex-shrink-0">→</span>
                  <span>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</span>
                </li>
                <li className="text-sm md:text-base text-[var(--color-dark)] leading-relaxed flex items-start gap-2">
                  <span className="text-[var(--color-primary)] flex-shrink-0">→</span>
                  <span>Recht auf Widerspruch (Art. 21 DSGVO)</span>
                </li>
              </ul>
            </div>

            {/* Section 6 */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="text-xl md:text-2xl text-[var(--color-dark)] border-b-2 border-[var(--color-primary)] pb-2">
                6. BESCHWERDERECHT
              </h2>
              <p className="text-sm md:text-base text-[var(--color-dark)] leading-relaxed">
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
              </p>
            </div>

            {/* Section 7 */}
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="text-xl md:text-2xl text-[var(--color-dark)] border-b-2 border-[var(--color-primary)] pb-2">
                7. DATENSICHERHEIT
              </h2>
              <p className="text-sm md:text-base text-[var(--color-dark)] leading-relaxed">
                Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.
              </p>
              <p className="text-sm md:text-base text-[var(--color-dark)] leading-relaxed">
                Wir bedienen uns geeigneter technischer und organisatorischer Sicherheitsmaßnahmen, um Ihre Daten gegen zufällige oder vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den unbefugten Zugriff Dritter zu schützen.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[var(--color-primary)] border-b-2 border-[var(--color-primary)]">
        <div className="flex flex-col items-center px-6 md:px-12 py-12 md:py-16 max-w-[1180px] mx-auto">
          <p className="text-lg md:text-xl text-white text-center tracking-wide">
            FRAGEN ZUM DATENSCHUTZ?
          </p>
          <a
            href="mailto:info@original.catering?subject=DATENSCHUTZ%20ANFRAGE"
            className="mt-4 md:mt-6 px-6 md:px-10 py-3 md:py-4 bg-white text-[var(--color-dark)] text-sm md:text-lg border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] hover:-translate-y-1 transition-all duration-300"
          >
            KONTAKTIERE UNS →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
