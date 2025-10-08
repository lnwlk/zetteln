import ArrowRight from '../assets/icons/ArrowRight'

export default function About() {
  return (
    <div className="to-sand-50 via-sand-100 from-sand-50 bg-gradient-to-b">
      <div className="mx-auto flex max-w-7xl flex-col rounded-4xl px-4 text-xl md:mt-24 md:w-2/3 md:px-8 md:py-16">
        <h2 className="pb-8 text-4xl">Über uns</h2>
        <p>
          zetteln.app ist aus purem Frust über den Behördenwahnsinn entstanden. Als freiberufliche Designerin und
          Ehrenamtliche mit Geflüchteten hat Lena Wilkes gesehen, wie schwierig es ist, sich durch Formulare, Bescheide
          und komplizierte Briefe zu kämpfen – und wie sehr das gerade Menschen in prekären Situationen belastet. <br />{' '}
          <br />
          Sie kennt die eigenen Papiertürme zu Hause, und beobachtet die großen Hürden für Geflüchtete, Alleinerziehende
          oder Menschen, die Leistungen beziehen. Fehler bei Anträgen und das Teilen von sensible Daten über unsicher
          Plattformen wie WhatsApp sind Alltag. Egal ob Ehrenatmlich oder Verwaltungsmitarbeiter:innen: Alle sind
          gestresst. Das wollte Lena ändern.
          <br /> <br />
          Technologie, vor allem KI, kann hier richtig helfen. Wenn sie ethisch, datenschutzkonform und im Intresse der
          Nutzer:innen eingesetzt wird. Auf diesen Grundlagen entwickeln wir eine App, die Schritt für Schritt durch den
          Behördenalltag begleitet.
        </p>
        <h3 className="pt-8 pb-4 font-bold">Unser Ansatz</h3>
        <ul className="flex flex-col gap-2 text-xl leading-snug">
          <li className="flex items-center gap-3">
            <ArrowRight size={16} className="shrink-0 text-gray-400" />
            Kostenlos für alle Nutzer:innen
          </li>
          <li className="flex items-center gap-3">
            <ArrowRight size={16} className="shrink-0 text-gray-400" />
            Einfaches, inklusives Design in leichter Sprache
          </li>
          <li className="flex items-center gap-3">
            <ArrowRight size={16} className="shrink-0 text-gray-400" />
            Alle Daten bleiben auf dem eigenen Gerät – keine Cloud, kein Tracking
          </li>
          <li className="flex items-center gap-3">
            <ArrowRight size={16} className="shrink-0 text-gray-400" />
            Gemeinnützig und getragen von der Gemeinschaft, unterstützt durch Fördermittel und Partnerschaften
          </li>
        </ul>
      </div>
    </div>
  )
}
