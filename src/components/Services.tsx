import { Scale, Users, CheckCircle, User, Building, ChartColumnDecreasing, CircleAlert, HandCoins } from 'lucide-react';
import '../styles/Services.css';

export default function Services() {
  const services = [
    {
      icon: <Scale size={40} />,
      title: 'Defensa Legal',
      description: 'Representación legal especializada en casos de deudas y cobranzas',
      mensaje: 'Hola%2C%20estoy%20interesado%20en%20el%20servicio%20de%20Defensa%20Legal.%20%C2%BFPodr%C3%ADan%20brindarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20c%C3%B3mo%20pueden%20ayudarme%20con%20casos%20de%20deudas%20y%20cobranzas%3F',
    },
    {
      icon: <Users size={40} />,
      title: 'Asesoría Personalizada',
      description: 'Evaluación detallada de tu caso y opciones legales disponibles',
      mensaje: 'Hola%2C%20estoy%20interesado%20en%20el%20servicio%20de%20Asesor%C3%ADa%20Personalizada.%20%C2%BFPodr%C3%ADan%20brindarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20c%C3%B3mo%20pueden%20evaluar%20mi%20caso%20y%20las%20opciones%20legales%20disponibles%3F',
    },
    {
      icon: <CheckCircle size={40} />,
      title: 'Soluciones Efectivas',
      description: 'Estrategias comprobadas para resolver tus problemas financieros',
      mensaje: 'Hola%2C%20estoy%20interesado%20en%20el%20servicio%20de%20Soluciones%20Efectivas.%20%C2%BFPodr%C3%ADan%20brindarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20estrategias%20que%20ofrecen%20para%20resolver%20problemas%20financieros%3F',
    },
    {
      icon: <ChartColumnDecreasing size={40} />,
      title: 'Quiebra',
      description: 'Encuentra soluciones legales efectivas para reorganizar tus finanzas y superar una situación de quiebra con nuestra asesoría especializada.',
      mensaje: 'Hola, estoy interesado en el servicio de Quiebra. ¿Podrían brindarme más información sobre cómo pueden ayudarme a reorganizar mis finanzas y superar esta situación?',
    },
    {
      icon: <CircleAlert size={40} />,
      title: 'Dicom',
      description: 'Te ayudamos a salir de Dicom y recuperar tu historial crediticio con estrategias legales diseñadas para tu caso',
      mensaje: 'Hola%2C%20estoy%20interesado%20en%20el%20servicio%20de%20Dicom.%20%C2%BFPodr%C3%ADan%20brindarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20c%C3%B3mo%20pueden%20ayudarme%20a%20salir%20de%20Dicom%20y%20recuperar%20mi%20historial%20crediticio%3F',
    },
    {
      icon: <HandCoins size={40} />,
      title: 'Deudas mayores a 4 millones',
      description: 'Ofrecemos soluciones personalizadas para reestructurar o liquidar deudas elevadas, brindándote un camino claro hacia la estabilidad financiera',
      mensaje: 'Hola%2C%20estoy%20interesado%20en%20el%20servicio%20de%20Deudas%20mayores%20a%204%20millones.%20%C2%BFPodr%C3%ADan%20brindarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20soluciones%20que%20ofrecen%20para%20reestructurar%20o%20liquidar%20deudas%20elevadas%3F',
    },
  ];

  return (
    <section id='servicios' className="services">
      <div className="container">
        <h2 className="services-title">Nuestros Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className='button button-primary'>
                <a href={`https://wa.me/56955379711?text=${service.mensaje}`} target='_blank'>
                  Más Información
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="services2">
        {/* Tarjeta Izquierda */}
        <div className="service-left-card">
          <h3>Tenemos la opción ideal para tus necesidades</h3>
          <h3>No repactes, busca defensa!.</h3>
          <p className='service-description'>
            Nuestro equipo de expertos está aquí para analizar tus necesidades y
            ofrecerte soluciones personalizadas. Confía en nosotros para ayudarte
            a superar cualquier desafío con un enfoque profesional y humano.
          </p>
        </div>

        {/* Tarjetas Derechas */}
        <div className="service-right-card one">
          
          <h3>
            <div className="service-icon">
              <User size={40} color='white' />
            </div>
            Soluciones para Persona Natural
          </h3>
          <p>
            Diseñadas para adaptarse a las necesidades individuales, ofrecemos
            soluciones legales y financieras efectivas para personas naturales.
          </p>
          <div className="button button-primary service">
            Más Información
          </div>
        </div>
        <div className="service-right-card two">
          
          <h3>
            <div className="service-icon">
              <Building size={40} color='white'/>
            </div>
            Soluciones para Empresa o Pyme
          </h3>
          <p>
            Brindamos asesoría y representación para empresas y pymes,
            garantizando estrategias efectivas para superar desafíos financieros.
          </p>
          <div className="button button-primary service">
            Más Información
          </div>
        </div>
      </div>
      <div className='separator-line'>
          <div className='line'></div>
      </div>
    </section>
  );
}
