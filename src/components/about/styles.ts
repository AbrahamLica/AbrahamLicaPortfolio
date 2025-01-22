import { keyframes, styled } from 'styled-components';
import { ContainerProps } from '../../GlobalStyles';

const brutalistShake = keyframes`
  0%,
  100% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(-2px) translateY(-2px) rotate(-1deg);
  }
  75% {
    transform: translateX(2px) translateY(2px) rotate(1deg);
  }
`;

export const Img = styled.img<ContainerProps>`
  width: 40rem;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: 2260px) {
    width: 30rem;
  }

  @media (max-width: 1550px) {
    width: 25rem;
  }

  @media (max-width: 1420px) {
    /* width: 25rem; */
  }

  @media (max-width: 375px) {
    width: 15rem;
  }
`;
