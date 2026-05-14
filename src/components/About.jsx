import { Target, Eye, Heart } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="section about" id="sobre">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title animate-on-scroll">Conheça nosso Propósito</h2>
          <p className="section-subtitle animate-on-scroll">
            Nossa base é formada por princípios sólidos que guiam nossa atuação 
            e garantem resultados excepcionais para nossos clientes.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            <div className="about-icon-wrapper">
              <Target size={36} color="var(--primary-blue)" />
            </div>
            <h3>Missão</h3>
            <p>
              Prover soluções de tecnologia através de profissionais capacitados, prestar 
              serviços com qualidade e agregar conhecimento de forma a superar as 
              expectativas de nossos clientes.
            </p>
          </div>

          <div className="about-card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="about-icon-wrapper">
              <Eye size={36} color="var(--primary-blue)" />
            </div>
            <h3>Visão</h3>
            <p>
              Ser líderes em consultoria de soluções de Tecnologia da Informação no mercado 
              latino-americano, adicionando o máximo de valor aos clientes e mantendo 
              um relacionamento longo e rentável para ambos.
            </p>
          </div>

          <div className="about-card animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="about-icon-wrapper">
              <Heart size={36} color="var(--primary-blue)" />
            </div>
            <h3>Valores</h3>
            <p>
              Compromisso com o cliente: Superar as expectativas dos clientes, buscando a 
              excelência e inovação em tudo o que fazemos, é a prioridade de cada 
              colaborador e o propósito de cada trabalho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
