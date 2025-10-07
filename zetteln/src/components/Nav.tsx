import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-8 text-lg font-normal md:px-16">
      <div className="flex items-center gap-2">
        <span>zetteln</span>
      </div>
      <div className="space-x-2">
        <a href="#features" className="hover:bg-sand-100 border-sand-100 rounded-full border px-6 py-4">
          App Features
        </a>
        <a href="#about" className="hover:bg-sand-100 border-sand-100 rounded-full border px-6 py-4">
          Über uns
        </a>
        <a href="#support" className="hover:bg-sand-100 border-sand-100 rounded-full border px-6 py-4">
          Für Helfende
        </a>
      </div>
      <div>
        <a
          href="    https://zetteln.app"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black-800 rounded-full px-6 py-4 text-white hover:bg-black"
        >
          App testen
        </a>
      </div>
    </nav>
  )
}
