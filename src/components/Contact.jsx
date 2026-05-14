import { Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert("Obrigado pelo contato! Nossa equipe retornará em breve.");
  };

  return (
    <section className="section contact" id="contato">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info animate-on-scroll">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
              Fale com um Especialista
            </h2>
            <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: 0, marginBottom: '40px' }}>
              Nossa equipe está pronta para te ajudar! Deixe seu contato e mensagem, 
              entraremos em contato o mais rápido possível.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Telefone / WhatsApp</h4>
                  <p>11 94132-1986</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>E-mail</h4>
                  <p><a href="mailto:comercial@tidata-tech.com">comercial@tidata-tech.com</a></p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Clock size={24} />
                </div>
                <div>
                  <h4>Horário de Atendimento</h4>
                  <p>Seg - Sex: 09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <form className="contact-form glass" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome Completo</label>
                <input type="text" id="name" placeholder="Seu nome" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">E-mail Corporativo</label>
                <input type="email" id="email" placeholder="seu@email.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefone / WhatsApp</label>
                <input type="tel" id="phone" placeholder="(11) 90000-0000" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Como podemos ajudar?</label>
                <textarea id="message" rows="4" placeholder="Descreva sua necessidade..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Enviar Mensagem <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
