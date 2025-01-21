import styled, { keyframes } from 'styled-components';
import { ContainerProps, TextProps } from '../../GlobalStyles';

const typing = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const blinkCaret = keyframes`
  0% {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
  100% {
    border-color: transparent;
  }
`;

export const containerBegin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
`;

export const textoDigitando = styled.div`
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid black;
  color: black;
  text-align: center;
  display: inline-block;
  animation: ${typing} 2s steps(50) forwards, ${blinkCaret} 0.3s step-end infinite;

  & > span {
    font-weight: 500;
    padding-left: 15px;
    padding-top: 10px;
    font-family: 'Parisienne';
    font-size: 7rem;
    letter-spacing: 5px;
    display: block;
  }

  & > span:nth-child(2) {
    font-family: 'Roboto', sans-serif;
    font-size: 2.2rem;
    font-weight: 200;
    color: black;
    letter-spacing: 10px;
    margin-top: 20px;
  }
`;

export const ContainerSocialMedia = styled.div<ContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: start;
  width: auto;
  margin: ${(props) => props.margin};
  transition: transform 0.3s ease-in-out;
  padding: 5px;

  img {
    transition: transform 0.2s ease-in-out;
  }

  p {
    transition: transform 0.2s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover p {
    transform: scale(1.1);
  }
`;
