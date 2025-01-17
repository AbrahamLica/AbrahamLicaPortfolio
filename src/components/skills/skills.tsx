import * as C from './styles';
import * as G from '../../GlobalStyles';

import html from '../../assets/icons/tech-icons/normal-icons/html.png';
import css from '../../assets/icons/tech-icons/normal-icons/css.png';
import javascript from '../../assets/icons/tech-icons/normal-icons/javascript.png';
import typescript from '../../assets/icons/tech-icons/normal-icons/typescript.png';
import react from '../../assets/icons/tech-icons/normal-icons/react.png';
import angular from '../../assets/icons/tech-icons/normal-icons/angular.png';
import bootstrap from '../../assets/icons/tech-icons/normal-icons/bootstrap.png';
import primeng from '../../assets/icons/tech-icons/normal-icons/primeng.png';
import sass from '../../assets/icons/tech-icons/normal-icons/sass.png';
import tailwind from '../../assets/icons/tech-icons/normal-icons/tailwind.png';
import mysql from '../../assets/icons/tech-icons/normal-icons/mysql.png';
import node from '../../assets/icons/tech-icons/normal-icons/node.png';
import php from '../../assets/icons/tech-icons/normal-icons/php.png';
import postgre from '../../assets/icons/tech-icons/normal-icons/postgre.png';
import redux from '../../assets/icons/tech-icons/normal-icons/redux.png';
import spring from '../../assets/icons/tech-icons/normal-icons/spring.png';
import java from '../../assets/icons/tech-icons/normal-icons/java.png';
import background from '../../assets/imgs/background-skills.png';
import { useState } from 'react';

export const skills = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setMousePos({ x, y });
  };
  return (
    <G.Container width='90%' column margin='70px 0 0 0'>
      <G.Title margin='0 0 30px 0'>Tecnologias</G.Title>

      <C.ContainerBackground backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background})`}>
        <C.ContainerTechs onMouseMove={handleMouseMove} mouseX={mousePos.x} mouseY={mousePos.y}>
          <C.IconTech src={html} />
          <C.IconTech src={css} />
          <C.IconTech src={javascript} />
          <C.IconTech src={typescript} />
          <C.IconTech src={react} />
          <C.IconTech src={angular} />
          <C.IconTech src={bootstrap} />
          <C.IconTech src={primeng} />
          <C.IconTech src={sass} />
          <C.IconTech src={tailwind} />
          <C.IconTech src={redux} />
          <C.IconTech src={java} />
          <C.IconTech src={spring} />
          {/* <C.IconTech src={node} /> */}
          {/* <C.IconTech src={php} /> */}
          <C.IconTech src={postgre} />
          <C.IconTech src={mysql} />
        </C.ContainerTechs>
      </C.ContainerBackground>
    </G.Container>
  );
};

export default skills;
