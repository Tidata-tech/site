import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo-text" style={{ color: '#ffffff' }}>
              Tidata <span style={{ color: '#cbd5e1' }}>CONSULTING</span>
            </a>
            <p>
              Adicionando o máximo de valor aos clientes através de excelência em serviços de Tecnologia da Informação.
            </p>
          </div>
          
          <div className="footer-links">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#segmentos">Segmentos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Políticas</h4>
            <ul>
              <li><a href="#">Termos e Condições</a></li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">LGPD</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tidata Consulting. Todos os direitos reservados.</p>
          <div className="footer-badges">
            <span className="badge">ISO/IEC 27001</span>
            <span className="badge">Em breve novidades</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
