import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import PinterestEmbed from './PinterestEmbed';
import { gsap } from 'gsap';

const HeroContainer = styled.section`
  background: linear-gradient(135deg, #0A1E40 0%, #1a3a6a 50%, #0A1E40 100%);
  color: white;
  padding: 8rem 2rem 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(212, 175, 55, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }

  h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 4rem;
    margin-bottom: 1.5rem;
    letter-spacing: 3px;
    text-shadow: 0 4px 20px rgba(0,0,0,0.5);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    background: linear-gradient(to right, #fff, #D4AF37);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    font-size: 1.3rem;
    max-width: 800px;
    margin: 0 auto 3rem;
    line-height: 1.8;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
    color: rgba(255,255,255,0.9);
    text-shadow: 0 2px 10px rgba(0,0,0,0.3);
  }

  .animated {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }

  @media (max-width: 768px) {
    padding: 6rem 1rem 3rem;
    
    h1 {
      font-size: 2.5rem;
      letter-spacing: 2px;
    }
    
    p {
      font-size: 1.1rem;
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