import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="app-container">
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  )
}

export default App
