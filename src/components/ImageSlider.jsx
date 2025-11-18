import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// Импортируем компоненты Swiper
import { Swiper, SwiperSlide } from 'swiper/react';

// Импортируем стили Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Импортируем модули Swiper
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Импортируем ваши реальные изображения
import image1 from '../images/alexander-tsang-WdLsHCgW15M-unsplash.jpg';
import image2 from '../images/ashkan-forouzani-v31lgBn5114-unsplash.jpg';
import image3 from '../images/ben-kim-KNfKA9m_UfY-unsplash.jpg';
import image4 from '../images/gerrit-schwerzel-itgxCM17U5A-unsplash.jpg';
import image5 from '../images/prajwal-hiremath-W05EYgNSPgE-unsplash.jpg';

const images = [
  image1,
  image2,
  image3,
  image4,
  image5
];

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  height: 500px;

  .swiper {
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center;
    position: relative;
    transition: transform 0.5s ease-in-out;
  }

  .swiper-pagination {
    bottom: 20px;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background: rgba(212, 175, 55, 0.3);
    opacity: 1;
    border-radius: 50%;
    transition: all 0.3s ease;
  }

  .swiper-pagination-bullet-active {
    background: #D4AF37;
    transform: scale(1.3);
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;

function ImageSlider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleTouchStart = (e) => {
      e.preventDefault();
    };

    if (swiperRef.current) {
      const swiperElement = swiperRef.current;
      swiperElement.addEventListener('touchstart', handleTouchStart, { passive: false });
      
      return () => {
        swiperElement.removeEventListener('touchstart', handleTouchStart);
      };
    }
  }, []);

  return (
    <SliderContainer>
      <Swiper
        ref={swiperRef}
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        loop={true}
        speed={800}
        allowTouchMove={true}
        resistanceRatio={0.85}
        touchRatio={1}
        touchAngle={45}
        simulateTouch={true}
        threshold={5}
        grabCursor={true}
        watchSlidesProgress={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div style={{ 
              backgroundImage: `url(${image})`, 
              width: '100%', 
              height: '100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
}

export default ImageSlider;