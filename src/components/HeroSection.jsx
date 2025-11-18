import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import PinterestEmbed from './PinterestEmbed';
import { gsap } from 'gsap';

const HeroContainer = styled.section`
  background: linear-gradient(135deg, #0A1E40 0%, #1a3a6a 100%);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 3.5rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 2rem;
    line-height: 1.6;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }

  .animated {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    h1 {
      font-size: 2.5rem;
    }
  }
`;

function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('h1, p');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <HeroContainer ref={heroRef}>
      <h1>Универсал Строй Инвест</h1>
      <p>Ваш надежный партнер в строительстве и инвестициях. От проекта до ключей — мы делаем всё под ключ.</p>
      <ImageSlider />
      <PinterestEmbed />
    </HeroContainer>
  );
}

export default HeroSection;