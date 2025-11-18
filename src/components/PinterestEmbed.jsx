import React from 'react';
import styled from 'styled-components';

const PhoneContainer = styled.div`
  position: relative;
  width: 345px;
  margin: 2rem auto;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
`;

const iPhone = styled.div`
  width: 100%;
  height: 714px;
  background: #000;
  border-radius: 30px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background: #000;
    z-index: 2;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%);
    z-index: 1;
  }
`;

const Screen = styled.div`
  width: 100%;
  height: calc(100% - 30px);
  background: #fff;
  position: relative;
  z-index: 2;
  overflow: hidden;
`;

const Camera = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  background: #333;
  border-radius: 50%;
  z-index: 3;
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

function PinterestEmbed() {
  return (
    <PhoneContainer>
      <iPhone>
        <Camera />
        <Screen>
          <VideoContainer>
            <iframe
              src="https://assets.pinterest.com/ext/embed.html?id=3025924745353151"
              height="714"
              width="345"
              frameborder="0"
              scrolling="no"
              title="Pinterest Embed"
              style={{ width: '100%', height: '100%', border: 'none' }}
            ></iframe>
          </VideoContainer>
        </Screen>
      </iPhone>
    </PhoneContainer>
  );
}

export default PinterestEmbed;