import styled from 'styled-components';
import { ContainerProps, TextProps } from '../../GlobalStyles';

export const ContainerServices = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-wrap: wrap;
  /* background-color: red; */

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
  }
`;

export const ContainerService = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  flex: 1 1 calc(33.33% - 20px);
  margin-bottom: 50px;
  box-sizing: border-box;

  &:nth-child(3n + 1),
  &:nth-child(3n + 2) {
    margin-right: 20px;
  }

  &:nth-child(3n) {
    margin-right: 0;
  }

  @media (max-width: 1000px) {
    flex: none;
    align-items: center;
    margin-right: 0;

    &:nth-child(3n + 1) {
      margin-right: 0;
    }

    &:nth-child(3n + 2) {
      margin-right: 0;
    }
  }

  /* @media (max-width: 768px) {
    flex: 1 1 calc(50% - 20px);
    &:nth-child(2n + 1) {
      margin-right: 20px;
    }
    &:nth-child(2n) {
      margin-right: 0;
    }
  } */

  /* @media (max-width: 480px) {
    flex: 1 1 100%;
    margin-right: 0;
  } */
`;

export const TextServices = styled.p<TextProps>`
  color: black;
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 1.4rem;
  text-align: left;
  margin-top: 20px;
  padding: ${(props) => props.padding};

  @media (max-width: 1000px) {
    text-align: center;
  }
`;
