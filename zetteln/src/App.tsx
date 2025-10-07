import About from './components/about'
import AppFeature from './components/AppFeature'
import Intro from './components/Intro'
import Nav from './components/Nav'
import Partner from './components/Partner'
import { sections } from './Section'

export default function App() {
  return (
    <div className="bg-sand-50 text-black-800 relative text-lg font-light">
      <Nav />
      <Intro />
      <AppFeature sections={sections} />
      <About />
      <Partner />
    </div>
  )
}
