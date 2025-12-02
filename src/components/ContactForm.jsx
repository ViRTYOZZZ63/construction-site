import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const FormContainer = styled.section`
  padding: 5rem 2rem 4rem;
  background: linear-gradient(180deg, #f8f9fa 0%, #edf0f3 100%);
  color: #0A1E40;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    font-size: 2.4rem;
    margin-bottom: 1rem;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 2px;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;

    &.animated {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  }

  .form-wrapper {
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    background: #ffffff;
    padding: 2.25rem 2.5rem;
    border-radius: 16px;
    box-shadow: 0 12px 35px rgba(10, 30, 64, 0.15);
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease 0.15s;
    border: 1px solid rgba(212, 175, 55, 0.15);

    &.animated {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.85rem 1rem;
    border: 1px solid #dde2e7;
    border-radius: 10px;
    font-size: 1rem;
    transition: border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
    background-color: #ffffff;
    color: #0A1E40;

    &::placeholder {
      color: #9aa4b2;
    }

    &:focus {
      outline: none;
      border-color: #D4AF37;
      box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.25);
      background-color: #fffdf6;
    }
  }

  button {
    padding: 0.85rem 1rem;
    background: linear-gradient(135deg, #D4AF37, #C99E25);
    color: white;
    border: none;
    border-radius: 999px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;

    &:hover {
      background: linear-gradient(135deg, #E1BF4A, #D4AF37);
      transform: translateY(-1px);
      box-shadow: 0 8px 20px rgba(212, 175, 55, 0.35);
    }

    &:active {
      transform: translateY(0);
      box-shadow: none;
    }
  }

  .notify {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: #f3f4f6;
    padding: 1rem 1.25rem;
    border-radius: 10px;
    margin-top: 1.25rem;
    border: 1px solid rgba(212, 175, 55, 0.25);

    svg {
      fill: #D4AF37;
      flex-shrink: 0;
    }

    p {
      margin: 0;
      text-decoration: none;
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 1.25rem 3rem;

    .form-wrapper {
      padding: 1.75rem 1.5rem;
      max-width: 100%;
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
      { threshold: 0.15 }
    );

    if (formRef.current) {
      const elements = formRef.current.querySelectorAll('h2, .form-wrapper');
      elements.forEach((el) => observer.observe(el));
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
    <FormContainer id="contact" ref={formRef}>
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