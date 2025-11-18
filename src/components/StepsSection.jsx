import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const StepsContainer = styled.section`
  padding: 4rem 2rem;
  background: #0A1E40;
  color: white;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-family: 'Bebas Neue', sans-serif;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
  }

  .steps {
    display: flex;
    flex-wrap: wrap;
    gap: 1.875rem;
    justify-content: center;
  }

  .steps-item {
    max-width: 20.625rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(212, 175, 55, 0.2);
    padding: 2rem;
    border-radius: 12px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
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

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%);
      z-index: -1;
    }

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #D4AF37;
    }

    p {
      font-size: 1rem;
      line-height: 1.6;
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    .steps-item {
      max-width: 100%;
    }
  }
`;

function StepsSection() {
  const stepsRef = useRef(null);

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

    if (stepsRef.current) {
      const elements = stepsRef.current.querySelectorAll('.steps-item');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    { title: "Консультация", desc: "Бесплатная консультация по вашему проекту." },
    { title: "Проектирование", desc: "Создание детального плана и сметы." },
    { title: "Строительство", desc: "Выполнение работ по договору и срокам." },
    { title: "Приемка", desc: "Финальная проверка и передача объекта." },
  ];

  return (
    <StepsContainer ref={stepsRef}>
      <div className="container">
        <h2>Схема работы</h2>
        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="steps-item">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </StepsContainer>
  );
}

export default StepsSection;