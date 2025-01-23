import { styled } from 'styled-components';

export const MainContainer = styled.div`
  width: 50%;
  padding: 30px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 90%;
  background: #fff;
  border-radius: 15px;
  overflow: hidden;
  padding: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #333;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const ModalCarousel = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 2000px) {
    height: 70vh;
  }

  @media (max-width: 1750px) {
    height: 62vh;
  }

  @media (max-width: 1550px) {
    height: 60vh;
  }

  @media (max-width: 1350px) {
    height: 50vh;
  }

  @media (max-width: 1200px) {
    height: 40vh;
  }

  @media (max-width: 1000px) {
    height: 30vh;
  }

  @media (max-width: 850px) {
    height: 25vh;
  }

  @media (max-width: 700px) {
    height: 20vh;
  }

  @media (max-width: 600px) {
    height: 16vh;
  }

  @media (max-width: 470px) {
    height: 12vh;
  }

  @media (max-width: 400px) {
    height: 9vh;
  }
`;

export const ModalImg = styled.img`
  width: 80%;
  border-radius: 10px;
  object-fit: contain;
  transition: transform 0.5s ease-in-out;
`;

export const Carousel = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
`;

export const Img = styled.img<{ isSmallScreen: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  transition: transform 0.5s ease-in-out;
  cursor: ${({ isSmallScreen }) => (isSmallScreen ? 'default' : 'pointer')};
  position: relative;
  z-index: 0;

  ${({ isSmallScreen }) =>
    !isSmallScreen &&
    `
    &:hover {
      opacity: 0.7;
    }
  `}

  &::after {
    content: '👁️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2rem;
    color: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }
`;

export const Slider = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  border-radius: 20px;
  position: relative;
`;

export const ButtonPrev = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  color: #333;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  z-index: 2;

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  svg {
    font-size: 20px;
  }
`;

export const ButtonNext = styled(ButtonPrev)`
  left: auto;
  right: 10px;
`;

export const Contador = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  opacity: 0.4;
`;
