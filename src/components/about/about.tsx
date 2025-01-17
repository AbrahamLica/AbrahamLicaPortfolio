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

export const about = () => {
  return (
    <G.Container width='90%' justifyContent='space-between'>
      <G.Container column width='50%'>
        <G.Title>Sobre mim</G.Title>
        <G.Text margin='30px 0 0 0'>
          Olá! Sou Abraham Licá, <G.Span>desenvolvedor Web Full Stack</G.Span> com mais de 1 ano de experiência como <G.Span>freelancer.</G.Span> Trabalho com <G.Span>Java (Spring Boot)</G.Span> e{' '}
          <G.Span>Javascript (Angular/React.js).</G.Span> Com um olhar atento às necessidades do cliente, estou sempre pronto para criar <G.Span>soluções eficientes e inovadoras</G.Span> que atendam
          às suas expectativas.
        </G.Text>
        <G.Span margin='25px 0 0 0' fontSize='1.3rem'>
          Vamos transformar suas ideias em realidade!
        </G.Span>
      </G.Container>

      <G.Container width='40%' column alignItems='center'>
        <G.Title>Tecnologias</G.Title>

        <C.ContainerTechs>
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
          <C.IconTech src={node} />
          <C.IconTech src={php} />
          <C.IconTech src={postgre} />
          <C.IconTech src={mysql} />
        </C.ContainerTechs>
      </G.Container>
    </G.Container>
  );
};

export default about;
