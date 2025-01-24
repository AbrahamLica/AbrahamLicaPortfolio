import styled from 'styled-components';

export const mainContainerHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  width: 100%;
  padding: 5px;
  min-height: 10vh;
  background-color: white;
`;

export const container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 15px;

  @media (max-width: 870px) {
    justify-content: center;
  }
`;

export const menu = styled.p`
  font-family: 'Parisienne';
  font-size: 3rem;
`;
