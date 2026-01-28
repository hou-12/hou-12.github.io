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
import { CustomCursor } from './components/CustomCursor';
import { SectionDivider } from './components/SectionDivider';

import { NoiseOverlay } from './components/NoiseOverlay';

function App() {
  return (
    <LanguageProvider>
      <CustomCursor />
      <NoiseOverlay />
      <ScrollProgress />
      <div className="app-container">
        <Navbar />
        <Hero />
        <SectionDivider variant="dots" />
        <About />
        <SectionDivider variant="diagonal" />
        <FeaturedProject />
        <SectionDivider variant="dots" />
        <Projects />
        <SectionDivider variant="diagonal" flip />
        <Skills />
        <SectionDivider variant="dots" />
        <Contact />
        <Footer />
      </div>
      <BackToTop />
    </LanguageProvider>
  )
}

export default App


