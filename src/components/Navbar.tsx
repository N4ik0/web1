import { useState, useEffect } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import '../styles/Navbar.css';
import '../styles/global.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Manejo del evento de scroll
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clases dinámicas para estilos condicionales
  const navbarClass = `navbar ${isSticky ? 'sticky' : ''}`;
  const logoClass = `navbar-logo ${isSticky ? 'sticky' : ''}`;
  const menuButtonClass = `menu-button ${isSticky ? 'sticky' : ''}`;
  const menuClass = `navbar-menu ${isOpen ? 'active' : ''}`;
  const linkClass = `navbar-link ${isSticky ? 'sticky' : ''}`;
  const contactClass = `navbar-contact ${isSticky ? 'sticky' : ''}`;

  return (
    <nav className={navbarClass}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className={logoClass}>
          Libertad Deuda
        </a>

        {/* Botón de menú */}
        <button className={menuButtonClass} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú de navegación */}
        <ul className={menuClass}>
          {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((section) => (
            <li key={section}>
              <a href={`#${section.toLowerCase()}`} className={linkClass}>
                {section}
              </a>
            </li>
          ))}
          <li>
            <a href="tel:+56912345678" className={contactClass}>
              <Phone size={18} />
              +569 1234 5678
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
