import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/Branch.css";
import antofagasta from "../assets/images/antofagasta.jpg";
import concepcion from "../assets/images/concepcion.jpg";
import iquique from "../assets/images/iquique.jpg";
import puertomontt from "../assets/images/puertomontt.jpeg";
import puntaarenas from "../assets/images/puntaarenas.jpg";
import santiago from "../assets/images/santiago.jpeg";

const regions = [
  { name: "Región de Tarapacá", image: iquique },
  { name: "Región de Antofagasta", image: antofagasta },
  { name: "Región Metropolitana", image: santiago },
  { name: "Región del Biobío", image: concepcion },
  { name: "Región de Los Lagos", image: puertomontt },
  { name: "Región de Magallanes", image: puntaarenas },
];

export default function Branch() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateSlidesToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 600) {
      setSlidesToShow(1);
    } else if (screenWidth <= 900) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const maxIndex = Math.max(0, regions.length - slidesToShow);

  const nextSlide = () => {
    setCurrentIndex((current) => (current >= maxIndex ? 0 : current + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((current) => (current <= 0 ? maxIndex : current - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="branch-page">
      <div className="branch-carousel">
        <div className="branch-container">
          <div
            className="branch-slides"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              width: `${(regions.length * 100) / slidesToShow}%`,
            }}
          >
            {regions.map((region, index) => (
              <div
                key={index}
                className="branch-slide"
                style={{
                  width: `${100 / slidesToShow}%`,
                }}
              >
                <img src={region.image} alt={region.name} className="branch-image" />
                <div className="branch-name">{region.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Controles del carrusel */}
        <div className="carousel-controls">
          <button onClick={prevSlide} className="carousel-button">
            <ChevronLeft size={32} />
          </button>
          <div className="carousel-dots">
            {Array.from({ length: regions.length }).map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="carousel-button">
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}
