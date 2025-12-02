import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: ${props => props.$scrolled ? 'rgba(10, 30, 64, 0.98)' : 'rgba(10, 30, 64, 0.95)'};
  backdrop-filter: blur(10px);
  color: white;
  height: ${props => props.$scrolled ? '4.5rem' : '5.875rem'};
  z-index: 1000;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  transition: all 0.3s ease;
  box-shadow: ${props => props.$scrolled ? '0 4px 20px rgba(0,0,0,0.2)' : 'none'};

  @media (max-width: 768px) {
    height: 4rem;
    padding: 0 1.5rem;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
  transition: transform 0.3s ease;
  z-index: 1001;
  
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 968px) {
    position: fixed;
    top: 0;
    right: ${props => props.$isOpen ? '0' : '-100%'};
    height: 100vh;
    width: 280px;
    background: linear-gradient(135deg, #0A1E40 0%, #1a3a6a 100%);
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    box-shadow: -5px 0 20px rgba(0,0,0,0.3);
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  position: relative;
  transition: color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #D4AF37;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #D4AF37;
    
    &::after {
      width: 100%;
    }
  }
  
  @media (max-width: 968px) {
    font-size: 1.3rem;
    width: 100%;
    padding: 1rem;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    
    &::after {
      display: none;
    }
  }
`;

const PhoneLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #D4AF37;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  border: 2px solid #D4AF37;
  border-radius: 25px;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background: #D4AF37;
    color: #0A1E40;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(212, 175, 55, 0.3);
  }

  @media (max-width: 968px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    span {
      display: none;
    }
  }
`;

const PhoneIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

const MenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  
  @media (max-width: 968px) {
    display: flex;
  }
  
  span {
    width: 100%;
    height: 3px;
    background: ${props => props.$isOpen ? '#D4AF37' : 'white'};
    border-radius: 10px;
    transition: all 0.3s ease;
    transform-origin: center;
    
    &:nth-child(1) {
      transform: ${props => props.$isOpen ? 'rotate(45deg) translateY(10px)' : 'rotate(0)'};
    }
    
    &:nth-child(2) {
      opacity: ${props => props.$isOpen ? '0' : '1'};
    }
    
    &:nth-child(3) {
      transform: ${props => props.$isOpen ? 'rotate(-45deg) translateY(-10px)' : 'rotate(0)'};
    }
  }
`;

const Overlay = styled.div`
  display: none;
  
  @media (max-width: 968px) {
    display: ${props => props.$isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    z-index: 999;
    backdrop-filter: blur(4px);
  }
`;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer $scrolled={scrolled}>
        <Logo href="#">
          Универсал Строй Инвест
        </Logo>
        
        <Nav $isOpen={isMenuOpen}>
          <NavLink href="#services" onClick={handleNavClick}>Услуги</NavLink>
          <NavLink href="#steps" onClick={handleNavClick}>Как мы работаем</NavLink>
          <NavLink href="#blog" onClick={handleNavClick}>Блог</NavLink>
          <NavLink href="#contact" onClick={handleNavClick}>Контакты</NavLink>
        </Nav>
        
        <PhoneLink href="tel:+79991234567">
          <PhoneIcon viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </PhoneIcon>
          <span>+7 (999) 123-45-67</span>
        </PhoneLink>
        
        <MenuButton 
          $isOpen={isMenuOpen} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Меню"
        >
          <span />
          <span />
          <span />
        </MenuButton>
      </HeaderContainer>
      
      <Overlay $isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
    </>
  );
}

export default Header;
