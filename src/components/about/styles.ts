import { keyframes, styled } from 'styled-components';

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
