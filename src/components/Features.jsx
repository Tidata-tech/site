import { CheckCircle2 } from 'lucide-react';
import './Features.css';

const featuresList = [
  {
    title: "Soluções personalizadas",
    desc: "Oferecemos soluções personalizadas para atender suas necessidades."
  },
  {
    title: "Equipe qualificada",
    desc: "Nossa equipe é treinada, especializada e certificada."
  },
  {
    title: "Melhor tecnologia",
    desc: "Somos parceiros dos principais players de infraestrutura, cloud e segurança do mercado."
  },
  {
    title: "Infraestrutura e Nuvem",
    desc: "Gerencie sua infraestrutura local ou na nuvem e execute projetos de TI com eficiência."
  },
  {
    title: "Experiência no Mercado",
    desc: "Ampla vivência em diversos setores garantindo a melhor entrega."
  },
  {
    title: "Suporte Personalizado",
    desc: "Atendimento dedicado para atender suas necessidades específicas."
  }
];

const Features = () => {
  return (
    <section className="section features">
      <div className="container">
        <div className="features-wrapper">
          <div className="features-content animate-on-scroll">
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Por que escolher a Tidata?
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: 0 }}>
              Aliamos inteligência tecnológica e uma equipe altamente capacitada para 
              transformar os desafios da sua empresa em resultados reais.
            </p>
            
            <div className="features-list">
              {featuresList.map((feature, idx) => (
                <div 
                  className="feature-item animate-on-scroll" 
                  key={idx}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CheckCircle2 className="feature-icon" size={24} />
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="features-image-container animate-on-scroll" style={{ animationDelay: '0.4s' }}>
            <div className="features-image-box">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Equipe Tidata Consulting" 
                className="features-img"
              />
              <div className="experience-badge glass">
                <span className="years">100%</span>
                <span className="text">Foco em<br/>Resultados</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
