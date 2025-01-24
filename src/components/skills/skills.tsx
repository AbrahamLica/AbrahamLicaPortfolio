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
import postgre from '../../assets/icons/tech-icons/normal-icons/postgre.png';
import redux from '../../assets/icons/tech-icons/normal-icons/redux.png';
import spring from '../../assets/icons/tech-icons/normal-icons/spring.png';
import java from '../../assets/icons/tech-icons/normal-icons/java.png';
import background from '../../assets/imgs/background-skills.png';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

interface ComponentProps {
  id?: string;
}

export const Skills: React.FC<ComponentProps> = ({ id }) => {
  const { t } = useTranslation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setMousePos({ x, y });
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <G.Container width='90%' column margin='70px 0 0 0' id={id}>
      <G.Title margin='0 0 30px 0' data-aos='fade-right'>
        {t('skills.title')}
      </G.Title>

      <C.ContainerBackground backgroundImage={`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background})`} data-aos='fade-left'>
        <C.ContainerTechs onMouseMove={handleMouseMove} mouseX={mousePos.x} mouseY={mousePos.y}>
          <C.IconTech src={html} title={t('skills.techs.html')} />
          <C.IconTech src={css} title={t('skills.techs.css')} />
          <C.IconTech src={javascript} title={t('skills.techs.javascript')} />
          <C.IconTech src={typescript} title={t('skills.techs.typescript')} />
          <C.IconTech src={react} title={t('skills.techs.react')} />
          <C.IconTech src={angular} title={t('skills.techs.angular')} />
          <C.IconTech src={bootstrap} title={t('skills.techs.bootstrap')} />
          <C.IconTech src={primeng} title={t('skills.techs.primeng')} />
          <C.IconTech src={sass} title={t('skills.techs.sass')} />
          <C.IconTech src={tailwind} title={t('skills.techs.tailwind')} />
          <C.IconTech src={redux} title={t('skills.techs.redux')} />
          <C.IconTech src={java} title={t('skills.techs.java')} />
          <C.IconTech src={spring} title={t('skills.techs.spring')} />
          <C.IconTech src={postgre} title={t('skills.techs.postgre')} />
          <C.IconTech src={mysql} title={t('skills.techs.mysql')} />
        </C.ContainerTechs>
      </C.ContainerBackground>
    </G.Container>
  );
};
