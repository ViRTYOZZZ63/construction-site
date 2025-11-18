import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const FormContainer = styled.section`
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

  .form-wrapper {
    max-width: 600px;
    margin: 0 auto;
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;

    &.animated {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input, textarea {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    background-color: rgba(255, 255, 255, 0.05);
    color: #0A1E40;

    &:focus {
      outline: none;
      border-color: #D4AF37;
    }
  }

  button {
    padding: 0.75rem;
    background: #D4AF37;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;

    &:hover {
      background: #C99E25;
    }
  }

  .notify {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #f0f0f0;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1rem;
    svg {
      fill: #D4AF37;
    }
    p {
      margin: 0;
      text-decoration: none;
      user-select: none; /* Убрано выделение текста */
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    .form-wrapper {
      padding: 1.5rem;
    }
  }
`;

function ContactForm() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ username: '', userphone: '' });
  const [submitted, setSubmitted] = useState(false);

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

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Вывод данных в консоль для тестирования
    console.log('Отправлено:', formData);
    
    // Показываем сообщение об успешной отправке
    setSubmitted(true);
    setFormData({ username: '', userphone: '' });
    
    // Сбросить сообщение через 3 секунды
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <FormContainer ref={formRef}>
      <h2>Свяжитесь с нами</h2>
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Ваше имя"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="userphone"
            placeholder="Ваш телефон"
            value={formData.userphone}
            onChange={handleChange}
            required
          />
          <button type="submit">Отправить</button>
        </form>
        {submitted && (
          <div className="notify">
            <svg width="14" height="14"><use href="img/sprite.svg#shield"></use></svg>
            <p>Спасибо! Мы свяжемся с вами в ближайшее время.</p>
          </div>
        )}
      </div>
    </FormContainer>
  );
}

export default ContactForm;