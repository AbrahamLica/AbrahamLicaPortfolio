import styled from 'styled-components';

export const ContainerProjects = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: 1000px) {
    flex-direction: column;
    border-bottom: 1px solid #1212123d;
  }
`;
