import styled from "styled-components";

export const HamburgerLabel = styled.label`
  cursor: pointer;
  display: inline-block;
  position: relative;
`;

export const HamburgerInput = styled.input`
  display: none;
`;

export const HamburgerSVG = styled.svg`
  height: 3em;
  transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  ${HamburgerInput}:checked + & {
    transform: rotate(-45deg);
  }
`;

export const Line = styled.path`
  fill: none;
  stroke: black;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);

  &.line-top-bottom {
    stroke-dasharray: 12 63;

    ${HamburgerInput}:checked + ${HamburgerSVG} & {
      stroke-dasharray: 20 300;
      stroke-dashoffset: -32.42;
    }
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 3em;
  left: -250px; 
  width: 250px; 
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px 3px rgba(0, 0, 0, 0.8), 0 -2px 6px rgba(0, 0, 0, 0.2);
  padding: 15px; 
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity 300ms ease, visibility 300ms ease, transform 300ms ease;


  ${HamburgerInput}:checked ~ & {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
`;


export const MenuItem = styled.a`
  display: block;
  padding: 20px;
  color: black;
  text-decoration: none;
  font-size: 2rem;
  position: relative; 
  box-sizing: border-box;

  &:hover {
    color: black;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1px; 
    width: 0;
    background-color: black;
    transition: width 0.7s ease; 
  }

  &:hover::after {
    width: 100%; /* Preenche a largura do link no hover */
  }
`;




