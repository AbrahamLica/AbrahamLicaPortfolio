import styled from 'styled-components';
import { ContainerProps } from '../../GlobalStyles';

export const containerBegin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: green; */
  margin-right: 50px;
`;

export const nome = styled.h1`
  font-family: 'Parisienne';
  font-size: 7rem;
  color: black;
  letter-spacing: 5px;
`;

export const profissao = styled.h2`
  font-family: 'Roboto';
  font-size: 2.2rem;
  font-weight: 200;
  color: black;
  margin-top: 20px;
  letter-spacing: 10px;
`;

export const ContainerSocialMedia = styled.div<ContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: start;
  width: auto;
  margin: ${(props) => props.margin};
`;
