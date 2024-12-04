import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ResponsiveCarousel.css';

import antofagasta from '../assets/images/antofagasta.jpg';
import concepcion from '../assets/images/concepcion.jpg';
import iquique from '../assets/images/iquique.jpg';
import puertomontt from '../assets/images/puertomontt.jpeg';
import puntaarenas from '../assets/images/puntaarenas.jpg';
import santiago from '../assets/images/santiago.jpeg';

const images = [
  { src: antofagasta, alt: 'Antofagasta', legend: 'Antofagasta' },
  { src: concepcion, alt: 'Concepción', legend: 'Concepción' },
  { src: iquique, alt: 'Iquique', legend: 'Iquique' },
  { src: puertomontt, alt: 'Puerto Montt', legend: 'Puerto Montt' },
  { src: puntaarenas, alt: 'Punta Arenas', legend: 'Punta Arenas' },
  { src: santiago, alt: 'Santiago', legend: 'Santiago' },
];

const ResponsiveCarousel: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slidePercentage, setSlidePercentage] = useState(33.33);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Ajusta el porcentaje de las tarjetas según el tamaño de la ventana
    if (windowWidth <= 768) {
      setSlidePercentage(100); // Una tarjeta en pantallas pequeñas
    } else if (windowWidth <= 1024) {
      setSlidePercentage(50); // Dos tarjetas en pantallas medianas
    } else {
      setSlidePercentage(30); // Tres tarjetas con espacio entre ellas
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="carousel-container">
      <Carousel
        showStatus={false}
        showArrows={false}
        showIndicators={true}
        infiniteLoop={true}
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        swipeable={true}
        emulateTouch={true}
        centerMode={true}
        centerSlidePercentage={slidePercentage}
        dynamicHeight={false}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image.src} alt={image.alt} />
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iusto excepturi dolorum ut rem ad vitae nostrum voluptatum deserunt laboriosam tempore atque quis, vero est! Omnis magnam quibusdam consectetur exercitationem.
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ResponsiveCarousel;
