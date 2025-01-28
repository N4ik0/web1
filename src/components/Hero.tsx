import { ArrowRight } from 'lucide-react';
import '../styles/global.css';
import '../styles/Hero.css';

export default function Hero() {
  return (
    <section id='inicio' className="hero">
      <div className="container">
        <h1>Soluciones Legales para tus Deudas</h1>
        <p>
        Te ayudamos a resolver tus problemas financieros con asesoría especializada en temas bancarios, gestión de tesorería, impuestos educacionales y procesos de remates
        </p>
        <a href="#contacto" className="button button-primary">
          Consulta Gratis <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}
