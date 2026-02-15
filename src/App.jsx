import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Opportunities from './components/Opportunities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Analytics from './components/Analytics';
import PWAInstaller from './components/PWAInstaller';
import DarkModeToggle from './components/DarkModeToggle';
import mobileAnalytics from './utils/mobileAnalytics';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize mobile analytics
    mobileAnalytics.init();
  }, []);

  return (
    <div className="App">
      <Analytics />
      <PWAInstaller />
      <DarkModeToggle />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
      <Opportunities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
