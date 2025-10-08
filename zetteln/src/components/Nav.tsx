import { useState } from 'react'
import { Link } from 'react-router-dom'
import GetAppModal from './GetAppModal'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="absolute top-0 w-full">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6 text-lg font-normal md:px-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-semibold">
            zetteln
          </Link>
        </div>
        {/* Desktop Menu */}
        <div className="hidden items-center space-x-2 md:flex">
          <a href="#features" className="hover:bg-sand-100 border-sand-100 rounded-full border px-6 py-3">
            App Features
          </a>
          <a href="#about" className="hover:bg-sand-100 border-sand-100 rounded-full border px-6 py-3">
            Über uns
          </a>
          <a href="#support" className="hover:bg-sand-100 border-sand-100 rounded-full border px-6 py-3">
            Für Helfende
          </a>
        </div>
        {/* Desktop Button */}
        <div className="hidden md:block">
          <GetAppModal />
        </div>
        {/* Mobile Menu Button */}
        <button className="hover:bg-sand-100 rounded-md p-2 md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg width="24" height="24" fill="none" color="#000">
              <path
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.758 17.243 12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
              />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" color="#000">
              <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M3 5h18M3 12h18M3 19h18" />
            </svg>
          )}
        </button>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="border-sand-100 absolute top-20 left-0 z-50 w-full border-t bg-white shadow-md md:hidden">
            <div className="flex flex-col items-center space-y-4 py-6 text-lg">
              <a href="#features" onClick={() => setIsOpen(false)} className="hover:text-sand-600">
                App Features
              </a>
              <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-sand-600">
                Über uns
              </a>
              <a href="#support" onClick={() => setIsOpen(false)} className="hover:text-sand-600">
                Für Helfende
              </a>
              <a
                href="https://zetteln.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="rounded-full bg-black px-6 py-3 text-white hover:bg-black/80"
              >
                App testen
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}
