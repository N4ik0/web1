import { Scale, Users, CheckCircle, User, Building } from 'lucide-react';
import '../styles/Services.css';

export default function Services() {
  const services = [
    {
      icon: <Scale size={40} />,
      title: 'Defensa Legal',
      description: 'Representación legal especializada en casos de deudas y cobranzas',
    },
    {
      icon: <Users size={40} />,
      title: 'Asesoría Personalizada',
      description: 'Evaluación detallada de tu caso y opciones legales disponibles',
    },
    {
      icon: <CheckCircle size={40} />,
      title: 'Soluciones Efectivas',
      description: 'Estrategias comprobadas para resolver tus problemas financieros',
    },
  ];

  return (
    <section className="services">
      <div className="container">
        <h2 className="services-title">Nuestros Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="services2">
        {/* Tarjeta Izquierda */}
        <div className="service-left-card">
          <h3>Tenemos la opción ideal para tus necesidades</h3>
          <p>
            Nuestro equipo de expertos está aquí para analizar tus necesidades y
            ofrecerte soluciones personalizadas. Confía en nosotros para ayudarte
            a superar cualquier desafío con un enfoque profesional y humano.
          </p>
        </div>

        {/* Tarjetas Derechas */}
        <div className="service-right-card">
          <div className="service-icon">
            <User size={40} />
          </div>
          <h3>Soluciones para Persona Natural</h3>
          <p>
            Diseñadas para adaptarse a las necesidades individuales, ofrecemos
            soluciones legales y financieras efectivas para personas naturales.
          </p>
        </div>
        <div className="service-right-card">
          <div className="service-icon">
            <Building size={40} />
          </div>
          <h3>Soluciones para Empresa o Pyme</h3>
          <p>
            Brindamos asesoría y representación para empresas y pymes,
            garantizando estrategias efectivas para superar desafíos financieros.
          </p>
        </div>
      </div>
      <div className='separador'>

      </div>
    </section>
  );
}
