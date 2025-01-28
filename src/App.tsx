import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import './styles/global.css';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Branch from './components/Branch';
import wspLogo from './assets/logo/WhatsApp-Logo.wine.svg';
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Branch/>
        <Testimonials />
        <Contact />
        <div className='wsp-logo-container'>
          <a href="https://wa.me/56955379711" target='_blank' className='wsp-contact'>
            <img className='wsp-logo' src={wspLogo} alt="WhatsApp" />
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;