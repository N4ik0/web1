import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import testimonios from './testimonios';
import '../styles/Testimonials.css';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 2;
  const maxIndex = testimonios.length - slidesToShow;

  const nextSlide = () => {
    setCurrentIndex((current) => (current >= maxIndex ? 0 : current + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((current) => (current <= 0 ? maxIndex : current - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="testimonial-page">
      {/* Fondo curvo detrás del slider */}
      <svg
        className="curve-background"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#f8f9fa"
          d="M0,96L80,128C160,160,320,224,480,256C640,288,800,288,960,256C1120,224,1280,160,1360,128L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>

      {/* Contenedor del slider */}
      <div className="testimonial-carousel">
        <div className="testimonial-container">
          <div
            className="testimonial-slides"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {testimonios.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-content">
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} fill="#3D52D5" color="#3D52D5" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <p className="testimonial-author">{testimonial.author}</p>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controles del carrusel */}
        <div className="carousel-controls">
          <button onClick={prevSlide} className="carousel-button">
            <ChevronLeft size={24} />
          </button>
          <div className="carousel-dots">
            {[...Array(testimonios.length - slidesToShow + 1)].map(
              (_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              )
            )}
          </div>
          <button onClick={nextSlide} className="carousel-button">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
