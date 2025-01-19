import styled from 'styled-components';
import { ContainerProps, TextProps } from '../../GlobalStyles';

export const ContainerServico = styled.div``;

export const TextServices = styled.p<TextProps>`
  color: black;
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 1.3rem;
  line-height: 1.4rem;
  text-align: ${(props) => props.textAlign};
  margin-top: 20px;
  padding: ${(props) => props.padding};
`;

export const ContainerServices = styled.div<ContainerProps>`
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

  @media (max-width: 768px) {
    flex: 1 1 calc(50% - 20px);
    &:nth-child(2n + 1) {
      margin-right: 20px;
    }
    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (max-width: 480px) {
    flex: 1 1 100%;
    margin-right: 0;
  }
`;
