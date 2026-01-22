import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function ImpressumPage() {
  return (
    <main className="flex flex-col w-full min-h-full">
      <Navigation />

      {/* Hero Section */}
      <section className="w-full bg-[var(--color-primary-light)]">
        <div className="flex flex-col w-full max-w-[1180px] mx-auto border-x-2 border-b-2 border-[var(--color-primary)] bg-white p-12">
          <span className="inline-block px-4 py-2 border-2 border-[var(--color-primary)] rounded-full text-sm text-[var(--color-primary)] tracking-[2px] w-fit mb-6">
            RECHTLICHES
          </span>
          <h1 className="text-[64px] leading-[0.9] text-[var(--color-primary)] mb-4">
            IMPRESSUM
          </h1>
          <p className="text-lg text-[var(--color-dark)] opacity-70">
            ANGABEN GEMÄSS § 5 TMG
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-[var(--color-primary-light)]">
        <div className="w-full max-w-[1180px] mx-auto border-x-2 border-b-2 border-[var(--color-primary)] bg-white p-12">
          <div className="flex flex-col gap-12 max-w-[800px]">

            {/* Company Info */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl text-[var(--color-dark)] border-b-2 border-[var(--color-primary)] pb-2">
                ANBIETER
              </h2>
              <div className="bg-[var(--color-primary-light)] p-6 border-l-4 border-[var(--color-primary)]">
                <p className="text-base text-[var(--color-dark)] leading-relaxed">
                  <strong className="text-[var(--color-primary)]">The Original München</strong><br /><br />
                  Musterstraße 123<br />
                  80331 München<br />
                  Deutschland
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl text-[var(--color-dark)] border-b-2 border-[var(--color-primary)] pb-2">
                KONTAKT
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-[var(--color-primary)] tracking-wider">TELEFON</span>
                  <a href="tel:+4989123456789" className="text-base text-[var(--color-dark)] hover:text-[var(--color-primary)] transition-colors">
                    +49 89 123456789
                  </a>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-[var(--color-primary)] tracking-wider">E-MAIL</span>
                  <a href="mailto:info@original.catering" className="text-base text-[var(--color-dark)] hover:text-[var(--color-primary)] transition-colors">
                    info@original.catering
                  </a>
                </div>
              </div>
            </div>

            {/* Legal Representative */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl text-[var(--color-dark)] border-b-2 border-[var(--color-primary)] pb-2">
                VERTRETUNGSBERECHTIGT
              </h2>
              <p className="text-base text-[var(--color-dark)] leading-relaxed">
                Geschäftsführer: Max Mustermann
              </p>
            </div>

            {/* Registration */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl text-[var(--color-dark)] border-b-2 border-[var(--color-primary)] pb-2">
                REGISTEREINTRAG
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-[var(--color-primary)] tracking-wider">REGISTERGERICHT</span>
                  <span className="text-base text-[var(--color-dark)]">Amtsgericht München</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm text-[var(--color-primary)] tracking-wider">REGISTERNUMMER</span>
                  <span className="text-base text-[var(--color-dark)]">HRB 123456</span>
                </div>
              </div>
            </div>

            {/* Tax ID */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl text-[var(--color-dark)] border-b-2 border-[var(--color-primary)] pb-2">
                UMSATZSTEUER-ID
              </h2>
              <p className="text-base text-[var(--color-dark)] leading-relaxed">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                <strong>DE 123456789</strong>
              </p>
            </div>

            {/* Responsible for Content */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl text-[var(--color-dark)] border-b-2 border-[var(--color-primary)] pb-2">
                VERANTWORTLICH FÜR DEN INHALT
              </h2>
              <p className="text-base text-[var(--color-dark)] leading-relaxed">
                Verantwortlich nach § 55 Abs. 2 RStV:<br /><br />
                Max Mustermann<br />
                Musterstraße 123<br />
                80331 München
              </p>
            </div>

            {/* Disclaimer */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl text-[var(--color-dark)] border-b-2 border-[var(--color-primary)] pb-2">
                HAFTUNGSAUSSCHLUSS
              </h2>

              <h3 className="text-lg text-[var(--color-primary)] mt-4">Haftung für Inhalte</h3>
              <p className="text-base text-[var(--color-dark)] leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-base text-[var(--color-dark)] leading-relaxed">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>

              <h3 className="text-lg text-[var(--color-primary)] mt-4">Haftung für Links</h3>
              <p className="text-base text-[var(--color-dark)] leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
              <p className="text-base text-[var(--color-dark)] leading-relaxed">
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
              </p>
            </div>

            {/* Copyright */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl text-[var(--color-dark)] border-b-2 border-[var(--color-primary)] pb-2">
                URHEBERRECHT
              </h2>
              <p className="text-base text-[var(--color-dark)] leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p className="text-base text-[var(--color-dark)] leading-relaxed">
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl text-[var(--color-dark)] border-b-2 border-[var(--color-primary)] pb-2">
                STREITSCHLICHTUNG
              </h2>
              <p className="text-base text-[var(--color-dark)] leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:underline ml-1"
                >
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="text-base text-[var(--color-dark)] leading-relaxed">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[var(--color-primary)] border-b-2 border-[var(--color-primary)]">
        <div className="flex flex-col items-center px-12 py-16 max-w-[1180px] mx-auto">
          <p className="text-xl text-white text-center tracking-wide">
            FRAGEN ODER ANREGUNGEN?
          </p>
          <a
            href="mailto:info@original.catering?subject=KONTAKT"
            className="mt-6 px-10 py-4 bg-white text-[var(--color-dark)] text-lg border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary-light)] hover:-translate-y-1 transition-all duration-300"
          >
            KONTAKTIERE UNS →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
