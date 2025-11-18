import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(180deg, #0A1E40 0%, #0A1E40 100%);
  color: #D4AF37;
  padding-top: 3rem;
  padding-bottom: 2rem;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const FooterTop = styled.div`
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FooterLogo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  text-decoration: none;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const FooterPhone = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #D4AF37;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.5rem;
  flex-shrink: 0;
  
  &:hover {
    color: #C99E25;
  }
`;

const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
`;

const FooterInfoItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #D4AF37;
  text-decoration: none;
  font-weight: 400;
  transition: color 0.3s ease;
  
  &:hover {
    color: #C99E25;
  }
`;

const FooterBottom = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
`;

const FooterColumn = styled.div`
  flex: 1;
  min-width: 200px;
`;

const FooterTitle = styled.h3`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #D4AF37;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const FooterLink = styled.a`
  color: #D4AF37;
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #C99E25;
  }
`;

const FooterSeparator = styled.hr`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 2rem 0;
  border: none;
`;

const FooterSocial = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #D4AF37;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #D4AF37;
    color: white;
    transform: translateY(-3px);
  }
`;

const FooterCopyright = styled.div`
  text-align: center;
  padding-top: 1rem;
  margin-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <FooterTop>
          <FooterLogo href="#">
            Универсал Строй Инвест
          </FooterLogo>
          <FooterPhone href="tel:+79991234567">
            +7 (999) 123-45-67
          </FooterPhone>
          <FooterInfo>
            <FooterInfoItem href="mailto:info@universalsstroyinvest.ru">
              info@universalsstroyinvest.ru
            </FooterInfoItem>
            <FooterInfoItem href="#">
              г. Москва, Холодильный пер. 4к1с8
            </FooterInfoItem>
          </FooterInfo>
        </FooterTop>

        <FooterBottom>
          <FooterColumn>
            <FooterTitle>Услуги</FooterTitle>
            <FooterList>
              <FooterListItem><FooterLink href="#">Жилое строительство</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Промышленные объекты</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Ремонт и реконструкция</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Ландшафтный дизайн</FooterLink></FooterListItem>
            </FooterList>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Компания</FooterTitle>
            <FooterList>
              <FooterListItem><FooterLink href="#">О компании</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Наши проекты</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Отзывы клиентов</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">Вакансии</FooterLink></FooterListItem>
            </FooterList>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Контакты</FooterTitle>
            <FooterList>
              <FooterListItem><FooterLink href="tel:+79991234567">+7 (999) 123-45-67</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="mailto:info@universalsstroyinvest.ru">info@universalsstroyinvest.ru</FooterLink></FooterListItem>
              <FooterListItem><FooterLink href="#">г. Москва, Холодильный пер. 4к1с8</FooterLink></FooterListItem>
            </FooterList>
            
            <FooterSocial>
              <SocialLink href="#"><svg width="24" height="24"><use href="img/sprite.svg#vk"></use></svg></SocialLink>
              <SocialLink href="#"><svg width="24" height="24"><use href="img/sprite.svg#inst"></use></svg></SocialLink>
              <SocialLink href="#"><svg width="24" height="24"><use href="img/sprite.svg#facebook"></use></svg></SocialLink>
            </FooterSocial>
          </FooterColumn>
        </FooterBottom>

        <FooterSeparator />

        <FooterCopyright>
          © {new Date().getFullYear()} Универсал Строй Инвест. Все права защищены.
        </FooterCopyright>
      </div>
    </FooterContainer>
  );
}

export default Footer;