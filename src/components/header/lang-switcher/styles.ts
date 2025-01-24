import { styled } from 'styled-components';

export const ContainerLangs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconLang = styled.img`
  width: 50px;
  transition: transform 0.2s ease-in-out;
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
