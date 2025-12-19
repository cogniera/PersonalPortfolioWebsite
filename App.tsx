import { Navigation } from './Navigation';
import { Hero } from './Hero';
import { About } from './About';
import { Projects } from './Projects';
import { Experience } from './Experience';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Resume } from './Resume';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navigation />
      
      <main>
        <Hero />
        
        <div id="about">
          <About />
        </div>
        
        <div id="projects">
          <Projects />
        </div>
        
        <div id="experience">
          <Experience />
        </div>
        
        <div id="contact">
          <Contact />
        </div>

        <div id = "resume">
          <Resume/>
        </div>
      </main>

      <Footer />
    </div>
  );
}
