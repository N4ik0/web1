import { useState, useEffect } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import '../styles/Navbar.css';
import '../styles/global.css';  
import Logo from '../assets/logo/Global.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Manejo del evento de scroll
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 250);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clases dinámicas para estilos condicionales
  const navbarClass = `navbar ${isSticky ? 'sticky' : ''}`;
  const logoClass = `navbar-logo ${isSticky ? 'sticky' : ''}`;
  const menuButtonClass = `menu-button ${isSticky ? 'sticky' : ''}`;
  const menuClass = `navbar-menu ${isOpen ? 'active' : ''}`;
  const linkClass = `navbar-link ${isSticky ? 'sticky' : ''} flex items-center h-full`;
  const contactClass = `navbar-contact ${isSticky ? 'sticky' : ''}`;

  return (
    <nav className={navbarClass}>
      <div className="navbar-container">
        {/* Logo */}
        <a href="/" className={logoClass}>
          <img className='logo-img' src={Logo} alt="Global Defensa" />
          <h1> Global Defensa</h1>
        </a>

        {/* Botón de menú */}
        <button className={menuButtonClass} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú de navegación */}
        <ul className={`${menuClass} flex items-center`}>
          {['Inicio', 'Servicios', 'Nosotros', 'Contacto'].map((section) => (
            <li key={section} className="flex items-center">
              <a href={`#${section.toLowerCase()}`} className={linkClass}>
                {section}
              </a>
            </li>
          ))}
          <li>
            <a href="https://wa.me/56955379711" target='_blank' className={contactClass}>
              <Phone size={18} />
              +56 9 5537 9711
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
