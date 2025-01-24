import styled, { keyframes } from 'styled-components';
import { ContainerProps } from '../../GlobalStyles';

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

export const ContainerMain = styled.div`
  margin-top: 15vh;
  margin-bottom: 50px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */

  @media (max-width: 1270px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

export const containerBegin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-right: 2rem;

  @media (max-width: 1270px) {
    margin: 0;
  }
`;

export const textoDigitando = styled.div`
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid black;
  color: black;
  text-align: center;
  display: inline-block;
  animation: ${typing} 2s steps(50) forwards, ${blinkCaret} 0.3s step-end infinite;
  width: 100%;
  padding-top: 3px;

  & > span {
    font-weight: 500;
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

  @media (max-width: 2560px) {
    & > span {
      font-size: 12rem;
    }

    & > span:nth-child(2) {
      font-size: 5rem;
    }
  }

  @media (max-width: 2260px) {
    & > span {
      font-size: 10rem;
    }

    & > span:nth-child(2) {
      font-size: 4rem;
    }
  }

  @media (max-width: 1870px) {
    & > span {
      font-size: 8rem;
    }

    & > span:nth-child(2) {
      font-size: 3rem;
    }
  }

  @media (max-width: 1550px) {
    & > span {
      font-size: 7rem;
    }

    & > span:nth-child(2) {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 1420px) {
    & > span {
      font-size: 5rem;
    }

    & > span:nth-child(2) {
      font-size: 2rem;
    }
  }

  @media (max-width: 1270px) {
    margin-top: 2rem;
  }

  @media (max-width: 810px) {
    animation: none;
    border: none;

    & > span {
      font-size: 5rem;
    }

    & > span:nth-child(2) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 750px) {
    & > span {
      font-size: 5rem;
    }

    & > span:nth-child(2) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 680px) {
    & > span {
      font-size: 3rem;
    }

    & > span:nth-child(2) {
      font-size: 1rem;
    }
  }

  @media (max-width: 620px) {
    & > span:nth-child(2) {
      letter-spacing: 3px;
    }
  }

  @media (max-width: 375px) {
    & > span {
      font-size: 2.5rem;
    }

    & > span:nth-child(2) {
      font-size: 0.9rem;
    }
  }
`;

export const ContainerSocialMedias = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  width: 100%;
  /* background-color: red; */

  @media (max-width: 620px) {
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
`;

export const ContainerSocialMedia = styled.div<ContainerProps>`
  display: inline-flex;
  align-items: center;
  justify-content: start;
  width: auto;
  transition: transform 0.3s ease-in-out;
  /* background-color: blue; */
  flex: 1;

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

  @media (max-width: 1000px) {
    margin: 0 2rem;
  }

  @media (max-width: 620px) {
    width: 150px;
    align-items: center;
    justify-content: start;
    margin: 10px 0;
    text-decoration: none;
  }
`;

export const Img = styled.img<ContainerProps>`
  width: 40rem;
  object-fit: cover;
  border-radius: 50%;

  @media (max-width: 2560px) {
    width: 40rem;
  }

  @media (max-width: 2260px) {
    width: 30rem;
  }

  @media (max-width: 1550px) {
    width: 25rem;
  }

  @media (max-width: 1420px) {
    width: 20rem;
  }

  @media (max-width: 375px) {
    width: 15rem;
  }
`;

export const Icon = styled.img<ContainerProps>`
  width: 6rem;

  @media (max-width: 2560px) {
    width: 4rem;
  }

  @media (max-width: 1870px) {
    width: 3rem;
  }

  @media (max-width: 1420px) {
    width: 2.5rem;
  }

  @media (max-width: 750px) {
    width: 1.7rem;
  }
`;

export const TextSocialMedia = styled.p<ContainerProps>`
  margin-left: 20px;
  text-decoration: none;
  color: black;
  font-size: 1.4rem;

  @media (max-width: 720px) {
  }
`;
