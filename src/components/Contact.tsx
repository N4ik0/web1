import { PhoneCall } from 'lucide-react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/contact.css';
import '../styles/global.css';

export default function Contact() {
  const [phone, setPhone] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [message, setMessage] = useState<{ type: 'success' | 'error' | ''; text: string }>({
    type: '',
    text: '',
  });

  const handlePhoneChange = (value: string) => {
    setPhone(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      phone,
      email: formData.email,
    };

    emailjs
      .send(
        'service_id', // Reemplaza con tu service ID
        'template_id', // Reemplaza con tu template ID
        templateParams,
        'public_key' // Reemplaza con tu public key
      )
      .then(
        () => {
          setMessage({ type: 'success', text: 'Enviado correctamente' });
        },
        () => {
          setMessage({ type: 'error', text: 'Hubo un error, por favor intenta de nuevo.' });
        }
      );
  };

  return (
    <section id='contacto' className="contact">
      <div className="contact-container">
        <div className="text-container">
          <h2 className="contact-heading">¿Necesitas Ayuda con tus Deudas?</h2>
          <p className="contact-description">
            Contáctanos para una evaluación gratuita de tu caso. Nuestro equipo de expertos está listo para ayudarte.
          </p>
          <a
            href="https://wa.me/56988789627"
            target="_blank"
            className="button button-primary contact-button"
          >
            <PhoneCall size={20} />
            Llámanos Ahora
          </a>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              className="form-input"
              placeholder="Ingresa tu nombre"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
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
            <input
              type="email"
              className="form-input"
              placeholder="Ingresa tu correo electrónico"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="button button-primary form-submit">
            Enviar
          </button>
          {message.type && (
            <div
              className={`form-message ${message.type === 'success' ? 'success' : 'error'}`}
              style={{
                marginTop: '10px',
                color: message.type === 'success' ? 'green' : 'red',
                fontWeight: 'bold',
              }}
            >
              {message.text}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
