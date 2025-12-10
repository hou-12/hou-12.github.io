import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedProject } from './components/FeaturedProject';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LanguageProvider } from './i18n/i18n';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';

function App() {
  return (
    <LanguageProvider>
      <ScrollProgress />
      <div className="app-container">
        <Navbar />
        <Hero />
        <About />
        <FeaturedProject />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
      <BackToTop />
    </LanguageProvider>
  )
}

export default App


