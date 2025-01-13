import styled, { css, keyframes } from 'styled-components';

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 10vh;
  /* background-color: red; */
  /* border-top: 1px solid black; */
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  transition: transform 0.3s ease; /* Aumenta o tempo e suaviza o movimento */

  &:hover {
    transform: scale(1.1);
  }
`;
