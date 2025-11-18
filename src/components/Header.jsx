import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(180deg, #0A1E40 0%, #0A1E40 100%);
  color: white;
  height: 5.875rem; /* Вернули оригинальную высоту */
  z-index: 2;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  transition: background-color 0.2s, height 0.2s;

  .logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.5rem;
    color: white;
    text-decoration: none;

    svg {
      width: 9rem;
      height: 2.75rem;
      fill: white;
    }
  }

  nav {
    display: flex;
    gap: 2rem;

    a {
      color: white;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;

      &:hover {
        color: #D4AF37;
      }
    }
  }

  .phone-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #D4AF37;
    text-decoration: none;
    font-weight: 600;

    svg {
      fill: #D4AF37;
    }
  }

  @media (max-width: 768px) {
    height: 4rem;
    padding: 0 1rem;

    .logo {
      font-size: 1.2rem;
    }

    nav {
      display: none;
    }
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <a href="#" className="logo">
        Универсал Строй Инвест
      </a>
      <nav>
        <a href="#services">Услуги</a>
        <a href="#steps">Как мы работаем</a>
        <a href="#blog">Блог</a>
        <a href="#contact">Контакты</a>
      </nav>
      <a href="tel:+79991234567" className="phone-link">
        <svg width="24" height="24"><use href="img/sprite.svg#phone"></use></svg>
        +7 (999) 123-45-67
      </a>
    </HeaderContainer>
  );
}

export default Header;