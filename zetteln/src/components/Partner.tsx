import ArrowRight from '../assets/icons/ArrowRight'

export default function Partner() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col rounded-4xl bg-blue-900 py-16 text-white md:flex-row md:items-end">
      <div className="px-4 text-xl md:w-1/2 md:px-8 md:pt-16">
        <h2 className="pb-8 text-4xl">Gemeinsam mit euch wirkungsvoll unterstützen</h2>
        <p>
          Du bist Teil einer Beratungsstelle, eines Vereins oder einer Initiative, die Menschen im Behördenalltag
          unterstützt?
        </p>
        <h3 className="pt-8 pb-4 font-bold">Mit zetteln könnt ihr:</h3>
        <ul className="flex flex-col gap-2 text-xl leading-snug">
          <li className="flex items-center gap-3">
            <ArrowRight size={16} className="shrink-0 text-gray-400" />
            eure Arbeit entlasten
          </li>
          <li className="flex items-center gap-3">
            <ArrowRight size={16} className="shrink-0 text-gray-400" />
            Betroffene direkt unterstützen
          </li>
          <li className="flex items-center gap-3">
            <ArrowRight size={16} className="shrink-0 text-gray-400" />
            administrative Kompetenz praxisnah vermittel
          </li>
        </ul>
      </div>
      <div className="flex h-full px-4 py-8 md:w-1/2 md:px-8">
        <div className="bg-sand-100 text-black-800 flex flex-col gap-12 rounded-2xl p-8 text-xl">
          <div>
            <h3 className="pb-2 text-2xl font-bold">Gestalte mit!</h3>
            <p>
              Wir möchten gemeinsam mit euch den Behördenalltag für alle einfacher machen. Du kennst die
              Herausforderungen mit Papierkram, Formulare und unklare Schreiben. Berate uns, was wirklich gebraucht
              wird, und gestalte mit, wie die App funktioniert.
            </p>
          </div>
          <div>
            <a
              href="mailto:mitmachen@zetteln.app"
              className="bg-black-800 rounded-full px-6 py-4 text-white hover:bg-black"
            >
              Jetzt Berater:in werden
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
