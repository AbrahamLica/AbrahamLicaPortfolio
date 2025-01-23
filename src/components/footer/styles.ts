import styled, { css, keyframes } from 'styled-components';
import { TextProps } from '../../GlobalStyles';

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  min-height: 10vh;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease; /* Aumenta o tempo e suaviza o movimento */

  &:hover {
    transform: scale(1.1);
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 50%;

  @media (max-width: 550px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

export const Logo = styled.p`
  font-family: 'Parisienne';
  font-size: 3rem;

  @media (max-width: 1000px) {
    font-size: 2.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1rem;

  @media (max-width: 550px) {
    text-align: center;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  justify-content: end;
  /* padding: 10px; */
  height: 100%;
  width: 50%;

  @media (max-width: 550px) {
    width: 100%;
    justify-content: center;
  }
`;

export const Link = styled.a<TextProps>`
  margin: 10px;
`;
