import { HeadphonesIcon, Code, Network, Database, ShieldAlert } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <HeadphonesIcon size={32} />,
    title: "Terceirização de TI",
    desc: "Suporte N1, N2 e N3. Help Desk. Atendemos todos os tipos de projetos com excelência.",
    color: "#3b82f6"
  },
  {
    icon: <Code size={32} />,
    title: "Desenvolvimento",
    desc: "Aplicativos Android/IOS, Full Stack, Front-end, Back-end e Web App.",
    color: "#8b5cf6"
  },
  {
    icon: <Network size={32} />,
    title: "Cloud & Infraestrutura",
    desc: "Azure, AWS, PaaS, IaaS e SaaS. Gestão de lançamento e implantação completa.",
    color: "#06b6d4"
  },
  {
    icon: <Database size={32} />,
    title: "Banco de Dados",
    desc: "Administração, armazenamento, alta disponibilidade e ERP (SAP, Oracle, etc).",
    color: "#f59e0b"
  },
  {
    icon: <ShieldAlert size={32} />,
    title: "Cybersecurity",
    desc: "Resposta a incidentes, NOC/SOC, ISO 27001, Segurança DB e adequação LGPD.",
    color: "#ef4444"
  }
];

const Services = () => {
  return (
    <section className="section services" id="servicos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title animate-on-scroll">Nossos Segmentos de Atuação</h2>
          <p className="section-subtitle animate-on-scroll">
            Com a nossa inteligência de dados e tecnologias atendemos os mais 
            diversos setores do mercado com soluções completas.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className={`service-card animate-on-scroll ${index === services.length - 1 ? 'last-card' : ''}`} 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="service-icon" 
                style={{ backgroundColor: `${service.color}15`, color: service.color }}
              >
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href="#contato" className="service-link">
                Saiba mais <span>&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
