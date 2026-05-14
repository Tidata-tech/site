import { MapPin, Building2, Landmark, Tractor, Activity, Globe2 } from 'lucide-react';
import './Industries.css';

const industries = [
  { name: "Governo", icon: <Landmark size={24} /> },
  { name: "Agropecuária", icon: <Tractor size={24} /> },
  { name: "Farmácia / Hospitais", icon: <Activity size={24} /> },
  { name: "Indústria & Comércio", icon: <Building2 size={24} /> },
  { name: "Bancos", icon: <Building2 size={24} /> },
  { name: "Concessionárias", icon: <Building2 size={24} /> }
];

const regions = [
  { name: "Centro-Oeste", states: "DF, GO, MT, MS" },
  { name: "Norte", states: "AC, AP, AM, PA, RO, RR, TO" },
  { name: "Sudeste", states: "ES, MG, RJ, SP" },
  { name: "Nordeste", states: "AL, BA, CE, MA, PB, PE, PI, RN, SE" },
  { name: "Sul", states: "PR, RS, SC" }
];

const Industries = () => {
  return (
    <section className="section industries" id="segmentos">
      <div className="container">
        <div className="industries-wrapper">
          <div className="industries-content animate-on-scroll">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Atendimento em Nível Nacional</h2>
            <p className="section-subtitle" style={{ textAlign: 'left', marginLeft: 0 }}>
              A Tidata atua em todo o território nacional atendendo empresas de pequeno, 
              médio e grande porte nos mais variados segmentos de mercado.
            </p>

            <div className="industry-tags">
              {industries.map((ind, idx) => (
                <div className="ind-tag" key={idx}>
                  {ind.icon}
                  <span>{ind.name}</span>
                </div>
              ))}
            </div>
            
            <div className="coverage-info mt-8">
              <h3 className="mb-4 text-xl font-bold" style={{ color: 'var(--primary-blue)', marginBottom: '20px', marginTop: '40px' }}>
                Regiões de Atendimento
              </h3>
              <div className="regions-grid">
                {regions.map((region, idx) => (
                  <div className="region-card" key={idx}>
                    <div className="region-header">
                      <MapPin size={20} color="var(--primary-blue)" />
                      <h4>{region.name}</h4>
                    </div>
                    <p>{region.states}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="industries-map animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="map-placeholder glass-dark">
              <div className="map-glow"></div>
              <Globe2 size={240} className="globe-icon" />
              <div className="map-overlay-text">
                <h3>Cobertura Nacional</h3>
                <p>Onde você estiver, nós estaremos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
