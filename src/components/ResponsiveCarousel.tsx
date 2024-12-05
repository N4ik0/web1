import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

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

const Carousel: React.FC = () => {
  const settings = {
    autoplay: true,
    accessibility:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            dots:true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div className='carousel-container'>
      <div className='sucursal'>
        Conoce nuestras sucursales
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <div className='carousel-image' style={{
              backgroundImage: `url(${image.src})`,
            }}>
              <div className="carousel-text">{image.legend}</div>
            </div>
          </div>
        ))}
      </Slider>
      <div className='button-surcursales'>
        <button className='button button-primary sucursales'>
          Todas las sucursales
        </button>
      </div>
      </div>
  );
};

export default Carousel;
