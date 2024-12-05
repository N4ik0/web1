import { PhoneCall } from 'lucide-react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { useState } from 'react';
import '../styles/contact.css';
import '../styles/global.css';


export default function Contact() {
  const [phone, setPhone] = useState('');

  const handlePhoneChange = (value: string) => {
    setPhone(value);
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className='text-container'>
          <h2 className="contact-heading">
            ¿Necesitas Ayuda con tus Deudas?
          </h2>
          <p className="contact-description">
            Contáctanos para una evaluación gratuita de tu caso. Nuestro equipo de expertos está listo para ayudarte.
          </p>
          <a href="tel:+56912345678" className="button button-primary contact-button">
            <PhoneCall size={20} />
            Llámanos Ahora
          </a>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" className="form-input" placeholder="Ingresa tu nombre" />
          </div>
          <div className="form-group">
            <label>Número de Teléfono</label>
            <div className="phone-wrapper">
              <PhoneInput
                country="cl"
                value={phone}
                onChange={handlePhoneChange}
                inputClass="phone-input"
                buttonClass="phone-select"
                dropdownClass="phone-dropdown"
                enableSearch
                placeholder="Ingresa tu número de teléfono"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Correo Electrónico</label>
            <input type="email" className="form-input" placeholder="Ingresa tu correo electrónico" />
          </div>
          <button type="submit" className="button button-primary form-submit">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}