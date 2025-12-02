import React from 'react';
import styled from 'styled-components';

// Внешняя карточка, чтобы телефон не "терялся" на фоне hero
const PinterestCard = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 3rem auto 0;
  padding: 1.5rem 1.5rem 2rem;
  border-radius: 28px;
  background: radial-gradient(circle at 0% 0%, rgba(255,255,255,0.08) 0%, transparent 60%),
              radial-gradient(circle at 100% 100%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.8) 55%);
  box-shadow: 0 18px 45px rgba(0,0,0,0.5);
  border: 1px solid rgba(255,255,255,0.08);

  @media (max-width: 768px) {
    max-width: 360px;
    margin-top: 2.5rem;
    padding: 1.25rem 1.25rem 1.75rem;
  }
`;

const PhoneContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 320px;
  }
`;

const iPhone = styled.div`
  width: 100%;
  aspect-ratio: 9 / 16;
  background: radial-gradient(circle at 20% 0%, #444 0%, #111 40%, #000 100%);
  border-radius: 38px;
  position: relative;
  box-shadow:
    0 20px 60px rgba(0,0,0,0.8),
    0 0 0 1px rgba(255,255,255,0.18) inset,
    0 0 0 10px #05070c;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow:
      0 26px 70px rgba(0,0,0,0.9),
      0 0 0 1px rgba(255,255,255,0.25) inset,
      0 0 0 10px #05070c;
  }

  @media (max-width: 768px) {
    border-radius: 34px;
  }
`;

const Notch = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: 30px;
  background: #000;
  border-radius: 0 0 20px 20px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  
  @media (max-width: 768px) {
    width: 140px;
    height: 25px;
  }
`;

const Camera = styled.div`
  width: 10px;
  height: 10px;
  background: #1a1a2e;
  border-radius: 50%;
  box-shadow: 0 0 0 2px #333;
  margin-right: 8px;
  
  @media (max-width: 768px) {
    width: 8px;
    height: 8px;
  }
`;

const Speaker = styled.div`
  width: 50px;
  height: 4px;
  background: #1a1a2e;
  border-radius: 2px;
  
  @media (max-width: 768px) {
    width: 40px;
  }
`;

const Screen = styled.div`
  position: absolute;
  top: 18px;
  left: 10px;
  right: 10px;
  bottom: 12px;
  background: #fff;
  overflow: hidden;
  border-radius: 28px;

  @media (max-width: 768px) {
    top: 16px;
    left: 8px;
    right: 8px;
    bottom: 10px;
    border-radius: 24px;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: inherit;
  }
`;

const LoadingPlaceholder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #999;
  font-size: 0.85rem;
  text-align: center;
  pointer-events: none;
`;

function PinterestEmbed() {
  return (
    <PinterestCard>
      <PhoneContainer>
        <iPhone>
          <Notch>
            <Camera />
            <Speaker />
          </Notch>
          <Screen>
            <VideoContainer>
              <iframe
                src="https://assets.pinterest.com/ext/embed.html?id=3025924745353151"
                height="714"
                width="345"
                frameBorder="0"
                scrolling="no"
                title="Pinterest Embed"
                loading="lazy"
              />
              <LoadingPlaceholder>
                Загрузка Pinterest...
              </LoadingPlaceholder>
            </VideoContainer>
          </Screen>
        </iPhone>
      </PhoneContainer>
    </PinterestCard>
  );
}

export default PinterestEmbed;
