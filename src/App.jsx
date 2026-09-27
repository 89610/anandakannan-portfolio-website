import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { TechnicalEvents } from './components/TechnicalEvents';
import { TechnicalActivities } from './components/TechnicalActivities';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './styles/global.css';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <TechnicalEvents />
        <TechnicalActivities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;