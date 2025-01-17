import styled from 'styled-components';

interface ContainerTechsProps {
  mouseX: number;
  mouseY: number;
}
interface teste {
  backgroundImage: any;
}

export const ContainerBackground = styled.div<teste>`
  margin-top: 10px;
  background-color: black;
  background-image: ${(props) => props.backgroundImage};
  border-radius: 20px;
`;

export const ContainerTechs = styled.div<ContainerTechsProps>`
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;
  background: ${({ mouseX, mouseY }) => `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(0, 0, 0, 0) 10px, rgba(0, 0, 0, 0.8) 80px)`};
  transition: background 0.05s ease;
`;

export const IconTech = styled.img`
  width: 60px;
  margin: 10px;
  object-fit: contain;
  transition: transform 0.2s linear;

  &:hover {
    transform: scale(1.2);
  }
`;
