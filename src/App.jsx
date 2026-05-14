import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Services from './components/Services';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: stop observing once it's visible to only animate once
          // observer.unobserve(entry.target); 
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Select all elements with the animate-on-scroll class
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <About />
        <Features />
        <Services />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
