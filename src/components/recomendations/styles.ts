import styled, { css } from 'styled-components';


export const ContainerRecomendation = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 50%;
  position: relative;

  &:nth-child(odd) {
    align-self: flex-start;
  }

  &:nth-child(even) {
    align-self: flex-end;
    margin-right: 20px;

    &::before {
      content: '';
      position: absolute;
      width: 2px;
      height: 200px;
      background-color: black;
      /* top: 0%; */
      left: -15px;
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  border-radius: 15px;
  background-color: rgb(236, 236, 236);
  padding: 30px 10px;
`;

export const Img = styled.img`
  width: 60px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: -30px;
  z-index: 1;
`;

export const Name = styled.p`
  margin: 10px 0;
  font-weight: bold;
  font-size: 1.4rem;
`;

export const Position = styled.p`
  margin-bottom: 10px;
`;

export const Recomendation = styled.p`
  line-height: 25px;
  font-size: 1.3rem;
`;

export const ButtonBackToTheTop = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: rgb(20, 20, 20);
  border: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 0px 5px rgba(180, 160, 255, 0.253);
  cursor: pointer;
  transition-duration: 0.3s;
  overflow: hidden;
  position: relative;

  &:hover {
    width: 160px;
    height: 70px;
    border-radius: 50px;
    background-color: black;
  }

  &::before {
    position: absolute;
    bottom: -25px;
    content: 'Voltar para o topo';
    color: white;
    font-size: 0px;
    transition-duration: 0.3s;
  }

  &:hover::before {
    font-size: 16px;
    opacity: 1;
    bottom: unset;
  }
`;

export const SvgIcon = styled.svg`
  width: 20px;
  transition-duration: 0.3s;

  & path {
    fill: white;
  }

  ${ButtonBackToTheTop}:hover & {
    transform: translateY(-200%);
  }
`;

