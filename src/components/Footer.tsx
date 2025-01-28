import { Facebook, Youtube, Instagram, MapPin, Mail, PhoneCall, Clock } from "lucide-react"
import '../styles/global.css';
import tiktok from '../assets/logo/tiktok.svg';
export default function Footer (){
    return(
        <footer style={{
            background: 'var(--primary)',
            color: 'var(--white)',
          }}>
            <div className="container">
              <div className="footer-grid">
                <div className="footer-section">
                  <h3>Sobre Nosotros</h3>
                  <p style={{ marginBottom: '1rem' }}>
                    Somos expertos en asesoría legal financiera, comprometidos con encontrar las mejores soluciones para nuestros clientes.
                  </p>
                  <div className="social-links">
                    <a href="#" className="social-link">
                      <Facebook size={24} />
                    </a>
                    <a href="#" className="social-link">
                      <Youtube size={24} />
                    </a>
                    <a href="#" className="social-link">
                      <Instagram size={24} />
                    </a>
                    <a href="#" className="social-link">
                      <img src={tiktok} alt="TikTok" style={{ width: '26px' }} />
                    </a>
                  </div>
                </div>
        
                <div className="footer-section">
                  <h3>Enlaces Rápidos</h3>
                  <ul className="footer-links">
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#nosotros">Nosotros</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                  </ul>
                </div>
        
                <div className="footer-section">
                  <h3>Servicios</h3>
                  <ul className="footer-links">
                    <li><a href="#defensa-legal">Para Personas</a></li>
                    <li><a href="#asesoria">Para Empresas</a></li>
                  </ul>
                </div>
        
                <div className="footer-section">
                  <h3>Contacto</h3>
                  <ul className="footer-links">
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <MapPin size={18} />
                      Julio Vranken 1094, Talagante
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Mail size={18} />
                      tsindeudas@gmail.com
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <PhoneCall size={18} />
                      +56 9 5537 9711
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Clock size={18} />
                      Lun - Vie: 9:00 - 18:00
                    </li>
                  </ul>
                </div>
              </div>
        
              <div style={{ 
                borderTop: '1px solid rgba(255,255,255,0.1)', 
                padding: '2rem 0', 
                textAlign: 'center'
              }}>
                <p>© {new Date().getFullYear()} Global Defensa. Todos los derechos reservados.</p>
              </div>
            </div>
          </footer>
    );
}