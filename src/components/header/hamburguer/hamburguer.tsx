import { useState } from 'react';
import * as C from './styles';

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenuAndScroll = (e: any, targetId: any) => {
    e.preventDefault();
    setIsOpen(false);

    const section = document.querySelector(targetId);

    if (section) {
      const offset = 150;
      const elementPosition = section.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <C.HamburgerLabel>
      <C.HamburgerInput
        type="checkbox"
        checked={isOpen}
        onChange={toggleMenu}
      />
      <C.HamburgerSVG viewBox="0 0 32 32">
        <C.Line className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" />
        <C.Line className="line" d="M7 16 27 16" />
      </C.HamburgerSVG>
      <C.DropdownMenu isOpen={isOpen}>
        <C.MenuItem href="#begin" onClick={(e) => closeMenuAndScroll(e, "#begin")}>Início</C.MenuItem>
        <C.MenuItem href="#about" onClick={(e) => closeMenuAndScroll(e, "#about")}>Sobre</C.MenuItem>
        <C.MenuItem href="#skills" onClick={(e) => closeMenuAndScroll(e, "#skills")}>Tecnologias</C.MenuItem>
        <C.MenuItem href="#services" onClick={(e) => closeMenuAndScroll(e, "#services")}>Serviços</C.MenuItem>
        <C.MenuItem href="#projects" onClick={(e) => closeMenuAndScroll(e, "#projects")}>Projetos</C.MenuItem>
        <C.MenuItem href="#recomendations" onClick={(e) => closeMenuAndScroll(e, "#recomendations")}>Recomendações</C.MenuItem>
      </C.DropdownMenu>
    </C.HamburgerLabel>
  );
};

export default Hamburger;
