import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo-text">
          Tidata <span>CONSULTING</span>
        </a>
        
        <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links">
            <li><a href="#sobre" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Sobre</a></li>
            <li><a href="#servicos" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Serviços</a></li>
            <li><a href="#segmentos" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Segmentos</a></li>
            <li><a href="#contato" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>

        <div className="header-cta">
          <a href="#contato" className="btn btn-primary">
            Fale com um especialista <ChevronRight size={18} />
          </a>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
