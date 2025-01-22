import { styled } from 'styled-components';

export const logo = styled.p`
  font-family: 'Parisienne';
  font-size: 3rem;

  @media (max-width: 2560px) {
    font-size: 7rem;
  }

  @media (max-width: 2000px) {
    font-size: 5rem;
  }

  @media (max-width: 870px) {
    display: none;
  }
`;
