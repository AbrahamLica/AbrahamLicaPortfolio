import { keyframes, styled } from 'styled-components';
import { ContainerProps } from '../../../GlobalStyles';

export const MainContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;

  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const Description = styled.p`
  font-size: 1.4rem;
  margin-bottom: 15px;

  @media (max-width: 1230px) {
    font-size: 1.2rem;
  }

  @media (max-width: 800px) {
    text-align: justify;
  }
`;

export const ContainerTechs = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    margin-bottom: 15px;
  }
`;

export const ContainerTech = styled.div`
  display: flex;
  padding: 5px;

  @media (max-width: 1000px) {
  }
`;

export const ContainerButtons = styled.div`
  padding: 7px 0;
  width: 100%;

  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Link = styled.a`
  font-size: 1.3rem;
  margin-right: 20px;
  text-decoration: none;
  color: black;
`;

const brutalistShake = keyframes`
  0%,
  100% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(-2px) translateY(-2px) rotate(-1deg);
  }
  75% {
    transform: translateX(2px) translateY(2px) rotate(1deg);
  }
`;

export const Button = styled.button<ContainerProps>`
  --button_radius: 0.75em;
  --button_color: rgb(240, 239, 239);
  --button_outline_color: #000000;
  --hover_offset: 4px;
  --active_offset: 2px;
  --shadow_color: rgba(0, 0, 0, 0.5);

  font-size: ${(props) => props.fontSize || '1.1rem'};
  font-weight: bold;
  border: none;
  width: ${(props) => props.width || 'auto'};
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
  position: relative;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  margin-right: 10px;

  &:hover {
    box-shadow: var(--hover_offset) var(--hover_offset) 0 var(--shadow_color);
    transform: translate(calc(-1 * var(--hover_offset)), calc(-1 * var(--hover_offset)));
    animation: ${brutalistShake} 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  &:active {
    box-shadow: var(--active_offset) var(--active_offset) 0 var(--shadow_color);
    transform: translate(calc(-1 * var(--active_offset)), calc(-1 * var(--active_offset)));
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--button_outline_color), inset 0 0 0 2px var(--button_color);
  }

  .button_top {
    display: block;
    box-sizing: border-box;
    border: 3px solid var(--button_outline_color);
    border-radius: var(--button_radius);
    padding: 0.75em 1em;
    background: var(--button_color);
    color: var(--button_outline_color);
    text-decoration: none;
    transform: translateY(-0.2em);
    transition: transform 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &:hover .button_top {
    transform: translateY(-0.33em);
  }

  &:active .button_top {
    transform: translateY(0);
  }

  @media (max-width: 1230px) {
    font-size: 0.8rem;
  }

  /* @media (max-width: 890px) {
    &:nth-child(1) {
      margin-bottom: 10px;
    }
  } */
`;

export const ButtonLink = styled.a`
  text-decoration: none;
  color: inherit;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
