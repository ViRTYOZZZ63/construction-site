import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

// Импортируем ваши реальные изображения
import serviceImage1 from '../images/const1.jpg';
import serviceImage2 from '../images/const2.jpg';
import serviceImage3 from '../images/Const3.jpeg';

const ServicesContainer = styled.section`
  padding: 4rem 2rem;
  background: #f8f9fa;
  color: #0A1E40;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-family: 'Bebas Neue', sans-serif;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1.875rem;
    justify-content: center;
  }

  .card {
    text-decoration: none;
    flex-basis: 33%;
    border: 1px solid rgba(212, 175, 55, 0.2);
    position: relative;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;

    &.animated {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(212, 175, 55, 0.2);
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }

    .card-content {
      padding: 1.5rem;
      h3 {
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
        color: #D4AF37;
      }
      p {
        font-size: 1rem;
        line-height: 1.6;
        margin: 0; /* Убран margin */
        text-decoration: none; /* Убран text-decoration */
        user-select: none; /* Убрано выделение текста */
      }
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    .card {
      flex-basis: 100%;
    }
  }
`;

function ServicesSection() {
  const servicesRef = useRef(null);

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

    if (servicesRef.current) {
      const elements = servicesRef.current.querySelectorAll('.card');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    { title: "Жилое строительство", img: serviceImage1, desc: "Полный цикл работ от проектирования до сдачи объекта." },
    { title: "Промышленные объекты", img: serviceImage2, desc: "Строительство промышленных зданий и сооружений." },
    { title: "Ремонт и реконструкция", img: serviceImage3, desc: "Капитальный ремонт и реконструкция существующих зданий." },
  ];

  return (
    <ServicesContainer ref={servicesRef}>
      <h2>Строительные услуги</h2>
      <div className="cards">
        {services.map((service, index) => (
          <a key={index} href="#" className="card">
            <img src={service.img} alt={service.title} />
            <div className="card-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </ServicesContainer>
  );
}

export default ServicesSection;