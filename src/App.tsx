import Navbar from './components/Navbar';
import Testimonials from './components/Testimonials';
import './styles/global.css';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Branch from './components/Branch';

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
      </main>
      <Footer />
    </>
  );
}

export default App;