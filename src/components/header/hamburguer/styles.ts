import styled from 'styled-components';

interface DropdownMenuProps {
  isOpen: boolean;
}

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

  @media (max-width: 2560px) {
    height: 4em;
  }
`;

export const Line = styled.path`
  fill: none;
  stroke: black;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 3;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);

  &.line-top-bottom {
    stroke-dasharray: 12 63;

    ${HamburgerInput}:checked + ${HamburgerSVG} & {
      stroke-dasharray: 20 300;
      stroke-dashoffset: -32.42;
    }
  }
`;

export const DropdownMenu = styled.div<DropdownMenuProps>`
  position: fixed;
  top: 6em;
  right: 100px;
  width: 22rem;
  background-color: white;
  padding: 1.5rem;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  transform: ${(props) => (props.isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  transition: opacity 300ms ease, visibility 300ms ease, transform 300ms ease;
  border: 1px solid black;
  border-radius: 15px;

  @media (max-width: 870px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    right: 0;
    height: 100vh;
    width: calc(100vw - 20px);
    z-index: 9999;
    box-shadow: none;
    padding: 30px 15px;
    border: none;
    border-radius: 0;
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
    width: 100%;
  }
  /* 
  @media (max-width: 870px) {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: red;
  } */

  @media (max-width: 700px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;
