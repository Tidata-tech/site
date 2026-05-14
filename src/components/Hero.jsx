import { ArrowRight, ShieldCheck, Database, Cloud } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-on-scroll visible">
            <span className="pulse-dot"></span> Excelência em Tecnologia
          </div>
          <h1 className="hero-title animate-on-scroll visible" style={{ animationDelay: '0.1s' }}>
            Transforme o Futuro da sua Empresa com <span className="text-gradient">Inteligência</span>
          </h1>
          <p className="hero-description animate-on-scroll visible" style={{ animationDelay: '0.2s' }}>
            Somos líderes em consultoria de soluções de Tecnologia da Informação, 
            adicionando o máximo de valor ao seu negócio através de infraestrutura, 
            cloud, banco de dados e cybersecurity.
          </p>
          <div className="hero-actions animate-on-scroll visible" style={{ animationDelay: '0.3s' }}>
            <a href="#servicos" className="btn btn-primary btn-lg">
              Conheça nossas Soluções <ArrowRight size={20} />
            </a>
            <a href="#contato" className="btn btn-outline btn-lg">
              Fale Conosco
            </a>
          </div>
          
          <div className="hero-stats animate-on-scroll visible" style={{ animationDelay: '0.4s' }}>
            <div className="stat-item">
              <strong>100%</strong>
              <span>Foco em Qualidade</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <strong>Nacional</strong>
              <span>Atendimento BR</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <strong>24/7</strong>
              <span>Suporte Especializado</span>
            </div>
          </div>
        </div>

        <div className="hero-visual animate-on-scroll visible" style={{ animationDelay: '0.3s' }}>
          <div className="visual-circle glass-dark">
            <div className="floating-card card-1 glass">
              <ShieldCheck size={32} className="card-icon" color="var(--primary-blue)" />
              <div>
                <h4>Cybersecurity</h4>
                <p>NOC / SOC Activo</p>
              </div>
            </div>
            <div className="floating-card card-2 glass">
              <Database size={32} className="card-icon" color="#2563eb" />
              <div>
                <h4>Banco de Dados</h4>
                <p>Alta Disponibilidade</p>
              </div>
            </div>
            <div className="floating-card card-3 glass">
              <Cloud size={32} className="card-icon" color="#0ea5e9" />
              <div>
                <h4>Cloud & Infra</h4>
                <p>Azure & AWS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
