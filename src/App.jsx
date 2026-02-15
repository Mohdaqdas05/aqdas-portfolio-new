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
import './App.css';

function App() {
  return (
    <div className="App">
      <Analytics />
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
