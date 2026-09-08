export function SiteFooter() {
  return (
    <footer className="w-full bg-footer-surface text-surface-bright py-space-3xl">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-2xl pb-space-2xl border-b border-surface-variant/10">
          <div className="md:col-span-1">
            <span className="font-headline-sm text-headline-sm text-surface-bright block mb-space-xs">
              <span className="italic font-serif">Tergar</span> Campus
            </span>
            <p className="font-body-sm text-body-sm text-tertiary-fixed-dim leading-relaxed">
              Praxisorientierte Meditationstradition nach Yongey Mingyur Rinpoche für den modernen
              Alltag.
            </p>
          </div>
          <div>
            <h4 className="font-eyebrow text-eyebrow uppercase text-surface-tint-warm tracking-wider mb-space-md">
              Tergar Gemeinschaft
            </h4>
            <ul className="space-y-space-xs">
              <li className="font-body-sm text-body-sm">
                <span className="text-tertiary-fixed-dim">Tergar Deutschland e.V.</span>
              </li>
              <li className="font-body-sm text-body-sm">
                <span className="text-tertiary-fixed-dim">Über Mingyur Rinpoche</span>
              </li>
              <li className="font-body-sm text-body-sm">
                <span className="text-tertiary-fixed-dim">Lokale Praxisgruppen</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-eyebrow text-eyebrow uppercase text-surface-tint-warm tracking-wider mb-space-md">
              Spenden &amp; Fördern
            </h4>
            <p className="font-body-sm text-body-sm text-tertiary-fixed-dim leading-relaxed mb-space-sm">
              Tergar ist eine gemeinnützige Organisation. Ihre Großzügigkeit ermöglicht kostenlose
              und barrierefreie Meditationsangebote.
            </p>
            <button className="inline-block px-space-md py-space-xs bg-primary-container hover:bg-accent-ochre-hover text-on-primary font-label-md text-label-md rounded-lg transition-colors">
              Spenden unterstützen
            </button>
          </div>
          <div>
            <h4 className="font-eyebrow text-eyebrow uppercase text-surface-tint-warm tracking-wider mb-space-md">
              Rechtliches
            </h4>
            <ul className="space-y-space-xs text-tertiary-fixed-dim">
              <li className="font-body-sm text-body-sm">Impressum</li>
              <li className="font-body-sm text-body-sm">Datenschutz</li>
              <li className="font-body-sm text-body-sm">Barrierefreiheit</li>
              <li className="font-body-sm text-body-sm">Kontakt</li>
            </ul>
          </div>
        </div>
        <div className="pt-space-xl flex flex-col sm:flex-row items-center justify-between gap-space-md font-caption text-caption text-tertiary-fixed-dim">
          <p>© 2025 Tergar Deutschland e.V. Alle Rechte vorbehalten.</p>
          <p>Geistiges Wohlbefinden durch Gewahrsein, Mitgefühl und Weisheit.</p>
        </div>
      </div>
    </footer>
  );
}
