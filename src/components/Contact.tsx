import { PhoneCall } from 'lucide-react';
import '../styles/global.css';
export default function Contact() {
  return (
    <section className="contact">
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <div>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
            ¿Necesitas Ayuda con tus Deudas?
          </h2>
          <p style={{ marginBottom: '2rem' }}>
            Contáctanos para una evaluación gratuita de tu caso. Nuestro equipo de expertos está listo para ayudarte.
          </p>
          <a href="tel:+56912345678" className="button button-primary" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <PhoneCall size={20} />
            Llámanos Ahora
          </a>
        </div>
        <form style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Nombre</label>
            <input type="text" style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email</label>
            <input type="email" style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem' }}>Mensaje</label>
            <textarea rows={4} style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '4px',
              border: '1px solid #ddd'
            }}></textarea>
          </div>
          <button type="submit" className="button button-primary" style={{ width: '100%' }}>
            Enviar Consulta
          </button>
        </form>
      </div>
    </section>
  );
}
